import { motion } from "framer-motion"
import CustomCursor from "./CustomCursor"
import IconCloud from "./DynamicIconCloud"
import HeroSprite from "./HeroSprite"
import Reveal from "./RevealText"

function App() {
  return (
    <>
    <div className="*:h-dvh *:w-full">
      <div className="flex justify-center items-center">
        <Reveal className="text-center text-9xl">
            Lawrence
        </Reveal>
      </div>
      <IconCloud iconSlugs={
        ["wix", 
          "react", 
          "typescript", 
          "python", 
          "godot", 
          "github", 
          "godotengine", 
          "dotnet",
          "git",
          "java",
          "c",
          "leagueoflegends",
          "tailwindcss",
          "html5",
          "css3",
          "javascript",
          "trello",
          "jira",
          "unity",
          "csharp",
          "cplusplus",
          "linux",
          "dota2",
          "ubuntu",
          "flask"
        ]}></IconCloud>
        <HeroSprite></HeroSprite>
        <CustomCursor></CustomCursor>
    </div>
    </>
  )
}

export default App
