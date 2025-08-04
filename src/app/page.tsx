import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllProjects } from "@/lib/api";
import Header from "./_components/header";

export default function Index() {
  const allPosts = getAllProjects();

  return (
    <main>
      <Container>
        <Header />
          <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-4">
            <div className="md:col-span-4 flex flex-col justify-end">
              <h1 className="mb-4 max-w-full break-words text-3xl md:text-6xl">Design + Print + Signage</h1>
              
              <div className="flex flex-wrap gap-4 font-light text-lg">
                <a href="/information" className="inline-flex items-center gap-2 text-white hover:underline">
                  <span>Find out more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>

                </a>
                
                <a href="#projects" className="inline-flex items-center gap-2 text-white hover:underline">
                  <span>See our work</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                  </svg>

                </a>
              </div>
            </div>

            <div className="md:col-span-8 flex justify-end pb-8">
              <img
                src="/assets/images/homepage.gif"
                alt="Typedesigns projects show reel GIF"
                className="w-full max-w-[900px] h-auto object-contain"
              />
            </div>
          </div>

        <div id="projects"></div>

        {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      </Container>
    </main>
  );
}


