import { z } from "zod";
export const COMP_NAME = "MyComp";

export const CompositionProps = z.object({
  title: z.string(),
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  title: "Next.js and Remotion",
};

export const DURATION_IN_SECONDS = 30;
export const VIDEO_WIDTH = 1152;
export const VIDEO_HEIGHT = 864;
export const VIDEO_FPS = 30;
export const DURATION_IN_FRAMES = DURATION_IN_SECONDS * VIDEO_FPS;