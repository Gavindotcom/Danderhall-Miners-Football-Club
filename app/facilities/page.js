import Header from "../components/Header";
import {
  ArrowRight,
  Users,
  ShieldCheck,
  Heart,
  House,
  TrendingUp,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "Our Facilities",
  description:
    "Discover the current facilities and future ambitions of Danderhall Miners Football Club.",
};

export default function FacilitiesPage() {
  return (
    <main>

      {/* NAVIGATION */}
      <Header />

      {/* HERO */}
      <section className="facilities-page-hero">
        <div className="facilities-page-overlay" />

        <div className="container facilities-page-hero-content">
          <p className="eyebrow">OUR HOME</p>

          <h1>
            A HOME FOR
            <br />
            THE FUTURE
          </h1>

          <p>
            Proud of our home in Danderhall and ambitious about what our
            facilities could become for the club and the wider community.
          </p>

          <a href="#facilities-today" className="btn btn-yellow">
            Explore Our Facilities <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* OUR HOME TODAY */}
      <section id="facilities-today" className="facilities-today">
        <div className="container facilities-two-column">

          <div className="facilities-copy">
            <p className="section-label dark">OUR HOME TODAY</p>

            <h2>
              PROUDLY
              <br />
              DANDERHALL
            </h2>

            <p>
              Our facilities have been part of football in Danderhall for
              generations and remain an important part of the local community.
            </p>

            <p>
              Today, our teams benefit from grass playing space, training
              facilities and changing areas that provide a base for players,
              coaches and volunteers.
            </p>

            <p>
              As Danderhall Miners FC grows, our ambition is to work with
              partners and the community to protect, improve and make the best
              possible use of the facilities available to us.
            </p>

            <div className="facilities-location">
              <MapPin size={20} />
              <span>Danderhall, Midlothian</span>
            </div>
          </div>

          <div className="facilities-main-image">
            <img
              src="/images/facilities-sign.png"
              alt="Danderhall Miners football ground"
            />
          </div>

        </div>
      </section>

      {/* FACILITIES GALLERY */}
      <section className="facilities-gallery-section">
        <div className="container">

          <div className="facilities-section-heading">
            <p className="section-label">OUR FACILITIES</p>
            <h2>FOOTBALL HAS A HOME HERE</h2>

            <p>
              From matchdays on the grass to training under the lights, these
              spaces provide the foundations from which our club can continue
              to grow.
            </p>
          </div>

          <div className="facilities-gallery">

            <div className="facilities-gallery-large">
              <img
                src="/images/facilities-pitch.png"
                alt="Grass football pitch at Danderhall"
              />

              <div className="facilities-image-caption">
                <span>THE PITCH</span>
                <strong>Our Home</strong>
              </div>
            </div>

            <div className="facilities-gallery-small">
              <img
                src="/images/facilities-3g.png"
                alt="Floodlit training area at Danderhall"
              />

              <div className="facilities-image-caption">
                <span>TRAINING</span>
                <strong>Developing Players</strong>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CHANGING FACILITIES */}
      <section className="facilities-changing">
        <div className="container facilities-changing-grid">

          <div className="facilities-changing-images">
            <img
              src="/images/facilities-changing-1.png"
              alt="Danderhall Miners changing facilities"
            />

            <img
              src="/images/facilities-changing-2.png"
              alt="Danderhall Miners team changing room"
            />
          </div>

          <div className="facilities-changing-copy">
            <p className="section-label dark">BEHIND THE SCENES</p>

            <h2>
              A PLACE TO
              <br />
              CALL HOME
            </h2>

            <p>
              Good facilities matter. They help create an environment where
              players feel part of something, coaches can do their best work
              and teams can take pride in representing their community.
            </p>

            <p>
              Our changing facilities provide an important part of the
              matchday and training experience and give Danderhall Miners FC
              an identity that extends beyond the pitch.
            </p>
          </div>

        </div>
      </section>

      {/* FUTURE VISION */}
      <section className="facilities-future">
        <div className="container">

          <div className="facilities-future-heading">
            <p className="section-label">OUR AMBITION</p>

            <h2>
              BUILDING FOR
              <br />
              THE FUTURE
            </h2>

            <p>
              Our ambition is bigger than simply maintaining football pitches.
              We want facilities that can grow alongside our club and our
              community.
            </p>
          </div>

          <div className="facilities-vision-grid">

            <VisionCard
              icon={<Users />}
              title="MORE FOOTBALL"
              text="Creating capacity for more youth teams, women's football and opportunities for people to play."
            />

            <VisionCard
              icon={<House />}
              title="A COMMUNITY HUB"
              text="Developing a welcoming home that can support football and wider community activity."
            />

            <VisionCard
              icon={<ShieldCheck />}
              title="SAFE & INCLUSIVE"
              text="Facilities that support a safe, inclusive and positive environment for everyone."
            />

            <VisionCard
              icon={<TrendingUp />}
              title="SUSTAINABLE GROWTH"
              text="Building a long-term model that allows the club and its facilities to grow responsibly."
            />

          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="facilities-community">
        <div className="facilities-community-overlay" />

        <div className="container facilities-community-content">
          <Heart size={35} />

          <p className="section-label">MORE THAN FOOTBALL</p>

          <h2>
            FACILITIES FOR
            <br />
            OUR COMMUNITY
          </h2>

          <p>
            Danderhall is changing and growing. We want our football club and
            its facilities to grow with it — creating a place where existing
            residents and new families can come together, participate,
            volunteer and belong.
          </p>

          <a href="/community" className="btn btn-yellow">
            Our Community <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="facilities-final">
        <div className="container facilities-final-inner">

          <div>
            <p className="section-label dark">OUR NEXT CHAPTER</p>

            <h2>HELP US BUILD THE FUTURE</h2>

            <p>
              We want to work with local people, partners, sponsors and
              organisations who share our ambition for football and community
              development in Danderhall.
            </p>
          </div>

          <a href="/contact" className="btn btn-dark">
            Get Involved <ArrowRight size={17} />
          </a>

        </div>
      </section>

    </main>
  );
}


function VisionCard({ icon, title, text }) {
  return (
    <div className="facilities-vision-card">
      <div className="facilities-vision-icon">
        {icon}
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
