import Header from "./components/Header";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Handshake,
  Newspaper,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <main>

      {/* NAVIGATION */}
      <header className="navbar">
        <div className="nav-inner">
          <a href="#" className="brand">
            <img src="/images/badge.png" alt="Danderhall Miners FC" />
          </a>

          <nav className="desktop-nav">
           <a className="active" href="/">Home</a>
<a href="/our-club">Our Club</a>
<a href="/teams">Teams</a>
<a href="/community">Community</a>
<a href="/facilities">Facilities</a>
<a href="/safeguarding">Safeguarding</a>
<a href="/sponsors">Sponsors</a>
<a href="/news">News</a>
<a href="/contact">Contact</a>
          </nav>

          <a href="#contact" className="btn btn-yellow nav-button">
            Join Our Club
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />

        <div className="container hero-content">
          <p className="eyebrow">FOOTBALL. COMMUNITY. OPPORTUNITY.</p>

          <h1>
            DANDERHALL
            <br />
            MINERS
            <span>FOOTBALL CLUB</span>
          </h1>

          <p className="hero-copy">
            A community football club providing opportunities for players,
            coaches, volunteers and the wider Danderhall community.
          </p>

          <div className="hero-buttons">
            <a href="#club" className="btn btn-yellow">
              Our Club <ArrowRight size={17} />
            </a>

            <a href="#teams" className="btn btn-outline">
              Our Teams
            </a>
          </div>
        </div>
      </section>

      {/* OUR CLUB */}
      <section id="club" className="club-section">
        <div className="club-copy">
          <div className="section-inner">
            <p className="section-label">OUR CLUB</p>

            <h2>
              MORE THAN
              <br />
              A FOOTBALL CLUB
            </h2>

            <p>
              Danderhall Miners Football Club is at the heart of our
              community, bringing people together through football. We provide
              a safe, inclusive and supportive environment for players of all
              ages and abilities.
            </p>

            <a href="/our-club" className="btn btn-yellow">
  About Us <ArrowRight size={17} />
</a>
          </div>

          <div className="values">
            <Value
              icon={<Users />}
              title="INCLUSIVE"
              text="Football for everyone"
            />

            <Value
              icon={<Handshake />}
              title="COMMUNITY"
              text="Stronger together"
            />

            <Value
              icon={<TrendingUp />}
              title="OPPORTUNITY"
              text="Developing people on and off the pitch"
            />
          </div>
        </div>

        <div className="club-image" />
      </section>

      {/* TEAMS */}
      <section id="teams" className="teams-section">
        <div className="container teams-layout">
          <div className="teams-intro">
            <p className="section-label dark">OUR TEAMS</p>

            <h2>FOOTBALL FOR ALL</h2>

            <p>
              From our Women's team to our growing youth section, we're
              creating opportunities to play, develop and enjoy football in
              Danderhall.
            </p>

            <a href="/teams" className="btn btn-yellow">
  View All Teams <ArrowRight size={17} />
</a>
          </div>

          <div className="team-cards">
            <TeamCard
              title="Women's Team"
              image="/images/women.jpg"
            />

            <TeamCard
              title="2015s"
              image="/images/2015.jpg"
            />

            <TeamCard
              title="Future Teams"
              subtitle="Growing our club"
              image="/images/future.jpg"
            />
          </div>
        </div>
      </section>

      {/* COMMUNITY + FACILITIES */}
      <section className="split-section">
        <div id="community" className="split-panel community-panel">
          <div className="split-content">
            <p className="section-label">COMMUNITY</p>
            <h2>STRONGER TOGETHER</h2>

            <p>
              We're committed to making a positive difference in Danderhall
              through football, supporting local people, schools and community
              initiatives.
            </p>

            <a href="#" className="btn btn-yellow">
              Our Community <ArrowRight size={17} />
            </a>
          </div>
        </div>

        <div id="facilities" className="split-panel facilities-panel">
          <div className="split-content">
            <p className="section-label">FACILITIES</p>
            <h2>A HOME FOR THE FUTURE</h2>

            <p>
              We're working towards securing and developing our facilities to
              create a sustainable home for Danderhall Miners FC and the wider
              community.
            </p>

            <a href="#" className="btn btn-yellow">
              Our Facilities <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="quick-links">
        <QuickLink
          icon={<ShieldCheck />}
          title="SAFEGUARDING"
          text="Creating a safe and supportive environment for all."
        />

        <QuickLink
          icon={<Users />}
          title="GET INVOLVED"
          text="Players, coaches, volunteers and supporters all play a part."
        />

        <QuickLink
          icon={<Handshake />}
          title="SPONSORS"
          text="Partner with us and support our community."
        />

        <QuickLink
          icon={<Newspaper />}
          title="LATEST NEWS"
          text="Keep up to date with club news, fixtures and events."
        />
      </section>

      {/* NEWS */}
      <section id="news" className="news-section">
        <div className="container">
          <div className="news-heading">
            <div>
              <p className="section-label">LATEST NEWS</p>
              <h2>FROM THE CLUB</h2>
            </div>

            <a href="#">
              View All News <ArrowRight size={17} />
            </a>
          </div>

          <div className="news-grid">
            <NewsCard
              category="CLUB NEWS"
              title="Building the Future of Danderhall Miners FC"
              text="An exciting new chapter for our football club and community."
            />

            <NewsCard
              category="COMMUNITY"
              title="Our Community Vision"
              text="Football can make a difference far beyond the pitch."
            />

            <NewsCard
              category="YOUTH"
              title="Growing Our Youth Section"
              text="Creating more opportunities for young players in Danderhall."
            />
          </div>
        </div>
      </section>
{/* SPONSORS */}
<section id="sponsors" className="sponsor-strip">
  <div className="sponsor-heading">
    <span>PROUDLY SUPPORTED BY</span>
  </div>

  <div className="sponsor-slider">
    <div className="sponsor-track">

<SponsorLogo src="/images/AR.jpg" name="AR" />
<SponsorLogo src="/images/Auto.jpg" name="Auto" />
<SponsorLogo src="/images/CK.jpg" name="CK" />
<SponsorLogo src="/images/City.jpg" name="City" />
<SponsorLogo src="/images/Crowe.jpg" name="Crowe" />
<SponsorLogo src="/images/EMF-logo.webp" name="EMF" />
<SponsorLogo src="/images/EdInn.jpg" name="Edinburgh Inn" />
<SponsorLogo src="/images/Forth.jpg" name="Forth" />

{/* Duplicate set for continuous scrolling */}
<SponsorLogo src="/images/AR.jpg" name="AR" />
<SponsorLogo src="/images/Auto.jpg" name="Auto" />
<SponsorLogo src="/images/CK.jpg" name="CK" />
<SponsorLogo src="/images/City.jpg" name="City" />
<SponsorLogo src="/images/Crowe.jpg" name="Crowe" />
<SponsorLogo src="/images/EMF-logo.webp" name="EMF" />
<SponsorLogo src="/images/EdInn.jpg" name="Edinburgh Inn" />
<SponsorLogo src="/images/Forth.jpg" name="Forth" />

    </div>
  </div>
</section>
      {/* FOOTER */}
      <footer id="contact">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src="/images/badge.png" alt="" />

            <div>
              <strong>DANDERHALL MINERS</strong>
              <span>FOOTBALL CLUB</span>
            </div>
          </div>

          <p>
            Football. Community. Opportunity.
          </p>

          <p className="copyright">
            © 2026 Danderhall Miners Football Club
          </p>
        </div>
      </footer>

    </main>
  );
}

function Value({ icon, title, text }) {
  return (
    <div className="value">
      <div className="value-icon">{icon}</div>
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

function TeamCard({ title, subtitle, image }) {
  return (
    <article
      className="team-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="card-overlay" />

      <div className="team-card-content">
        <div>
          <h3>{title}</h3>
          {subtitle && <p>{subtitle}</p>}
        </div>

        <span className="circle-arrow">
          <ArrowRight size={18} />
        </span>
      </div>
    </article>
  );
}

function QuickLink({ icon, title, text }) {
  return (
    <div className="quick-link">
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>

      <a href="#">
        Find out more <ArrowRight size={15} />
      </a>
    </div>
  );
}

function NewsCard({ category, title, text }) {
  return (
    <article className="news-card">
      <span>{category}</span>
      <h3>{title}</h3>
      <p>{text}</p>

      <a href="#">
        Read more <ArrowRight size={15} />
      </a>
    </article>
  );
}
function SponsorLogo({ src, name }) {
  return (
    <div className="sponsor-logo">
      <img src={src} alt={name} />
    </div>
  );
}
