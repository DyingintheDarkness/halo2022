import React from "react";
import Layout from "../../components/Layout";
const Events = () => {
  return (
    <Layout>
      <div className="flex flex-col sm:flex-row justify-around items-center VertMarg">
        <div class="halfbabes h-96  bg-black">
          <div className="flex flex-col cardPadHoriz text-xl items-center">
            <img
              src="https://i.imgur.com/ARmFVL5.png"
              className="resImg px-11 py-10"
              width="198"
              height="198"
            ></img>

            <h1 className="font-sarabun text-4xl font-semibold">Encode</h1>
            <div className="flex flex-col py-10 text-center" key="idk">
              <h2 className="font-sarabun text-grey_1 font-light text-sm xsm:text-base">
                2 students per Team and 1 team per School
              </h2>
              <h2 className="font-sarabun text-grey_1 font-light text-sm xsm:text-base">
                Eligibility: 6th to 12th
              </h2>
              <h2 className="font-sarabun text-grey_1 font-light text-sm xsm:text-base">
                A mixed bag of problems in the form of outputs and questions can be 
                attempted by the contestants in any programming language of their choice.
                Judgements would be made on account of speed and accuracy.
              </h2>
              <br></br>
            </div>
          </div>
        </div>
        <div class="halfbabes h-96  bg-black">
          <div className="flex flex-col cardPadHoriz text-xl items-center">
            <img
              src="https://i.imgur.com/cBTuMoR.png"
              className="resImg px-11 py-10"
              width="198"
              height="198"
            ></img>

            <h1 className="font-sarabun text-4xl font-semibold">Recoil</h1>
            <div className="flex flex-col py-10 text-center" key="idk">
              <h2 className="font-sarabun text-grey_1 font-light text-sm xsm:text-base">
                Gaming
              </h2>
              <h2 className="font-sarabun text-grey_1 font-light text-sm xsm:text-base">
                Teams of 5+1
              </h2>
              <h2 className="font-sarabun text-grey_1 font-light text-sm xsm:text-base">
                8th to 12th
              </h2>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-around items-center VertMarg">
      <div class="halfbabes h-96  bg-black">
          <div className="flex flex-col cardPadHoriz text-xl items-center">
            <img
              src="https://i.imgur.com/PwJ4R5c.png"
              className="resImg px-11 py-10"
              width="198"
              height="198"
            ></img>

            <h1 className="font-sarabun text-4xl font-semibold">Qurious</h1>
            <div className="flex flex-col py-10 text-center" key="idk">
              <h2 className="font-sarabun text-grey_1 font-light text-sm xsm:text-base">
                Quizzing
              </h2>
              <h2 className="font-sarabun text-grey_1 font-light text-sm xsm:text-base">
                Teams of 2
              </h2>
              <h2 className="font-sarabun text-grey_1 font-light text-sm xsm:text-base">
                8th to 12th
              </h2>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// easter egg: karan is a bad leader ;)

export default Events;
