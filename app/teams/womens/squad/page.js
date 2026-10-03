import Header from "../../../components/Header";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Women's Squad",
  description:
    "Meet the players and staff representing Danderhall Miners FC Women's Team.",
};

const squad = {
  goalkeepers: [
    { number: "1", name: "PLAYER NAME", image: null },
    { number: "13", name: "PLAYER NAME", image: null },
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

const staff = [
  {
    role: "Manager / Head Coach",
    name: "TO BE ADDED",
    image: null,
  },
  {
    role: "Coach",
    name: "TO BE ADDED",
    image: null,
  },
];

export default function WomensSquadPage() {
  return (
    <main>

      {/* NAVIGATION */}
     <Header />


      {/* SIMPLE PAGE HEADER */}
      <section className="squad-page-header">

        <div className="container">

          <a href="/teams/womens" className="squad-page-back">
            <ArrowLeft size={16} />
            Women's Team
          </a>

          <p className="squad-kicker">
            DANDERHALL MINERS FC
          </p>

          <h1>WOMEN'S TEAM</h1>

        </div>

      </section>


      {/* PLAYERS */}
      <section className="squad-roster">

        <div className="container">

          <PlayerSection
            title="GOALKEEPERS"
            players={squad.goalkeepers}
          />

          <PlayerSection
            title="DEFENDERS"
            players={squad.defenders}
          />

          <PlayerSection
            title="MIDFIELDERS"
            players={squad.midfielders}
          />

          <PlayerSection
            title="FORWARDS"
            players={squad.forwards}
          />

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


function PlayerSection({ title, players }) {
  return (
    <div className="squad-position-section">

      <div className="squad-position-title">
        <h2>{title}</h2>
      </div>

      <div className="hibs-player-grid">

        {players.map((player, index) => (

          <PlayerCard
            key={`${title}-${index}`}
            player={player}
          />

        ))}

      </div>

    </div>
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

            <img
              src="/images/badge.png"
              alt=""
            />

          </div>

        )}

        <div className="hibs-player-gradient" />

        <div className="hibs-player-info">

          <span className="hibs-player-number">
            {player.number}
          </span>

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

            <img
              src="/images/badge.png"
              alt=""
            />

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
