"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

import {
  faDiscord,
  faFacebook,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { REGISTER_URL } from "@/configurations/constants";
import routes from "@/configurations/routes";

import Button from "@/components/Button";
import MobileNavigator from "@/components/MenuDrawer";
import SocialLink from "@/components/IconLink";

import iconImg from "@/assets/android-chrome-192x192.png";

// Common styles for edges
const EDGE_BASE_STYLE =
  "tw-border-t-[0.035em] tw-border-l-[0.035em] tw-border-red-400 tw-w-[0.125em] tw-h-[0.125em] tw-absolute";

// Edge components with rotation transformations
const EdgeCorners = () => (
  <>
    <div className={`${EDGE_BASE_STYLE} tw-top-0 tw-left-0`}></div>
    <div
      className={`${EDGE_BASE_STYLE} tw-top-0 tw-rotate-90 tw-left-auto tw-right-0`}
    ></div>
    <div
      className={`${EDGE_BASE_STYLE} tw-rotate-180 tw-bottom-0 tw-right-0`}
    ></div>
    <div
      className={`${EDGE_BASE_STYLE} tw-rotate-[270deg] tw-bottom-0 tw-left-0`}
    ></div>
  </>
);

// Looping word item
const LoopingWordItem = ({ children }: { children: string }) => (
  <li>
    <p className="tw-m-0">{children}</p>
  </li>
);

const Hero = () => {
  const hasOtherPages =
    routes.filter((route) => !route.disabled && route.path !== "/").length > 0;
  const registerStart = new Date("2025-05-11T00:00:00+08:00");
  const eventDate = new Date("2025-06-14T00:00:00+08:00");
  const currentDate = new Date();
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // GSAP animation for SVG
    const wordList = document.querySelector("[data-looping-words-list]");
    if (!wordList) return;
    const words = Array.from(wordList.children);
    const totalWords = words.length;
    const wordHeight = 100 / totalWords; // Offset as a percentage
    const edgeElement = document.querySelector("[data-looping-words-selector]");
    let currentIndex = 0;

    const updateEdgeWidth = () => {
      const centerIndex = (currentIndex + 1) % totalWords;
      const centerWord = words[centerIndex];
      const centerWordWidth = centerWord.getBoundingClientRect().width;
      const listWidth = wordList.getBoundingClientRect().width;
      const percentageWidth = (centerWordWidth / listWidth) * 100;
      gsap.to(edgeElement, {
        width: `${percentageWidth}%`,
        duration: 0.5,
        ease: "Expo.easeOut",
      });
    };
    const moveWords = () => {
      currentIndex++;
      gsap.to(wordList, {
        yPercent: -wordHeight * currentIndex,
        duration: 1.2,
        ease: "elastic.out(1, 0.85)",
        onStart: updateEdgeWidth,
        onComplete: function () {
          if (currentIndex >= totalWords - 3) {
            wordList.appendChild(wordList.children[0]);
            currentIndex--;
            gsap.set(wordList, { yPercent: -wordHeight * currentIndex });
            const shiftedWord = words.shift();
            if (shiftedWord) words.push(shiftedWord);
          }
        },
      });
    };

    updateEdgeWidth();
    gsap
      .timeline({ repeat: -1, delay: 1 })
      .call(moveWords)
      .to({}, { duration: 2 })
      .repeat(-1);
  }, { scope: container });

  return (
    <div className="tw-w-screen tw-bg-gradient-to-b tw-from-cyan-500 tw-via-yellow-50 tw-to-white">
      <div className="tw-w-full">
        <div className="tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-px-8 tw-pt-5 tablet:tw-pt-20">
          <div className="tw-w-full tw-rounded-md tw-border-x-2 tw-border-t-2 tw-border-none tw-border-white tablet:tw-border-solid">
            {/* Navigation section */}
            <div className="tw-flex tw-w-full tw-items-center tw-justify-between tw-px-5 tw-pb-14 tw-pt-8">
              <div className="tw-flex">
                <SocialLink icon={faDiscord} to="https://discord.gg/6MAkFrD" />
                <SocialLink
                  icon={faXTwitter}
                  to="https://twitter.com/intent/tweet?screen_name=sciwork&ref_src=twsrc%5Etfw"
                />
                <SocialLink
                  icon={faLinkedin}
                  to="https://tw.linkedin.com/company/sciwork"
                />
                <SocialLink
                  icon={faFacebook}
                  to="https://www.facebook.com/sciworkdev"
                />
              </div>
              {hasOtherPages && (
                <div className="tw-flex tw-items-center">
                  <MobileNavigator />
                </div>
              )}
            </div>

            {/* Main content */}
            <div className="tw-flex tw-w-full tw-flex-col tw-items-center tw-text-slate-800">
              {/* Logo and GSAP section - always horizontal layout */}
              <div className="tw-flex tw-w-full tw-items-center tw-justify-center tw-gap-8 tablet:tw-gap-20 tw-px-4 tablet:tw-px-8 tw-py-4 md:tw-py-8">
                {/* Logo */}
                <div className="tw-relative tw-flex tw-items-center tw-justify-center tw-flex-shrink-0">
                  <Image
                    src={iconImg}
                    alt="sciwork logo"
                    width={140}
                    height={140}
                    className="tw-w-32 tablet:tw-w-[160px]"
                  />
                </div>

                {/* GSAP animation */}
                <div className="tw-flex tw-flex-col tw-items-start">
                  <div
                    ref={container}
                    className="tw-relative tw-flex tw-items-center tw-justify-center"
                  >
                    <div className="tw-relative tw-z-10 tw-flex tw-items-center tw-justify-center tw-w-full tw-h-full">
                      <div className="tw-relative">
                        <div className="tw-h-[3em] tw-px-[0.1em] tw-text-4xl tablet:tw-text-5xl tw-leading-none tw-relative">
                          <div className="tw-w-full tw-h-full tw-relative tw-overflow-hidden">
                            <ul
                              data-looping-words-list=""
                              className="tw-font-yk tw-text-center tw-whitespace-nowrap tw-flex tw-flex-col tw-items-center tw-m-0 tw-p-0 tw-font-bold tw-list-none tw-relative"
                            >
                              <LoopingWordItem>sciwork</LoopingWordItem>
                              <LoopingWordItem>seminar</LoopingWordItem>
                              <LoopingWordItem>2025</LoopingWordItem>
                            </ul>
                          </div>
                          <div className="tw-pointer-events-none tw-w-full tw-h-full tw-absolute tw-top-0 tw-left-0"></div>
                          <div
                            data-looping-words-selector=""
                            className="tw-pointer-events-none tw-w-full tw-h-[1em] tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2"
                          >
                            <EdgeCorners />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event details */}
              <div className="tw-mt-4 tw-text-center tw-text-slate-800">
                <div className="tw-font-yk tw-text-2xl tablet:tw-text-3xl">
                  June 14th
                </div>
                <div className="tw-font-yk tw-text-2xl tablet:tw-text-3xl">
                  National Yang Ming Chiao Tung University
                </div>
              </div>

              {/* Sign up button */}
              {currentDate > registerStart && currentDate < eventDate && (
                <div className="tw-flex tw-pt-5">
                  <Button variant="action" to={REGISTER_URL} target="_blank">
                    Sign up now!
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
