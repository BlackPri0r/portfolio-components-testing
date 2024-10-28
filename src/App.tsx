import CustomCursor from "./CustomCursor"
import IconCloud from "./DynamicIconCloud"
import HeroSprite from "./HeroSprite"

function App() {
  return (
    <>
    <CustomCursor></CustomCursor>
    <div className="*:h-dvh *:w-full">
      <div className="flex justify-center items-center">
          <p className="text-center text-9xl">LAWRENCE</p>
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
