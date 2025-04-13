import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllProjects } from "@/lib/api";
import Header from "./_components/header";

export default function Index() {
  const allPosts = getAllProjects();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-4 flex flex-col justify-end">
            <h1>Design + Print + Signage</h1>
            <a href="/information" className="button-link">
              Find out more
              <img src="/assets/icons/arrow-top-right.svg" alt="Arrow Icon" className="icon"/>
            </a>
            <a href="" className="button-link">
              See our work
              <img src="/assets/icons/arrow-bottom-right.svg" alt="Arrow Icon" className="icon"/>
            </a>
          </div>
          <div className="md:col-span-8">
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          </div>
        </div>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
