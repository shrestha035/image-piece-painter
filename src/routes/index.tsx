import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Menu,
  X,
  Phone,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const projects = [
  // =====================================================
  // CAFÉS — IMG 1 TO IMG 15
  // =====================================================

  {
    src: "/img1.jpeg",
    category: "Cafés",
    title: "Dolci",
    location: "Café / Exterior",
  },
  {
    src: "/img2.jpeg",
    category: "Cafés",
    title: "Dolci",
    location: "Café / Seating",
  },
  {
    src: "/img3.jpeg",
    category: "Cafés",
    title: "Dolci",
    location: "Café / Interior",
  },
  {
    src: "/img4.jpeg",
    category: "Cafés",
    title: "Dolci",
    location: "Café / Interior",
  },
  {
    src: "/img5.jpeg",
    category: "Cafés",
    title: "Dolci",
    location: "Café / Detail",
  },
  {
    src: "/img6.jpeg",
    category: "Cafés",
    title: "Dolci",
    location: "Café / Display",
  },
  {
    src: "/img7.jpeg",
    category: "Cafés",
    title: "Dolci",
    location: "Café / Counter",
  },
  {
    src: "/img8.jpeg",
    category: "Cafés",
    title: "Dolci",
    location: "Café / Display",
  },
  {
    src: "/img9.jpeg",
    category: "Cafés",
    title: "Dolci",
    location: "Café / Display",
  },
  {
    src: "/img10.jpeg",
    category: "Cafés",
    title: "Dolci",
    location: "Café / Storefront",
  },
  {
    src: "/img11.jpeg",
    category: "Cafés",
    title: "Dolci",
    location: "Café / Feature Wall",
  },
  {
    src: "/img12.jpeg",
    category: "Cafés",
    title: "Dolci",
    location: "Café / Interior",
  },
  {
    src: "/img13.jpeg",
    category: "Cafés",
    title: "Dolci",
    location: "Café / Display",
  },
  {
    src: "/img14.jpeg",
    category: "Cafés",
    title: "Dolci",
    location: "Café / Counter",
  },
  {
    src: "/img15.jpeg",
    category: "Cafés",
    title: "Dolci",
    location: "Café / Entrance",
  },

  // =====================================================
  // BAR SPACES
  // =====================================================

  {
    src: "/img16.jpeg",
    category: "Bar Spaces",
    title: "Hospitality",
    location: "Bar / Interior",
  },
  {
    src: "/img17.jpeg",
    category: "Bar Spaces",
    title: "Hospitality",
    location: "Bar / Counter",
  },
  {
    src: "/img18.jpeg",
    category: "Bar Spaces",
    title: "Hospitality",
    location: "Bar / Detail",
  },
  {
    src: "/img19.jpeg",
    category: "Bar Spaces",
    title: "Hospitality",
    location: "Bar / Lounge",
  },
  {
    src: "/img20.jpeg",
    category: "Bar Spaces",
    title: "Hospitality",
    location: "Bar / Lounge",
  },
  {
    src: "/img21.jpeg",
    category: "Bar Spaces",
    title: "Hospitality",
    location: "Bar / Interior",
  },

  {
    src: "/bar1.jpeg",
    category: "Bar Spaces",
    title: "A space with character",
    location: "Bar / Interior",
  },
  {
    src: "/BAR22.jpeg",
    category: "Bar Spaces",
    title: "Details that set the mood",
    location: "Bar / Display",
  },
  {
    src: "/BAR33.jpeg",
    category: "Bar Spaces",
    title: "Designed to stand out",
    location: "Bar / Display",
  },
  {
    src: "/BAR44.jpeg",
    category: "Bar Spaces",
    title: "Warm light, rich textures",
    location: "Bar / Interior",
  },
  {
    src: "/BAR55.jpeg",
    category: "Bar Spaces",
    title: "A striking display",
    location: "Bar / Interior",
  },

  // =====================================================
  // HOTELS
  // =====================================================

  {
    src: "/img22.jpeg",
    category: "Hotels",
    title: "Hospitality",
    location: "Hotel / Lounge",
  },
  {
    src: "/img23.jpeg",
    category: "Hotels",
    title: "Hospitality",
    location: "Hotel / Lounge",
  },
  {
    src: "/img24.jpeg",
    category: "Hotels",
    title: "Hospitality",
    location: "Hotel / Interior",
  },
  {
    src: "/img25.jpeg",
    category: "Hotels",
    title: "Hospitality",
    location: "Hotel / Detail",
  },
  {
    src: "/img26.jpeg",
    category: "Hotels",
    title: "Hospitality",
    location: "Hotel / Lounge",
  },
  {
    src: "/img27.jpeg",
    category: "Hotels",
    title: "Hospitality",
    location: "Hotel / Bar",
  },
  {
    src: "/img28.jpeg",
    category: "Hotels",
    title: "Hospitality",
    location: "Hotel / Detail",
  },

  {
    src: "/BED11.jpeg",
    category: "Hotels",
    title: "Warmth in every detail",
    location: "Hotel / Bedroom",
  },
  {
    src: "/BED22.jpeg",
    category: "Hotels",
    title: "A quiet sense of luxury",
    location: "Hotel / Bedroom",
  },
  {
    src: "/BED33.jpeg",
    category: "Hotels",
    title: "Comfort, thoughtfully designed",
    location: "Hotel / Bedroom",
  },

  // =====================================================
  // GYMS
  // =====================================================

  {
    src: "/img29.jpeg",
    category: "Gyms",
    title: "Performance Space",
    location: "Gym / Strength",
  },
  {
    src: "/img30.jpeg",
    category: "Gyms",
    title: "Performance Space",
    location: "Gym / Training",
  },
  {
    src: "/img31.jpeg",
    category: "Gyms",
    title: "Performance Space",
    location: "Gym / Training",
  },
  {
    src: "/img32.jpeg",
    category: "Gyms",
    title: "Performance Space",
    location: "Gym / Detail",
  },
  {
    src: "/img33.jpeg",
    category: "Gyms",
    title: "Performance Space",
    location: "Gym / Reception",
  },
  {
    src: "/img34.jpeg",
    category: "Gyms",
    title: "Performance Space",
    location: "Gym / Cardio",
  },
  {
    src: "/img35.jpeg",
    category: "Gyms",
    title: "Performance Space",
    location: "Gym / Cardio",
  },
  {
    src: "/img36.jpeg",
    category: "Gyms",
    title: "Performance Space",
    location: "Gym / Entrance",
  },

  // =====================================================
  // HALLS
  // =====================================================

  {
    src: "/img37.jpeg",
    category: "Halls",
    title: "Made for gathering",
    location: "Events / Banquet Hall",
  },
  {
    src: "/img38.jpeg",
    category: "Halls",
    title: "Made for gathering",
    location: "Events / Banquet Hall",
  },
  {
    src: "/img39.jpeg",
    category: "Halls",
    title: "Made for gathering",
    location: "Events / Hall",
  },
  {
    src: "/img40.jpeg",
    category: "Halls",
    title: "Made for gathering",
    location: "Events / Main Hall",
  },
  {
    src: "/img41.jpeg",
    category: "Halls",
    title: "Made for gathering",
    location: "Events / Grand Hall",
  },
  {
    src: "/HALL11.jpeg",
    category: "Halls",
    title: "An inviting first impression",
    location: "Events / Hall",
  },
];

const categories = [
  "All",
  "Halls",
  "Cafés",
  "Bar Spaces",
  "Gyms",
  "Hotels",
];

const categoryOrder = [
  "Halls",
  "Cafés",
  "Bar Spaces",
  "Gyms",
  "Hotels",
];

const mixedProjects = (() => {
  const groups = categoryOrder.map((category) =>
    projects.filter((project) => project.category === category),
  );

  const result: typeof projects = [];

  const maxLength = Math.max(
    ...groups.map((group) => group.length),
  );

  for (let i = 0; i < maxLength; i++) {
    for (const group of groups) {
      if (group[i]) {
        result.push(group[i]);
      }
    }
  }

  return result;
})();

function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  const filteredProjects =
    activeCategory === "All"
      ? mixedProjects
      : projects.filter(
          (project) => project.category === activeCategory,
        );

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <main>
      <style>{`
        .header-logo {
          height: 190px;
          width: auto;
          object-fit: contain;
          display: block;
          transform: translateY(32px);
        }

        .project-grid {
          display: grid !important;
          grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          gap: 34px 24px !important;
          align-items: start;
        }

        .project-grid .project-card,
        .project-grid .project-card-0,
        .project-grid .project-card-1,
        .project-grid .project-card-2,
        .project-grid .project-card-3,
        .project-grid .project-card-4,
        .project-grid .project-card-5,
        .project-grid .project-card-6 {
          width: 100% !important;
          grid-column: auto !important;
          grid-row: auto !important;
          margin: 0 !important;
        }

        .project-grid .project-photo {
          display: block;
          width: 100%;
          height: 320px !important;
          overflow: hidden;
        }

        .project-grid .project-photo img {
          display: block;
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }

        .ss-footer {
          background: #0b0a08;
          color: #e9e0d5;
          padding: 75px 5% 25px;
          display: grid;
          grid-template-columns: 1.35fr 1fr 1.15fr 1.2fr;
          gap: 70px;
          border-top: 1px solid rgba(210, 165, 105, 0.2);
        }

        .ss-footer-brand img {
          display: block;
          width: 200px;
          height: auto;
          object-fit: contain;
          margin-bottom: 25px;
        }

        .ss-footer-brand p {
          max-width: 360px;
          font-size: 16px;
          line-height: 1.7;
          color: #a89e93;
          margin: 0 0 28px;
        }

        .footer-socials {
          display: flex;
          gap: 13px;
        }

        .footer-socials a {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid rgba(213, 163, 93, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b7aca1;
          transition:
            color 0.25s ease,
            border-color 0.25s ease,
            transform 0.25s ease;
        }

        .footer-socials a:hover {
          color: #d5a35d;
          border-color: #d5a35d;
          transform: translateY(-2px);
        }

        .ss-footer-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
        }

        .ss-footer-column h3 {
          color: #d5a35d;
          font-size: 14px;
          letter-spacing: 5px;
          font-weight: 600;
          margin: 0 0 16px;
        }

        .ss-footer-column button,
        .ss-footer-column span,
        .ss-footer-column a {
          background: none;
          border: none;
          padding: 0;
          color: #aea39a;
          font: inherit;
          font-size: 16px;
          line-height: 1.4;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.25s ease;
        }

        .ss-footer-column button:hover,
        .ss-footer-column a:hover {
          color: #d5a35d;
        }

        .ss-footer-contact a,
        .ss-footer-contact > div {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ss-footer-contact svg {
          color: #d5a35d;
          flex-shrink: 0;
        }

        .ss-footer .whatsapp-footer-button {
          margin-top: 10px;
          border: 1px solid #d5a35d;
          padding: 13px 18px;
          color: #d5a35d;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .ss-footer .whatsapp-footer-button:hover {
          background: #d5a35d;
          color: #0b0a08;
        }

        .ss-footer .whatsapp-footer-button:hover svg {
          color: #0b0a08;
        }

        .ss-footer-bottom {
          grid-column: 1 / -1;
          margin-top: 35px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,0.08);
          color: #736b64;
          font-size: 13px;
          letter-spacing: 1px;
        }

        @media (max-width: 1200px) {
          .project-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }

          .project-grid .project-photo {
            height: 310px !important;
          }

          .ss-footer {
            grid-template-columns: repeat(2, 1fr);
            gap: 55px;
          }
        }

        @media (max-width: 800px) {
          .project-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .project-grid .project-photo {
            height: 300px !important;
          }

          .header-logo {
            height: 145px;
            transform: translateY(25px);
          }
        }

        @media (max-width: 650px) {
          .ss-footer {
            grid-template-columns: 1fr;
            gap: 45px;
            padding-top: 55px;
          }

          .ss-footer-brand img {
            width: 180px;
          }
        }

        @media (max-width: 520px) {
          .project-grid {
            grid-template-columns: 1fr !important;
          }

          .project-grid .project-photo {
            height: 360px !important;
          }

          .header-logo {
            height: 130px;
            transform: translateY(22px);
          }
        }
      `}</style>

      {/* HEADER */}

      <header className="site-header">
        <button
          className="brand"
          onClick={() => scrollToSection("home")}
          aria-label="SS Studio 44 home"
        >
          <img
            className="header-logo"
            src="/44logo.png"
            alt="SS Studio 44"
          />
        </button>

        <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
          <a
            href="#studio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("studio");
            }}
          >
            Studio
          </a>

          <a
            href="#spaces"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("spaces");
            }}
          >
            Spaces
          </a>

          <a
            href="#approach"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("approach");
            }}
          >
            Approach
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
        </nav>

        <button
          className="header-cta"
          onClick={() => scrollToSection("contact")}
        >
          Start a project
          <ArrowRight size={14} />
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      {/* HERO */}

      <section
        id="home"
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,16,13,.45), rgba(20,16,13,.45)), url('/HALL11.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content">
          <p className="eyebrow">
            Interior architecture · Bengaluru
          </p>

          <h1>
            Spaces with
            <br />
            <em>character.</em>
          </h1>

          <div className="hero-bottomline">
            <p>
              We create thoughtful interiors shaped around people,
              atmosphere and purpose.
            </p>

            <button
              className="circle-link"
              onClick={() => scrollToSection("studio")}
              aria-label="Explore studio"
            >
              <ArrowDown size={18} />
            </button>
          </div>

          <span className="hero-index">SS / 44</span>

          <span className="scroll-cue">
            Scroll to explore
          </span>
        </div>
      </section>

      {/* STUDIO */}

      <section
        id="studio"
        className="intro-section section-pad"
      >
        <div className="section-label">
          <span>01</span>
          <span>The Studio</span>
        </div>

        <div className="intro-grid">
          <h2>
            Design that feels
            <br />
            <em>like it belongs.</em>
          </h2>

          <div className="intro-copy">
            <p>
              SS Studio 44 is an interior design studio creating
              spaces with a strong identity, thoughtful detail
              and a clear sense of place.
            </p>

            <p>
              From intimate interiors and expressive bar spaces
              to hospitality, gyms and gathering halls, every
              project is approached as its own story.
            </p>

            <div className="intro-statline">
              <div>
                <strong>44</strong>
                <span>Studio identity</span>
              </div>

              <div>
                <strong>01</strong>
                <span>Design language</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>Possibilities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE */}

      <section className="feature-section">
        <div className="feature-image">
          <img
            src="/BED11.jpeg"
            alt="SS Studio 44 interior"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div className="feature-copy">
          <p className="eyebrow">
            Featured space
          </p>

          <h2>
            Calm,
            <br />
            considered,
            <br />
            <em>personal.</em>
          </h2>

          <p>
            Every material, proportion and detail is chosen to
            create spaces that feel refined without losing warmth.
          </p>

          <button
            className="arrow-link"
            onClick={() => scrollToSection("spaces")}
          >
            View our spaces
            <ArrowRight size={15} />
          </button>
        </div>
      </section>

      {/* PROJECTS */}

      <section
        id="spaces"
        className="spaces-section section-pad"
      >
        <div className="section-topline">
          <div className="section-label">
            <span>02</span>
            <span>Selected Spaces</span>
          </div>

          <p>
            A selection of halls, cafés, bars, gyms and hospitality
            spaces created with a focus on material, mood and
            experience.
          </p>
        </div>

        <div className="spaces-heading">
          <h2>
            Our
            <br />
            <em>work.</em>
          </h2>

          <span className="project-count">
            {String(filteredProjects.length).padStart(2, "0")} projects
          </span>
        </div>

        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-tab ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <button
              key={`${project.src}-${index}`}
              className={`project-card project-card-${index % 7}`}
              onClick={() => setSelectedProject(project)}
            >
              <span className="project-photo">
                <img
                  src={project.src}
                  alt={project.title}
                  loading="lazy"
                />
              </span>

              <span className="project-meta">
                <span>
                  <b>{project.title}</b>
                  <small>{project.location}</small>
                </span>

                <ArrowRight size={16} />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* APPROACH */}

      <section
        id="approach"
        className="approach-section section-pad"
      >
        <div className="section-label">
          <span>03</span>
          <span>Our Approach</span>
        </div>

        <div className="approach-layout">
          <h2>
            From idea
            <br />
            to <em>place.</em>
          </h2>

          <div className="approach-steps">
            <div className="approach-step">
              <span>01</span>

              <div>
                <h3>Understand</h3>

                <p>
                  We begin with your needs, lifestyle, context
                  and the feeling you want the space to create.
                </p>
              </div>
            </div>

            <div className="approach-step">
              <span>02</span>

              <div>
                <h3>Define</h3>

                <p>
                  Layout, materials, lighting and details come
                  together into one clear design direction.
                </p>
              </div>
            </div>

            <div className="approach-step">
              <span>03</span>

              <div>
                <h3>Refine</h3>

                <p>
                  Every element is developed carefully so that
                  function and visual identity work as one.
                </p>
              </div>
            </div>

            <div className="approach-step">
              <span>04</span>

              <div>
                <h3>Realise</h3>

                <p>
                  The final space is brought to life with attention
                  to execution, quality and finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="contact-section section-pad"
      >
        <div className="section-label">
          <span>04</span>
          <span>Contact</span>
        </div>

        <div className="contact-layout">
          <div className="contact-copy">
            <h2>
              Let&apos;s create
              <br />
              something
              <br />
              <em>distinct.</em>
            </h2>

            <p>
              Tell us about your space, your ideas and what
              you would like to create.
            </p>

            <div className="contact-note">
              Interior design
              <br />
              Residential
              <br />
              Hospitality
              <br />
              Commercial spaces
            </div>
          </div>

          {/* WHATSAPP ENQUIRY FORM */}

          <form
            className="enquiry-form"
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget;

              const name =
                (
                  form.elements.namedItem(
                    "name",
                  ) as HTMLInputElement
                )?.value || "";

              const email =
                (
                  form.elements.namedItem(
                    "email",
                  ) as HTMLInputElement
                )?.value || "";

              const project =
                (
                  form.elements.namedItem(
                    "project",
                  ) as HTMLSelectElement
                )?.value || "";

              const message =
                (
                  form.elements.namedItem(
                    "message",
                  ) as HTMLTextAreaElement
                )?.value || "";

              const whatsappMessage = encodeURIComponent(
`Hello SS Studio 44,

I would like to enquire about a project.

Name: ${name}
Email: ${email}
Project Type: ${project}

Message:
${message}`,
              );

              window.location.href =
                `https://wa.me/919845046311?text=${whatsappMessage}`;
            }}
          >
            <label>
              <span>Name</span>

              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </label>

            <label>
              <span>Email</span>

              <input
                name="email"
                type="email"
                placeholder="you@email.com"
                required
              />
            </label>

            <label>
              <span>Project type</span>

              <select
                name="project"
                defaultValue=""
                required
              >
                <option
                  value=""
                  disabled
                >
                  Select project type
                </option>

                <option value="Residential">
                  Residential
                </option>

                <option value="Hotel">
                  Hotel
                </option>

                <option value="Hall">
                  Hall
                </option>

                <option value="Café">
                  Café
                </option>

                <option value="Bar / Hospitality">
                  Bar / Hospitality
                </option>

                <option value="Gym">
                  Gym
                </option>

                <option value="Commercial">
                  Commercial
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </label>

            <label>
              <span>Message</span>

              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project"
                required
              />
            </label>

            <button
              type="submit"
              className="submit-button"
            >
              Send Enquiry
              <MessageCircle size={17} />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="ss-footer">
        <div className="ss-footer-brand">
          <button
            onClick={() => scrollToSection("home")}
            aria-label="SS Studio 44"
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <img
              src="/44logo.png"
              alt="SS Studio 44"
            />
          </button>

          <p>
            Thoughtful interiors designed for modern living,
            hospitality and memorable experiences.
          </p>

          <div className="footer-socials">
            <a
              href="#"
              aria-label="Instagram"
            >
              <Instagram size={19} />
            </a>

            <a
              href="#"
              aria-label="Facebook"
            >
              <Facebook size={19} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} />
            </a>

            <a
              href="#"
              aria-label="YouTube"
            >
              <Youtube size={19} />
            </a>
          </div>
        </div>

        <div className="ss-footer-column">
          <h3>QUICK LINKS</h3>

          <button
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("studio")}
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("spaces")}
          >
            Gallery
          </button>

          <button
            onClick={() => scrollToSection("approach")}
          >
            Approach
          </button>

          <button
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>

        <div className="ss-footer-column">
          <h3>SERVICES</h3>

          <span>Residential Interiors</span>
          <span>Hotels & Hospitality</span>
          <span>Cafés</span>
          <span>Bar Spaces</span>
          <span>Gyms</span>
          <span>Halls & Event Spaces</span>
        </div>

        <div className="ss-footer-column ss-footer-contact">
          <h3>CONTACT</h3>

          <a href="tel:+919008008877">
            <Phone size={19} />
            +91 90080 08877
          </a>

          <a href="tel:+919845046311">
            <Phone size={19} />
            +91 98450 46311
          </a>

          <div>
            <Clock size={19} />

            <span>
              10:00 AM – 8:00 PM
            </span>
          </div>

          <a
            className="whatsapp-footer-button"
            href="https://wa.me/919845046311?text=Hello%20SS%20Studio%2044,%20I%20would%20like%20to%20enquire%20about%20an%20interior%20project."
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={19} />

            WhatsApp Enquiry
          </a>
        </div>

        <div className="ss-footer-bottom">
          © 2026 SS Studio 44. All rights reserved.
        </div>
      </footer>

      {/* LIGHTBOX */}

      {selectedProject && (
        <div
          className="lightbox"
          role="presentation"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="lightbox-inner"
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close image"
            >
              <X size={28} />
            </button>

            <img
              src={selectedProject.src}
              alt={selectedProject.title}
            />

            <div className="lightbox-caption">
              <div>
                <span>
                  {selectedProject.category}
                </span>

                <b>
                  {selectedProject.title}
                </b>
              </div>

              <span>
                {selectedProject.location}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
