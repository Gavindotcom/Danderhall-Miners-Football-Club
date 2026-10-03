import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Users,
  Trophy,
} from "lucide-react";

export const metadata = {
  title: "2015s",
  description:
    "Danderhall Miners FC 2015s - youth football focused on development, enjoyment and opportunity.",
};

export default function Team2015sPage() {
  return (
    <main>

      {/* NAVIGATION */}
      <header className="navbar">
        <div className="nav-inner">

          <a href="/" className="brand">
            <img
              src="/images/badge.png"
              alt="Danderhall Miners Football Club"
            />
          </a>

          <nav className="desktop-nav">
            <a href="/">Home</a>
            <a href="/our-club">Our Club</a>
            <a className="active" href="/teams">Teams</a>
            <a href="/community">Community</a>
            <a href="/facilities">Facilities</a>
            <a href="/safeguarding">Safeguarding</a>
            <a href="/sponsors">Sponsors</a>
            <a href="/news">News</a>
            <a href="/contact">Contact</a>
          </nav>

          <a href="/contact" className="btn btn-yellow nav-button">
            Join Our Club
          </a>

        </div>
      </header>


      {/* HERO */}
      <section className="youth-team-hero">

        <div className="youth-team-overlay" />

        <div className="container youth-team-hero-content">

          <p className="eyebrow">DANDERHALL MINERS FC</p>

          <h1>
            2015s
          </h1>

          <p>
            Developing young players through a positive, supportive
            and enjoyable football environment.
          </p>

          <a href="/contact" className="btn btn-yellow">
            Get Involved <ArrowRight size={17} />
          </a>

        </div>

      </section>


      {/* INTRO */}
      <section className="youth-team-intro">

        <div className="container youth-team-intro-grid">

          <div>
            <p className="section-label dark">OUR 2015s</p>

            <h2>
              DEVELOPING PLAYERS.
              <br />
              ENJOYING FOOTBALL.
            </h2>
          </div>

          <div className="youth-team-intro-copy">

            <p>
              Danderhall Miners 2015s provide young players with the
              opportunity to learn, develop and enjoy their football as
              part of a supportive team environment.
            </p>

            <p>
              Our focus is on age and stage appropriate development,
              helping every player improve while building confidence,
              friendships and a lifelong enjoyment of the game.
            </p>

            <p>
              The team forms part of our growing youth pathway as we
              work towards creating more opportunities for young people
              across Danderhall and the surrounding community.
            </p>

          </div>

        </div>

      </section>


      {/* AT A GLANCE */}
      <section className="youth-team-info">

        <div className="container">

          <div className="youth-info-heading">
            <p className="section-label">TEAM INFORMATION</p>
            <h2>AT A GLANCE</h2>
          </div>

<div className="youth-info-grid youth-squads-grid">

  <a href="/teams/2015s/pele" className="youth-team-card-link">

  <YouthInfoCard
    icon={<Users />}
    title="PELÉ"
    text="View Team"
  />

</a>

   <a href="/teams/2015s/iniesta" className="youth-team-card-link">

  <YouthInfoCard
    icon={<Users />}
    title="INIESTA"
    text="View Team"
  />

</a>

  <YouthInfoCard
    icon={<Users />}
    title="MARADONA"
    text="Coming Soon"
  />

  <YouthInfoCard
    icon={<Users />}
    title="ZIDANE" 
    text="Coming Soon"
  />

  <YouthInfoCard
    icon={<Users />}
    title="BECKHAM"
    text="Coming Soon"
  />

</div>

        </div>

      </section>


      {/* DEVELOPMENT */}
      <section className="youth-development">

        <div className="container youth-development-grid">

          <div>
            <p className="section-label">OUR APPROACH</p>

            <h2>
              PLAYER
              <br />
              DEVELOPMENT
            </h2>
          </div>

          <div className="youth-development-copy">

            <p>
              At this age, development is about much more than results.
              We want players to become confident on the ball, understand
              the game and enjoy being part of a team.
            </p>

            <p>
              Players develop at different rates, so our environment
              focuses on giving each child appropriate challenge,
              encouragement and opportunities to progress.
            </p>

          </div>

        </div>

      </section>


      {/* JOIN */}
      <section className="youth-join">

        <div className="container youth-join-inner">

          <div>
            <p className="section-label dark">GET INVOLVED</p>

            <h2>
              INTERESTED IN
              <br />
              JOINING US?
            </h2>

            <p>
              For player enquiries, coaching opportunities or to find out
              more about Danderhall Miners youth football, contact the club.
            </p>
          </div>

          <a href="/contact" className="btn btn-dark">
            Contact The Club <ArrowRight size={17} />
          </a>

        </div>

      </section>

    </main>
  );
}


function YouthInfoCard({ icon, title, text }) {
  return (
    <div className="youth-info-card">

      <div className="youth-info-icon">
        {icon}
      </div>

      <h3>{title}</h3>
      <p>{text}</p>

    </div>
  );
}
