import Image from "next/image";
import Banner from "./homeComponents/Banner";
import Feature from "./homeComponents/Feature";
import Course from "./homeComponents/Course";
import LifeAtInframe from "./homeComponents/LifeAtInframe";
import WhyChooseUs from "./homeComponents/WhyChooseUs";
import Testimonials from "./homeComponents/Testimonials";
import Subscribe from "./homeComponents/Subscribe";
import Schedule from "./homeComponents/Schedule";
import StudentSuccess from "./homeComponents/StudentSuccess";
import SliderBanner from "./homeComponents/SliderBanner";

export default function Home() {
  return (
    <div className="w-[100%] overflow-x-hidden">
      <SliderBanner />
      <Course />
      <Feature />
      <Schedule />
      <LifeAtInframe />
      <WhyChooseUs />
      <Testimonials />
      <Subscribe />
      <StudentSuccess />
    </div>
  );
}
