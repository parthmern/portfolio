// Dots 3D / Gallery
// Art gallery wall with warm lighting.
//
// Settings (baked into shader source, or pass via uniforms prop to override):
//   speed: 1.30 — Animation speed. 0 = frozen, 1 = default.
//   brightness: 1.40 — Dot brightness multiplier.
//   dotSize: 1.00 — Radius of each dot.
//   gridDensity: 0.95 — Dot spacing. Higher = denser.
//   patternScale: 1.05 — Scales the wave pattern.
//   vignette: 1.20 — Edge darkening strength.
//   horizon: -0.24 — Vertical horizon position.
//   amplitude: 0.70 — Wave height.
//   depthFade: 0.45 — Distance fade strength.
//   background: [0.03, 0.03, 0.02] — Background color.
//   galleryDark: [0.06, 0.05, 0.04] — Deep shadow.
//   galleryWarm: [0.35, 0.30, 0.25] — Mid-tone.
//   galleryCream: [0.70, 0.65, 0.55] — Cream highlight.
//   galleryWhite: [0.95, 0.90, 0.80] — Spotlight.

"use client";

import { useEffect, useRef } from "react";

const VERTEX_SHADER = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = "\nprecision highp float;\n\nuniform vec2 u_resolution;\nuniform float u_time;\nuniform float transparentBg;\n\nconst float speed = 1.3000;\nconst float brightness = 1.4000;\nconst vec3 background = vec3(0.0300, 0.0250, 0.0200);\nconst float dotSize = 1.0000;\nconst float gridDensity = 0.9500;\nconst float patternScale = 1.0500;\nconst float vignette = 1.2000;\nconst float horizon = -0.2400;\nconst float amplitude = 0.7000;\nconst float depthFade = 0.4500;\nconst vec3 galleryDark = vec3(0.0600, 0.0500, 0.0400);\nconst vec3 galleryWarm = vec3(0.3500, 0.3000, 0.2500);\nconst vec3 galleryCream = vec3(0.7000, 0.6500, 0.5500);\nconst vec3 galleryWhite = vec3(0.9500, 0.9000, 0.8000);\n\nfloat galleryHeight(float x, float z, float t, float amp, float ps) {\n  // Tall vertical panels arranged along Z at regular intervals\n  float panelSpacing = 0.6 / ps;\n  float panelIdx = floor(z / panelSpacing + 0.5);\n  float localZ = abs(z - panelIdx * panelSpacing);\n\n  // Panel thickness (thicker slabs for visibility)\n  float panelThick = 0.12 / ps;\n  float inPanel = smoothstep(panelThick, panelThick * 0.3, localZ);\n\n  // Panels are on LEFT and RIGHT sides of the corridor — wider walls\n  float corridorWidth = 1.2 / ps;\n  float gapWidth = 1.5 / ps;\n\n  // Left panel\n  float leftDist = abs(x + corridorWidth);\n  float onLeft = smoothstep(gapWidth * 0.5, gapWidth * 0.3, leftDist);\n\n  // Right panel\n  float rightDist = abs(x - corridorWidth);\n  float onRight = smoothstep(gapWidth * 0.5, gapWidth * 0.3, rightDist);\n\n  float onWall = max(onLeft, onRight);\n\n  // Panel height — tall, fills the view\n  float panelH = inPanel * onWall * 1.2;\n\n  // Bright edge light strips between panels (ceiling cove lighting)\n  float edgeLight = smoothstep(panelThick * 2.0, panelThick, localZ)\n                  * smoothstep(0.0, panelThick * 0.5, localZ);\n  edgeLight *= onWall * 0.6;\n\n  // Floor: subtle grid pattern on the ground between the panels\n  float floorArea = smoothstep(corridorWidth + gapWidth * 0.3, corridorWidth - gapWidth * 0.3, abs(x));\n  float floorGrid = 0.0;\n  float fgSpacing = 0.6 / ps;\n  float fgX = abs(mod(x + fgSpacing * 0.5, fgSpacing) - fgSpacing * 0.5);\n  float fgZ = abs(mod(z + fgSpacing * 0.5, fgSpacing) - fgSpacing * 0.5);\n  floorGrid = smoothstep(0.04 / ps, 0.01 / ps, min(fgX, fgZ)) * 0.08;\n  floorGrid *= floorArea;\n\n  // Warm ambient glow on panel faces — each panel pulses at its own rate\n  float panelId = fract(sin(panelIdx * 127.1) * 43758.5453);\n  float panelPulse = 0.5 + 0.5 * sin(t * 0.8 + panelId * 12.0);\n  float ambientGlow = onWall * (1.0 - inPanel) * (0.06 + 0.12 * panelPulse);\n  ambientGlow *= smoothstep(panelSpacing * 0.5, panelThick * 3.0, localZ);\n\n  // Ceiling light strip running along Z in the center\n  float ceilingStrip = smoothstep(0.15 / ps, 0.05 / ps, abs(x)) * 0.15;\n\n  // Sweeping spotlight that moves down the corridor\n  float spotZ = mod(t * 1.5, 8.0 / ps);\n  float spotDist = abs(z - spotZ);\n  float spotlight = exp(-spotDist * spotDist * ps * ps * 0.3) * 0.3 * floorArea;\n\n  // Light spill on walls from the spotlight\n  float wallSpill = exp(-spotDist * spotDist * ps * ps * 0.2) * onWall * 0.15;\n\n  // Panels gradually illuminate as spotlight passes\n  float panelLit = exp(-pow((z - spotZ) * ps, 2.0) * 0.5) * inPanel * onWall * 0.2;\n\n  float h = panelH + edgeLight + floorGrid + ambientGlow + ceilingStrip + spotlight + wallSpill + panelLit;\n\n  h *= 0.16;\n  float damp = 1.0 - smoothstep(3.5, 9.0, z) * 0.85;\n  return h * damp * amp;\n}\n\n// Transparent-background support: when transparentBg is enabled, the\n// background is dropped and the effect is emitted with premultiplied alpha\n// so it composites over whatever sits behind the canvas. When disabled this\n// is a no-op and the original opaque output is preserved exactly.\nvec4 composite(vec3 color) {\n  if (transparentBg < 0.5) return vec4(color, 1.0);\n  vec3 fg = max(color - background, 0.0);\n  float a = clamp(max(max(fg.r, fg.g), fg.b), 0.0, 1.0);\n  return vec4(fg, a);\n}\n\nvoid main() {\n  vec2 size = u_resolution;\n  vec2 position = gl_FragCoord.xy;\n  position.y = size.y - position.y;\n\n  vec2 uv = (position - 0.5 * size) / size.y;\n  float t = u_time * speed;\n\n  float yFromHorizon = uv.y - horizon;\n  if (yFromHorizon < 0.002) {\n    gl_FragColor = composite(background);\n    return;\n  }\n\n  float gs = 0.034 / max(gridDensity, 0.01);\n  float cellZmax = 9.1;\n  float jMaxAbs = cellZmax / gs;\n\n  float Z0 = 1.0 / yFromHorizon;\n  float dampEst = 1.0 - smoothstep(3.5, 9.0, Z0 * 0.85) * 0.85;\n  float yampBound = max(0.25 * dampEst * amplitude, 0.03);\n  float Zlo = max(0.05, (1.0 - yampBound) / yFromHorizon);\n  float Zhi = (1.0 + yampBound) / yFromHorizon;\n  float fjMin = max(1.0, floor(Zlo / gs));\n  float fjMax = min(jMaxAbs, ceil(Zhi / gs));\n\n  vec3 accum = vec3(0.0);\n  float halfSizeX = 0.5 * size.x;\n  float halfSizeY = 0.5 * size.y;\n\n  for (int j = 1; j <= 512; j++) {\n    if (float(j) < fjMin) continue;\n    if (float(j) > fjMax) break;\n\n    float jf = float(j);\n    float cellZ = jf * gs;\n    float rawR = 4.4 / (1.0 + cellZ * 1.10);\n    float pxR = max(rawR, 0.85) * dotSize;\n    float horizCullThresh = pxR * 4.0 + 2.0;\n    float haloScale = max(pxR * 1.7, 1.2);\n    float subPxFade = smoothstep(0.4, 1.0, rawR);\n    float depth = 1.0 / (1.0 + cellZ * 0.35 * depthFade);\n    float invCellZ = 1.0 / cellZ;\n    float pitchScreenX = gs * invCellZ * size.y;\n    float iCenter = floor(uv.x * jf + 0.5);\n    float iCenterScreenX = iCenter * pitchScreenX + halfSizeX;\n    float iCenterCellX = iCenter * gs;\n\n    for (int di = -1; di <= 1; di++) {\n      float dotScreenX = iCenterScreenX + float(di) * pitchScreenX;\n      if (abs(position.x - dotScreenX) > horizCullThresh) continue;\n\n      float cellX = iCenterCellX + float(di) * gs;\n      float Y = galleryHeight(cellX, cellZ, t, amplitude, patternScale);\n      float dotYFromH = (1.0 - Y) * invCellZ;\n      if (dotYFromH < 0.01) continue;\n      float dotScreenY = (horizon + dotYFromH) * size.y + halfSizeY;\n\n      float horizonFade = smoothstep(0.0, 0.05, dotYFromH);\n      float d = length(position - vec2(dotScreenX, dotScreenY));\n      float mask = smoothstep(pxR + 1.0, pxR - 1.0, d);\n      float halo = exp(-d / haloScale) * 0.25;\n\n      float crest = clamp(Y / (0.25 * max(amplitude, 0.01)), 0.0, 1.0);\n\n      // Warm white/cream palette — museum lighting\n      vec3 dark = galleryDark;\n      vec3 warm = galleryWarm;\n      vec3 cream = galleryCream;\n      vec3 white = galleryWhite;\n\n      vec3 dotColor;\n      if (crest < 0.15) {\n        dotColor = mix(dark, warm, crest / 0.15);\n      } else if (crest < 0.5) {\n        dotColor = mix(warm, cream, (crest - 0.15) / 0.35);\n      } else {\n        dotColor = mix(cream, white, (crest - 0.5) / 0.5);\n      }\n\n      float highlight = 0.2 + 1.2 * crest;\n      float intensity = (mask + halo) * depth * highlight * horizonFade * subPxFade;\n\n      accum = max(accum, dotColor * intensity * brightness);\n    }\n  }\n  accum = min(accum * 1.2, vec3(1.0));\n\n  vec2 vUV = (position - 0.5 * size) / size;\n  float vig = clamp(1.0 - dot(vUV, vUV) * 0.4 * vignette, 0.0, 1.0);\n  accum *= vig;\n\n  vec3 col = mix(background, accum, clamp(length(accum) * 2.0, 0.0, 1.0));\n  gl_FragColor = composite(col);\n}\n";

interface Props {
  // Override any param at runtime. Keys match the const float/vec3 names in the shader.
  // Example: { speed: 2.0, tint: [1.0, 0.5, 0.0] }
  uniforms?: Record<string, number | number[]>;
  className?: string;
}

export default function GalleryShader({ uniforms, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const uniformsRef = useRef(uniforms);
  uniformsRef.current = uniforms;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false });
    if (!gl) return;

    function compile(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) {
        console.error(gl!.getShaderInfoLog(s));
        gl!.deleteShader(s);
        return null;
      }
      return s;
    }

    // Replace const declarations with uniforms so they can be overridden at runtime
    let src = FRAGMENT_SHADER;
    const preambleEnd = src.search(/\b(void\s+main|float\s+\w+\s*\(|vec[234]\s+\w+\s*\()/);
    const preamble = preambleEnd > 0 ? src.substring(0, preambleEnd) : "";
    let fm;
    const fRe = /const\s+float\s+(\w+)\s*=\s*[-\d.]+\s*;/g;
    while ((fm = fRe.exec(preamble)) !== null) src = src.replace(fm[0], "uniform float " + fm[1] + ";");
    const vRe = /const\s+vec3\s+(\w+)\s*=\s*vec3\s*\([^)]+\)\s*;/g;
    while ((fm = vRe.exec(preamble)) !== null) src = src.replace(fm[0], "uniform vec3 " + fm[1] + ";");

    const vs = compile(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = compile(gl.FRAGMENT_SHADER, src);
    if (!vs || !fs) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { console.error(gl.getProgramInfoLog(prog)); return; }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
    const a = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(a);
    gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uTime = gl.getUniformLocation(prog, "u_time");

    // Default uniform values (baked from editor settings)
    const defaults: Record<string, number | number[]> = {
    speed: 1.30,
    brightness: 1.40,
    dotSize: 1.00,
    gridDensity: 0.95,
    patternScale: 1.05,
    vignette: 1.20,
    horizon: -0.24,
    amplitude: 0.70,
    depthFade: 0.45,
    background: [0.03, 0.03, 0.02],
    galleryDark: [0.06, 0.05, 0.04],
    galleryWarm: [0.35, 0.30, 0.25],
    galleryCream: [0.70, 0.65, 0.55],
    galleryWhite: [0.95, 0.90, 0.80],
    transparentBg: 0,
    };

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = canvas!.clientWidth * dpr;
      canvas!.height = canvas!.clientHeight * dpr;
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
    }
    resize();
    window.addEventListener("resize", resize);

    const t0 = performance.now();
    function render() {
      gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      gl!.uniform1f(uTime, (performance.now() - t0) / 1000);

      // Merge defaults with runtime overrides
      const merged = { ...defaults, ...(uniformsRef.current || {}) };
      for (const [k, v] of Object.entries(merged)) {
        const loc = gl!.getUniformLocation(prog, k);
        if (!loc) continue;
        if (typeof v === "number") gl!.uniform1f(loc, v);
        else if (v.length === 3) gl!.uniform3f(loc, v[0], v[1], v[2]);
      }

      gl!.drawArrays(gl!.TRIANGLES, 0, 6);
      rafRef.current = requestAnimationFrame(render);
    }
    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} style={{ width: "100%", height: "100%" }} />;
}

// Usage (fullscreen background):
//   <GalleryShader className="w-screen h-screen fixed top-0 left-0" />
//
// With custom settings:
//   <GalleryShader uniforms={{ speed: 2.0, brightness: 1.5 }} className="w-screen h-screen fixed top-0 left-0" />
