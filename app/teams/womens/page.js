import Header from "../../components/Header";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Users,
  Trophy,
} from "lucide-react";

export const metadata = {
  title: "Women's Team",
  description:
    "Danderhall Miners FC Women's Team - representing Danderhall and providing opportunities for women to play and develop through football.",
};

export default function WomensTeamPage() {
  return (
    <main>

      {/* NAVIGATION */}
    <Header />

      {/* HERO */}
      <section className="womens-hero">

        <div className="womens-hero-overlay" />

        <div className="container womens-hero-content">

          <p className="eyebrow">DANDERHALL MINERS FC</p>

          <h1>
            WOMEN'S
            <br />
            TEAM
          </h1>

          <p>
            Representing Danderhall with pride and creating opportunities
            for women to enjoy, compete and develop through football.
          </p>

          <a href="/contact" className="btn btn-yellow">
            Join The Team <ArrowRight size={17} />
          </a>

        </div>

      </section>


      {/* TEAM INTRO */}
      <section className="womens-intro">

        <div className="container womens-intro-grid">

          <div>
            <p className="section-label dark">THE TEAM</p>

            <h2>
              PROUD TO REPRESENT
              <br />
              DANDERHALL
            </h2>
          </div>

          <div className="womens-intro-copy">

            <p>
              Danderhall Miners Women's Team is an important part of our
              football club and our community.
            </p>

            <p>
              We want to provide a positive and welcoming environment where
              players can enjoy their football, develop as individuals and
              contribute to a strong team culture.
            </p>

            <p>
              As Danderhall Miners FC continues to grow, women's football
              will remain an important part of our ambition to provide
              opportunities across the community.
            </p>

          </div>

        </div>

      </section>


      {/* TEAM INFORMATION */}
      <section className="womens-info">

        <div className="container">

          <div className="womens-info-heading">
            <p className="section-label">TEAM INFORMATION</p>
            <h2>AT A GLANCE</h2>
          </div>

          <div className="womens-info-grid">

            <a href="/teams/womens/squad" className="womens-info-link">
  <InfoCard
    icon={<Users />}
    title="TEAM"
    text="Meet the Danderhall Miners Women's Team"
  />
</a>

            <InfoCard
              icon={<CalendarDays />}
              title="TRAINING"
              text="Training information coming soon"
            />

            <InfoCard
              icon={<MapPin />}
              title="HOME"
              text="Danderhall"
            />

            <InfoCard
              icon={<Trophy />}
              title="COMPETITION"
              text="League and competition information coming soon"
            />

          </div>

        </div>

      </section>


      {/* JOIN */}
      <section className="womens-join">

        <div className="container womens-join-grid">

          <div>
            <p className="section-label">JOIN THE TEAM</p>

            <h2>
              INTERESTED IN
              <br />
              PLAYING?
            </h2>
          </div>

          <div className="womens-join-copy">

            <p>
              Whether you're returning to football, looking for a new club
              or interested in getting involved with the team, we'd be
              delighted to hear from you.
            </p>

            <p>
              Get in touch with Danderhall Miners FC and we'll connect you
              with the team.
            </p>

            <a href="/contact" className="btn btn-yellow">
              Contact The Club <ArrowRight size={17} />
            </a>

          </div>

        </div>

      </section>


      {/* BACK TO TEAMS */}
      <section className="back-to-teams">

        <div className="container">
          <a href="/teams">
            ← Back to all teams
          </a>
        </div>

      </section>

    </main>
  );
}


function InfoCard({ icon, title, text }) {
  return (
    <div className="womens-info-card">

      <div className="womens-info-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

    </div>
  );
}
