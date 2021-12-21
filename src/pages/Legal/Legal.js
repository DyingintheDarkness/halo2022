import { useState } from "react";
import Layout from "../../components/Layout"
import PrivacyPolicy from "./PrivacyPolicy"
import TermsAndCondition from "./TermsAndConditions";
const Legal = () => {
    const [toggle, setToggle] = useState(true);


    return (
        <Layout>
            <div className="mt-12 relative z-30 mb-10 xsm:mb-20">
                <div className="flex flex-col gap-1 items-center justify-center text-center mb-10 lg:gap-7">
                    <h1 className="font-bold font-pop text-xl xsm:text-2xl md:text-3xl lg:text-5xl">Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit</h1>
                    <button className="font-sand w-60 h-8 font-bold lg:text-lg lg:h-10 lg:w-64 bg-green_2 shadow-spread-md  rounded-md" onClick={() => setToggle(!toggle)}>View {toggle ? "Terms and Condition" : "Privacy Policy"}</button>
                </div>
                {toggle ? <PrivacyPolicy /> : <TermsAndCondition />}
            </div>
        </Layout>
    )
}

export default Legal
