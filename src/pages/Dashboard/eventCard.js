import React, { useState } from "react";
import { selectedEventsAtom } from "../../statedrive/atoms";
import { useSharedState } from "../../statedrive/index";

const EventCard = (props) => {
  const [active, setActive] = useState(props.isActive || false);
  const [selectedEvents, setSelectedEvents] =
    useSharedState(selectedEventsAtom);
  return (
    <div
      onClick={() => {
        setActive(!active);
        if (!active) {
          setSelectedEvents([...selectedEvents, props.name]);
        } else {
          setSelectedEvents(
            selectedEvents.filter((event) => event !== props.name)
          );
        }
      }}

    >
      <div


        className={` ${active
          ? "bg-active_card"
          : "bg-inactive_card"
          } 
        
        
          flex flex-col
          items-center
          w-56
          h-28
          m-4
          
          lg:w-60
          lg:h-32
          
          
          
          
          
          
          xsm:w-64
          xsm:h-32
          rounded-md
          justify-between
          pt-6
          pb-2
          xsm:pt-7
          cursor-pointer
          font-pop
        `
        }

      >

        <h1 className="text-xl text-white capitalize xsm:text-2xl lg:text-3xl">   {props.name}</h1>
        <button className="bg-white w-32  text-sm rounded-md h-6 flex items-center justify-center xsm:text-base">{active ? "Selected" : "Select"}</button>


      </div>

    </div>
  );
};
export default EventCard;