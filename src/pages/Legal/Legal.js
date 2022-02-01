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
                    <h1 className="font-sarala font-bold text-lg xsm:text-2xl sm:text-4xl text-center">No no, we won’t force you to give up<br/>on pizza and we also won’t try to<br/>know your grades in 7th class</h1>
                    <button className="font-segoe w-60 h-8 lg:text-lg lg:h-10 mt-5 lg:w-64 shadow-spread-md bg-green_2  rounded-md" onClick={() => setToggle(!toggle)}>View {toggle ? "Terms and Condition" : "Privacy Policy"}</button>
                </div>
                {toggle ? <PrivacyPolicy /> : <TermsAndCondition />}
            </div>
        </Layout>
    )
}

export default Legal