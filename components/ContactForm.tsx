import { Fan } from "lucide-react";
import FancyButton from "./FancyButton";

export default function ContactForm() {
  return (
    <section className="w-full flex flex-col md:flex-row items-start justify-between gap-10 py-20 px-4 md:px-10">
      {/* Left side */}
      <div className="flex flex-col w-full md:w-1/2 gap-6">
        <div>
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-500 mt-2 max-w-md">
            We'd love to hear from you. Reach out for any questions or collab ideas.
          </p>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-xl hover:text-blue-600 transition"
          >
            <i className="ri-linkedin-box-fill text-3xl"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="text-xl hover:text-blue-600 transition"
          >
            <i className="ri-facebook-circle-fill text-3xl"></i>
          </a>
        </div>

        <div className="w-full h-px bg-gray-300 mt-6"></div>
      </div>

      {/* Right side form */}
      <div className="w-full md:w-1/2 bg-gray-100 rounded-3xl p-8 shadow-sm">
        <h3 className="text-2xl font-semibold mb-6">Fill out the form</h3>

        <form className="flex flex-col gap-6">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none py-2"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none py-2"
            />
          </div>

          {/* Subject */}
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none py-2"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              placeholder="Message"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none py-2 h-28 resize-none"
            ></textarea>
          </div>
            <FancyButton buttonText="Send Message" />
        </form>
      </div>
    </section>
  );
}
