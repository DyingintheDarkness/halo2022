import React from "react";
import Layout from "../../components/Layout";
import { resources } from "./data";

const Resources = () => {
  return (
    <Layout>
<div className="mt-10 mb-10">
  <h1 className="font-sarala font-bold text-lg xsm:text-2xl sm:text-4xl text-center">You can learn and develop your<br/>skills through these resources</h1>

<h2 className="mt-10 font-pro text-center break-words xsm:text-lg sm:text-xl md:text-2xl">
Click on the links below to discover the resources
</h2>



<div className="bg-white h-52 xsm:h-56 flex items-center justify-center flex-col gap-3 mt-5">
  <h1 className="font-sansation font-bold text-xl -mt-10 xsm:text-2xl xsm:-mt-5 pt-10">
  Resources Links:-
  </h1>

<div className="underline flex flex-col xsm:text-lg text-blue_3 gap-1 font-montserrat font-bold pb-10">
{resources.map(res => {
  return <a href={res.link}>{res.name}</a>
})}
</div>


</div>





</div>
    </Layout>
  );
};

export default Resources;
