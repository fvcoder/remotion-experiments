import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/OpenSans";
import React from "react";

const { fontFamily } = loadFont();

export function ProgressBarIntro() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const bottom = interpolate(frame, [0, 10], [-100, 0], {
    easing: Easing.bezier(0.65, 0, 0.35, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  })
  const opacity = interpolate(frame, [0, 10, 60, 70], [0, 1, 1, 0], {
    easing: Easing.bezier(0.65, 0, 0.35, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  })
  const width = interpolate(frame, [12, 60], [0, 100],{
    easing: Easing.bezier(0, 0.55, 0.45, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  })


  return (
    <Sequence durationInFrames={fps * 2.5} name="ProgressBarIntro">
        <AbsoluteFill className="justify-center items-center" style={{ bottom, top: "auto", opacity }}>
          <div className="relative w-3/4 h-10 bg-zinc-100 rounded-2xl border-2 border-zinc-200">
            <div className="h-full bg-linear-to-r from-blue-500 to-green-500 rounded-2xl" style={{ width: `${width}%` }}></div>
            <AbsoluteFill className="items-center justify-center">
              <p className="text-zinc-100 text-lg" style={{ fontFamily }}>Up Next</p>
            </AbsoluteFill>
          </div>
        </AbsoluteFill>
    </Sequence>
  )
}