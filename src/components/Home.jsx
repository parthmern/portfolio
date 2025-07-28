import React from "react";
import codeladderarenaImg from "../images/home/codeladderarean.jpg";
import { useNavigate } from "react-router-dom";

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

        <div onClick={()=>navigate("/leetcode")} className="mt-4 hover:bg-[#ebeced0c] p-2 rounded-md cursor-pointer">
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
            + NodeJs | Fastify | WebSocket - Socket.io | Redis Queue | Docker ( DockerRode, Images ) |
            MongoDB | AWS - S3, Cloudfront, EC2, ASG, ECR, ECS
          </p>
          <mark>See in details</mark>
        </div>
      </div>

      <div className="border mt-10 border-white/[0.2] flex flex-col items-start w-[50%] mx-auto p-4 relative ">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

        <img src={codeladderarenaImg}></img>

        <div onClick={()=>navigate("/leetcode")} className="mt-4 hover:bg-[#ebeced0c] p-2 rounded-md cursor-pointer">
          <p className=" text-xl">
            Uber Backend Clone
            <span className="mt-4  text-base  font-thin">
              {" "}
              is MVP of Uber Ride Booking.{" "}
            </span>{" "}
          </p>
          <p className="text-base  font-thin">
            {" "}
            Tech Stacks : Javascript + Typescript | ReactJS + Recoil | ExpressJs
            + NodeJs | Fastify | WebSocket - Socket.io | Redis Queue | Docker ( DockerRode, Images ) |
            MongoDB | AWS - S3, Cloudfront, EC2, ASG, ECR, ECS
          </p>
          <mark>See in details</mark>
        </div>
      </div>
    </div>
  );
};
