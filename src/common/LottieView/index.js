import { Backdrop } from "@material-ui/core";
import Lottie from "react-lottie";
import { useHistory } from "react-router-dom";
// import done from "./done.json";
import React from "react";

export default function LottieView({ setDisplayDone, ...props }) {
  const done = "";
  const history = useHistory();
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: done,
  };
  const eventListeners = [
    {
      eventName: "complete",
      callback: () => {
        setDisplayDone(false);
        history.push("/");
      },
    },
  ];
  return (
    <Backdrop style={{ zIndex: 100, color: "#fff" }} {...props} open={true}>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        eventListeners={eventListeners}
      />
    </Backdrop>
  );
}
