import * as motion from "motion/react-client";
import Image from "next/image";
import type { Variants } from "motion/react";
import profilePicture from "@/assets/profile-picture.jpg";

export const BusinessCard = () => {
  const hues = [340, 10];
  const background = `linear-gradient(306deg, ${hue(hues[0])}, ${hue(hues[1])})`;

  return (
    <div style={container}>
      <motion.div
        className="card-container"
        style={cardContainer}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
      >
        <div style={{ ...splash, background }} />
        <motion.div style={card} variants={cardVariants} className="card">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ color: "#000", fontSize: "0.2em", fontWeight: 900 }}>
              Mia Ciasullo
            </h1>
            <Image
              src={profilePicture}
              alt="Profile"
              style={{ borderRadius: "50%", width: "80%" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  // margin: "100px auto",
  maxWidth: 500,
  paddingBottom: 100,
  width: "100%",
};

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
  fontSize: 164,
  width: 300,
  height: 430,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  // background: "#f5f5f5",
  background: "#fff2f2",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
};
