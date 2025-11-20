import { Link } from "@heroui/link";
//import { Snippet } from "@heroui/snippet";
//import { Code } from "@heroui/code";
//import { button as buttonStyles } from "@heroui/theme";

//import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
//import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
//import modelEx1 from "../assets/1761668175.png"
import modelEx2 from "../assets/polabeck1.webp"
import modelEx3 from "../assets/1758621292.png"
//import modelEx4 from "../assets/Screenshot_2025-08-27_at_6.37.40_PM.webp"
import imgIndustry1 from "../assets/1761669487.png"
import ScrollToContent from "@/components/ScrollContent";
import vid1 from '../assets/dale_movimiento.mp4'

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <video src={vid1} autoPlay loop muted className="w-full object-cover relative">
  </video>
         {/* Texto encima */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
    <div className="inline-block max-w-lg">
      <span className={title({ color: "violet"})}>BRILLIEM,&nbsp;</span>
      <span className={title({ color: "white"})}>Make&nbsp;</span>
      <span className={title({ color: "violet" })}>from&nbsp;</span>
      <span className={title({ color: "white"})}>your imagination&nbsp;</span>
      <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
      <br />
      <span className={title({ color: "white"})}>experiences.</span>
      <div className={subtitle({ class: "mt-4", color: "white" })}>
        Beautiful, fast and modern model company.
      </div>
    </div>
  </div>

  {/* Botón centrado en el bottom de la imagen */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
    <ScrollToContent targetId="contenido" />
  </div>
        
        {/*<div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>*/}
      </section>
       <Link href="/models">
       <section id="contenido" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        
          <img className="p-0" src={modelEx2} alt="ex model 2" />
<div className="absolute inline-block max-w-lg text-center">
  <span className={title({ color: "violet" })}>Discover&nbsp;</span>
  <span className={title({ color: "white" })}>our&nbsp;</span>
  <span className={title({ color: "violet" })}>amazing&nbsp;</span>
  <br />
  <span className={title({ color: "white" })}>models.</span>
  <div className={subtitle({ class: "mt-4", color: "white" })}>
    Explore our diverse portfolio of talented models, ready to bring your vision to life.
  </div>
</div>
      </section>
      </Link>
      

      <Link href="/spaces">
       <section id="contenido" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          
          <img className="p-0" src={modelEx3} alt="ex model 2" />
<div className="absolute inline-block max-w-lg text-center">
  <span className={title({ color: "violet" })}>convert&nbsp;</span>
  <span className={title({ color: "white" })}>your&nbsp;</span>
  <span className={title({ color: "violet" })}>spaces&nbsp;</span>
  <br />
  <span className={title({ color: "white" })}>into experiences.</span>
  <div className={subtitle({ class: "mt-4", color: "white" })}>
    Transform your spaces into unforgettable experiences with our expert model services.
  </div>
  
</div>
      </section>
      </Link>

      <Link href="/industry">
  <section id="contenido" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    <img className="p-0" src={imgIndustry1} alt="ex industry 1" />
    <div className="absolute max-w-lg text-center">
      <span className={title({ color: "violet" })}>Transform&nbsp;</span>
      <span className={title({ color: "white" })}>your&nbsp;</span>
      <span className={title({ color: "violet" })}>industry&nbsp;</span>
      <br />
      <span className={title({ color: "white" })}>with AI solutions.</span>
      <div className={subtitle({ class: "mt-4", color: "white" })}>
        Revolutionize your industry with our cutting-edge AI solutions, driving innovation and efficiency like never before.
      </div>
    </div>
  </section>
</Link>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
  {/* Contenido original como introducción */}
  <div className="text-center max-w-3xl mx-auto mb-12">
    <span className={title()}>
      Brilliem, experts in AI avatars and spaces
    </span>
    <span className={subtitle({ class: "mt-4 block" })}>
      We are a leading company specializing in creating stunning AI-generated avatars and transforming spaces into captivating environments. Our team of experts leverages cutting-edge technology to bring your vision to life, whether it's crafting lifelike digital personas or redesigning physical spaces for maximum impact. At Brilliem, we are committed to delivering innovative solutions that exceed expectations and inspire awe.
    </span>
  </div>

  {/* Grid de tres columnas para las ventajas */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {/* Ventaja 1: Más Rápido */}
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
      <div className="mb-4">
        {/* Placeholder para ícono */}
        <svg
          className="w-12 h-12 mx-auto text-violet-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <h3 className={title({ class: "text-xl mb-2" })}>Faster</h3>
      <p className={subtitle({ class: "text-gray-600 dark:text-gray-300" })}>
        Our AI-driven processes significantly reduce the time required to create high-quality avatars and transform spaces, allowing you to launch projects faster and stay ahead of the competition.
      </p>
    </div>

    {/* Ventaja 2: Mejor Calidad */}
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
      <div className="mb-4">
        <svg
          className="w-12 h-12 mx-auto text-violet-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </div>
      <h3 className={title({ class: "text-xl mb-2" })}>Higher Quality</h3>
      <p className={subtitle({ class: "text-gray-600 dark:text-gray-300" })}>
        We utilize advanced AI algorithms to ensure that every avatar and space transformation meets the highest standards of quality, delivering visually stunning and engaging results that captivate your audience.
      </p>
    </div>

    {/* Ventaja 3: Más Personalizable */}
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
      <div className="mb-4">
        <svg
          className="w-12 h-12 mx-auto text-violet-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <h3 className={title({ class: "text-xl mb-2" })}>More Customizable</h3>
      <p className={subtitle({ class: "text-gray-600 dark:text-gray-300" })}>
       AI enables precise customization of ads for specific audiences, adapting messages, styles, and formats to maximize engagement and relevance.
      </p>
    </div>
  </div>
</section>



{/*<Link href="/logos">
       <section id="contenido" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        
          <img className="p-12" src={modelEx4} alt="ex model 2" />
<div className=" inline-block max-w-lg text-center">
  <span className={title({ color: "yellow" })}>Craft&nbsp;</span>
  <span className={title()}>your&nbsp;</span>
  <span className={title({ color: "yellow" })}>unique&nbsp;</span>
  <br />
  <span className={title()}>brand identity.</span>
  <div className={subtitle({ class: "mt-4"})}>
    Elevate your brand with our expert logo design services, creating a unique identity that resonates with your audience.
  </div>
</div>
      </section>
      </Link>*/}

      
    </DefaultLayout>
  );
}
