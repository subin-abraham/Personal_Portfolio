'use client'
import HomeComponent from "./Home"
import AboutMe from "../components/AboutMe"
import WorkExperience from "@/components/WorkExperience"

export default function Home() {
  return (
    <div>
      <HomeComponent />
      <AboutMe />
      <WorkExperience/>
    </div>
  )
}