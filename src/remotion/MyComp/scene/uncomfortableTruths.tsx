import { AbsoluteFill, Easing, Img, interpolate, Sequence, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

function Images() {
    const frame = useCurrentFrame();
    const { width } = useVideoConfig();
    const opacity = interpolate(frame, [0, 10, 340, 350], [0, 1, 1, 0], {
        easing: Easing.bezier(0.33, 1, 0.68, 1),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    })
    const staticWidth = (width - (40 * 4)) / 3;
    const w1 = interpolate(frame, [20, 40, 100, 120, 260, 280], [staticWidth, 591, 591, 200, 200, staticWidth], {
        easing: Easing.bezier(0.33, 1, 0.68, 1),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    })
    const w2 = interpolate(frame, [20, 40, 100, 120, 180, 200, 260, 280], [staticWidth, 200, 200, 591, 591, 200, 200, staticWidth], {
        easing: Easing.bezier(0.33, 1, 0.68, 1),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    })
    const w3 = interpolate(frame, [20, 30, 180, 200, 260, 280], [staticWidth, 200, 200, 591, 591, staticWidth], {
        easing: Easing.bezier(0.33, 1, 0.68, 1),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    })

    return (
        <AbsoluteFill className="p-10 justify-center">
            <div className="flex items-center gap-10 h-4/5" style={{ opacity }}>
                <Img src={staticFile("f.jpg")} className="h-full object-cover rounded-4xl block flex-none" style={{ width: w1 }} />
                <Img src={staticFile("s.jpg")} className="h-full object-cover rounded-4xl block flex-none" style={{ width: w2 }} />
                <Img src={staticFile("n.jpg")} className="h-full object-cover rounded-4xl block flex-none" style={{ width: w3 }} />
            </div>
        </AbsoluteFill>
    )
}

export function UncomfortableTruths() {
    return (
        <Sequence from={245} durationInFrames={350} name="UncomfortableTruths">
            <Images />
        </Sequence>
    )
}
