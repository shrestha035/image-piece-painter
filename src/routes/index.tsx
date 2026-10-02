import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowRight, Menu, X } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const projects = [
  {
    src: "/BED11.jpeg",
    category: "Bedrooms",
    title: "Warmth in every detail",
    location: "Interiors / Bedroom",
  },
  {
    src: "/BED22.jpeg",
    category: "Bedrooms",
    title: "A quiet sense of luxury",
    location: "Interiors / Bedroom",
  },
  {
    src: "/BED33.jpeg",
    category: "Bedrooms",
    title: "Comfort, thoughtfully designed",
    location: "Interiors / Bedroom",
  },
  {
    src: "/HALL11.jpeg",
    category: "Halls",
    title: "An inviting first impression",
    location: "Interiors / Hall",
  },
  {
    src: "/bar1.jpeg",
    category: "Bar Spaces",
    title: "A space with character",
    location: "Bar Spaces / Interior",
  },
  {
    src: "/BAR22.jpeg",
    category: "Bar Spaces",
    title: "Details that set the mood",
    location: "Bar Spaces / Display",
  },
  {
    src: "/BAR33.jpeg",
    category: "Bar Spaces",
    title: "Designed to stand out",
    location: "Bar Spaces / Display",
  },
  {
    src: "/BAR44.jpeg",
    category: "Bar Spaces",
    title: "Warm light, rich textures",
    location: "Bar Spaces / Interior",
  },
  {
    src: "/BAR55.jpeg",
    category: "Bar Spaces",
    title: "A striking display",
    location: "Bar Spaces / Interior",
  },
];

const categories = ["All", "Bedrooms", "Halls", "Bar Spaces"];

function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <main>
      {/* HEADER */}
      <header className="site-header">
        <button
          className="brand"
          onClick={() => scrollToSection("home")}
          aria-label="SS Studio 44 home"
        >
          <img
            src="/44logo.png"
            alt="SS Studio 44"
            style={{
              height: "62px",
              width: "auto",
              objectFit: "contain",
            }}
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
          <p className="eyebrow">Interior architecture · Bengaluru</p>

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
          <span className="scroll-cue">Scroll to explore</span>
        </div>
      </section>

      {/* STUDIO */}
      <section id="studio" className="intro-section section-pad">
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
              SS Studio 44 is an interior design studio creating spaces
              with a strong identity, thoughtful detail and a clear sense
              of place.
            </p>

            <p>
              From intimate bedrooms and expressive bar spaces to
              gathering halls, every project is approached as its own
              story.
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

      {/* FEATURED PROJECT */}
      <section className="feature-section">
        <div className="feature-image">
          <img
            src="/BED11.jpeg"
            alt="SS Studio 44 bedroom interior"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div className="feature-copy">
          <p className="eyebrow">Featured space</p>

          <h2>
            Calm,
            <br />
            considered,
            <br />
            <em>personal.</em>
          </h2>

          <p>
            Every material, proportion and detail is chosen to create
            spaces that feel refined without losing warmth.
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
      <section id="spaces" className="spaces-section section-pad">
        <div className="section-topline">
          <div className="section-label">
            <span>02</span>
            <span>Selected Spaces</span>
          </div>

          <p>
            A selection of bedrooms, halls and hospitality spaces created
            with a focus on material, mood and experience.
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

        {/* CATEGORY FILTER */}
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

        {/* IMAGE GRID */}
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
      <section id="approach" className="approach-section section-pad">
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
                  We begin with your needs, lifestyle, context and the
                  feeling you want the space to create.
                </p>
              </div>
            </div>

            <div className="approach-step">
              <span>02</span>

              <div>
                <h3>Define</h3>
                <p>
                  Layout, materials, lighting and details come together
                  into one clear design direction.
                </p>
              </div>
            </div>

            <div className="approach-step">
              <span>03</span>

              <div>
                <h3>Refine</h3>
                <p>
                  Every element is developed carefully so that function
                  and visual identity work as one.
                </p>
              </div>
            </div>

            <div className="approach-step">
              <span>04</span>

              <div>
                <h3>Realise</h3>
                <p>
                  The final space is brought to life with attention to
                  execution, quality and finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section section-pad">
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
              Tell us about your space, your ideas and what you would like
              to create.
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

          <form
            className="enquiry-form"
            onSubmit={(e) => {
              e.preventDefault();
              window.alert(
                "Thank you! Your enquiry has been received.",
              );
            }}
          >
            <label>
              <span>Name</span>
              <input
                type="text"
                placeholder="Your name"
                required
              />
            </label>

            <label>
              <span>Email</span>
              <input
                type="email"
                placeholder="you@email.com"
                required
              />
            </label>

            <label>
              <span>Project type</span>
              <select defaultValue="" required>
                <option value="" disabled>
                  Select project type
                </option>

                <option value="Residential">
                  Residential
                </option>

                <option value="Bedroom">
                  Bedroom
                </option>

                <option value="Hall">
                  Hall
                </option>

                <option value="Bar / Hospitality">
                  Bar / Hospitality
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
                rows={4}
                placeholder="Tell us about your project"
                required
              />
            </label>

            <button
              type="submit"
              className="submit-button"
            >
              Send enquiry
              <ArrowRight size={15} />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <button
          className="footer-brand"
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
            style={{
              height: "65px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </button>

        <p>Spaces designed with intention.</p>

        <div>
          <a href="#studio">Studio</a>
          <a href="#spaces">Spaces</a>
          <a href="#contact">Contact</a>
        </div>

        <span className="footer-year">
          © 2026
        </span>
      </footer>

      {/* IMAGE LIGHTBOX */}
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
