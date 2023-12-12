export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 px-5">
      <h2 className="text-3xl sm:text-4xl font-secondary font-bold text-center text-slate-100 mb-4">
        experience of my dev journey
      </h2>
      <p className="max-w-2xl mx-auto sm:text-lg text-center">
        I have gained skills with various technological tools throughout my
        journey as a developer. Through these skills, I have gained a
        competitive edge and the ability to work efficiently.
      </p>

      {/* Skill icons container */}
      <div className="mt-10">
        <div className="max-w-[400px] w-full aspect-square mx-auto rounded-full relative sm:animate-spin animation-duration-20">
          {/* Middle element */}
          <div className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl">
            <img
              className="w-14 h-14 shadow-[0px_0px_110px_10px_rgba(255,255,255,0.2)] rounded-xl animate-spin animation-duration-6"
              src="https://skillicons.dev/icons?i=react"
              alt="React icon"
            />
          </div>
          <div className="absolute cursor-pointer top-0 left-1/2 -translate-x-1/2">
            <img src="https://skillicons.dev/icons?i=mongodb" />
          </div>
          <div className="absolute cursor-pointer bottom-0 left-1/2 -translate-x-1/2">
            <img src="https://skillicons.dev/icons?i=nodejs" />
          </div>
          <div className="absolute cursor-pointer top-[54px] left-[54px]">
            <img src="https://skillicons.dev/icons?i=js" />
          </div>
          <div className="absolute cursor-pointer top-[54px] right-[54px]">
            <img src="https://skillicons.dev/icons?i=css" />
          </div>
          <div className="absolute cursor-pointer bottom-[54px] left-[54px]">
            <img src="https://skillicons.dev/icons?i=express" />
          </div>
          <div className="absolute cursor-pointer bottom-[54px] right-[54px]">
            <img src="https://skillicons.dev/icons?i=firebase" />
          </div>
          <div className="absolute cursor-pointer top-1/2 -translate-y-1/2 left-0">
            <img src="https://skillicons.dev/icons?i=tailwind" />
          </div>
          <div className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-0">
            <img src="https://skillicons.dev/icons?i=html" />
          </div>
        </div>
      </div>
    </section>
  );
}
