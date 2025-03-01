import BlogPosts from "@/components/BlogPosts";
import Hero from "@/components/Hero";
import TrendingTags from "@/components/TrendingTags";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <TrendingTags />
      <BlogPosts />
    </div>
  );
}
