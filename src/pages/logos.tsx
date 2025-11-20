import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import logoEx1 from "/Users/macagus/Documents/Brilliant/Brilliant-./img/1.webp"

export default function DocsPage() {
  return (<DefaultLayout>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <span className={title()}>B.</span>
        <img src={logoEx1} alt="ex 1 logo" />
      </div>
    </section>
  </DefaultLayout>)
}