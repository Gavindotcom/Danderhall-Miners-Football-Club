import {
  ArrowRight,
  Users,
  Trophy,
  UserPlus,
} from "lucide-react";

export const metadata = {
  title: "Our Teams",
  description:
    "Explore the teams at Danderhall Miners Football Club and find opportunities to play football in Danderhall.",
};

export default function TeamsPage() {
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
      <section className="teams-page-hero">
        <div className="teams-page-hero-overlay" />

        <div className="container teams-page-hero-content">

          <p className="eyebrow">
            DANDERHALL MINERS FOOTBALL CLUB
          </p>

          <h1>OUR TEAMS</h1>

          <p>
            Football opportunities for our community today,
            with ambitions to create a pathway for generations
            of players to come.
          </p>

        </div>
      </section>


      {/* INTRO */}
      <section className="teams-page-intro">

        <div className="container teams-page-intro-grid">

          <div>
            <p className="section-label dark">FOOTBALL FOR ALL</p>

            <h2>
              ONE CLUB.
              <br />
              GROWING TOGETHER.
            </h2>
          </div>

          <div className="teams-page-intro-copy">

            <p>
              Danderhall Miners Football Club is building a football
              structure that creates opportunities for players across
              our community.
            </p>

            <p>
              Our club currently includes women's and youth football,
              with ambitions to welcome additional age groups and teams
              as we continue to grow.
            </p>

            <p>
              Every team is part of one club, sharing the same commitment
              to development, enjoyment, inclusion and representing
              Danderhall with pride.
            </p>

          </div>

        </div>

      </section>


      {/* CURRENT TEAMS */}
      <section className="teams-directory">

        <div className="container">

          <div className="teams-directory-heading">
            <p className="section-label">OUR TEAMS</p>
            <h2>FIND YOUR TEAM</h2>
          </div>

          <div className="teams-directory-grid">


            {/* WOMEN'S TEAM */}
            <article
              className="directory-team-card"
              style={{
                backgroundImage: `url("/images/women.jpg")`,
              }}
            >

              <div className="directory-team-overlay" />

              <div className="directory-team-content">

                <div>
                  <span>ADULT FOOTBALL</span>
                  <h3>WOMEN'S TEAM</h3>

                  <p>
                    Representing Danderhall Miners in the women's game.
                  </p>
                </div>

                <a
                  href="/teams/womens"
                  className="directory-team-arrow"
                  aria-label="Women's Team"
                >
                  <ArrowRight size={20} />
                </a>

              </div>

            </article>


            {/* 2015s */}
            <article
              className="directory-team-card"
              style={{
                backgroundImage: `url("/images/2015.jpg")`,
              }}
            >

              <div className="directory-team-overlay" />

              <div className="directory-team-content">

                <div>
                  <span>YOUTH FOOTBALL</span>
                  <h3>2015s</h3>

                  <p>
                    Developing young players in a positive and
                    supportive football environment.
                  </p>
                </div>

                <a
                  href="/teams/2015s"
                  className="directory-team-arrow"
                  aria-label="2015s Team"
                >
                  <ArrowRight size={20} />
                </a>

              </div>

            </article>


            {/* FUTURE TEAMS */}
            <article
              className="directory-team-card"
              style={{
                backgroundImage: `url("/images/future.jpg")`,
              }}
            >

              <div className="directory-team-overlay" />

              <div className="directory-team-content">

                <div>
                  <span>THE FUTURE</span>
                  <h3>GROWING OUR CLUB</h3>

                  <p>
                    Interested in bringing a team to Danderhall
                    Miners or helping establish a new age group?
                  </p>
                </div>

                <a
                  href="/contact"
                  className="directory-team-arrow"
                  aria-label="Get involved"
                >
                  <ArrowRight size={20} />
                </a>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* PLAYER DEVELOPMENT */}
      <section className="team-development">

        <div className="container team-development-grid">

          <div className="development-feature">
            <Users />
            <h3>PLAYERS</h3>
            <p>
              Creating opportunities to enjoy football, develop
              skills and be part of a team.
            </p>
          </div>

          <div className="development-feature">
            <Trophy />
            <h3>DEVELOPMENT</h3>
            <p>
              Supporting players to progress in an environment
              focused on learning and enjoyment.
            </p>
          </div>

          <div className="development-feature">
            <UserPlus />
            <h3>COACHES & VOLUNTEERS</h3>
            <p>
              Growing our club means developing the people who
              make grassroots football possible.
            </p>
          </div>

        </div>

      </section>


      {/* JOIN */}
      <section className="teams-join">

        <div className="container teams-join-inner">

          <div>
            <p className="section-label">GET INVOLVED</p>

            <h2>
              WANT TO BE PART OF
              <br />
              DANDERHALL MINERS?
            </h2>

            <p>
              Whether you're looking for a team, interested in
              coaching or volunteering, or want to help us establish
              a new team, we'd love to hear from you.
            </p>
          </div>

          <a href="/contact" className="btn btn-yellow">
            Get Involved <ArrowRight size={17} />
          </a>

        </div>

      </section>

    </main>
  );
}
