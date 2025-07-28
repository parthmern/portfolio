import React from "react";
import codeladderarenaImg from "../images/home/codeladderarean.jpg";
import UberImg from "../images/home/uber.jpg";
import { useNavigate } from "react-router-dom";
import KafkaNotesImg from "../images/home/kafkaNotes.jpg";

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
    <div className="pt-20 pb-10">
      <p>Home</p>
      <div
        id="title"
        className="mt-28 align-middle text-center text-5xl [text-shadow:-1px_2px_19px_rgba(255,255,255,1)]"
      >
        Projects
      </div>
      <div className="border mt-10 border-white/[0.2] flex flex-col items-start w-[50%] mx-auto p-4 relative ">
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

      <div className="border mt-10 border-white/[0.2] flex flex-col items-start w-[50%] mx-auto p-4 relative ">
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
      <div onClick={()=>navigate("/notes/kafka")} className="w-[70%] cursor-pointer mx-auto flex gap-3 rounded-md border-[#FFFFFF] hover:border-opacity-35 hover:bg-[#1b1c1e] bg-[#111214] border-[1px] border-opacity-20 ">
        <img className="w-[70%]" src={KafkaNotesImg} alt="Kafka Notes" />
        <div className="w-[30%] p-4 flex flex-col items-center justify-center">
          <p>One day read</p> 
          <p><mark>Start Reading</mark></p>
          </div>
      </div>
    </div>
  );
};
