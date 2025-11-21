"use client";

import { useEffect, useState } from "react";
import PorscheScene from "@/app/components/HeroBG/PorscheScene";
import WebhookTrigger from "@/app/webhook_trigger";
import DynamicText from "@/components/kokonutui/dynamic-text";

export default function Home() {
  const [showDynamic, setShowDynamic] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDynamic(false);
    }, 6000); // 6 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-purple-300/70 via-white/80 to-transparent">

      {/* DynamicText on top initially */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
          showDynamic ? "opacity-100 z-20" : "opacity-0 z-0"
        }`}
      >
        <DynamicText />
      </div>

      {/* PorscheScene shows AFTER */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          showDynamic ? "opacity-0 z-0" : "opacity-100 z-10"
        }`}
      >
        <PorscheScene />
        <WebhookTrigger />
      </div>

    </div>
  );
}
