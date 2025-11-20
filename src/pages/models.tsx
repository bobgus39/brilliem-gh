import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import modelEx1 from "../assets/polabeck_cineastic_picture_of_middle_aged_woman_standing_in_her_104c656d-979f-4f12-8116-7187b6a6e756.webp"
import modelEx2 from "../assets/polabeck_cineastic_picture_of_middle_aged_woman_standing_in_her_adc4e81f-b77d-4008-9a13-be624240706f.webp"
import modelEx5 from "../assets/vervor229384874_a_gorgeous_young_woman_at_sunrise_000bb261-4a95-41da-b748-a92c773d136a.webp"  

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Models</h1>
        </div>
        <img src={modelEx1} alt="ex 1 model" />
        <img src={modelEx2} alt="ex 2 model" />
        <img src={modelEx5} alt="ex 5 model" />
      </section>
    </DefaultLayout>
  );
}
