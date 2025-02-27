import BlogPosts from "@/components/BlogPosts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
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
