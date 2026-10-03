import Header from "../components/Header";
import {
  ArrowRight,
  Handshake,
  Users,
  Heart,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Sponsors & Partners",
  description:
    "Meet the businesses and organisations supporting Danderhall Miners Football Club and discover opportunities to partner with the club.",
};

const sponsors = [
  { src: "/images/AR.jpg", name: "AR" },
  { src: "/images/Auto.jpg", name: "Auto" },
  { src: "/images/CK.jpg", name: "CK" },
  { src: "/images/City.jpg", name: "City" },
  { src: "/images/Crowe.jpg", name: "Crowe" },
  { src: "/images/EMF-logo.webp", name: "EMF" },
  { src: "/images/EdInn.jpg", name: "Edinburgh Inn" },
  { src: "/images/Forth.jpg", name: "Forth" },
];

export default function SponsorsPage() {
  return (
    <main>

      <Header />

      {/* HERO */}
      <section className="sponsors-page-hero">
        <div className="sponsors-page-overlay" />

        <div className="container sponsors-page-hero-content">
          <Handshake size={42} />

          <p className="eyebrow">SPONSORS & PARTNERS</p>

          <h1>
            STRONGER
            <br />
            TOGETHER
          </h1>

          <p>
            Our sponsors and partners help Danderhall Miners Football Club
            create opportunities, support our teams and make a positive
            difference in our community.
          </p>

          <a href="#our-sponsors" className="btn btn-yellow">
            Meet Our Sponsors <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="sponsors-intro">
        <div className="container sponsors-intro-grid">

          <div>
            <p className="section-label dark">OUR PARTNERS</p>

            <h2>
              BACKING
              <br />
              OUR CLUB
            </h2>
          </div>

          <div className="sponsors-intro-copy">
            <p>
              Local football thrives when clubs, communities and businesses
              work together.
            </p>

            <p>
              The support of our sponsors helps Danderhall Miners FC provide
              football opportunities for players, support our coaches and
              volunteers and continue developing the club for the future.
            </p>

            <p>
              We are proud to work alongside organisations that want to be
              part of the club's journey and contribute positively to the
              wider Danderhall community.
            </p>
          </div>

        </div>
      </section>

      {/* SPONSOR GRID */}
      <section id="our-sponsors" className="sponsors-directory">
        <div className="container">

          <div className="sponsors-directory-heading">
            <p className="section-label">PROUDLY SUPPORTED BY</p>
            <h2>OUR SPONSORS</h2>

            <p>
              Thank you to every business and organisation supporting
              Danderhall Miners Football Club.
            </p>
          </div>

          <div className="sponsors-page-grid">
            {sponsors.map((sponsor) => (
              <SponsorCard
                key={sponsor.name}
                src={sponsor.src}
                name={sponsor.name}
              />
            ))}
          </div>

        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="sponsors-partner">
        <div className="container">

          <div className="sponsors-partner-heading">
            <p className="section-label dark">PARTNER WITH US</p>

            <h2>
              SUPPORT FOOTBALL.
              <br />
              SUPPORT COMMUNITY.
            </h2>

            <p>
              Partnering with Danderhall Miners FC is an opportunity to
              support a growing community club while connecting your
              organisation with players, families and local people.
            </p>
          </div>

          <div className="sponsors-benefit-grid">

            <BenefitCard
              icon={<Users />}
              title="LOCAL CONNECTION"
              text="Build meaningful connections with players, families, supporters and the wider Danderhall community."
            />

            <BenefitCard
              icon={<Heart />}
              title="COMMUNITY IMPACT"
              text="Help us create more opportunities for people to participate in football and community activity."
            />

            <BenefitCard
              icon={<TrendingUp />}
              title="GROW WITH US"
              text="Become part of an ambitious club as our teams, facilities and community reach continue to develop."
            />

          </div>

        </div>
      </section>

      {/* PARTNERSHIP OPPORTUNITIES */}
      <section className="sponsors-opportunities">
        <div className="container sponsors-opportunities-grid">

          <div>
            <p className="section-label">OPPORTUNITIES</p>

            <h2>
              THERE ARE MANY
              <br />
              WAYS TO SUPPORT
            </h2>

            <p>
              We want to build partnerships that work for both the club and
              the organisations supporting us.
            </p>
          </div>

          <div className="sponsors-opportunity-list">

            <Opportunity number="01" title="TEAM SPONSORSHIP" />
            <Opportunity number="02" title="KIT & EQUIPMENT SUPPORT" />
            <Opportunity number="03" title="FACILITIES & DEVELOPMENT" />
            <Opportunity number="04" title="EVENTS & COMMUNITY INITIATIVES" />
            <Opportunity number="05" title="CLUB PARTNERSHIPS" />

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="sponsors-final">
        <div className="container sponsors-final-inner">

          <div>
            <p className="section-label dark">BECOME A PARTNER</p>

            <h2>JOIN OUR JOURNEY</h2>

            <p>
              If your business or organisation would like to support
              Danderhall Miners FC, we'd love to hear from you.
            </p>
          </div>

          <a href="/contact" className="btn btn-dark">
            Partner With Us <ArrowRight size={17} />
          </a>

        </div>
      </section>

    </main>
  );
}


function SponsorCard({ src, name }) {
  return (
    <div className="sponsors-page-card">
      <img src={src} alt={`${name} logo`} />
    </div>
  );
}


function BenefitCard({ icon, title, text }) {
  return (
    <div className="sponsors-benefit-card">
      <div className="sponsors-benefit-icon">
        {icon}
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}


function Opportunity({ number, title }) {
  return (
    <div className="sponsors-opportunity">
      <span>{number}</span>
      <strong>{title}</strong>
    </div>
  );
}
