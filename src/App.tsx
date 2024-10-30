import CountdownCardContainer from "./components/CountdownCardContainer";
import SocialMediaContainer from "./components/SocialMediaContainer";

function App() {
  return (
    <main className="h-screen relative overflow-hidden">
      <div className="w-full pt-[142px] md:pt-[132px]">
        <h1 className="text-white text-center uppercase font-bold tracking-[7.5px] text-[22px] mb-[104px] z-20 relative">
          We're launching soon
        </h1>
        <CountdownCardContainer />
      </div>
      <img
        className="absolute bottom-0 md:translate-y-[25.94%] min-w-[971px] z-10 -right-1/3 md:right-0 md:left-0 w-full"
        src="/images/pattern-hills.svg"
        alt=""
      />
      <div className="absolute top-0 w-full h-[calc(100%-96px)] min-w-[1440px]">
        <img className="object-cover w-full h-full" src="/images/bg-stars.svg" alt="" />
      </div>
      <SocialMediaContainer />
    </main>
  );
}

export default App;
