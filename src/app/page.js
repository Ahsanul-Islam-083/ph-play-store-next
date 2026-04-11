import Banner from "@/components/homepage/Banner";
import Stats from "@/components/homepage/Stats";
import Image from "next/image";
import { DiVim } from "react-icons/di";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Stats/>
    </div>
  );
}
