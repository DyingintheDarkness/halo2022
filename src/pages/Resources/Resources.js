import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
const Resources = () => {
  return (
    <Layout title="Learning Resources">
      <div className="font-pop flex flex-col gap-10 items-center md:mt-56 mt-20 h-screen">
        <h1 className="font-bold sm:text-2xl md:text-3xl text-lg lg:text-5xl">
          You can learn and develop your <br />
          skills through these resources.
        </h1>
        <div className="flex flex-col justify-center items-center gap-4 sm:flex-row">
          <Link
            to={{ pathname: "#" }}
            target="_blank"
            rel="noreferrer"
            className="bg-codebtn w-40 flex justify-center rounded-md p-1 underline md:text-lg"
          >
            Programming
          </Link>
          <Link
            to={{ pathname: "#" }}
            target="_blank"
            rel="noreferrer"
            className="bg-designbtn w-40 flex justify-center rounded-md p-1 underline md:text-lg"
          >
            Design
          </Link>
          <Link
            to={{ pathname: "#" }}
            target="_blank"
            rel="noreferrer"
            className="bg-quizbtn w-40 flex justify-center rounded-md p-1 underline md:text-lg"
          >
            Quiz
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
