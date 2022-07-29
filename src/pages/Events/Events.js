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
                One Player from Each team will compete in multiple death matches. Points will be<br/>
                awarded to the team on each kill. Based on their ranking on the leader board and a<br/>
                high view of their skill.<br/>
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
                A perplexing questionnaire will be provided to based on the field of computers,<br/>
                technology and events in the tech world.<br/>
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
                A perplexing questionnaire will be provided to based on the field of computers, <br/>
                technology and recent events in the tech world. students from classes<br/>
                8th to 12th can participate in this event. One team per school<br/>
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
