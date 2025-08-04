import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/api";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import BackButton from "@/app/_components/back-button";

export default async function ProjectPage(props: Params) {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return notFound();
  }

  const content = project.content;

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32 mt-10">

          <div className="mb-10">
            <h1 className="text-3xl tracking-tight">{project.title}</h1>
            <p className="italic text-sm text-neutral-400">{project.excerpt}</p>
          </div>

          <PostBody content={content} />
          
          <div className="mb-10"></div>
          <BackButton />
    
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getProjectBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | by Typedesigns`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllProjects();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
