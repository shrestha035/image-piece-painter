import { useMemo, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, ChevronRight, Menu, MoveDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import gymCardio from "@/assets/studio/image-2.webp.asset.json";
import cafeEntry from "@/assets/studio/image-18.png.asset.json";
import cafeArches from "@/assets/studio/image-19.png.asset.json";
import cafeTable from "@/assets/studio/image-20.png.asset.json";
import cafePendant from "@/assets/studio/image-21.png.asset.json";
import cafeNight from "@/assets/studio/image-22.png.asset.json";
import hallBlue from "@/assets/studio/image-23.png.asset.json";
import hallReception from "@/assets/studio/image-24.png.asset.json";
import barCounter from "@/assets/studio/image-25.png.asset.json";
import barCeiling from "@/assets/studio/image-26.png.asset.json";
import cafeLounge from "@/assets/studio/image-27.png.asset.json";
import barLounge from "@/assets/studio/image-28.png.asset.json";
import hallLight from "@/assets/studio/image-29.png.asset.json";
import hallWindows from "@/assets/studio/image-30.png.asset.json";
import barWarm from "@/assets/studio/image-31.png.asset.json";
import gymOrange from "@/assets/studio/image-32.png.asset.json";
import gymWindows from "@/assets/studio/image-33.png.asset.json";
import gymNight from "@/assets/studio/image-34.png.asset.json";
import gymCeiling from "@/assets/studio/image-35.png.asset.json";
import gymReset from "@/assets/studio/image-36.png.asset.json";
import gymMachines from "@/assets/studio/image-37.png.asset.json";
import hallGrand1 from "@/assets/studio/image-2.png.asset.json";
import hallGrand2 from "@/assets/studio/image-3.png.asset.json";
import hallGrand3 from "@/assets/studio/image-4.png.asset.json";
import hallGrand4 from "@/assets/studio/image-5.png.asset.json";
import hallGrand5 from "@/assets/studio/image-6.png.asset.json";
import hallGrand6 from "@/assets/studio/image-7.png.asset.json";
import hallGrand7 from "@/assets/studio/image-8.png.asset.json";
import cafeStorefront from "@/assets/studio/image.webp.asset.json";
import cafeTerrace from "@/assets/studio/image-9.png.asset.json";
import cafeFacade from "@/assets/studio/image-10.png.asset.json";
import cafeShelves from "@/assets/studio/image-11.png.asset.json";
import cafeCart from "@/assets/studio/image-12.png.asset.json";
import cafeMural from "@/assets/studio/image-13.png.asset.json";
import cafeDisplay from "@/assets/studio/image-14.png.asset.json";
import cafeCartWall from "@/assets/studio/image-15.png.asset.json";
import cafeDoor from "@/assets/studio/image-16.png.asset.json";
import cafeCounter from "@/assets/studio/image-17.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SS STUDIO 44 — Spatial design, made precise" },
      { name: "description", content: "SS STUDIO 44 creates expressive spaces for hospitality, wellness, and gathering." },
      { property: "og:title", content: "SS STUDIO 44 — Spatial design, made precise" },
      { property: "og:description", content: "From first sketch to final handover, we create spaces that reflect your brand." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SS STUDIO 44 — Spatial design, made precise" },
      { name: "twitter:description", content: "Spatial design for hospitality, wellness, and gathering." },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "SS STUDIO 44",
        description: "Spatial design for hospitality, wellness, and gathering.",
        url: "/",
      }),
    }],
  }),
  component: StudioHome,
});

type Category = "All" | "Halls" | "Cafés" | "Bar Spaces" | "Gyms";

const projects = [
  { src: cafeArches.url, category: "Cafés", title: "A room with a point of view", location: "Dolci / Interior" },
  { src: gymWindows.url, category: "Gyms", title: "Energy, made visible", location: "Fitness / Training floor" },
  { src: hallWindows.url, category: "Halls", title: "Light finds its rhythm", location: "Events / Main hall" },
  { src: barWarm.url, category: "Bar Spaces", title: "After hours, elevated", location: "Hospitality / Bar" },
  { src: cafePendant.url, category: "Cafés", title: "Details worth lingering over", location: "Dolci / Dining" },
  { src: gymOrange.url, category: "Gyms", title: "A new kind of momentum", location: "Fitness / Strength" },
  { src: hallLight.url, category: "Halls", title: "Gathering, with intention", location: "Events / Dining hall" },
  { src: barCounter.url, category: "Bar Spaces", title: "The conversation starts here", location: "Hospitality / Counter" },
  { src: cafeLounge.url, category: "Cafés", title: "Soft edges, strong identity", location: "Dolci / Lounge" },
  { src: gymCardio.url, category: "Gyms", title: "A brighter way to train", location: "Fitness / Cardio" },
  { src: barLounge.url, category: "Bar Spaces", title: "Mood after dark", location: "Hospitality / Lounge" },
  { src: cafeNight.url, category: "Cafés", title: "A landmark after sunset", location: "Dolci / Exterior" },
  { src: hallGrand1.url, category: "Halls", title: "Scale, softly framed", location: "Events / Main hall" },
  { src: hallGrand2.url, category: "Halls", title: "A stage for every gathering", location: "Events / Banquet" },
  { src: hallGrand3.url, category: "Halls", title: "Volume, with warmth", location: "Events / Celebration hall" },
  { src: hallGrand4.url, category: "Halls", title: "Designed for the long table", location: "Events / Dining" },
  { src: hallGrand5.url, category: "Halls", title: "Ceremony in every corner", location: "Events / Reception" },
  { src: hallGrand6.url, category: "Halls", title: "Where the room holds its breath", location: "Events / Grand hall" },
  { src: hallGrand7.url, category: "Halls", title: "A canvas for occasions", location: "Events / Hall" },
  { src: cafeStorefront.url, category: "Cafés", title: "First impressions, in blue", location: "Dolci / Storefront" },
  { src: cafeTerrace.url, category: "Cafés", title: "Indoor calm, outdoor light", location: "Dolci / Terrace" },
  { src: cafeFacade.url, category: "Cafés", title: "A façade that invites", location: "Dolci / Street front" },
  { src: cafeShelves.url, category: "Cafés", title: "Display as architecture", location: "Dolci / Retail wall" },
  { src: cafeCart.url, category: "Cafés", title: "Craft on wheels", location: "Dolci / Display cart" },
  { src: cafeMural.url, category: "Cafés", title: "A wall that tells a story", location: "Dolci / Mural" },
  { src: cafeDisplay.url, category: "Cafés", title: "The counter, centre stage", location: "Dolci / Pastry counter" },
  { src: cafeCartWall.url, category: "Cafés", title: "Texture, arch, and light", location: "Dolci / Feature wall" },
  { src: cafeDoor.url, category: "Cafés", title: "Details at the threshold", location: "Dolci / Entry detail" },
  { src: cafeCounter.url, category: "Cafés", title: "Curves that welcome", location: "Dolci / Service counter" },
];

const categoryNotes: Record<Category, string> = {
  All: "A selection of spaces we shaped from the first line to the final light.",
  Halls: "Grand gestures, considered circulation, and rooms built for the moment.",
  Cafés: "Atmospheres that make a daily ritual feel like a destination.",
  "Bar Spaces": "A precise balance of mood, movement, and memory.",
  Gyms: "Performance environments that make energy part of the architecture.",
};

function StudioHome() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const filteredProjects = useMemo(
    () => activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="studio-shell">
      <header className="site-header">
        <a
          className="brand-mark"
          href="#top"
          aria-label="SS Studio 44 home"
          onClick={closeMenu}
        >
          <img
            src="/44logo.png"
            alt="SS Studio 44"
            className="header-logo"
            width={60}
            height={60}
            style={{
              display: "block",
              width: 60,
              height: 60,
              objectFit: "contain",
            }}
          />
        </a>

        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
          <a href="#studio" onClick={closeMenu}>Studio</a>
          <a href="#spaces" onClick={closeMenu}>Spaces</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a className="header-cta" href="#contact">
          Start a project <ArrowUpRight size={15} strokeWidth={1.5} />
        </a>

        <Button
          className="menu-button"
          variant="ghost"
          size="icon"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </Button>
      </header>

      <section className="hero" id="top">
        <div className="hero-image-wrap">
          <img src={gymWindows.url} alt="Bright fitness space with full-height windows and greenery" className="hero-image" />
          <div className="hero-image-shade" />
        </div>
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Spatial design / Bangalore + beyond</p>
          <h1>Designed with<br /><em>vision.</em><br />Executed with precision.</h1>
          <div className="hero-bottomline">
            <p>We create spaces that make people<br className="desktop-only" /> feel something — and remember it.</p>
            <a className="circle-link" href="#spaces" aria-label="Explore our spaces">
              <ArrowDownRight size={23} strokeWidth={1.2} />
            </a>
          </div>
        </div>
        <div className="hero-index">01 <span>/</span> 04</div>
        <div className="scroll-cue"><MoveDown size={14} /> Scroll to explore</div>
      </section>

      <section className="intro-section section-pad" id="studio">
        <div className="section-label">
          <span>01</span><span className="label-line" /><span>THE STUDIO</span>
        </div>
        <div className="intro-grid">
          <h2>There is a<br /><em>story</em> in every<br />space.</h2>
          <div className="intro-copy">
            <p className="lead-copy">SS STUDIO 44 is an interior design studio for places that have something to say.</p>
            <p>From first sketch to final handover, we bring clarity to complexity. Our work moves between hospitality, wellness, and gathering — always with a focus on how a space feels, flows, and stays with you.</p>
            <a className="text-link" href="#approach">How we work <ChevronRight size={16} /></a>
          </div>
        </div>
        <div className="intro-statline">
          <span>Founded on curiosity</span><span>Built on detail</span><span>Open to possibility</span>
        </div>
      </section>

      <section className="feature-section" aria-label="Featured project">
        <div className="feature-image">
          <img src={cafeArches.url} alt="Arched café interior with warm light and patterned floor" />
        </div>
        <div className="feature-copy">
          <div className="section-label light-label">
            <span>FEATURED</span><span className="label-line" /><span>01 / 04</span>
          </div>
          <p className="eyebrow">Dolci / Café & patisserie</p>
          <h2>Everyday,<br /><em>elevated.</em></h2>
          <p>A space shaped around the art of lingering. Soft arches, confident colour, and details that reveal themselves slowly.</p>
          <button
            className="arrow-link"
            onClick={() => {
              setActiveCategory("Cafés");
              document.getElementById("spaces")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View café spaces <ArrowUpRight size={17} />
          </button>
        </div>
      </section>

      <section className="spaces-section section-pad" id="spaces">
        <div className="section-topline">
          <div className="section-label">
            <span>02</span><span className="label-line" /><span>SELECTED SPACES</span>
          </div>
          <p>{categoryNotes[activeCategory]}</p>
        </div>
        <div className="spaces-heading">
          <h2>Made for<br /><em>meaning.</em></h2>
          <span className="project-count">{String(filteredProjects.length).padStart(2, "0")} projects</span>
        </div>
        <div className="category-tabs" role="tablist" aria-label="Project categories">
          {(Object.keys(categoryNotes) as Category[]).map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={activeCategory === category ? "category-tab active" : "category-tab"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <button
              type="button"
              className={`project-card project-card-${index % 4}`}
              key={project.src}
              onClick={() => setSelectedProject(project)}
            >
              <span className="project-photo">
                <img src={project.src} alt={project.title} loading="lazy" />
              </span>
              <span className="project-meta">
                <span><b>{project.title}</b><small>{project.location}</small></span>
                <ArrowUpRight size={18} strokeWidth={1.3} />
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="approach-section section-pad" id="approach">
        <div className="section-label light-label">
          <span>03</span><span className="label-line" /><span>OUR APPROACH</span>
        </div>
        <div className="approach-layout">
          <h2>Good design<br />is felt <em>before</em><br />it is explained.</h2>
          <div className="approach-steps">
            <div className="approach-step">
              <span>01</span>
              <div>
                <h3>Listen closely</h3>
                <p>We start with your world: the ambition, the audience, and the feeling you want to leave behind.</p>
              </div>
            </div>
            <div className="approach-step">
              <span>02</span>
              <div>
                <h3>Make it clear</h3>
                <p>We turn complexity into a focused design language — material, light, movement, and purpose.</p>
              </div>
            </div>
            <div className="approach-step">
              <span>03</span>
              <div>
                <h3>See it through</h3>
                <p>From the first drawing to the last detail, we stay close to the work and the people making it real.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="section-label">
          <span>04</span><span className="label-line" /><span>LET'S TALK</span>
        </div>
        <div className="contact-layout">
          <div className="contact-copy">
            <h2>Have a space<br />in <em>mind?</em></h2>
            <p>Tell us a little about what you’re imagining. We’ll take it from there.</p>
            <div className="contact-note">New projects / Collaborations<br />Bangalore + beyond</div>
          </div>
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <label>
              <span>Your name</span>
              <input name="name" required placeholder="How should we call you?" />
            </label>
            <label>
              <span>Email or phone</span>
              <input name="contact" required placeholder="Where can we reach you?" />
            </label>
            <label>
              <span>What are you creating?</span>
              <select name="category" defaultValue="">
                <option value="" disabled>Select a space type</option>
                <option>Hall / event space</option>
                <option>Café / restaurant</option>
                <option>Bar space</option>
                <option>Gym / wellness</option>
                <option>Something else</option>
              </select>
            </label>
            <label>
              <span>A few words</span>
              <textarea name="message" rows={3} placeholder="Tell us about the project, location, and timeline." />
            </label>
            <Button className="submit-button" type="submit">
              {submitted ? "Thank you — we’ll be in touch" : "Start the conversation"}
              <ArrowUpRight size={17} />
            </Button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand-mark footer-brand" href="#top">
          <span className="brand-monogram">SS</span>
          <span className="brand-name">STUDIO <b>44</b></span>
        </a>
        <p>Spaces with a point of view.</p>
        <div>
          <a href="#studio">Studio</a>
          <a href="#spaces">Spaces</a>
          <a href="#contact">Contact</a>
        </div>
        <span className="footer-year">© 2026 SS STUDIO 44</span>
      </footer>

      {selectedProject && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
          onClick={() => setSelectedProject(null)}
        >
          <div className="lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <img src={selectedProject.src} alt={selectedProject.title} />
            <div className="lightbox-caption">
              <span>{selectedProject.category}</span>
              <b>{selectedProject.title}</b>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lightbox-close"
              aria-label="Close image"
              onClick={() => setSelectedProject(null)}
            >
              <X size={24} />
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}
