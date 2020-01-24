import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";

import * as legoData from "../../lottie/lego-loader.json";

import "./styles.css";

const legoOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default function Login({ setDone }) {
  const [loading, setLoading] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          setLoading(true);
          setTimeout(() => {
            setDone(true);
          }, 2000);
        });
    }, 2000);
  }, []);

  return (
    <div className="login-container">
      {loading ? (
        <Lottie options={legoOptions} height={120} width={120} />
      ) : (
        <form className="login-form">
          <input
            placeholder="email"
            type="email"
            value="naeliofreires@gmail.com"
            disabled
          />
          <input
            placeholder="password"
            type="password"
            value="1234567"
            disabled
          />

          <button type="submit">acessar</button>
        </form>
      )}
    </div>
  );
}
