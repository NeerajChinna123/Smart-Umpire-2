import Header from "@/components/Header";
import Banner from "@/containers/Banner";
import AfterEffectsVideo from "../components/AfterEffects";
import { BannerType, FitZoneType } from "../../typings";
import Nav from "@/components/Nav";
import RunoutPrediction from "@/containers/RunoutPrediction";
import Footer from "@/containers/Footer";

export interface propsData {
  banner: [BannerType];
  fitZone: [FitZoneType];
}

const Main = (props: propsData) => {
  return (
    //@ts-ignore
    <div className="relative">
    {/* @ts-ignore */}
      <div className="relative">
        {/* @ts-ignore */}
        <div className="h-screen bg-white">
          <AfterEffectsVideo />
          {/* @ts-ignore */}
        </div>
        {/* @ts-ignore */}
      </div>
      {/* @ts-ignore */}
      <main className="bg-white min-h-screen">
        {/* @ts-ignore */}
        <div className="">
          {/* <Header /> */}
          {/* @ts-ignore */}
        </div>
        {/* @ts-ignore */}
        <div className="">
          {/* <Banner bannerData={props?.banner} /> */}
          {/* <PersonalAiTrainer fitZone={props?.fitZone}  /> */}
          {/* @ts-ignore */}
        </div>
        {/* @ts-ignore */}
        <div>
          {/* @ts-ignore */}
          {/* <RunoutPrediction /> */}
          {/* @ts-ignore */}
        </div>
        {/* @ts-ignore */}
        
        {/* @ts-ignore */}
      </main>
      {/* <div className="max-w-7xl ml-1 lg:mx-auto flex flex-row justify-center">
        <Nav />
      </div> */}
      {/* <div className="  max-w-7xl  lg:mx-auto  ">
        <AudioComponent />
      </div> */}
      {/* @ts-ignore */}
    </div>
  );
};

export default Main;
