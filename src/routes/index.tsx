import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowRight, Menu, X } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const projects = [
  // ============================================
  // CAFÉS — IMG 1 TO IMG 15
  // ============================================
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

  // ============================================
  // BAR SPACES — IMG 16 TO IMG 21
  // ============================================
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

  // YOUR NEW BAR IMAGES
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

  // ============================================
  // HOTELS — IMG 22 TO IMG 28
  // ============================================
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

  // YOUR BEDROOM IMAGES
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

  // ============================================
  // GYMS — IMG 29 TO IMG 36
  // ============================================
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

  // ============================================
  // HALLS — IMG 37 TO IMG 41
  // ============================================
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

  // YOUR NEW HALL IMAGE
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

// Mix categories in ALL:
// Hall -> Café -> Bar -> Gym -> Hotel -> repeat
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
          (project) =>
            project.category === activeCategory,
        );

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <main>
      {/* THIS CSS OVERRIDES ONLY THE PROJECT GRID */}
      <style>{`
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

        @media (max-width: 1200px) {
          .project-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }

          .project-grid .project-photo {
            height: 310px !important;
          }
        }

        @media (max-width: 800px) {
          .project-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .project-grid .project-photo {
            height: 300px !important;
          }
        }

        @media (max-width: 520px) {
          .project-grid {
            grid-template-columns: 1fr !important;
          }

          .project-grid .project-photo {
            height: 360px !important;
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
            src="/44logo.png"
            alt="SS Studio 44"
            style={{
              height: "160px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </button>

        <nav
          className={`main-nav ${
            menuOpen ? "nav-open" : ""
          }`}
        >
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
          onClick={() =>
            setMenuOpen((value) => !value)
          }
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
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
              We create thoughtful interiors shaped
              around people, atmosphere and purpose.
            </p>

            <button
              className="circle-link"
              onClick={() =>
                scrollToSection("studio")
              }
              aria-label="Explore studio"
            >
              <ArrowDown size={18} />
            </button>
          </div>

          <span className="hero-index">
            SS / 44
          </span>

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
              SS Studio 44 is an interior design
              studio creating spaces with a strong
              identity, thoughtful detail and a clear
              sense of place.
            </p>

            <p>
              From intimate bedrooms and expressive
              bar spaces to gathering halls, every
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
            Every material, proportion and detail is
            chosen to create spaces that feel refined
            without losing warmth.
          </p>

          <button
            className="arrow-link"
            onClick={() =>
              scrollToSection("spaces")
            }
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
            A selection of halls, cafés, bars, gyms
            and hospitality spaces created with a
            focus on material, mood and experience.
          </p>
        </div>

        <div className="spaces-heading">
          <h2>
            Our
            <br />
            <em>work.</em>
          </h2>

          <span className="project-count">
            {String(
              filteredProjects.length,
            ).padStart(2, "0")}{" "}
            projects
          </span>
        </div>

        {/* CATEGORY FILTER */}
        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-tab ${
                activeCategory === category
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="project-grid">
          {filteredProjects.map(
            (project, index) => (
              <button
                key={`${project.src}-${index}`}
                className={`project-card project-card-${
                  index % 7
                }`}
                onClick={() =>
                  setSelectedProject(project)
                }
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
                    <small>
                      {project.location}
                    </small>
                  </span>

                  <ArrowRight size={16} />
                </span>
              </button>
            ),
          )}
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
                  We begin with your needs,
                  lifestyle, context and the feeling
                  you want the space to create.
                </p>
              </div>
            </div>

            <div className="approach-step">
              <span>02</span>

              <div>
                <h3>Define</h3>

                <p>
                  Layout, materials, lighting and
                  details come together into one
                  clear design direction.
                </p>
              </div>
            </div>

            <div className="approach-step">
              <span>03</span>

              <div>
                <h3>Refine</h3>

                <p>
                  Every element is developed
                  carefully so that function and
                  visual identity work as one.
                </p>
              </div>
            </div>

            <div className="approach-step">
              <span>04</span>

              <div>
                <h3>Realise</h3>

                <p>
                  The final space is brought to life
                  with attention to execution,
                  quality and finish.
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
              Tell us about your space, your ideas
              and what you would like to create.
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

              <select
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

                <option value="Bar">
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
          onClick={() =>
            scrollToSection("home")
          }
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
              height: "90px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </button>

        <p>
          Spaces designed with intention.
        </p>

        <div>
          <a href="#studio">
            Studio
          </a>

          <a href="#spaces">
            Spaces
          </a>

          <a href="#contact">
            Contact
          </a>
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
          onClick={() =>
            setSelectedProject(null)
          }
        >
          <div
            className="lightbox-inner"
            role="dialog"
            aria-modal="true"
            aria-label={
              selectedProject.title
            }
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() =>
                setSelectedProject(null)
              }
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
                  {
                    selectedProject.category
                  }
                </span>

                <b>
                  {selectedProject.title}
                </b>
              </div>

              <span>
                {
                  selectedProject.location
                }
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
