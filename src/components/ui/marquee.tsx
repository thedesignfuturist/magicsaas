"use client";

import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: number; // 초 단위
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  speed = 20,
}: MarqueeProps) {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(0);

  // children이 여러 개일 때, 한 번에 두 번 렌더링하여 seamless loop
  React.useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, [children]);

  React.useEffect(() => {
    if (width === 0) return;
    if (isPaused) {
      controls.stop();
    } else {
      controls.start({
        x: reverse ? [ -width, 0 ] : [ 0, -width ],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        },
      });
    }
  }, [isPaused, controls, reverse, speed, width]);

  return (
    <div
      className={cn("relative flex w-full overflow-hidden", className)}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      style={{ height: "auto" }}
    >
      <motion.div
        className="flex flex-nowrap gap-6"
        animate={controls}
        ref={containerRef}
        style={{ x: 0 }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
} 