import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import spaceEx1 from "../assets/baduti_Ultra-luxury_alpine_chalet_interior_format_169_make_the__f854f7a4-19ec-4bf7-975f-1c05d9d9b71c.webp"
import spaceEx2 from "../assets/rashood0100_4_seater_urban_furniture_bird_friendly_integration._ed80c4e1-6035-4a90-be1f-a18748874b0a.webp"
import spaceEx3 from "../assets/maketherobotsmakeit_a_photograph_of_a_pair_of_green_over-hear_h_40cc3a87-5f13-4a4b-b4be-a02bb8af5e8a.webp"
import spaceEx4 from "../assets/peteses420_stylized_psychedelic_illustration_of_St._Petersburg__b8dc5793-6d4a-4ca3-b2ca-a0a72ef8d57a.webp"

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Spaces</h1>
        </div>
        <img src={spaceEx1} alt="Ex 1 space" />
        <img src={spaceEx2} alt="Ex 2 space" />
        <img src={spaceEx3} alt="Ex 3 space" />
        <img src={spaceEx4} alt="Ex 4 space" />
      </section>
    </DefaultLayout>
  );
}
