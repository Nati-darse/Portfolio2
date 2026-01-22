import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CommandPalette } from "@/components/ui/CommandPalette";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Natnael Darsema | Full-Stack Developer",
  description: "Performance-first portfolio showcasing Next.js expertise, STAR-method case studies, and proof-of-thought engineering.",
  keywords: ["Full-Stack Developer", "Next.js", "React", "TypeScript", "Portfolio"],
  authors: [{ name: "Natnael Darsema" }],
  openGraph: {
    title: "Natnael Darsema | Full-Stack Developer",
    description: "Performance-first portfolio showcasing Next.js expertise and engineering thinking.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Mouse tracking for radial gradient */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('mousemove', (e) => {
                const x = (e.clientX / window.innerWidth) * 100;
                const y = (e.clientY / window.innerHeight) * 100;
                document.documentElement.style.setProperty('--mouse-x', x + '%');
                document.documentElement.style.setProperty('--mouse-y', y + '%');
              });
            `,
          }}
        />
        <CommandPalette />
      </body>
    </html>
  );
}

