import React from "react";
import profile from "../../resources/images/profile.png";
import promptopia from "../../resources/images/promptopia.png";
import clickpesa from "../../resources/images/clickpesa.png";
import streaming from "../../resources/images/streaming.png";
import zmstore from "../../resources/images/zmstore.png";
import { AiOutlineLink } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ProjectCard } from "../../components/project-card";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex justify-center md:justify-between text-center md:text-left">
        <div className="md:flex-auto">
          <h5 className="my-6">Hey!</h5>
          <h1 className="my-6">
            I'm <span className="text-primary-default">Alanus Kajara</span>
          </h1>
          <h2 className="my-6 text-secondary-default">
            Full-stack developer <span className="text-primary-default">|</span>
          </h2>
          <p className="my-6">
            Software & Telecoms Engineer with a passion for technology.
          </p>
          <div className="my-6 flex justify-center md:justify-start">
            <p className="flex items-center">
              <Link
                to="/about-me"
                className="flex items-center text-primary-default hover:text-primary-dark"
              >
                Know more
                <AiOutlineLink style={{ marginLeft: 5, marginRight: 5 }} />
              </Link>
              about me
            </p>
          </div>
        </div>
        <div className="w-1/3 hidden md:block flex-auto">
          <img src={profile} width="100%" alt="" />
        </div>
      </div>

      <div>
        <p className="text-3xl text-center md:text-justify">
          I help clients to build web and mobile apps for their businesses.
          <span className="text-base">
            <Link
              to="/skills"
              className="text-primary-default block md:inline hover:text-primary-dark"
            >
              <AiOutlineLink
                style={{ marginLeft: 5, marginRight: 5, display: "inline" }}
              />
              View skills.
            </Link>
          </span>
        </p>
      </div>

      <div className="">
        <div className="my-6 flex justify-between items-center">
          <h2 className="text-secondary-default">Recent Projects</h2>
          <button
            className="bg-primary-default rounded-lg p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-dark duration-300"
            onClick={() => navigate("/projects")}
          >
            View More
          </button>
        </div>

        <div>
          <div>
            <ProjectCard
              source={promptopia}
              title="Promptopia"
              href="https://project-promptopia-kxyl387rt-alanus-projects.vercel.app"
              toolTip="View Live"
              description="An open-source AI prompting tool for modern world to discover, create, and share creative prompts"
              skills={
                <ul className="text-white-dark text-base font-thin xs:flex">
                  <li className="mr-3">nextjs</li>
                  <li className="mr-3">typescript</li>
                  <li className="mr-3">mongodb</li>
                  <li className='mr-3'>mongoose</li>
                  <li className="mr-3">nextauth</li>
                  <li className="mr-3">tailwindcss</li>
                </ul>
              }
            />
            <ProjectCard
              source={clickpesa}
              title="Sender Dashboard"
              href="https://github.com/AlanusK/sender-app/commits/develop"
              description="E-commerce platform focus on simplifying business payments"
              skills={
                <ul className="text-white-dark text-base font-thin xs:flex">
                  <li className="mr-3">react</li>
                  <li className="mr-3">typescript</li>
                </ul>
              }
            />
          </div>

          <div className="md:flex md:gap-5">
            <ProjectCard
              source={zmstore}
              title="Zmstore"
              // href='https://github.com/zeromoja/zmstore'
              toolTip="zmstore"
              description="Cross-platform mobile selling app"
              skills={
                <ul className="text-white-dark text-base font-thin xs:flex">
                  <li className="mr-3">react native</li>
                  <li className="mr-3">typescript</li>
                </ul>
              }
            />
            <ProjectCard
              source={streaming}
              title="DEMO Streaming"
              href="https://github.com/AlanusK/demo-streaming"
              description="A web app that shows popular series and movies"
              skills={
                <ul className="text-white-dark text-base font-thin xs:flex">
                  <li className="mr-3">react</li>
                  <li className="mr-3">tailwindcss</li>
                </ul>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
