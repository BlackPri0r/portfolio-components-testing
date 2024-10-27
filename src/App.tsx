import IconCloud from "./DynamicIconCloud"
import HeroSprite from "./HeroSprite"
import InteractiveDragon from "./InteractiveDragon"

function App() {
  return (
    <>
    <div className="*:h-dvh *:w-full">
      <InteractiveDragon></InteractiveDragon>
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
