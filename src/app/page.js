import Banner from "@/components/homepage/Banner";
import Stats from "@/components/homepage/Stats";
import TrendingApps from "@/components/homepage/TrendingApps";
import Image from "next/image";
import { DiVim } from "react-icons/di";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Stats/>
      <TrendingApps/>
    </div>
  );
}
