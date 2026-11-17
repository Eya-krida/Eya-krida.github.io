import "@fontsource/anton";
import { site } from "../data/site";
import "./PosterStage.css";

// Giant word + cut-out photo in front of it + outline of the word on top of the photo.
// Used by PosterHero (full poster page) and IntroHero (poster in the middle).
// The photo must be a PNG with a transparent background (site.photo).
export default function PosterStage({ children }) {
  const word = site.poster.word;

  return (
    <div className="ps-stage">
      <h1 className="ps-word" aria-label={`${word}, ${site.fullName}`}>
        {word}
      </h1>
      <img className="ps-photo" src={site.photo} alt={site.fullName} draggable="false" />
      <span className="ps-word ps-word-outline" aria-hidden="true">
        {word}
      </span>
      {/* Extra layer on top, for example the floating skill badges */}
      {children}
    </div>
  );
}
