import {
  AbsoluteFill,
} from "remotion";
import React from "react";
import { ProgressBarIntro } from "./scene/progressBarIntro";
import { SpeakerIntro } from "./scene/speakerIntro";
import { UncomfortableTruths } from "./scene/uncomfortableTruths";

export const Main = () => {

  return (
    <AbsoluteFill className="bg-white">
      <UncomfortableTruths />
      <SpeakerIntro />
      <ProgressBarIntro />
    </AbsoluteFill>
  );
};
