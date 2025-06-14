import React from "react";
import { Mail, Phone, Facebook } from "lucide-react";

const projects = [
  {
    title: "Social Media Management",
    description:
      "Successfully managed and grew Obobo Nigeria Ltd's social media presence, increasing engagement by 65% through strategic campaigns and community interaction.",
    tools: ["Meta Business Suite", "Canva", "Hootsuite"],
  },
  {
    title: "Web Design & Development",
    description:
      "Designed and deployed responsive company websites using WordPress and Elementor, optimizing for performance and mobile accessibility.",
    tools: ["WordPress", "HTML5", "CSS3", "Elementor"],
  },
  {
    title: "UI Design",
    description:
      "Created user-centered interfaces for internal platforms using Figma and Adobe XD, ensuring intuitive navigation and visual appeal.",
    tools: ["Figma", "Adobe XD"],
  },
  {
    title: "SEO & Digital Marketing",
    description:
      "Executed SEO strategies and marketing plans that improved website visibility by 40% on Google Search and boosted inbound leads by 30%.",
    tools: ["Google Analytics", "Ahrefs", "Yoast SEO"],
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Anejodoh Ojonimi Victor</h1>
          <p className="text-lg">Live Web Admin Portfolio</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2"><Mail size={18} /> Obobonigltd@gmail.com</p>
            <p className="flex items-center gap-2"><Phone size={18} /> +2348036814501 (WhatsApp)</p>
            <p className="flex items-center gap-2"><Facebook size={18} /> <a className="text-blue-600 underline" href="https://www.facebook.com/ItzzNimi" target="_blank">Facebook Profile</a></p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Highlighted Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow-md rounded-2xl p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-3 text-sm text-gray-700">{project.description}</p>
                <p className="text-sm font-medium text-gray-600">Tools: {project.tools.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}