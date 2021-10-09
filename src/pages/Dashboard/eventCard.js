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
        className={` ${
          active
            ? "bg-blue-900"
            : "bg-red-900"
        } `}
        
      >
        <span className="">
          {active ? <>{"✔️" + props.name}</> : <>{props.name}</>}
        </span>
      </div>

    </div>
  );
};
export default EventCard;
