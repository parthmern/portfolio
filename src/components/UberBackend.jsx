import React from 'react'
import uberHeaderImg from "../images/uber/uber-header.png"

export const UberBackend = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[50%]">
        <div
          id="title"
          className="mt-28 align-middle text-center text-5xl [text-shadow:-1px_2px_19px_rgba(255,255,255,1)]"
        >
          Uber Backend - clone
        </div>
        <div className="relative mt-28 my-8 aspect-video w-full flex items-center justify-center">
          {/* Glow effect image (slightly enlarged, blurred, and bright) */}
          <img
            alt="Glow"
            className="absolute  h-[110%] w-[110%] object-cover blur-[60px] brightness-150 opacity-70"
            src={uberHeaderImg}
            style={{ color: "transparent" }}
          />

          {/* Main image (sharp) */}
          <img
            alt="Sandbox"
            className="relative z-0 h-full w-full object-cover rounded-xl"
            src={uberHeaderImg}
            style={{ color: "transparent" }}
          />
        </div>

        <div className="flex items-start justify-normal flex-1 w-full">
          <div className="w-[50%]">
            <p className=" text-2xl">Tech Stacks</p>
            <div className="mt-4  text-base  font-thin">
              <p>Java Spring Boot</p>
              <p>Spring Data JPA</p>
              <p>Flyway Migration</p>
              <p>MySQL</p>
              <p>WebSocket (SockJS + STOMP)</p>
              <p>Apache Kafka (Docker container)</p>
              <p>Redis (Geospatial)</p>
              <p>Eureka service discovery</p>
            </div>
          </div>
          <div className="w-[50%]">
            <p className=" text-2xl">Overview</p>
            <p className="mt-4  text-base  font-thin">
              Uber Backend Clone is microservices based project which is MVP of original Uber Ride Booking.
            </p>
            <p className="mt-2  text-base  font-thin">
              It is focused on learning, so it does not has proper frontend and all APIs are not implemented.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className=" text-3xl">✨Background</p>
          <p className="mt-4  text-base  font-thin">
            You and I use once in a life time used Uber for ride booking and same question is that how it is working underthehood. Why SpringBoot here? My main tech stack is MERN but the place where I am working as SDE intern, they have their previous backends are in springboot ( Java + Kotlin) so as a part of learning something good. I keep the techstack as springboot.
            It is based on multiple microservices like ... 
          </p>

          <p className="mt-5 text-xl">💚 Microservices :</p>
          <div className="flex text-base font-thin gap-x-4">
            <ul class="mt-3 custom-list">
              <li>
                {" "}
                <span className="mt-3 font-light">
                Enitiy Service: {" "}
                </span>
                It has all models and Db migraiton based on <code>Flyway</code> maintained in this service which is shared across the other services so It is kind of library.
                Db used here is <code>MySql</code>.
              </li>
              <li>
                <span className="mt-3 font-light">Review Service: </span>A
                Based on adding passenger and driver reviews after riding. So it is basic CRUD app.
              </li>
              <li>
                <span className="mt-3 font-light">
                  Auth Service: {" "}
                </span>
                handles Authentication based on email and password so <code>JWT</code> token based authN happens here.
              </li>
              <li>
                <span className="mt-3 font-light">
                  Service Discovery:{" "}
                </span>
                This is <code>Eureka server</code> where all other microservices register its url and able to fetch url for other services.
                
              </li>
              <li>
                <span className="mt-3 font-light">Location Service: </span> 
                It maintains the live location of drivers and Users. So it is connected with <code>Redis</code> server which has Geospatial data type based storage.
                This is really interesting service. [ Explained it below ]
              </li>
              <li>
                <span className="mt-3 font-light">
                  Booking Service:
                </span>{" "}
                User can book a ride from point A to point B so it maintains all. It is 💝 of this project.
              </li>
               <li>
                <span className="mt-3 font-light">
                  ClientSocket Service:
                </span>{" "}
                  It maintains a websocket connection based to Drivers and send them notifications to accept the ride or not. Also it connects with Booking Serice with <code>Kafka topic</code> wise async communication.
              </li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  )
}
