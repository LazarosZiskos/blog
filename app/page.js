import BlogPosts from "@/components/BlogPosts";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TrendingTags from "@/components/TrendingTags";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <TrendingTags />
      <BlogPosts />
    </div>
  );
}
