import BlogPosts from "@/components/BlogPosts";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TrendingTags from "@/components/TrendingTags";
import BlogPostsTest from "@/components/BlogPostsTest";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <TrendingTags />
      {/* <BlogPosts /> */}
      <BlogPostsTest />
    </div>
  );
}
