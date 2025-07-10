"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function GithubRedirectCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="w-full h-fit max-w-sm overflow-hiddenshadow-lg transition-all duration-300 ease-in-out transform hover:scale-102 mt-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-8 flex flex-col items-center text-center">
        <div className="mb-6">
          <Heart
            className={`w-12 h-12 transition-colors duration-300 ease-out ${isHovered ? "text-red-500" : "text-muted-foreground"
              }`}
          />
        </div>
        <h2 className="font-heading text-xl tracking-tight lg:text-3xl duration-300">
          Like my work?
        </h2>
        <p className="mt-2 mb-4 font-heading text-lg text-muted-foreground">
          Check out my GitHub profile for more projects.
        </p>
        <div className="mb-4 text-sm text-muted-foreground">
          <div>
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:zudanga@gmail.com" className="underline hover:text-red-500 transition-colors">zudanga@gmail.com</a>
          </div>
          <div>
            <span className="font-semibold">Phone:</span>{" "}
            <a href="tel:+250785485889" className="underline hover:text-red-500 transition-colors">+250785485889</a>
          </div>
          <div>
            <span className="font-semibold">GitHub:</span>{" "}
            <a href="https://github.com/lcdamy" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-500 transition-colors">github.com/lcdamy</a>
          </div>
        </div>
        <Github className="w-10 h-10 text-muted-foreground mb-5" />
      </CardContent>
      <CardFooter className="px-8 pb-8 pt-0">
        <Link
          href={"https://github.com/lcdamy"}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full bg-transparent border-2 transition-all duration-300 py-6"
          )}
        >
          <span className="mr-2">My GitHub</span>
          <ExternalLink className="w-5 h-5" />
        </Link>
      </CardFooter>
      <div
        className={`h-1 bg-gradient-to-r from-red-500 to-red-500 transition-all duration-300 ease-out ${isHovered ? "opacity-100" : "opacity-0"
          }`}
      ></div>
    </Card>
  );
}
