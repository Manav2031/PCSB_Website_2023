import React from "react";
import Xenia from "../components/xenia";
import Event2 from "../components/event";
import "../styles/events.css";

export default function Events() {
  return (
    <div className="bg-color fffont">
      <div className="text-center font-semibold pt-6 pb-2 text-6xl  md:text-8xl lg:text-8xl text-blue-600">
        EVENTS
      </div>
      <br /> <br />
      <Xenia />
      <div className="py-20">
        <Event2 />
      </div>
    </div>
  );
}
