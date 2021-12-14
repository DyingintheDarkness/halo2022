import React from "react";
import Layout from "../../components/Layout";
import { members } from "./team-members";

const Team = () => {
  return (
    <Layout>
      <div className="mt-5 sm:mt-10 flex flex-col justify-center items-center mb-10 xl:mb-20 lg:mt-10 xsm:mt-24">
        <h1 className="font-pop font-bold text-center text-xl  xsm:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit
        </h1>

        <div className="flex flex-col justify-center items-center xsm:flex-row xsm:flex-wrap mt-8 md:mt-14 gap-10 lg:w-10/12 lg:ml-1 xl:w-8/12 lg:gap-14">
          {members.map((member) => {
            return (
              <div className={`rounded-md bg-white border-b-4 border-${member.color} w-64 h-full pb-1 shadow-spread-md lg:mr-1`}>
                <img src={member.img} alt="" className="rounded-t-md" />
                <div className="flex flex-col justify-center items-start pl-1">
                  <h1 className="font-sand text-lg">{member.name}</h1>
                  <h2 className="font-sans font-bold -mt-1">
                    {member.designation}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Team;
