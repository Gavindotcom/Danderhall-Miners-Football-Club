import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Women's Squad",
  description:
    "Meet the players representing Danderhall Miners FC Women's Team.",
};

const squad = {
  goalkeepers: [
    { number: "1", name: "PLAYER NAME", image: null },
  ],

  defenders: [
    { number: "2", name: "PLAYER NAME", image: null },
    { number: "3", name: "PLAYER NAME", image: null },
    { number: "4", name: "PLAYER NAME", image: null },
    { number: "5", name: "PLAYER NAME", image: null },
  ],

  midfielders: [
    { number: "6", name: "PLAYER NAME", image: null },
    { number: "8", name: "PLAYER NAME", image: null },
    { number: "10", name: "PLAYER NAME", image: null },
    { number: "11", name: "PLAYER NAME", image: null },
  ],

  forwards: [
    { number: "7", name: "PLAYER NAME", image: null },
    { number: "9", name: "PLAYER NAME", image: null },
    { number: "14", name: "PLAYER NAME", image: null },
  ],
};

export default function WomensSquadPage() {
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
      <section className="squad-hero">
        <div className="squad-hero-overlay" />

        <div className="container squad-hero-content">

          <a href="/teams/womens" className="squad-back">
            <ArrowLeft size={16} />
            Women's Team
          </a>

          <p className="eyebrow">
            DANDERHALL MINERS FC
          </p>

          <h1>THE SQUAD</h1>

          <p>
            Meet the players representing Danderhall Miners Football Club
            Women's Team.
          </p>

        </div>
      </section>


      {/* SQUAD */}
      <section className="squad-section">

        <div className="container">

          <SquadGroup
            title="GOALKEEPERS"
            players={squad.goalkeepers}
            position="Goalkeeper"
          />

          <SquadGroup
            title="DEFENDERS"
            players={squad.defenders}
            position="Defender"
          />

          <SquadGroup
            title="MIDFIELDERS"
            players={squad.midfielders}
            position="Midfielder"
          />

          <SquadGroup
            title="FORWARDS"
            players={squad.forwards}
            position="Forward"
          />

        </div>

      </section>


      {/* STAFF */}
      <section className="squad-staff">

        <div className="container">

          <div className="squad-section-heading">
            <span>THE TEAM BEHIND THE TEAM</span>
            <h2>COACHING STAFF</h2>
          </div>

          <div className="staff-grid">

            <StaffCard
              role="Manager / Head Coach"
              name="TO BE ADDED"
            />

            <StaffCard
              role="Coach"
              name="TO BE ADDED"
            />

          </div>

        </div>

      </section>

    </main>
  );
}


function SquadGroup({ title, players, position }) {
  return (
    <div className="squad-group">

      <div className="squad-section-heading">
        <span>WOMEN'S TEAM</span>
        <h2>{title}</h2>
      </div>

      <div className="player-grid">

        {players.map((player, index) => (

          <article
            className="player-card"
            key={`${title}-${index}`}
          >

            <div className="player-photo">

              {player.image ? (
                <img
                  src={player.image}
                  alt={player.name}
                />
              ) : (
                <div className="player-placeholder">
                  <span>{player.number}</span>
                </div>
              )}

              <div className="player-number">
                {player.number}
              </div>

            </div>

            <div className="player-details">

              <span>{position}</span>

              <h3>{player.name}</h3>

            </div>

          </article>

        ))}

      </div>

    </div>
  );
}


function StaffCard({ role, name }) {
  return (
    <article className="staff-card">

      <div className="staff-placeholder">
        <img
          src="/images/badge.png"
          alt=""
        />
      </div>

      <div>
        <span>{role}</span>
        <h3>{name}</h3>
      </div>

    </article>
  );
}
