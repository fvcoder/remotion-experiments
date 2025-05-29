import {
  AbsoluteFill,
} from "remotion";
import React from "react";
import { ProgressBarIntro } from "./scene/progressBarIntro";
import { SpeakerIntro } from "./scene/speakerIntro";

export const Main = () => {

  return (
    <AbsoluteFill className="bg-white">
      <SpeakerIntro />
      <ProgressBarIntro />
    </AbsoluteFill>
  );
};
