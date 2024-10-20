import IconCloud from "./DynamicIconCloud"
import HeroSprite from "./HeroSprite"


function App() {
  return (
    <>
      <div className="flex justify-center items-center ">
          <p className="text-center pt-20">hello</p>
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
    </>
  )
}

export default App
