import React from "react";
import notiSrvcImg from "../images/work/notiSrvc.png";
import springAppImg from "../images/work/springApp.png";
import aiAgentImg from "../images/work/aiAgent.png";
import ImagePreview from "./ImagePreview";

export const Work1 = () => {
  return (
    <main className="w-[90%] md:w-[50%] mx-auto pt-28 pb-10">
      <h1 id="work-1-title" className="instrument-serif scroll-mt-24 text-center text-5xl [text-shadow:-1px_2px_19px_rgba(255,255,255,1)]">
        Work 1 - Cloud Deployment &amp; Monitoring
      </h1>

      <div className="relative mt-28 my-8 aspect-video w-full flex items-center justify-center">
        <ImagePreview imageUrl={notiSrvcImg} />
      </div>

      <div className="flex flex-col md:flex-row items-start gap-8 w-full">
        <section aria-labelledby="work-tech-stacks" className="w-full md:w-1/2">
          <h2 id="work-tech-stacks" className="text-2xl">Tech Stacks</h2>
          <div className="mt-4 text-base font-thin">
            <p>ReactJS + Storybook</p>
            <p>Node.js + Hono + TypeScript</p>
            <p>AWS ECS + ECR</p>
            <p>AWS SNS + Lambda Functions</p>
            <p>CloudWatch + CloudWatch Dashboards</p>
            <p>Jenkins</p>
            <p>Docker</p>
            <p>JFrog Artifactory</p>
            <p>Octopus Deploy</p>
            <p>Terraform (IaC)</p>
            <p>Kong</p>
            <p>OpenAPI Specification</p>
          </div>
        </section>
        <section aria-labelledby="work-overview" className="w-full md:w-1/2">
          <h2 id="work-overview" className="text-2xl">Overview</h2>
          <p className="mt-4 text-base font-thin">
            Took a Node.js, TypeScript, and Hono service from development to
            production on AWS ECS. Jenkins builds Docker images, stored in JFrog
            and synced to ECR, while Octopus deploys infrastructure with Terraform
            and publishes the OpenAPI spec to Kong.
          </p>
          <p className="mt-2 text-base font-thin">
            Added CloudWatch dashboards and alarms, with SNS email alerts and
            Lambda-powered notifications to Microsoft Teams.
          </p>
        </section>
      </div>

      <section aria-labelledby="work-architecting" className="mt-10">
        <h2 id="work-architecting" className="text-3xl">🌿 Architecting</h2>
        <ol className="mt-3 space-y-2 text-base font-thin">
          <li>
            <mark>1</mark>{" "}
            Changes to the main backend, built with Node.js, TypeScript, and
            Hono, go through the Jenkins build pipeline.
          </li>
          <li>
            <mark>2</mark>{" "}
            Jenkins builds a Docker image of the service and pushes it to JFrog
            Artifactory.
          </li>
          <li>
            <mark>3</mark>{" "}
            The Docker image is synced from JFrog Artifactory to AWS ECR so it is
            available for deployment.
          </li>
          <li>
            <mark>4</mark>{" "}
            Octopus Deploy polls ECR for new images and uses the available image
            in the deployment flow.
          </li>
          <li>
            <mark>5</mark>{" "}
            I created reusable Terraform Infrastructure as Code (IaC) modules
            for the ECS microservice infrastructure. Octopus runs Terraform init,
            plan, and apply to provision or update the resources and deploy ECS
            tasks using the container image from ECR.
          </li>
          <li>
            <mark>6</mark>{" "}
            The service&apos;s OpenAPI specification is deployed to Kong API
            Gateway to configure access to the backend APIs.
          </li>
          <li>
            <mark>7</mark>{" "}
            I also configured a Terraform monitoring module to provision
            CloudWatch dashboards and alarms for the ECS service and connect
            alarms to SNS notifications. This keeps the monitoring and alerting
            setup defined as code alongside the service infrastructure.
          </li>
          <li>
            <mark>8</mark>{" "}
            When a configured CloudWatch alarm is triggered, it publishes a
            notification to an SNS topic.
          </li>
          <li>
            <mark>9</mark>{" "}
            SNS sends email alerts to the topic&apos;s email subscribers.
          </li>
          <li>
            <mark>10</mark>{" "}
            SNS also invokes a Lambda function that sends the notification to
            Microsoft Teams.
          </li>
        </ol>
      </section>

      <section aria-labelledby="work-2-title" className="mt-28">
        <h2
          id="work-2-title"
          className="instrument-serif scroll-mt-24 text-center text-5xl [text-shadow:-1px_2px_19px_rgba(255,255,255,1)]"
        >
          Work 2 - Backend Scheduling &amp; Concurrent Processing
        </h2>
        <div className="relative mt-10 mb-8 aspect-video w-full flex items-center justify-center">
          <ImagePreview imageUrl={springAppImg} />
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 w-full">
          <section aria-labelledby="work-2-tech-stacks" className="w-full md:w-1/2">
            <h3 id="work-2-tech-stacks" className="text-2xl">Tech Stacks</h3>
            <div className="mt-4 text-base font-thin">
              <p>Java + Spring Boot</p>
              <p>Kotlin + Spring Boot</p>
              <p>Kotlin Coroutines</p>
              <p>Oracle DB</p>
              <p>Spring JPA</p>
              <p>Row-level Locking</p>
              <p>React + TypeScript</p>
              <p>TanStack Form</p>
              <p>TanStack Query</p>
            </div>
          </section>
          <section aria-labelledby="work-2-overview" className="w-full md:w-1/2">
            <h3 id="work-2-overview" className="text-2xl">Overview</h3>
            <p className="mt-4 text-base font-thin">
              Worked on a Java Spring Boot and Kotlin backend that maintains
              processing status in a shared database table. A separate Kotlin
              Spring Boot scheduling service polls the table for eligible work.
            </p>
            <p className="mt-2 text-base font-thin">
              Used Kotlin coroutines to handle concurrent tasks and SELECT FOR
              UPDATE row locks to coordinate access to shared records and prevent
              race conditions during processing.
            </p>
          </section>
        </div>

        <section aria-labelledby="work-2-architecting" className="mt-10">
          <h3 id="work-2-architecting" className="text-3xl">🌿 Architecting</h3>
          <ol className="mt-3 space-y-2 text-base font-thin">
            <li>
              <mark>1</mark>{" "}
              The React and TypeScript client uses TanStack Form to manage form
              input and TanStack Query to submit the request and manage server
              state. The Java Spring Boot and Kotlin backend handles the request
              and adds a row with its initial processing status to the main table
              in Oracle DB.
            </li>
            <li>
              <mark>2</mark>{" "}
              A separate Kotlin Spring Boot scheduling service repeatedly polls
              the table for rows whose status makes them eligible for processing.
            </li>
            <li>
              <mark>3</mark>{" "}
              The scheduling service uses Kotlin coroutines to handle multiple
              tasks concurrently, represented by TRX1, TRX2, and TRX3 in the diagram.
            </li>
            <li>
              <mark>4</mark>{" "}
              Each task uses SELECT FOR UPDATE within a database transaction to
              acquire a lock on its row before processing or changing its status.
            </li>
            <li>
              <mark>5</mark>{" "}
              Row-level locks coordinate competing workers so they cannot modify
              the same locked record at the same time, protecting status changes
              from race conditions.
            </li>
            <li>
              <mark>6</mark>{" "}
              Coroutines run on threads inside the scheduling service&apos;s
              process. They can suspend during supported non-blocking operations,
              allowing threads to perform other work while waiting.
            </li>
            <li>
              <mark>7</mark>{" "}
              Processing results are reflected in the row&apos;s status, which
              the services use to track progress and identify subsequent work.
            </li>
          </ol>
        </section>
      </section>
      <section aria-labelledby="work-3-title" className="mt-28">
        <h2
          id="work-3-title"
          className="instrument-serif scroll-mt-24 text-center text-5xl [text-shadow:-1px_2px_19px_rgba(255,255,255,1)]"
        >
          Work 3 - AI Agents in CI Pipelines
        </h2>
        <div className="relative mt-10 mb-8 aspect-video w-full flex items-center justify-center">
          <ImagePreview imageUrl={aiAgentImg} />
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 w-full">
          <section aria-labelledby="work-3-tech-stacks" className="w-full md:w-1/2">
            <h3 id="work-3-tech-stacks" className="text-2xl">Tech Stacks</h3>
            <div className="mt-4 text-base font-thin">
              <p>Claude SDK</p>
              <p>AI Agents + Skills</p>
              <p>Jenkins CI Pipelines</p>
              <p>Shared Jenkins Module</p>
              <p>AWS SQS</p>
              <p>Background Workers</p>
              <p>Database Task Status Tracking</p>
            </div>
          </section>
          <section aria-labelledby="work-3-overview" className="w-full md:w-1/2">
            <h3 id="work-3-overview" className="text-2xl">Overview</h3>
            <p className="mt-4 text-base font-thin">
              Worked on a CI-integrated AI agent that runs a specific skill
              against a pull request&apos;s Git diff using the Claude SDK. Jenkins
              triggers the task with a PR ID, while a database table tracks its
              processing status.
            </p>
            <p className="mt-2 text-base font-thin">
              Tasks are queued in AWS SQS and processed by two background workers.
              The agent&apos;s result determines whether the CI check passes or
              fails.
            </p>
          </section>
        </div>

        <section aria-labelledby="work-3-architecting" className="mt-10">
          <h3 id="work-3-architecting" className="text-3xl">🌿 Architecting</h3>
          <ol className="mt-3 space-y-2 text-base font-thin">
            <li>
              <mark>1</mark>{" "}
              The Jenkins CI pipeline triggers an AI agent task with the pull
              request ID and the specific skill to execute.
            </li>
            <li>
              <mark>2</mark>{" "}
              A task record is added to the main database table to track the
              request and its processing status.
            </li>
            <li>
              <mark>3</mark>{" "}
              The task is published to AWS SQS, separating the CI request from
              background agent execution.
            </li>
            <li>
              <mark>4</mark>{" "}
              Two background workers, P1 and P2, consume queued tasks from SQS
              and handle agent runs.
            </li>
            <li>
              <mark>5</mark>{" "}
              A worker uses the Claude SDK to run the AI agent with the selected
              skill and the Git diff associated with the pull request.
            </li>
            <li>
              <mark>6</mark>{" "}
              The agent executes the skill against the code changes and returns
              its result, with task progress and completion tracked through the
              database status.
            </li>
            <li>
              <mark>7</mark>{" "}
              The result is used to mark the CI check as passed or failed, making
              the agent&apos;s skill execution part of the pipeline checks.
            </li>
          </ol>
        </section>
      </section>
      <section aria-labelledby="other-works-title" className="mt-28">
        <h2
          id="other-works-title"
          className="instrument-serif scroll-mt-24 text-center text-5xl [text-shadow:-1px_2px_19px_rgba(255,255,255,1)]"
        >
          Other Works
        </h2>
        <ul className="mt-10 custom-list text-base font-thin">
          <li>
            <span className="font-light">Shared Component Library: </span>
            Contributed reusable <code>ReactJS</code> components to a shared
            component library, using <code>Storybook</code> to document and
            showcase components for use across applications.
          </li>
          <li>
            <span className="font-light">React Application Development: </span>
            Worked on <code>ReactJS</code> and <code>TypeScript</code> applications,
            using <code>TanStack Form</code> to manage form input and{" "}
            <code>TanStack Query</code> for API requests, mutations, and server
            state management.
          </li>
          <li>
            <span className="font-light">Transaction Workflows: </span>
            Worked on transaction flows in <code>TypeScript</code> and{" "}
            <code>Hono</code>, using parent <code>AWS Step Functions</code> to
            invoke child workflows, alongside <code>SQS</code> and{" "}
            <code>Lambda</code> functions.
          </li>
          <li>
            <span className="font-light">Event-driven Middleware: </span>
            Worked on an architecture where the main backend publishes events
            to <code>SQS</code> and a <code>Hono</code> middleware service consumes
            and processes them using long polling, with a{" "}
            <code>dead-letter queue</code> for failed messages.
          </li>
          <li>
            <span className="font-light">Webhook Integration: </span>
            Helped on an architecture where an incoming webhook reaches a
            public <code>Kong</code> gateway, which forwards the request to a
            second Kong gateway configured with an{" "}
            <code>AWS Lambda Function URL</code>. The request invokes the Lambda
            function, which sends a message to <code>SQS</code> for downstream
            processing.
          </li>
        </ul>
      </section>
    </main>
  );
};
