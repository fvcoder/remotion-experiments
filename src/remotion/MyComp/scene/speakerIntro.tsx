import { AbsoluteFill, Easing, Img, interpolate, interpolateColors, Sequence, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/OpenSans";

const { fontFamily } = loadFont();

function IntroducingBadge() {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [0, 10, 170, 185], [0, 1, 1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
    })
    const top = interpolate(frame, [0, 10, 170, 185], [3.5, 2.5, 2.5, 3.5], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
    })

    return (
        <AbsoluteFill className="px-4 py-2 border border-zinc-600 rounded-4xl w-fit h-fit left-10 text-lg" style={{ opacity, top: `${top}rem` }}>
            <p style={{ fontFamily }}>Introducing</p>
        </AbsoluteFill>
    )
}

function NameSpeaker() {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [0, 10, 170, 180], [0, 1, 1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
    })
    const top = interpolate(frame, [0, 10, 100, 120, 170, 180], [9, 8, 8, 42, 42, 43], {
        easing: Easing.bezier(0.65, 0, 0.35, 1),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
    })

    return (
        <AbsoluteFill className="w-fit h-fit top-32 left-10" style={{ opacity, top: `${top}rem` }}>
            <h1 className="text-7xl font-semibold" style={{ fontFamily }}>
                Fernando
                <br />
                Ticona
            </h1>
        </AbsoluteFill>
    )
}

function Background() {
    const frame = useCurrentFrame();
    const backgroundColor = interpolateColors(frame, [0, 20, 90, 120], ["#fff", "#bce0f7", "#bce0f7", "#fff"])
    const opacity = interpolate(frame, [10, 20, 100, 110], [0, 1, 1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
    })
    const bottom = interpolate(frame, [0, 20, 100, 120], [-5, 0, 0, -5], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
    })
    
    return (
        <AbsoluteFill className="bg-[#bce0f7]" style={{ backgroundColor }}>
            <AbsoluteFill className="justify-end" style={{ bottom: `${bottom}rem`, top: "auto", opacity }}>
                <Img src={staticFile("bg.webp")} className="w-full" />
            </AbsoluteFill>
        </AbsoluteFill>
    )
}

export function SpeakerIntro() {
    const { fps } = useVideoConfig();

    return (
        <Sequence from={fps * 2} durationInFrames={185} name="SpeakerIntro">
            <Background />
            <IntroducingBadge />
            <NameSpeaker />
        </Sequence>
    )
}