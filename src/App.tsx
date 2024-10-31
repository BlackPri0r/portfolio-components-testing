import { motion } from "framer-motion"
import CustomCursor from "./CustomCursor"
import IconCloud from "./DynamicIconCloud"
import HeroSprite from "./HeroSprite"

function App() {
  return (
    <>
    <CustomCursor></CustomCursor>
    <div className="*:h-dvh *:w-full">
      <div className="flex justify-center items-center">
          <motion.div 
            className="text-center text-9xl"
            variants={{
              hidden: {opacity: 0, y: 75},
              visible: {opacity: 1, y: 0}
            }}
            transition={{
              duration: 0.5,
              delay: 0.25
            }}
            initial="hidden"
            animate="visible"
          >
            LAWRENCE
          </motion.div>
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
    </div>
    </>
  )
}

export default App
