import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"ComfortPro | HVAC & Plumbing — Concept Demo",description:"Explore a fictional Northern Virginia home-service website. Try the working three-step HVAC and plumbing estimate demo.",robots:{index:false,follow:false},icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
