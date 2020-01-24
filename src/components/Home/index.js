import React, { useState } from "react";
import Lottie from "react-lottie";
import FadeIn from "react-fade-in";

import Login from "../Login";

import * as doneData from "../../lottie/checked-done.json";

import "./styles.css";

const doneOptions = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default function Home() {
  const [done, setDone] = useState(false);

  return (
    <FadeIn>
      <div className="home-container">
        {!done && <Login setDone={setDone} />}
        {done && <Lottie options={doneOptions} height={120} width={120} />}
      </div>
    </FadeIn>
  );
}
