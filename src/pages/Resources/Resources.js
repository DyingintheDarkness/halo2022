import React from "react";
import Layout from "../../components/Layout";
import { resources } from "./data";

const Resources = () => {
  return (
    <Layout>
<div className="mt-10 mb-10">

<div className="bg-card flex px-14 flex-col gap-3 mt-10">
<div className="flex flex-col xsm:text-lg pt-10 font-sarabun pb-10">
<h1 className="font-sarabun text-white text-xl pl-10 pb-10">
  Click on the links below to discover learning resources
  </h1>

{resources.map(res => {
  return <a className="resCard underline py-10 text-xl" href={res.link}>{res.name}</a>
})}
</div>


</div>





</div>
    </Layout>
  );
};

export default Resources;
