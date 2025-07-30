import React from "react";
import codeladderarenaImg from "../images/home/codeladderarean.jpg";
import UberImg from "../images/home/uber.jpg";
import { useNavigate } from "react-router-dom";
import KafkaNotesImg from "../images/home/kafkaNotes.jpg";
import OtherNotesImg from "../images/home/otherNotes.jpg";


export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-20 md:pt-40 pb-10">
      <div className="font-light text-md md:w-[50%] w-[90%] mx-auto">
        <p>
          Hi, I'm <mark>Parth Patel</mark> , a passionate Full Stack Developer
          specializing in ReactJS, Node.js, Express.js, and JavaScript. I create
          innovative web solutions and impactful projects that deliver value and
          enhance user experiences.{" "}
        </p>
        <p className="font-semibold mt-4">Skills: </p>
        <p>
          <mark>Language</mark> -- JavaScript <span class="sep">|</span>{" "}
          Typescript <span class="sep">|</span> C/C++{" "}
        </p>
        <p>
          <mark>Frontend</mark> -- ReactJs <span class="sep">|</span> NextJS{" "}
          <span class="sep">|</span> Context API <span class="sep">|</span>{" "}
          Recoil <span class="sep">|</span> Redux Toolkit{" "}
          <span class="sep">|</span> NextAuth.js <span class="sep">|</span> Css
          [ Tailwind, Saas, Mui ]{" "}
        </p>
        <p>
          <mark>Backend</mark> -- NodeJs <span class="sep">|</span> ExpressJs{" "}
          <span class="sep">|</span> HonoJs <span class="sep">|</span> Fastify
        </p>
        <p>
          <mark>
            DataBase <span class="sep">|</span> ORMs
          </mark>{" "}
          -- SQL [ MySql, Oracle ] <span class="sep">|</span> NoSql [ MongoDb ]{" "}
          <span class="sep">|</span> Prisma{" "}
        </p>
        <p>
          <mark>Web Techs</mark> -- Docker, WebSocket [ Socket.io]{" "}
          <span class="sep">|</span> WebRtc <span class="sep">|</span> Redis{" "}
          <span class="sep">|</span> Kafka <span class="sep">|</span> Serverless
          Backend [ Cloudflare workers ]{" "}
        </p>
        <p>
          <mark>Dev Tools</mark> -- Git <span class="sep">|</span> Github{" "}
          <span class="sep">|</span> BitBucket <span class="sep">|</span>{" "}
          Postman <span class="sep">|</span> Jira{" "}
        </p>
        <p>
          <mark>Devops</mark> -- CI/CD, AWS [ EC2, S3, CloudFront ]{" "}
          <span class="sep">|</span> AutoScaling Groups AWS [ ASG, ECR, ECS ]{" "}
          <span class="sep">|</span> Kubernetes K8S{" "}
        </p>
        <p>
          <mark>
            Monitoring <span class="sep">|</span> Logging
          </mark>{" "}
          -- Newrelic <span class="sep">|</span> Grafanna{" "}
          <span class="sep">|</span> Prometheus <span class="sep">|</span> Loki{" "}
        </p>
        <p>
          <mark>Testing</mark> -- Unit and Integration [ JEST, Supertest, Vitest
          ] <span class="sep">|</span> EndToEnd [ Cypress ]{" "}
          <span class="sep">|</span> NonFunctional [ Grafana K6 ]{" "}
        </p>

        <div className="mt-10">
          <p >
            {" "}
            💚 Social Handles --{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/parthpatelreal"
            >
              <code>Linkedin</code>
            </a>{" "}
            |{" "}
            <a target="_blank" href="https://github.com/parthmern">
              <code>Github</code>
            </a>{" "}
            |{" "}
            <a target="_blank" href="https://twitter.com/parthmern">
              <code>Twitter</code>
            </a>{" "}
            <span></span>{" "}|{" "}
             <a target="_blank" href="mailto:parthmern@gmail.com">
              <code>Mail</code>
            </a>
          </p>
        </div>
      </div>

      <div
        id="title"
        className="mt-28 align-middle text-center text-5xl [text-shadow:-1px_2px_19px_rgba(255,255,255,1)]"
      >
        Projects
      </div>
      <div className="border mt-10 border-white/[0.2] flex flex-col items-start md:w-[50%] w-[90%]  mx-auto p-4 relative ">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

        <img src={codeladderarenaImg}></img>

        <div
          onClick={() => navigate("/leetcode")}
          className="mt-4 hover:bg-[#ebeced0c] p-2 rounded-md cursor-pointer"
        >
          <p className=" text-xl">
            Code Ladder Arena
            <span className="mt-4  text-base  font-thin">
              {" "}
              is Remote Code Execution Judge [ Clone of Leetcode ]{" "}
            </span>{" "}
          </p>
          <p className="text-base  font-thin">
            {" "}
            Tech Stacks : Javascript + Typescript | ReactJS + Recoil | ExpressJs
            + NodeJs | Fastify | WebSocket - Socket.io | Redis Queue | Docker (
            DockerRode, Images ) | MongoDB | AWS - S3, Cloudfront, EC2, ASG,
            ECR, ECS
          </p>
          <mark>See in details</mark>
        </div>
      </div>

      <div className="border mt-10 border-white/[0.2] flex flex-col items-start md:w-[50%] w-[90%]  mx-auto p-4 relative ">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

        <img src={UberImg}></img>

        <div
          onClick={() => navigate("/uber")}
          className="mt-4 hover:bg-[#ebeced0c] p-2 rounded-md cursor-pointer"
        >
          <p className=" text-xl">
            Uber Backend Clone
            <span className="mt-4  text-base  font-thin">
              {" "}
              is MVP of Uber Ride Booking.{" "}
            </span>{" "}
          </p>
          <p className="text-base  font-thin">
            {" "}
            Tech Stacks : Java Spring Boot | Spring Data JPA | Flyway Migration
            | MySQL | WebSocket (SockJS + STOMP) | Apache Kafka (Docker
            container) | Redis (Geospatial) | Eureka service discovery
          </p>
          <mark>See in details</mark>
        </div>
      </div>

      <div
        id="title"
        className="mt-28 mb-10 align-middle text-center text-5xl [text-shadow:-1px_2px_19px_rgba(255,255,255,1)]"
      >
        Notes
      </div>
      <div
        onClick={() => navigate("/notes/kafka")}
        className="md:w-[50%] w-[90%]  cursor-pointer mx-auto flex md:flex-row flex-col gap-3 rounded-md border-[#FFFFFF] hover:border-opacity-35 hover:bg-[#1b1c1e] bg-[#111214] border-[1px] border-opacity-20 "
      >
        <img
          className="w-[100%] md:w-[70%]"
          src={KafkaNotesImg}
          alt="Kafka Notes"
        />
        <div className="w-full md:w-[30%] p-1 md:p-4 flex flex-col items-center justify-center">
          <p className="font-thin text-base">One Day Read</p>
          <p>
            <mark>Start Reading</mark>
          </p>
        </div>
      </div>
      <div
        onClick={() => navigate("/notes")}
        className="md:w-[50%] w-[90%] mt-10 cursor-pointer mx-auto flex md:flex-row flex-col gap-3 rounded-md border-[#FFFFFF] hover:border-opacity-35 hover:bg-[#1b1c1e] bg-[#111214] border-[1px] border-opacity-20 "
      >
        <img
          className="w-[100%] md:w-[70%]"
          src={OtherNotesImg}
          alt="other Notes"
        />
        <div className="w-full md:w-[30%] p-1 md:p-4 flex flex-col items-center justify-center">
          <p className="font-thin text-base">All Notes</p>
          <p>
            <mark>Start Reading</mark>
          </p>
        </div>
      </div>
    </div>
  );
};
