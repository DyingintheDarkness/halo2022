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
                An opportunity to resolve riveting problems and arouse the inventiveness<br/>
                of curious minds using the interface python<br/>
              </h2>
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
                "Survival of the Fittest"- players will compete in multiple death matches. <br/>
                Its all about agility of the fingers! You Lead or Lose.<br/>
              </h2>
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

            <h1 className="font-sarabun text-4xl font-semibold">QuЯious</h1>
            <div className="flex flex-col py-10 text-center" key="idk">
              <h2 className="font-sarabun text-grey_1 font-light text-sm xsm:text-base">
                An opportunity to resolve a perplexing questionnaire based on recent technological events<br/>
                and technology.<br/>
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
