import ContactForm from "./contact-form";
import Image from "next/image";
import {
  SiBetterauth,
  SiCss,
  SiDaisyui,
  SiExpress,
  SiFirebase,
  SiFigma,
  SiHeroui,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const projects = [
  {
    name: "Task Flow dashboard",
    title: "Task Flow",
    description:
      "A project board with drag-and-drop tasks, filters and a clean overview of what’s due next.",
    tags: ["React", "Node.js", "CRUD API"],
    tone: "green",
  },
  {
    name: "Storefront",
    title: "Storefront",
    description:
      "A small online shop with product pages, a cart and an admin screen to manage inventory.",
    tags: ["Next.js", "MongoDB", "REST"],
    tone: "orange",
  },
  {
    name: "Your project here",
    title: "Your idea",
    description:
      "Have something in mind? I’d love to hear about it and help turn it into a working product.",
    tags: [],
    tone: "blue",
  },
];

const techGroups = [
  {
    name: "Frontend",
    technologies: [
      { name: "JavaScript", detail: "Everyday language", Icon: SiJavascript, color: "#f7df1e" },
      { name: "TypeScript", detail: "Typed JavaScript", Icon: SiTypescript, color: "#3178c6" },
      { name: "Next.js", detail: "Full-stack React framework", Icon: SiNextdotjs, color: "#101828" },
      { name: "React", detail: "Component-based interfaces", Icon: SiReact, color: "#61dafb" },
      { name: "CSS", detail: "Responsive styling", Icon: SiCss, color: "#663399" },
      { name: "Tailwind CSS", detail: "Utility-first CSS framework", Icon: SiTailwindcss, color: "#06b6d4" },
    ],
  },
  {
    name: "Backend",
    technologies: [
      { name: "Node.js", detail: "JavaScript server runtime", Icon: SiNodedotjs, color: "#5fa04e" },
      { name: "Express.js", detail: "Web framework and REST APIs", Icon: SiExpress, color: "#777" },
    ],
  },
  {
    name: "Design",
    technologies: [
      { name: "Figma", detail: "Interface and visual design", Icon: SiFigma, color: "#f24e1e" },
      { name: "Canva", detail: "Graphic design and content", Icon: CanvaIcon, color: "#00c4cc" },
    ],
  },
  {
    name: "UI",
    technologies: [
      { name: "daisyUI", detail: "Tailwind CSS component library", Icon: SiDaisyui, color: "#1ad1a5" },
      { name: "shadcn/ui", detail: "Reusable accessible components", Icon: SiShadcnui, color: "#101828" },
      { name: "HeroUI", detail: "React UI component library", Icon: SiHeroui, color: "#7828c8" },
    ],
  },
  {
    name: "Database",
    technologies: [
      { name: "MongoDB", detail: "Document database", Icon: SiMongodb, color: "#47a248" },
      { name: "Supabase", detail: "Postgres database platform", Icon: SiSupabase, color: "#3ecf8e" },
    ],
  },
  {
    name: "Authentication",
    technologies: [
      { name: "Better Auth", detail: "Authentication for web apps", Icon: SiBetterauth, color: "#171717" },
      { name: "Firebase", detail: "Authentication and app services", Icon: SiFirebase, color: "#ffca28" },
    ],
  },
];

function CanvaIcon() {
  return <Image src="/canva.svg" alt="" width={25} height={25} />;
}

function GithubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="github-icon"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.63 1.21 3.27.93.1-.72.39-1.21.71-1.49-2.47-.28-5.06-1.24-5.06-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.28-2.6 5.23-5.08 5.5.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header>
        <div className="wrap bar">
          <a className="logo" href="#top">
            mobarok<i>.dev</i>
          </a>
          <nav aria-label="Main">
            <a href="#projects">Projects</a>
            <a href="#arsenal">Tech arsenal</a>
            <a href="#contact" className="cta">
              Hire me
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <a
            className="btn hero-resume"
            href="/Mobarok_Hossen_Resume.pdf"
            download="Mobarok_Hossen_Resume.pdf"
          >
            Download resume
          </a>
          <div className="wrap hero-grid">
            <div>
              <h1>
                I build fast, clean <mark>web apps</mark> with JavaScript.
              </h1>
              <p>
                Hi, I’m Mobarok Hossen, a self-taught full-stack developer from
                Bangladesh. I’ve spent five years turning ideas into reliable
                products with Next.js, React, Node.js and MongoDB.
              </p>
              <div className="btns">
                <a className="btn primary" href="#projects">
                  See my work
                </a>
                <a className="btn" href="#contact">
                  Get in touch
                </a>
              </div>
            </div>
            <div className="hero-portrait">
              <Image
                src="/photo.png"
                alt="Mobarok Hossen"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="wrap">
            <h2>Projects</h2>
            <p className="lead">
              A few things I’ve built and shipped, from frontend to database.
            </p>
            <div className="projects">
              <article className="card feature">
                <a
                  className="feature-image"
                  href="https://the-open-shelf-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit The Open Shelf live website"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/open-shelf.jpg"
                    alt="Books displayed on shelves in The Open Shelf"
                    width="1200"
                    height="800"
                  />
                  <span>Visit live site <span aria-hidden="true">↗</span></span>
                </a>
                <div className="card-body">
                  <h3>The Open Shelf</h3>
                  <p>
                    A book-sharing app where readers list books, browse what
                    others have shared, and connect. Built with a separate
                    Next.js frontend and an Express API, with secure sign-in
                    handled by Better Auth.
                  </p>
                  <div className="tags">
                    {[
                      "Next.js",
                      "Express",
                      "MongoDB",
                      "Better Auth",
                      "Vercel",
                    ].map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      className="project-link"
                      href="https://github.com/mobarok6042/the-open-shelf-client"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon />
                      Frontend
                    </a>
                    <a
                      className="project-link"
                      href="https://github.com/mobarok6042/the-open-shelf-server"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon />
                      Backend
                    </a>
                  </div>
                </div>
              </article>
              {projects.map((project) => (
                <article className="card" key={project.name}>
                  <div className={`thumb ${project.tone}`}>{project.title}</div>
                  <div className="card-body">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.tags.length > 0 ? (
                        project.tags.map((tag) => <span key={tag}>{tag}</span>)
                      ) : (
                        <a href="#contact">Start a conversation</a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="arsenal-section" id="arsenal">
          <div className="wrap">
            <h2>Tech arsenal</h2>
            <p className="lead">
              The tools I reach for to build web products from end to end.
            </p>
            <div className="tech-groups">
              {techGroups.map((group) => (
                <article className="tech-group" key={group.name}>
                  <h3>{group.name}</h3>
                  <div className="tech-list">
                    {group.technologies.map(
                      ({ name, detail, Icon, color }) => (
                        <div className="tech-item" key={name}>
                          <span
                            className="tech-icon"
                            style={{ "--tech-color": color } as React.CSSProperties}
                          >
                            <Icon aria-hidden="true" />
                          </span>
                          <span className="tech-copy">
                            <strong>{name}</strong>
                            <small>{detail}</small>
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </article>
              ))}
            </div>
            <div className="soft">
              <em>How I work:</em>
              {[
                "Time management",
                "Adaptability",
                "Clear communication",
                "Honesty",
                "Hard work",
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="wrap">
            <h2>Let’s work together</h2>
            <p className="lead">
              Send a message and I’ll reply by email, or reach me directly using
              the details below.
            </p>
            <div className="contact">
              <ul className="links">
                <li>
                  <a href="mailto:mhossen0102@gmail.com">
                    <span className="contact-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <path
                          d="m4 6 8 7 8-7"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="contact-copy">
                      <small>Email</small>
                      mhossen0102@gmail.com
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/8801610102698"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="contact-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 8.5c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.6.7c.7 1.3 1.7 2.2 3 2.8l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.3.5 0 .6-.3 1.2-.7 1.5-.5.4-1.2.5-2 .3-1.1-.3-2.4-.9-3.7-2.1-1.4-1.2-2.2-2.6-2.5-3.7-.2-.9 0-1.6.4-2.2.2-.3.4-.4.6-.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span className="contact-copy">
                      <small>WhatsApp</small>
                      01610-102698
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mobarok0102/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="contact-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.4h2.67ZM7 8.23a1.55 1.55 0 1 1 .02-3.1A1.55 1.55 0 0 1 7 8.23ZM18.33 18h-2.66v-4.18c0-1-.02-2.28-1.39-2.28-1.4 0-1.61 1.09-1.61 2.21V18h-2.66V9.4h2.55v1.18h.04a2.8 2.8 0 0 1 2.51-1.38c2.69 0 3.19 1.77 3.19 4.07Z" />
                      </svg>
                    </span>
                    <span className="contact-copy">
                      <small>LinkedIn</small>
                      linkedin.com/in/mobarok0102
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <span className="contact-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M19 10.1c0 5-7 10.4-7 10.4S5 15.1 5 10.1a7 7 0 1 1 14 0Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="12"
                          cy="10"
                          r="2.3"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </span>
                    <span className="contact-copy">
                      <small>Location</small>
                      Sirajgonj, Bangladesh
                    </span>
                  </a>
                </li>
              </ul>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-content">
          <span>© 2026 Mobarok Hossen. All rights reserved.</span>
          <span>
            <a
              href="https://www.linkedin.com/in/mobarok0102/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            · <a href="mailto:mhossen0102@gmail.com">Email</a> ·{" "}
            <a href="#top">Back to top</a>
          </span>
        </div>
      </footer>
    </>
  );
}
