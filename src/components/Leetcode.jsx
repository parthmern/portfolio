import React from "react";
import "./Leetcode.css";
import ImagePreview from "./ImagePreview";
import YouTubePlayer from "./YoutubePlayer";

const Leetcode = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[90%] md:w-[50%]">
        {/* navabar */}
        <div
          id="title"
          className="mt-28 align-middle text-center text-5xl [text-shadow:-1px_2px_19px_rgba(255,255,255,1)]"
        >
          Leetcode - clone
        </div>

        <div className="relative mt-28 my-8 aspect-video w-full flex items-center justify-center">
          {/* Glow effect image (slightly enlarged, blurred, and bright) */}
          <img
            alt="Glow"
            className="absolute  h-[110%] w-[110%] object-cover blur-[60px] brightness-150 opacity-70"
            src="https://res.cloudinary.com/dncm3mid4/image/upload/v1747014966/trialParth/cghmrlq9l5d3zslgkvav.jpg"
            style={{ color: "transparent" }}
          />

          {/* Main image (sharp) */}
          <img
            alt="Sandbox"
            className="relative z-0 h-full w-full object-cover rounded-xl"
            src="https://res.cloudinary.com/dncm3mid4/image/upload/v1747014966/trialParth/cghmrlq9l5d3zslgkvav.jpg"
            style={{ color: "transparent" }}
          />
        </div>

        <div className="flex items-start justify-normal flex-1 w-full">
          <div className="w-[50%]">
            <p className=" text-2xl">Tech Stacks</p>
            <div className="mt-4  text-base  font-thin">
              <p>Javascript + Typescript</p>
              <p>ReactJS + Recoil </p>
              <p>ExpressJs + NodeJs </p>
              <p>Fastify</p>
              <p>WebSocket - Socket.io</p>
              <p>Redis Queue</p>
              <p>Docker ( DockerRode, Images )</p>
              <p>MongoDB</p>
              <p>AWS- S3, Cloudfront, EC2, ASG, ECR, ECS</p>
            </div>
          </div>
          <div className="w-[50%]">
            <p className=" text-2xl">Overview</p>
            <p className="mt-4  text-base  font-thin">
              CodeLadderArena is an open-source LeetCode clone with a remote
              code execution judge that runs code and returns the results.
            </p>
            <p className="mt-2  text-base  font-thin">
              It executes the code inside Cloud based VMs inside isolated Docker
              container based environment.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className=" text-3xl">✨Background</p>
          <p className="mt-4  text-base  font-thin">
            I actually started solving Leetcode and I felt too boring, then I
            thought let's make the clone of it.
          </p>

          <p className="mt-5 text-xl">💎User Features</p>
          <div className="flex text-base font-thin gap-x-4">
            <ul class="mt-3 custom-list">
              <li>
                {" "}
                <span className="mt-3 font-light">
                  User Registration & Login:{" "}
                </span>
                Secure signup/login via oAuth OAuth (Google) and{" "}
                <code>JWT</code> token-based authentication.
              </li>
              <li>
                {" "}
                <span className="mt-3 font-light">Code Editing: </span>A
                fully-featured text editor with syntax highlighting using{" "}
                <code>Monaco Editor</code>.
              </li>
              <li>
                {" "}
                <span className="mt-3 font-light">
                  Multiple Language Support:{" "}
                </span>
                Support of Java, C++ and Python.
              </li>
              <li>
                {" "}
                <span className="mt-3 font-light">
                  Execution in isolated environment:{" "}
                </span>
                Running docker containers to execute each submission using{" "}
                <code>DockerRode</code>. It protects the EC2 from malicious code
                execution like fork bomb, sql injection.
              </li>
              <li>
                {" "}
                <span className="mt-3 font-light">Responsiveness: </span> You
                can use it with any device.
              </li>
              <li>
                <span className="mt-3 font-light">
                  Live Submission Status:{" "}
                </span>{" "}
                See “pending”, “running”, “accepted” or “failed” statuses in
                real-time. Real-time updates via WebSocket [{" "}
                <code>Socket.io</code> ] when evaluation is complete.{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <p className=" text-3xl">❇️ Architecture</p>
          <p className="mt-3 font-thin">
            <code>Backend:</code> This system follows a microservices
            architecture deployed on AWS EC2 using Docker and Nginx as a reverse
            proxy. It includes four main services: <mark>problemService</mark>{" "}
            built with Express.js for managing coding problems and
            authentication, <mark>submissionService</mark> that handles code
            submissions and queues them using BullMQ and Redis,{" "}
            <mark>evalutorService</mark> developed in TypeScript that picks up
            jobs from the Redis queue and executes the code inside Docker
            containers, and <mark>websocketService</mark> using Socket.io to
            push real-time updates to the client. All services are
            containerized, automated with GitHub Actions, and logs are streamed
            and managed effectively.
          </p>

          <div className="relative mt-10 my-8 aspect-video w-full flex items-center justify-center">
            <ImagePreview imageUrl={"https://res.cloudinary.com/dncm3mid4/image/upload/v1746966102/trialParth/xujm88ahb6wmyczj87id.jpg"} />

          </div>
          <div>
            <p className="mt-3 font-thin">
              <code>Frontend:</code> This architecture uses ReactJS with Recoil
              for state, Firebase for GoogleAuth, and JWT for auth. Questions
              are stored in Markdown and generated via a <mark>/generate</mark>{" "}
              portal. Styling is done with Tailwind, shadcn, and components from
              AcernityUI and MagicUI. The site is built with V0 (Vercel) and
              deployed via GitHub Actions to an AWS S3 bucket, served through
              CloudFront CDN with a custom domain from Namecheap and SSL from
              AWS.
            </p>
            <div className="relative mt-[-10px] my-8 aspect-video w-full flex items-center justify-center">
              <img
                alt="Glow"
                className="absolute  h-[110%] w-[110%] object-cover blur-[60px] brightness-10 opacity-70"
                src="https://res.cloudinary.com/dncm3mid4/image/upload/v1747189823/trialParth/ggr7caw6o1kp0ejhysud.png"
                style={{ color: "transparent" }}
              />
              <img
                alt="Sandbox"
                className="relative z-0  w-full object-cover rounded-xl"
                src="https://res.cloudinary.com/dncm3mid4/image/upload/v1747189823/trialParth/ggr7caw6o1kp0ejhysud.png"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className=" text-3xl">🌿 Designing Backend</p>

          <p className="mt-3 font-thin">
            <p>
              <mark>1</mark> The client sends a request to the submission
              service.
            </p>
            <p>
              <mark>2</mark> The submission service then makes a synchronous
              call to the problem admin service to fetch the problem details.
            </p>
            <p>
              <mark>3</mark> The problem admin service queries MongoDB to
              retrieve the relevant data, and
            </p>
            <p>
              <mark>4</mark> sends the problem details back to the submission
              service.
            </p>
            <p>
              <mark>5</mark> The submission service creates a new submission
              entry in the database and
            </p>
            <p>
              <mark>6</mark> adds the submission payload with the updated code
              stub to a Redis queue.
            </p>
            <p>
              <mark>7</mark> It then responds to the client confirming the
              submission has been made.
            </p>
            <p>
              <mark>8</mark> The evaluator service picks up the message from the
              queue and evaluates the submitted code.
            </p>
            <p>
              <mark>9</mark> After running test cases, it adds the evaluation
              result to another Redis queue.
            </p>
            <p>
              <mark>10</mark> The submission service reads this result,
            </p>
            <p>
              <mark>11</mark> updates the submission details in the database,
              and
            </p>
            <p>
              <mark>12</mark> notifies the WebSocket service, which then sends
              the final execution status to the client in real-time.
            </p>
          </p>

          <ImagePreview imageUrl={"https://res.cloudinary.com/dncm3mid4/image/upload/v1747193030/trialParth/vzz7ev0wy7xnawreetnj.jpg"} />

        </div>

        <div>
          <p className="mt-10 text-3xl">🧬 Explaination Video</p>
          <YouTubePlayer embededId={"AW8WMh3S7G4?si=2Oi35Fa7MvaGCo88"} thumbnailUrl={"https://res.cloudinary.com/dncm3mid4/image/upload/v1753241540/articles/gtvstexwknpux9a8jl80.png"} />
        </div>

        <div className="bg-[#ebeced0c] font-thin mt-5 p-4 mb-10 rounded-md">
          <p>🐞 Other ways / ideas</p>
          <p>- While working with this the question of AutoScaling where I was new to K8S so I tried to be dependent on AWS so I explored AutoScaling Groups [ ASG, ECR, ECS ] - <mark><a target="_blank" rel="noopener noreferrer" href="">Notes</a></mark> </p>
          <p>- can use sulu shi, rapidapi,spoj judge, Judge0 like third party RCE </p>
          <p>- long pooling on client side </p>
          <p>- change to tcp connection http req from evalutionService to submissionService ( can be
            solved by running multiple parallel workers )</p>
          <p>
            - can implement Rate Limiting, Bots avoidation </p>
        </div>

        <div className="bg-[#ebeced0c] font-thin mt-5 p-4 mb-10 rounded-md">
          <p>💚 Some Links</p>
          <p>- Site link - <mark><a target="_blank" rel="noopener noreferrer" href="https://codeladderarena.parthmern.store">codeladderarena.parthmern.store</a></mark></p>
          <p>- infra diagram - <mark><a target="_blank" rel="noopener noreferrer"  href="https://app.eraser.io/workspace/7yUSHREhxaJRqsXjwMlm?origin=share">erase io</a></mark>   </p>
        </div>

        

      </div>
    </div>
  );
};

export default Leetcode;
