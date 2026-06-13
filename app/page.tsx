import Link from "next/link";

export default function Home() {

  return (
    <section
      id="about-me"
      className="intro-text max-w-3xl mx-auto text-center text-gray-700 px-4 py-1"
    >
      <h2 className="section-header text-2xl md:text-3xl font-bold text-purple-900 my-4">
        About Me
      </h2>

      <p className="self-description my-info text-lg md:text-xl space-y-4">
        {`As a full stack software engineer, I build and maintain scalable, modern web applications across the full development lifecycle. After completing the University of Pennsylvania's Full Stack Web Development program, I've worked on enterprise modernization projects at Concorde, Inc., developed logistical applications for the U.S. Navy's NAVSUP Business Systems Center, and delivered custom technical solutions as a freelance developer. My work spans technologies like React, Node.js, Express, GraphQL, and WordPress, with deployments across Docker, AWS, and Azure. I'm passionate about improving performance, accessibility, and user experience, and I thrive in collaborative, agile environments focused on delivering reliable, maintainable software.`}
      </p>

      <h2 className="section-header text-2xl md:text-3xl font-bold text-purple-900 mt-8 mb-4">
        Resume
      </h2>

      <div className="mt-4 space-y-4">
        <p>I invite you to learn more about my experience and skills!</p>
        <div className="links-container flex flex-col sm:flex-row items-center justify-center">
          <Link
            id="download-resume"
            href="https://docs.google.com/document/export?format=txt&id=1gwYNMpDvR7mwU4Usuqo5Eq1bl4gdmNCJHpY-1So33Vw"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto h-10 px-4 rounded-lg bg-fuchsia-700 text-white inline-flex items-center justify-center"
          >
            Download my resume!
          </Link>

          <Link
            id="open-google-docs"
            href="https://docs.google.com/document/d/1gwYNMpDvR7mwU4Usuqo5Eq1bl4gdmNCJHpY-1So33Vw/view"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto h-10 px-4 rounded-lg bg-fuchsia-700 text-white inline-flex items-center justify-center"
          >
            Open in Google Docs
          </Link>
        </div>

        <div
          id="iframe-container"
          className="w-full max-w-4xl mx-auto overflow-hidden rounded-xl border border-fuchsia-200 shadow-sm aspect-[3/4] sm:aspect-[8.5/11]"
        >
          <iframe
            className="w-full h-full"
            src="https://docs.google.com/document/d/e/2PACX-1vRZKTDkEFMaIs47oLeMRDUVZU1jaWY_oTowjqWj4hVip4r2nn3UkI5z8vUAX6Ow6EUTMyHfDNz7U8yB/pub?embedded=true"
            title="Mia Ciasullo resume"
          >
            Loading Resume…
          </iframe>
        </div>
      </div>
    </section>
  );
}
