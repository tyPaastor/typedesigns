import { Project } from "@/interfaces/project";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Project[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <div className="mb-20">
      </div>

      {/* Masonry layout starts here */}
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6 mb-32">
        {posts.map((post) => (
          <div key={post.slug} className="break-inside-avoid">
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}