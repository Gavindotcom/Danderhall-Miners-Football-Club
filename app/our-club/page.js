import {
  Users,
  Heart,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import {
  Users,
  Heart,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Our Club",
  description:
    "Learn more about Danderhall Miners Football Club, our purpose, values and ambitions for football and the Danderhall community.",
};

export default function OurClub() {
  return (
    <main>

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-overlay" />

        <div className="container page-hero-content">
          <p className="eyebrow">DANDERHALL MINERS FOOTBALL CLUB</p>

          <h1>OUR CLUB</h1>

          <p>
            More than a football club. A community built around opportunity,
            inclusion and a shared love of the game.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="our-club-intro">
        <div className="container our-club-intro-grid">

          <div>
            <p className="section-label dark">WHO WE ARE</p>

            <h2>
              FOOTBALL AT THE HEART
              <br />
              OF DANDERHALL
            </h2>
          </div>

          <div className="our-club-intro-copy">
            <p>
              Danderhall Miners Football Club is a community football club
              committed to creating opportunities for people to play,
              participate, develop and belong.
            </p>

            <p>
              Our ambition extends beyond what happens on the pitch. We want
              the club to be a positive part of life in Danderhall — bringing
              people together, supporting our community and creating
              opportunities for players, coaches, volunteers and families.
            </p>

            <p>
              As the club grows, we want to build something sustainable for
              future generations while protecting the community identity that
              sits at the heart of Danderhall Miners FC.
            </p>
          </div>

        </div>
      </section>

      {/* VISION */}
      <section className="club-vision">
        <div className="container club-vision-inner">

          <p className="section-label">OUR VISION</p>

          <h2>
            A CLUB FOR THE
            <br />
            WHOLE COMMUNITY
          </h2>

          <p className="vision-statement">
            To build a thriving, inclusive and sustainable community football
            club that creates opportunities through sport and provides a place
            where people feel welcome, supported and proud to belong.
          </p>

        </div>
      </section>

      {/* VALUES */}
      <section className="club-values-section">
        <div className="container">

          <div className="club-values-heading">
            <p className="section-label dark">WHAT MATTERS TO US</p>
            <h2>OUR VALUES</h2>
          </div>

          <div className="club-values-grid">

            <ClubValue
              icon={<Users />}
              title="INCLUSIVE"
              text="We want football to be accessible and welcoming, creating opportunities for people of different ages, backgrounds and abilities."
            />

            <ClubValue
              icon={<Heart />}
              title="COMMUNITY"
              text="We exist for our community and want the club to make a positive contribution to Danderhall both on and off the pitch."
            />

            <ClubValue
              icon={<TrendingUp />}
              title="DEVELOPMENT"
              text="We support the development of players, coaches and volunteers and encourage everyone involved with the club to fulfil their potential."
            />

            <ClubValue
              icon={<ShieldCheck />}
              title="SAFE & SUPPORTIVE"
              text="We are committed to creating an environment where children, young people, adults and vulnerable groups can participate safely and with confidence."
            />

          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section className="club-future">
        <div className="container club-future-grid">

          <div>
            <p className="section-label">LOOKING AHEAD</p>

            <h2>
              BUILDING FOR
              <br />
              THE FUTURE
            </h2>
          </div>

          <div className="club-future-copy">
            <p>
              Danderhall Miners FC is entering an exciting period of growth.
              Our aim is to develop a strong pathway from youth football
              through to adult football while increasing opportunities for
              girls, boys, women and the wider community.
            </p>

            <p>
              Alongside growing our teams, we want to strengthen the club's
              governance, develop our coaches and volunteers, build meaningful
              community partnerships and work towards facilities that can
              provide a sustainable home for the club.
            </p>

            <p>
              The goal is simple: leave Danderhall with a stronger football
              club and community asset for the generations that follow us.
            </p>

            <a href="/community" className="btn btn-yellow">
              Our Community <ArrowRight size={17} />
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}

function ClubValue({ icon, title, text }) {
  return (
    <div className="club-value-card">
      <div className="club-value-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}
