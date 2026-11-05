
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Animate experience cards
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    // Reveal company logos when they enter the screen
    gsap.utils.toArray(".timeline-logo").forEach((logo) => {
      const cover = logo.querySelector(".logo-reveal-cover");
      const image = logo.querySelector("img");

      if (!cover || !image) return;

      gsap.set(image, { opacity: 0, scale: 0.8 });

      gsap.fromTo(
        cover,
        { scaleY: 1 },
        {
          scaleY: 0,
          duration: 0.9,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: logo,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(image, {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: logo,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Animate black timeline line on scroll
    gsap.utils.toArray(".timeline").forEach((line) => {
      gsap.fromTo(
        line,
        {
          scaleY: 1,
        },
        {
          scaleY: 0,
          ease: "none",
          scrollTrigger: {
            trigger: line.closest(".exp-card-wrapper"),
            start: "top 70%",
            end: "bottom 35%",
            scrub: true,
          },
        }
      );
    });

    // Animate experience text
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
           {expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div className="experience-company-logo">
                      <img src={card.logoPath} alt={card.company} />
                    </div>
                  </GlowCard>
                </div>

                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      {/* Company Logo with Reveal Animation */}
                      <div className="timeline-logo">
                        <img
                          src={card.logoPath}
                          alt={card.company}
                        />
                        <span className="logo-reveal-cover"></span>
                      </div>

                      {/* Experience Details */}
                      <div>
                        <h1 className="font-semibold text-3xl">
                          {card.title}
                        </h1>

                        <p className="text-blue-400 mt-2 font-medium">
                          {card.company} · {card.type}
                        </p>

                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>

                        <p className="text-[#839CB5] italic">
                          Responsibilities
                        </p>

                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-lg">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
