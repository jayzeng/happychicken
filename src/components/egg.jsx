import React, { useState, useEffect } from "react";

const randomHatchingTime = () => {
  return Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
};

const Egg = ({ id, onHatch }) => {
  const [countdown, setCountdown] = useState(
    Math.floor(randomHatchingTime() / 1000),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          onHatch(id);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [id, onHatch]);

  return <div className="egg">🥚{countdown}</div>;
};

export default Egg;
