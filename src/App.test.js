import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Image from "next/image";
import bgImage from "/hoodmoddededited.png";

export default function TBHoodLanding() {
  useEffect(() => {
    document.title = "TB Hood - Roblox Game";
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-yellow-700 via-gray-900 to-black text-white flex flex-col justify-center items-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 z-0">
        <Image
          src={bgImage}
          alt="TB Hood Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold tracking-widest text-yellow-400 drop-shadow"
        >
          TB HOOD
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 max-w-xl text-lg md:text-xl text-gray-200"
        >
          Dive into the gritty streets of TB Hood. Your crew, your rules. Join now on Roblox.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8"
        >
          <a href="https://www.roblox.com/games/YOUR-GAME-ID-HERE" target="_blank" rel="noopener noreferrer">
            <Button className="text-lg px-8 py-4 rounded-2xl shadow-lg bg-yellow-400 text-black hover:bg-yellow-300 transition">
              Play Now
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}