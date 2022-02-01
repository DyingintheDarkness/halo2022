import React from "react";
import Layout from "../../components/Layout";
import { members } from "./team-members";

const Team = () => {
  return (
    <Layout>
      <div className="mt-10 mb-10">

<h1 className="font-sarala font-bold text-lg xsm:text-2xl sm:text-4xl text-center">
Meet The Commanders Of The Cavalry
</h1>


<div className="mt-5 flex items-center justify-center">

<div className="flex flex-col justify-center items-center xsm:flex-row xsm:flex-wrap mt-10 lg:mt-14 gap-10 lg:w-10/12 lg:ml-1 xl:w-8/12 md:gap-20">
          {members.map((member) => {
            return (
              <div key={member.name} className={`rounded-md bg-white w-60 h-full pb-1 shadow-spread-md`}>
                <img src={member.img} alt="" className="rounded-t-md" />
                <div className="flex flex-col justify-center items-start pl-1">
                  <h1 className="font-pro font-medium xsm:text-lg md:text-xl pt-1">{member.name}</h1>
                  <h2 className="font-segoe font-semibold text-xsm -mt-1 lg:text-lg">
                    {member.designation}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>



</div>






      </div>
    </Layout>
  );
};

export default Team;
