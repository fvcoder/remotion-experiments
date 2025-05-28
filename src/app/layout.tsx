import "../../styles/global.css";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Remotion and Next.js",
  description: "Remotion and Next.js",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="size-full">
      <body className="bg-black size-full">{children}</body>
    </html>
  );
}
