import Hero from "@/components/Hero";
import { Tool } from "@/components/Tool";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex  flex-col items-center justify-between p-24">
        <h1 className="text-8xl text-center text-muted-foregroun text-semibold">
          Service catalog App Market  Online Stores
        </h1>
         <span className="text-muted-foreground text-xl my-4">
          Create Your eCommerce Website With Wix and Generate More Traffic with Built-In SEO Tools.
         </span>
        <div className="flex gap-5 p-4 my-4 py-3">
         <Tool />
        </div>

      </main>
      <Hero />
    </div>


  );
}
