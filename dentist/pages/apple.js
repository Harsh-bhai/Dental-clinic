import React from "react";

const Apple = () => {
  return (
    <div>
      <div className="intro-text">
        <p className="text-animate">My Introduction Text</p>
      </div>

      <style jsx>{`
        .intro-text {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .text-animate {
          font-size: 36px;
          font-weight: bold;
          color: #333;
          overflow: hidden;
          white-space: nowrap;
          margin: 0;
          letter-spacing: 8px;
          animation: animate-text 1s linear forwards;
        }

        @keyframes animate-text {
          0% {
            transform: translateX(-50%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .text-animate::before {
          content: "|";
          animation: animate-bar 1s ease-out forwards;
          animation-delay: 0.5s;
        }

        @keyframes animate-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Apple;
