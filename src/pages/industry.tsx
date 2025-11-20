import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import img1 from "../assets/IMG_3879.png"
import img2 from "../assets/1761669327.png"
import  ArrowIcon  from "../assets/1761672689-removebg-preview.png";
import vid1 from "../assets/genera_un_video_a_partir_de_estas_dos_imagenes_udt68r53va5xuutvx9ar_1.mp4"
import vid2 from "../assets/Image to video 丨 haz una transicion entre estos dos frames (online-video-cutter.com) (1).mp4"

export default function DocsPage() {
  return (
   <DefaultLayout>
  <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    <div className="inline-block max-w-lg text-center justify-center">
      <h1 className={title()}>Industry</h1>
    </div>

    {/* Contenedor de imágenes */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-0 max-w-lg text-center">
      <img src={img1} alt="Ex 1 industry" className="w-full lg:w-full md:w-84 object-contain" />
      <img src={ArrowIcon} alt="Arrow Icon" className=" w-12 h-12   transform rotate-90 md:rotate-0 object-contain" />
      <img src={img2} alt="Ex 2 industry" className="w-full  lg:w-full  md:w-84 object-contain" />
    </div>
    <div className="inline-block max-w-lg text-center justify-center pb-24 ">
      <span className={subtitle({ class: "mt-4" })}>Transform industrial spaces easily and quickly with Brilliem.</span>
    </div>

    
      <video src={vid1} autoPlay loop muted className="w-full  object-contain" />

    <div className="inline-block max-w-lg text-center justify-center pb-24">
      <span className={subtitle({ class: "mt-2" })}>From concept to reality in record time.</span>
    </div>
      <video src={vid2} autoPlay loop muted className="w-full object-contain" />
    <div className="inline-block max-w-lg text-center justify-center pb-24 ">
      <span className={subtitle({ class: "mt-4" })}>Create seamless transitions between different industrial designs. Brilliem makes it possible.</span>
    </div>

  </section>
</DefaultLayout>

  );
}
