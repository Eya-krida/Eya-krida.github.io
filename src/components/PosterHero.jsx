import { MoveRight, Download } from "lucide-react";
import "@fontsource/anton";
import { site } from "../data/site";
import "./PosterHero.css";

// First screen in "poster" style: a giant word, the cut-out photo in front of it,
// and the outline of the same word drawn again on top of the photo.
// The photo must be a PNG with a transparent background (set site.photo).
const CV_FILE = "/cv.pdf";

export default function PosterHero() {
  const p = site.poster;

  return (
    <section
      className="ph-section"
      id="intro"
      style={{ "--ph-bg": p.bg, "--ph-ink": p.ink }}
    >
      <header className="ph-top">
        <p className="ph-small">{site.status}</p>
        <a href="#projects" className="ph-arrow" aria-label="See my projects">
          <MoveRight size={56} strokeWidth={1} />
        </a>
      </header>

      <div className="ph-stage">
        <h1 className="ph-word" aria-label={`${p.word}, ${site.fullName}`}>
          {p.word}
        </h1>
        <img
          className="ph-photo"
          src={site.photo}
          alt={site.fullName}
          draggable="false"
        />
        <span className="ph-word ph-word-outline" aria-hidden="true">
          {p.word}
        </span>
      </div>

      <footer className="ph-bottom">
        <p className="ph-small ph-name">{site.fullName}</p>
        <div className="ph-actions">
          <a href="#projects" className="ph-pill ph-pill-fill">
            View my work
          </a>
          <a href={CV_FILE} download className="ph-pill">
            Download CV <Download size={14} />
          </a>
        </div>
        <p className="ph-small ph-url">{site.url}</p>
      </footer>
    </section>
  );
}
