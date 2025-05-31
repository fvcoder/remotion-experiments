import {
  AbsoluteFill,
} from "remotion";
import React from "react";
import { ProgressBarIntro } from "./scene/progressBarIntro";
import { SpeakerIntro } from "./scene/speakerIntro";
import { UncomfortableTruths } from "./scene/uncomfortableTruths";
import { Area } from "./scene/area";

export const Main = () => {

  return (
    <AbsoluteFill className="bg-white">
      <Area />
      <UncomfortableTruths />
      <SpeakerIntro />
      <ProgressBarIntro />
    </AbsoluteFill>
  );
};
