import React from "react";
import Layout from "../../components/Layout";
import { members } from "./team-members";

const Team = () => {
  return (
    <Layout>
      <div className="mt-5 sm:mt-10 flex flex-col justify-center items-center mb-10 md:mb-20">
        <h1 className="font-pop font-bold text-center text-lg  xsm:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit
        </h1>
        <div className="flex flex-col justify-center items-center xsm:flex-row xsm:flex-wrap mt-10 lg:mt-14 gap-10 lg:w-10/12 lg:ml-1 xl:w-8/12 md:gap-20">
          {members.map((member) => {
            return (
              <div key={member.name} className={`rounded-md bg-white w-60 h-full pb-1 shadow-spread-md`}>
                <img src={member.img} alt="" className="rounded-t-md" />
                <div className="flex flex-col justify-center items-start pl-1">
                  <h1 className="font-pop font-medium xsm:text-lg md:text-xl pt-1">{member.name}</h1>
                  <h2 className="font-sand text-xsm -mt-1 lg:text-lg">
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
