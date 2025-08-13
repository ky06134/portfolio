import MediaCarousel from "@/app/ui/mediaCarousel";
import Tools from "@/app/ui/tools";

export default function Sssync() {

  const tools = ["react", "git", "github", "linear", "Figma"]

  const media = [
    {
      id: 1,
      type: 'youtube' as const,
      src: 'https://www.youtube.com/embed/k_Ip3h0agso',
    },
    {
      id: 2,
      type: 'image' as const,
      src: "/portfolio/sssyncLanding.png",
    },
    {
      id: 3,
      type: 'image' as const,
      src: '/portfolio/sssyncCore.png',
    },
  ];

  return (
    <div className="mb-15 md:mb-40">
      <div className="flex flex-col items-center justify-center bg-green-50 md:px-20 p-5 md:py-20 py-10">
        <div className="font-bold md:text-4xl md:pb-5 pb-1 text-black text-2xl">Sssync</div>
        <div className="text-black md:text-xl text-sm text-center">Say goodbye to stockouts & extra inventory. Seamlessly sync inventory across Shopify, Square, Clover, Amazon, and a network of local partners. Keep your stores stocked, partner with local stores, automate orders/fulfillment, all while saving time & money.</div>
      </div>
      <MediaCarousel media={media} />
      <div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          What it does
        </div>
        <div className="px-5 lg:mx-40">SSSync offers powerful multi-platform inventory synchronization, allowing merchants to seamlessly connect and sync real-time inventory across Shopify, Square, Amazon, and Clover, with more platforms on the way. Its Shopify inventory widget displays real-time partner inventory availability without revealing exact counts, enhancing transparency while maintaining privacy. Through inventory sharing and automated order routing, users can seamlessly fulfill orders from partner stores when stock runs low. </div>
        <div className="px-5 pt-5 lg:mx-40">The platform also plans to feature an inventory marketplace where businesses can buy and sell excess stock, complete with merchant ratings and support for nearby and perishable goods. Automated partnerships handle contracts, logistics, and payouts, freeing up time for growth. All activity is managed through a unified dashboard that consolidates orders, fulfillment, and analytics across an entire network.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Role
        </div>
        <div className="px-5 lg:mx-40">My role in this project is both Project Manager and Frontend Engineer. This includes discussing and developing the layout of each page, modal, and smaller components like text, buttons, loading screens, and color schemes. All tasks are logged by me on Linear (our project board), and we have weekly meetings to discuss the app’s progress.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Accomplishments
        </div>
        <div className="px-5 lg:mx-40">The app is currently still in development, and we are working toward releasing version 0 in the near future. So far, we have a functioning frontend, backend, and database, with most pages and modals implemented. We are still working on some features, such as autofill functionality, which will be completed soon. Overall, working on this project has helped me further develop my skills in app development—particularly using React Native. This includes learning how to improve performance and optimize for mobile displays.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Challenges
        </div>
        <div className="px-5 lg:mx-40">This app is one of the more complex projects I have worked on, especially when it comes to managing our workload as a small team. As a solution, we created a project board to manage all tasks, which has helped alleviate challenges related to workload distribution, goal-setting, and overall efficiency. </div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Tools Used
        </div>
        <div className="flex flex-row items-center px-5 lg:mx-40">
          <Tools strings={tools} />
        </div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Resources
        </div>
        <ul className="px-10 lg:mx-40 hover:text-blue-400 list-disc">
          <li>
            <a href="https://www.sssync.app/" target="_blank">Sssync Landing page</a>
          </li>
        </ul>
      </div>
    </div>
  );
}