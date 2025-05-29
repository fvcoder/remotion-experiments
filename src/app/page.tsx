"use client";

import { Player, PlayerRef } from "@remotion/player";
import type { NextPage } from "next";
import React, { useMemo, useRef, useState } from "react";
import { z } from "zod";
import {
  defaultMyCompProps,
  CompositionProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../../types/constants";
import { Main } from "../remotion/MyComp/Main";

const Home: NextPage = () => {
  const playerRef = useRef<PlayerRef>(null);
  const [text] = useState<string>(defaultMyCompProps.title);

  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      title: text,
    };
  }, [text]);

  return (
    <div className="bg-black size-full">
      <div className="h-full w-auto mx-auto">
          <Player
            ref={playerRef}
            component={Main}
            inputProps={inputProps}
            durationInFrames={DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            compositionHeight={VIDEO_HEIGHT}
            compositionWidth={VIDEO_WIDTH}
            style={{
              width: "auto",
              height: "100%",
            }}
            controls
            autoPlay
          />
      </div>
    </div>
  );
};

export default Home;
