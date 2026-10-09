
import React from 'react'

import bg from '../assets/images/firstpage_bg.png'
import banner from '../assets/images/banner.png'
import object from '../assets/images/object.png'

export default function Landing_Page() {
  return (
    <main
      id="home"
      className="relative isolate flex min-h-screen min-h-[100svh] w-full
        flex-col overflow-hidden bg-cover bg-center bg-no-repeat
        font-sans text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Background overlays — slightly brighter */}
      <div
        className="pointer-events-none absolute inset-0 z-0
    bg-gradient-to-r from-[#101d16]/70
    via-[#101d16]/35 to-[#101d16]/5"
      />

      <div
        className="pointer-events-none absolute inset-0 z-0
    bg-gradient-to-t from-[#101d16]/45
    via-transparent to-[#101d16]/15"
      />

      {/* Navigation */}
      <nav
        className="relative z-10 flex items-center justify-between
          border-b border-white/15 px-5 py-5
          sm:px-8 sm:py-6 lg:px-16"
      >
        <a
          href="#home"
          className="text-base font-semibold tracking-[0.22em]
            text-white transition-opacity hover:opacity-75 sm:text-lg"
        >
          BIOXTURE
        </a>

        <div
          className="hidden items-center gap-3 text-[9px]
            tracking-[0.2em] text-white/75 sm:flex"
        >
          <span
            className="h-2 w-2 rounded-full bg-[#b9d8a5]
              shadow-[0_0_12px_rgba(185,216,165,0.7)]"
          />
          AUTONOMOUS GROWING
        </div>

        <a
          href="#discover"
          className="group flex items-center gap-2
            text-[10px] tracking-[0.15em] text-white/85
            transition hover:text-white sm:gap-3 sm:text-xs"
        >
          DISCOVER
          <span
            className="transition-transform duration-300
              group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            ↗
          </span>
        </a>
      </nav>

      {/* Main Hero */}
      <section
        className="relative z-10 mx-auto flex w-full max-w-[1600px]
          flex-1 items-center px-5 py-10
          sm:px-8 sm:py-14 lg:px-[7%] lg:py-12
          xl:px-[9%]"
      >
        <div
          className="grid w-full min-w-0 grid-cols-1 items-center
            gap-8 sm:gap-10
            lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]
            lg:gap-8 xl:gap-14"
        >
          {/* LEFT: Brand and introductory content */}
          <div className="min-w-0">
            {/* Eyebrow */}
            <div
              className="flex items-center gap-3 text-[9px]
                font-medium tracking-[0.22em] text-white/75
                sm:text-[10px] sm:tracking-[0.25em]"
            >
              <span className="h-px w-7 bg-white/70 sm:w-8" />
              A PHILOSOPHY OF ABUNDANCE
            </div>

            {/* Sanskrit Shloka */}
            <h1
              className="mt-7 whitespace-nowrap
                text-[clamp(1.15rem,3.8vw,4rem)]
                font-medium leading-tight tracking-[-0.035em]
                text-white sm:mt-8"
            >
              अन्नं बहु कुर्वीत।
            </h1>

            {/* Transliteration */}
            <p
              className="mt-4 text-sm font-light italic
                tracking-[0.08em] text-white/85
                sm:mt-5 sm:text-base sm:tracking-[0.1em]"
            >
              Annam bahu kurvīta
            </p>

            {/* English Translation */}
            <p
              className="mt-2 text-xs font-light
                tracking-wide text-white/60 sm:text-sm"
            >
              Let us produce food abundantly.
            </p>

            {/* Supporting Text */}
            <p
              className="mt-5 max-w-lg text-xs leading-6
                text-white/75 sm:mt-6 sm:text-sm sm:leading-7"
            >
              Cultivating a better tomorrow through intelligent
              growing environments, thoughtful technology, and
              a deeper connection with nature.
            </p>

            {/* BIOXTURE Glass Banner */}
            <div
              className="group mt-7 w-full max-w-[440px] rounded-2xl
                border border-white/25 bg-white/[0.10] p-4
                shadow-[0_20px_60px_rgba(0,0,0,0.20)]
                backdrop-blur-xl transition duration-500
                hover:border-white/35 hover:bg-white/[0.14]
                sm:mt-8 sm:p-6"
            >
              {/* Panel Heading */}
              <div
                className="flex items-center justify-between
                  gap-3 border-b border-white/15 pb-3"
              >
                <span
                  className="text-[9px] uppercase
                    tracking-[0.18em] text-white/65"
                >
                  The BIOXTURE System
                </span>

                <span
                  className="flex items-center gap-2 text-[8px]
                    tracking-[0.1em] text-white/70 sm:text-[9px]"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full
                      bg-[#b9d8a5]
                      shadow-[0_0_8px_rgba(185,216,165,0.6)]"
                  />
                  GROW DIFFERENTLY
                </span>
              </div>

              {/* Logo Banner */}
              <div className="flex items-center justify-center py-5 sm:py-6">
                <img
                  src={banner}
                  alt="BIOXTURE — Autonomous Greenhouse System"
                  className="block h-auto w-full object-contain"
                />
              </div>

              {/* Panel Footer */}
              <div
                className="flex items-end justify-between
                  gap-4 border-t border-white/15 pt-3"
              >
                <div>
                  <p
                    className="text-[9px] uppercase
                      tracking-[0.2em] text-white/45"
                  >
                    Our vision
                  </p>

                  <p className="mt-1.5 text-sm font-light text-white/90">
                    Growing with purpose.
                  </p>
                </div>

                <span className="text-xl font-light text-white/45">
                  01
                </span>
              </div>
            </div>

            {/* Call to Action */}
            <div
              id="discover"
              className="mt-7 flex flex-col items-start gap-4
                sm:mt-8 sm:flex-row sm:items-center sm:gap-6"
            >
              <a
                href="#explore"
                className="group inline-flex items-center gap-6
                  rounded-full border border-white/50
                  bg-[#f5f5ef] px-6 py-3.5 text-xs
                  font-semibold text-[#263e30]
                  shadow-lg shadow-black/10 transition duration-300
                  hover:-translate-y-1 hover:bg-white"
              >
                Explore BIOXTURE

                <span
                  className="text-base transition-transform
                    duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>

              <span
                className="text-[9px] tracking-[0.18em] text-white/60"
              >
                ENGINEERED FOR NATURE
              </span>
            </div>
          </div>

          {/* RIGHT: Greenhouse Product */}
          <div
            className="relative flex min-w-0 items-center
              justify-center py-2 sm:py-4
              lg:justify-end lg:py-0"
          >
            {/* Ambient glow behind the product */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2
                h-56 w-56 -translate-x-1/2 -translate-y-1/2
                rounded-full bg-[#c9e6b6]/10 blur-3xl
                sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            />

            {/* Product Image — dullness applied only here */}
            <img
              src={object}
              alt="BIOXTURE autonomous greenhouse with a growing plant"
              loading="eager"
              fetchPriority="high"
              className="relative z-10 block h-auto
                w-[220px] max-w-full object-contain
                saturate-[0.85] brightness-[0.94] contrast-[0.96]
                drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]
                transition-transform duration-700
                hover:scale-[1.025]
                sm:w-[270px]
                md:w-[310px]
                lg:w-[min(30vw,340px)]
                xl:w-[360px]
                2xl:w-[380px]"
            />
          </div>
        </div>

        {/* Vertical Index */}
        <div
          className="pointer-events-none absolute right-5 top-1/2
            hidden -translate-y-1/2 text-[10px]
            tracking-[0.2em] text-white/55
            [writing-mode:vertical-rl] xl:block"
        >
          B / 001
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative z-10 flex flex-wrap items-center
          justify-between gap-x-5 gap-y-3 border-t border-white/15
          px-5 py-4 text-[8px] tracking-[0.12em]
          text-white/65 sm:px-8 sm:py-5 sm:text-[9px]
          lg:px-16"
      >
        <span>01 — INTELLIGENT CULTIVATION</span>

        <span className="hidden sm:block">
          PRECISION MEETS NATURE
        </span>

        <a
          href="#explore"
          className="transition-colors hover:text-white"
        >
          DESIGNED FOR TOMORROW ↗
        </a>
      </footer>
    </main>
  )
}
