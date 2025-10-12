import React from "react";
import uberHeaderImg from "../images/uber/uber-header.png";
import uberLocationImg from "../images/uber/uber-location.png";
import uberBookingImg from "../images/uber/uber-booking.png";
import ImagePreview from "./ImagePreview";
import YouTubePlayer from "./YoutubePlayer";

export const Sandbox = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[90%] md:w-[50%] ">
        <div
          id="title"
          className="mt-28 align-middle text-center text-5xl [text-shadow:-1px_2px_19px_rgba(255,255,255,1)]"
        >
          CodeReplHatch - Sandbox
        </div>
        <div className="relative mt-28 my-8 aspect-video w-full flex items-center justify-center">
          {/* Glow effect image (slightly enlarged, blurred, and bright) */}
          <img
            alt="Glow"
            className="absolute  h-[110%] w-[110%] object-cover blur-[60px] brightness-150 opacity-70"
            src={
              "https://res.cloudinary.com/dncm3mid4/image/upload/v1760239089/articles/xijkjkr9r4fyjbxlbzju.png"
            }
            style={{ color: "transparent" }}
          />

          {/* Main image (sharp) */}
          <img
            alt="Sandbox"
            className="relative z-0 h-full w-full object-cover rounded-xl"
            src={
              "https://res.cloudinary.com/dncm3mid4/image/upload/v1760239089/articles/xijkjkr9r4fyjbxlbzju.png"
            }
            style={{ color: "transparent" }}
          />
        </div>

        <div className="flex items-start justify-normal flex-1 w-full">
          <div className="w-[50%]">
            <p className=" text-2xl">Tech Stacks</p>
            <div className="mt-4  text-base  font-thin">
              <p>Javascript + Typescript</p>
              <p>ReactTs</p>
              <p>NodeJs + ExpressJs</p>
              <p>Hono</p>
              <p>Docker</p>
              <p>WebSocket ( Socket.io )</p>
              <p>Kubernetes K8S</p>
              <p>Helm Charts</p>
              <p>Docker ( Images )</p>
              <p>AWS S3 bucket</p>
              <p>GitOps ( ArgoCD )</p>
            </div>
          </div>
          <div className="w-[50%]">
            <p className=" text-2xl">Overview</p>
            <p className="mt-4  text-base  font-thin">
              Code Replt Hatch is containerized sandbox based project which is
              clone of Replit, CodeSandBox.io.
            </p>
            <p className="mt-2  text-base  font-thin">
              It focused on the spinning up private sandbox for user that is
              providing NodeJs env.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className=" text-3xl">✨Background</p>
          <p className="mt-4  text-base  font-thin">
            You and I might have used Replit once in our lifetime to quickly
            test or build something online, but have you ever wondered how it
            actually works under the hood? Replit provides a powerful
            cloud-based development environment where users can write, run, and
            deploy code instantly. I used it before 1 year ago and that time it
            really amazed to me. Yes, right now Replit is too big platform they
            have AI agents and many more things, definitly I cannot clone all
            things, but I tried to make thier MVP [ was an in-browser code
            editor that could execute small code snippets ]
          </p>

          <p className="mt-5 text-xl">💚 Microservices :</p>
          <div className="flex text-base font-thin gap-x-4">
            <ul class="mt-3 custom-list">
              <li>
                {" "}
                <span className="mt-3 font-light">Init Service: </span>
                This is the service is written in Hono + Typescript when user
                starts environment, this service is mainly for copy default
                template from <code>AWS S3 bucket</code> to another folder that
                user will get for first time.
              </li>
              <li>
                <span className="mt-3 font-light">Runner Service:</span>
                This service is built using Express and TypeScript. It acts as
                the core component of the system, maintaining a real-time{" "}
                <code>WebSocket</code> connection with the user. It includes
                several important layers, such as integration with{" "}
                <code>node-pty</code> for terminal emulation and a{" "}
                <code>file system</code> layer for handling user file events and
                synchronization.
              </li>
              <li>
                <span className="mt-3 font-light">Orchestrator Service: </span>
                As the name suggests, this service handles all
                orchestration-related tasks. It leverages{" "}
                <code>Kubernetes</code> and <code>Helm charts</code> to manage
                isolated environments by running a dedicated <code>Pod</code>{" "}
                for each user session, allowing them to access and interact with
                their workspace securely.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <p className=" text-3xl">❇️ Architecture</p>
          <p className="mt-3 font-thin">
            <code>Orchestrator Service:</code> This is core service, it mangaes
            everything including apis/socket connection with Frontend, S3 sync,
            fileSystem interection. <code>Helm</code> and the{" "}
            <code>Kubernetes API</code> to deploy a dedicated user pod whenever
            a new session is created - first of all, <code>init container</code>{" "}
            which is container of aws cli that copy S3/userId files into
            /workspace <code>Ephemeral Vol</code> and then there are two running
            containers One has runner code [ It fetch image from docker hub that
            has runner service code which runs on PORT 4000 ] and second
            container is <code>Side Car</code> Container which is kind of
            syncing container that sync "/workspace" and to "S3/userId/" after
            every 30 seconds.
            <p>
              - Also there is intilaization of<code>NGINX Ingress</code> which
              is revealing 4000 PORT - runnerService and 4001 PORT - user's
              NodeJs Server to the url shows in below image.
            </p>
          </p>

          <div className="relative mt-10 my-8 aspect-video w-full flex items-center justify-center">
            <ImagePreview
              imageUrl={
                "https://res.cloudinary.com/dncm3mid4/image/upload/v1760280528/articles/kt0ce4it9iu95q8crzfh.png"
              }
            />
          </div>
        </div>

        <div className="mt-10 mb-10">
          <p className=" text-3xl">🌿 Designing Backend</p>

          <p className="mt-3 font-thin">
            <p>
              <mark>0</mark> User opens new Repl.
            </p>
            <p>
              <mark>1</mark> First api req goes to init Service Which is has
              envId and ReplId so based on that envId ( ex. NodeJs ) it copy all
              files from AWS S3 bucket's folder defaultNodeJs -{">"} replId
              folder.
            </p>
            <p>
              <mark>2</mark> Then it hits Orchestrator service which initalize a
              pod for user in K8S cluster. This is the most complex part
              explained above in Architecture section. [ In short, K8S pod,
              service, deployment, nginx, init container, aws-s3-sync side
              container, runner Service with websocket connection ]
            </p>
            <p>
              <mark>4</mark> The connection establish from Frontend to that pod
              using webSocket. Some Jargons like NodePty and XtermJs to provide
              environtment of psudo terminals.
            </p>
          </p>

          <div className="mt-10">
            <ImagePreview
              imageUrl={
                "https://res.cloudinary.com/dncm3mid4/image/upload/v1760272236/articles/nvqjyq9zoccil4abfm05.png"
              }
            />
          </div>
        </div>

        {/* <div>
          <p className="mt-10 text-3xl">🧬 Explaination Video</p>
          <YouTubePlayer
            embededId={"AW8WMh3S7G4?si=2Oi35Fa7MvaGCo88"}
            thumbnailUrl={
              "https://res.cloudinary.com/dncm3mid4/image/upload/v1753241540/articles/gtvstexwknpux9a8jl80.png"
            }
          />
        </div> */}

        <div className="bg-[#ebeced0c] font-thin mt-5 p-4 mb-10 rounded-md">
          <p>💚 Some Links</p>
          <p>
            - Github Repo Links -{" "}
            <mark>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/parthmern/codeReplHatch"
              >
                repo
              </a>
            </mark>
          </p>
          <p>
            - Gitops ArgoCd [Learnings] -{" "}
            <mark>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/parthmern/gitops-argocd"
              >
                Postman
              </a>
            </mark>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
