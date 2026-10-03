import Header from "../components/Header";
import {
  ArrowRight,
  Users,
  UserPlus,
  HandHeart,
  Handshake,
  Mail,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "Contact & Get Involved",
  description:
    "Contact Danderhall Miners Football Club and find out how to get involved as a player, coach, volunteer, sponsor or community partner.",
};

export default function ContactPage() {
  return (
    <main>

      <Header />

      {/* HERO */}
      <section className="contact-page-hero">
        <div className="contact-page-overlay" />

        <div className="container contact-page-hero-content">
          <p className="eyebrow">GET INVOLVED</p>

          <h1>
            BE PART OF
            <br />
            OUR CLUB
          </h1>

          <p>
            Whether you want to play, coach, volunteer, support the club
            or work with us in the community, we'd love to hear from you.
          </p>

          <a href="#contact-options" className="btn btn-yellow">
            Get Involved <ArrowRight size={17} />
          </a>
        </div>
      </section>


      {/* INTRO */}
      <section className="contact-intro">
        <div className="container contact-intro-grid">

          <div>
            <p className="section-label dark">DANDERHALL MINERS FC</p>

            <h2>
              THERE'S A PLACE
              <br />
              FOR EVERYONE
            </h2>
          </div>

          <div className="contact-intro-copy">
            <p>
              A successful community football club is built by far more
              than the players on the pitch.
            </p>

            <p>
              Players, parents, coaches, volunteers, supporters, local
              businesses and community organisations all have an important
              part to play in the future of Danderhall Miners FC.
            </p>

            <p>
              If you'd like to get involved, start a conversation with us.
            </p>
          </div>

        </div>
      </section>


      {/* GET INVOLVED OPTIONS */}
      <section id="contact-options" className="contact-options">
        <div className="container">

          <div className="contact-options-heading">
            <p className="section-label">GET INVOLVED</p>
            <h2>HOW CAN WE HELP?</h2>
          </div>

          <div className="contact-options-grid">

            <ContactOption
              icon={<Users />}
              title="JOIN A TEAM"
              text="Interested in playing for Danderhall Miners? Get in touch about current and future playing opportunities."
            />

            <ContactOption
              icon={<UserPlus />}
              title="COACH WITH US"
              text="Help us create more football opportunities by joining our growing coaching team."
            />

            <ContactOption
              icon={<HandHeart />}
              title="VOLUNTEER"
              text="There are plenty of ways to support the club away from coaching and playing."
            />

            <ContactOption
              icon={<Handshake />}
              title="SPONSOR & PARTNER"
              text="Support our teams, facilities and community ambitions through a partnership with the club."
            />

          </div>

        </div>
      </section>


      {/* CONTACT DETAILS */}
      <section className="contact-details">
        <div className="container contact-details-grid">

          <div className="contact-details-copy">
            <p className="section-label dark">CONTACT THE CLUB</p>

            <h2>
              START A
              <br />
              CONVERSATION
            </h2>

            <p>
              Tell us what you're getting in touch about and we'll make sure
              your enquiry reaches the right person within the club.
            </p>

            <div className="contact-detail-item">
              <Mail size={22} />

              <div>
                <span>EMAIL</span>
                <strong>Club email coming soon</strong>
              </div>
            </div>

            <div className="contact-detail-item">
              <MapPin size={22} />

              <div>
                <span>LOCATION</span>
                <strong>Danderhall, Midlothian</strong>
              </div>
            </div>
          </div>


          <div className="contact-enquiry-box">

            <p className="section-label">ENQUIRIES</p>

            <h3>WHAT ARE YOU CONTACTING US ABOUT?</h3>

            <div className="contact-enquiry-list">

              <Enquiry title="PLAYING FOR THE CLUB" />
              <Enquiry title="COACHING" />
              <Enquiry title="VOLUNTEERING" />
              <Enquiry title="SPONSORSHIP" />
              <Enquiry title="COMMUNITY PARTNERSHIPS" />
              <Enquiry title="FACILITIES" />
              <Enquiry title="GENERAL CLUB ENQUIRY" />

            </div>

            <p className="contact-enquiry-note">
              Direct contact details and online enquiry options will be
              added here as the club's communication channels are finalised.
            </p>

          </div>

        </div>
      </section>


      {/* COMMUNITY */}
      <section className="contact-community">
        <div className="contact-community-overlay" />

        <div className="container contact-community-content">

          <p className="section-label">OUR COMMUNITY</p>

          <h2>
            FOOTBALL.
            <br />
            COMMUNITY.
            <br />
            OPPORTUNITY.
          </h2>

          <p>
            Our ambition is to create a football club that people across
            Danderhall can feel part of — whether they ever kick a ball
            or not.
          </p>

          <a href="/community" className="btn btn-yellow">
            Our Community <ArrowRight size={17} />
          </a>

        </div>
      </section>


      {/* FINAL */}
      <section className="contact-final">
        <div className="container contact-final-inner">

          <div>
            <p className="section-label dark">DANDERHALL MINERS FC</p>

            <h2>BE PART OF WHAT COMES NEXT.</h2>

            <p>
              Our club is growing. Our community is growing. And there are
              more opportunities than ever to get involved.
            </p>
          </div>

          <a href="/teams" className="btn btn-dark">
            Explore Our Teams <ArrowRight size={17} />
          </a>

        </div>
      </section>

    </main>
  );
}


function ContactOption({ icon, title, text }) {
  return (
    <div className="contact-option-card">
      <div className="contact-option-icon">
        {icon}
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}


function Enquiry({ title }) {
  return (
    <div className="contact-enquiry-item">
      <span>{title}</span>
      <ArrowRight size={17} />
    </div>
  );
}
