// "use client";
// import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

import { BarLoader, HashLoader } from "react-spinners";
import AppCard from "../ui/AppCard";
import Link from "next/link";
// import useApps from "@/hooks/useApps";
// import { useLoaderData } from "react-router";

// const appsPromise = fetch("/data.json").then((res) => res.json());
const appsPromise = async () => {
  const res = await fetch("https://ph-play-store-next-j6bts0s0f-ahsanulislam083-4831s-projects.vercel.app/data.json",{
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

const TrendingApps = async ({ from }) => {

  const apps = await appsPromise();
  console.log(apps);
  

  //   const apps = use(appsPromise);
  //   console.log(apps, "apps");

  //   const data = useLoaderData();
  //   console.log(data, "data from homepage");

  // const { apps, loading } = useApps();

  // console.log(loading);


  return (
    <div className="container mx-auto my-[60px]">
      {/* Section header */}
      <div className="mb-8 text-center">
        <h2 className="font-bold text-4xl">{from === "homepage" ? "Trending apps" : "All Apps"}</h2>
        <p className="text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis eos laborum tempore quis hic quod cupiditate, consequuntur
        </p>
      </div>
      {/* {loading ? ( */}
      {/* <div className="flex justify-center items-center min-h-screen"> */}
      {/* <HashLoader color="#ad46ff" /> */}
      {/* <BarLoader color="#ad46ff" /> */}
      {/* <span className="loading loading-bars loading-xl text-primary"></span> */}
      {/* </div> */}
      {/* ) : ( */}
      <div className="grid grid-cols-3 gap-5">
        {apps.slice(0, from === "homepage" ? 9 : apps.length).map((app, ind) => {
          return <AppCard app={app} key={ind} />;
        })}
      </div>
      {/* )} */}

      <div className="text-center mt-4">
        <Link href={"/apps"}>
          <button className="btn bg-purple-500 text-white">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
