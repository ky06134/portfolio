import MediaCarousel from "@/app/ui/mediaCarousel";
import Tools from "@/app/ui/tools";

export default function Hack8() {

    const tools = ["javafx", "git", "github"]

    const media = [
        {
            id: 1,
            type: 'image' as const,
            src: "/portfolio/hack7project.png",
        },
    ];

    return (
        <div className="mb-15 md:mb-40">
            <div className="flex flex-col items-center justify-center bg-purple-50 md:px-20 p-5 md:py-20 py-10">
                <div className="font-bold md:text-4xl md:pb-5 pb-1 text-black text-2xl">Run The World</div>
                <div className="text-black md:text-xl text-sm text-center">A choice-based Java game where players manage the economy, environment, and society through impactful decisions, exploring humanity’s relationship with the world.</div>
            </div>
            <MediaCarousel media={media} />
            <div>
                <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
                    What it does
                </div>
                <div className="px-5 lg:mx-40">This choice-based game challenges players to manage three key societal resources: the economy, the environment, and social stability. Each round presents a yes-or-no decision related to events or crises, and the player's choices dynamically impact these resources. Additionally, maintaining a good public image is critical—if it declines too much, higher authorities will override your decisions. The game explores the tension between environmental responsibility and societal survival, encouraging reflection on humanity’s role in global sustainability.</div>
                <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
                    Role
                </div>
                <div className="px-5 lg:mx-40">I contributed to the design and implementation of the game interface using JavaFX and FXML. My focus was on frontend interaction, helping structure the game's layout and logic so users could clearly understand the decisions they were making and how those choices affected various outcomes. I also collaborated closely with teammates on gameplay balancing and helped debug user interaction flow throughout development.</div>
                <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
                    Accomplishments
                </div>
                <div className="px-5 lg:mx-40">We successfully designed and built a fully functional game from scratch within just two days. Despite working under a tight deadline and learning new technologies on the fly, we were able to create a playable experience with meaningful choices and a working resource management system. We’re proud of not just building a game, but delivering one with a message and functional design.</div>
                <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
                    Challenges
                </div>
                <div className="px-5 lg:mx-40">A major challenge was agreeing on the final design while incorporating everyone’s input. Balancing creative ideas with practical implementation required compromise and strong communication. Additionally, most of the team was new to GUI development, and working with JavaFX came with a steep learning curve that we had to overcome quickly to meet the deadline.</div>
                <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
                    Tools Used
                </div>
                <div className="flex flex-row items-center px-5 lg:mx-40">
                    <Tools strings={tools} />
                </div>
                <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
                    Resources
                </div>
                <ul className="px-10 lg:mx-40 list-disc">
                    <li>
                        <a className="hover:text-blue-400" href="https://devpost.com/software/run-the-world-2v8wcr" target="_blank">DevPost Link</a>
                    </li>
                    <li>
                        <a className="hover:text-blue-400" href="https://github.com/epham001/RunTheWorldProject" target="_blank">GitHub Repo</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}