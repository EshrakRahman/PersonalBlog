import { Nav } from "../components/nav/index";
import { HomeHeader, HomeLatestArticle } from "../components/home";
import { Footer } from "../components/common/index";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="mx-5 lg:max-w-[780px] lg:mx-auto max-w-full">
        <div className="border-l border-r border-neutral-200 px-3 bg-neutral-0">
          <HomeHeader />
          <HomeLatestArticle />
          <Footer />
        </div>
      </div>
    </>
  );
}
