import { loadFont } from "@remotion/google-fonts/OpenSans";
import { AbsoluteFill, Easing, interpolate, InterpolateOptions, Sequence, useCurrentFrame } from "remotion";
import { AreaIconImage } from "../components/iconImage";

const interpolateOptions: InterpolateOptions = {
    easing: Easing.bezier(0.33, 1, 0.68, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
}

const { fontFamily } = loadFont();

function Title() {
    const frame = useCurrentFrame();
    const fontSize = interpolate(frame, [20, 40], [72, 48], interpolateOptions)
    const top = interpolate(frame, [20, 40], [45.6, 36], interpolateOptions);

    return (
        <AbsoluteFill className="h-fit items-center justify-center" style={{ top: `${top}%` }}>
            <div>
                <h1
                    className="text-center font-semibold"
                    style={{
                        fontFamily,
                        fontSize,
                        lineHeight: 1,
                    }}
                >
                    Programming Areas
                </h1>
            </div>
        </AbsoluteFill>
    )
}

function AreasIconView() {
    return (
        <AbsoluteFill className="items-center justify-center flex-row gap-10">
            <AreaIconImage start={45} filename="mdi--web.png" />
            <AreaIconImage start={45} filename="mdi--cellphone.png" />
            <AreaIconImage start={45} filename="mdi--gamepad-classic-outline.png" />
            <AreaIconImage start={45} filename="mdi--tools.png" />
            <AreaIconImage start={45} filename="material-symbols--shield-locked-outline.png" />
            <AreaIconImage start={45} filename="material-icon-theme--gemini-ai.png" />
            <AreaIconImage start={45} filename="material-symbols--cloud-outline.png" />
        </AbsoluteFill>
    ) 
}

export function Area() {
    return (
        <Sequence from={595} name="Area">
            <AreasIconView />
            <Title />
            <AbsoluteFill className="items-center justify-center">
                <div className="size-1 bg-amber-500 rounded-full" />
            </AbsoluteFill>
        </Sequence>
    )
}