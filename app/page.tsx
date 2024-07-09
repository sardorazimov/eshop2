import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1 className="text-7xl text-center text-blue-600">
     Customers Trust With Multiple Layers 
     Service catalog: App Market, Mailboxes, Online Stores, 
     </h1>
     <div className="flex gap-5">
       <Button>Dashboard</Button>
       <Button>Product</Button>
     </div>
     <span className="text-muted-foreground text-xl">
     Create Your eCommerce Website With Wix and Generate More Traffic with Built-In SEO Tools.
     </span>
    </main>
    <Hero />
    </div>

    
  );
}
