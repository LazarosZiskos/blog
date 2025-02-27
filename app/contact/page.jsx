"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await emailjs.send(
        "service_aqzl9ex",
        "template_z58t6og",
        formData,
        "migjzLj3AagNKs3DR"
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <section className="mt-[64px] mb-[64px] border-b pb-[64px] text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Feel Free to <span className="text-primary">Contact</span> Me!
      </h2>
      <div className="flex flex-col container">
        <p className="text-gray-400 font-bold text-sm pb-10">
          Feel free to reach out with any thoughts, ideas, or collaborations.{" "}
          <br />
          Whether it's tech talk, travel tips, or just a friendly chat—I'm all
          ears!
        </p>
      </div>
      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:text-black"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 text-black"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primary/80 text-white p-3 rounded-lg hover:bg-primary transition duration-300 font-bold"
          >
            Send Message
          </button>
        </form>
        {status && (
          <p className="mt-3 text-center text-sm text-gray-700">{status}</p>
        )}
      </div>
    </section>
  );
};

export default page;
