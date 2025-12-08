import { Nav } from "../components/nav";
import { Footer } from "../components/common";
import { NewsletterContent } from "../components/newsletter";

export default function Newsletter() {
  return (
    <>
      <Nav />
      <div className="mx-5 lg:max-w-[780px] lg:mx-auto max-w-full">
        <div className="border-l border-r border-neutral-200 px-3 bg-neutral-0 ">
          <NewsletterContent />
          <Footer />
        </div>
      </div>
    </>
  );
}
