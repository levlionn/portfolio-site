import { getAllPosts } from "../../lib/api";
import BlogCard from "../blog/BlogCard";
import PostHero from "../blog/PostHero";
import Link from "next/link";
import CoolButton from "@/components/CoolButton";

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const recentPosts = posts.slice(0, 2);

  return (
    <div className="container mx-auto px-5">
      <main>
        <h2 className="text-4xl font-extrabold mb-4">My latest article</h2>

        <PostHero />

        <div className="h-6"></div>

        {/* <p className="text-3xl mb-6">Recent Posts</p>
        <div className="grid md:grid-cols-2 grid-cols-1 mx-auto md:gap-32 gap-8">
          {recentPosts.map((post) => (
            <div key={post.title}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
        <div className="h-16"></div> */}
        {/* <Link
          href="/blog"
          className="text-3xl hover:text-gray-300 hover:underline"
        >
          Read More{" -> "}
        </Link> */}
        <CoolButton
          href="/blog"
          btnLabel="Read More"
          btnwidth="full"
          textSize="md"
        />
      </main>
    </div>
  );
}
