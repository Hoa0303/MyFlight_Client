import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Happiness isn’t a destination, it’s a journey we are on",
          "He that travels much knows much",
          "Happiness is travelling",
          "Come fly with us",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
