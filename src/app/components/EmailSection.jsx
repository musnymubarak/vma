"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      } else {
        console.error("Failed to send message:", resData.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section id="contact" className="py-0 px-6 xl:px-20 relative">
      <h3
        className="text-5xl font-extrabold mb-08 text-center"
        style={{ color: "#484c54" }}
      >
        What People Say
        <span
          className="block mx-auto mt-3"
          style={{
            width: "100px",
            height: "5px",
            backgroundColor: "#e2b63d",
            borderRadius: "3px",
          }}
        />
      </h3>

      {/* Background Blur */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 -z-10 blur-lg absolute top-1/2 left-0 transform -translate-y-1/2 opacity-30" />

      {/* Testimonials */}
      <div className="z-10 space-y-6">
        <h6 className="text-3xl text-white font-bold text-center">What People Say</h6>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#484c54] p-6 rounded-xl shadow-lg text-base text-[#D1D5DB] min-h-[240px]">
            &ldquo;Musny is a highly motivated developer. He approached our project with outstanding clarity and exceeded all expectations. His ability to simplify complex problems made a huge impact on our team.&rdquo;
            <div className="mt-4 text-right text-sm" style={{ color: '#e2b63d' }}>— Alex T., Senior Product Manager</div>
          </div>
          <div className="bg-[#484c54] p-6 rounded-xl shadow-lg text-base text-[#D1D5DB] min-h-[240px]">
            &ldquo;Great communicator and a phenomenal coder. It&apos;s rare to find someone who&apos;s both technically skilled and an excellent collaborator. Musny is definitely someone I would work with again.&rdquo;
            <div className="mt-4 text-right text-sm" style={{ color: '#e2b63d' }}>— Priya S., Tech Lead</div>
          </div>
          <div className="bg-[#484c54] p-6 rounded-xl shadow-lg text-base text-[#D1D5DB] min-h-[240px]">
            &ldquo;Delivered pixel-perfect work with attention to detail that&apos;s hard to find. The results were not only beautiful but functionally robust. Truly a professional at every step.&rdquo;
            <div className="mt-4 text-right text-sm" style={{ color: '#e2b63d' }}>— Jordan M., UX Designer</div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-6 z-10 mt-16">
        {/* Left Side */}
        <div>
          <h5 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h5>
          <p className="text-[#ADB7BE] mb-6 max-w-md">
            I&apos;m currently exploring new opportunities. Whether you want to discuss a project, ask a question, or just say hello — my inbox is always open!
          </p>
          <div className="socials flex flex-row gap-4">
            <Link href="https://github.com/musnymubarak" target="_blank" rel="noopener noreferrer">
              <Image src="/github-icon.svg" alt="Github Icon" width={36} height={36} />
            </Link>
            <Link href="https://www.linkedin.com/in/musny-mubarak/" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin-icon.svg" alt="Linkedin Icon" width={36} height={36} />
            </Link>
            <Link href="https://web.facebook.com/profile.php?id=100009862128934" target="_blank" rel="noopener noreferrer">
              <Image src="/facebook.svg" alt="Facebook Icon" width={36} height={36} />
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div>
          {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-6">
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Message"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 text-lg font-semibold text-[#e2b63d] bg-[#14232b] rounded-full hover:bg-[#1e323d] transition duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
