import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://zakariaebenzouitine.com"),
  title: "Zakariae Benzouitine · AI / Data Engineer",
  description:
    "AI / Data Engineer specializing in production RAG systems, AI agents, and LLMs. Building intelligent systems that answer real questions on real data — Python, LangChain, PyTorch.",
  keywords: [
    "Zakariae Benzouitine",
    "AI Engineer",
    "Data Engineer",
    "Generative AI Engineer",
    "RAG",
    "Retrieval-Augmented Generation",
    "AI Agents",
    "LLMs",
    "LangChain",
    "PyTorch",
    "Machine Learning",
    "Data Science",
    "Morocco",
  ],
  authors: [{ name: "Zakariae Benzouitine" }],
  creator: "Zakariae Benzouitine",
  openGraph: {
    type: "website",
    title: "Zakariae Benzouitine · AI / Data Engineer",
    description:
      "Building production RAG systems, AI agents, and LLMs that answer real questions on real data.",
    siteName: "Zakariae Benzouitine",
    images: [{ url: "/profile_linkedin.jpeg", width: 800, height: 800, alt: "Zakariae Benzouitine" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zakariae Benzouitine · AI / Data Engineer",
    description:
      "Building production RAG systems, AI agents, and LLMs that answer real questions on real data.",
    images: ["/profile_linkedin.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
