import { Img, interpolate, staticFile, useCurrentFrame } from "remotion";

interface AreaIconImageProps {
    filename: string;
    start?: number;
}

export function AreaIconImage(props: AreaIconImageProps) {
    const start = props.start ?? 0;
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [start, start + 10], [0, 1])

    return (
        <div className="size-16 rounded-2xl flex items-center justify-center bg-white shadow-lg" style={{ opacity }}>
            <Img src={staticFile(props.filename)} className="size-10 object-cover" />
        </div>
    )
}