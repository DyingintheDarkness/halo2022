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
          ? "bg-blue_1"
          : "bg-grey_3"
          } 
          flex
          items-center
          w-56
          h-28
          m-4
          lg:w-60
          lg:h-32
          text-white
          xsm:w-64
          xsm:h-32
          rounded-md
          justify-center
          cursor-pointer
          font-pro
          font-bold
          
        `
        }

      >

        <h1 className="text-xl text-white capitalize xsm:text-2xl lg:text-3xl">   {props.name}</h1>

      </div>

    </div>
  );
};
export default EventCard;