import Footer from "@/components/Footer"
import Header from "../components/Header"
import SplashCursor from "../components/SplashCursor"
import { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="custom-container">
      <Header />
      <SplashCursor />
      <main>{children}</main>
      <Footer/>
    </div>
  )
}
