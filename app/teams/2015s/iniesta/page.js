import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "2015s Iniesta",
  description:
    "Danderhall Miners FC 2015s Iniesta squad.",
};

const players = [
  { number: "", name: "PLAYER NAME", image: null },
  { number: "", name: "PLAYER NAME", image: null },
  { number: "", name: "PLAYER NAME", image: null },
  { number: "", name: "PLAYER NAME", image: null },
  { number: "", name: "PLAYER NAME", image: null },
];

const staff = [
  {
    role: "Coach",
    name: "TO BE ADDED",
    image: null,
  },
];

export default function IniestaTeamPage() {
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


      {/* PAGE HEADER */}
      <section className="squad-page-header">

        <div className="container">

          <a
            href="/teams/2015s"
            className="squad-page-back"
          >
            <ArrowLeft size={16} />
            2015s
          </a>

          <p className="squad-kicker">
            DANDERHALL MINERS FC 2015s
          </p>

          <h1>INIESTA</h1>

        </div>

      </section>


      {/* SQUAD */}
      <section className="squad-roster">

        <div className="container">

          <div className="squad-position-section">

            <div className="squad-position-title">
              <h2>THE SQUAD</h2>
            </div>

            <div className="hibs-player-grid">

              {players.map((player, index) => (

                <PlayerCard
                  key={index}
                  player={player}
                />

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* COACHING STAFF */}
      <section className="squad-coaches">

        <div className="container">

          <div className="squad-position-title">
            <h2>COACHING STAFF</h2>
          </div>

          <div className="hibs-player-grid">

            {staff.map((member, index) => (

              <StaffCard
                key={index}
                member={member}
              />

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}


function PlayerCard({ player }) {
  return (
    <article className="hibs-player-card">

      <div className="hibs-player-image">

        {player.image ? (

          <img
            src={player.image}
            alt={player.name}
          />

        ) : (

          <div className="hibs-player-placeholder">
            <span>PHOTO COMING SOON</span>
          </div>

        )}

        <div className="hibs-player-gradient" />

        <div className="hibs-player-info">

          {player.number && (
            <span className="hibs-player-number">
              {player.number}
            </span>
          )}

          <h3>{player.name}</h3>

        </div>

      </div>

    </article>
  );
}


function StaffCard({ member }) {
  return (
    <article className="hibs-player-card">

      <div className="hibs-player-image">

        {member.image ? (

          <img
            src={member.image}
            alt={member.name}
          />

        ) : (

          <div className="hibs-player-placeholder">
            <span>PHOTO COMING SOON</span>
          </div>

        )}

        <div className="hibs-player-gradient" />

        <div className="hibs-player-info">

          <span className="hibs-staff-role">
            {member.role}
          </span>

          <h3>{member.name}</h3>

        </div>

      </div>

    </article>
  );
}
