import React from "react";
import "./hero.css";
import Seder from "../seder";

export const HeroSection = () => {
  return (
    <div className="mainSection">
      <video
        src="https://video.wixstatic.com/video/c837a6_02de7d4c43d44b7b890854049ed75da8/1080p/mp4/file.mp4"
        autoPlay
        muted
        loop
        className="video"
        width={"100%"}
      />
      <Seder />
      <div className="absolute">
        <div
          style={{
            fontSize: "2rem",
            fontWeight: "500",
          }}
        >
          THE FUTURE OF MOBILITY IS HERE
        </div>
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "400",
          }}
        >
          Discover the safest self-driving experience with Autono.
        </p>
      </div>
      <img
        src="https://static.wixstatic.com/media/84770f_3ebbf7ac3e26427b83ca50c82aabaaf8~mv2.png/v1/fill/w_980,h_600,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/84770f_3ebbf7ac3e26427b83ca50c82aabaaf8~mv2.png"
        alt=""
        // style="width: 980px; height: 600px; object-fit: cover; object-position: 50% 50%;"
        style={{
          width: "100vw",
        }}
        fetchpriority="high"
      ></img>
    </div>
  );
};
