import Header from "../components/Header";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Heart,
  MessageCircle,
  AlertTriangle,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "Safeguarding",
  description:
    "Safeguarding and wellbeing information for Danderhall Miners Football Club.",
};

export default function SafeguardingPage() {
  return (
    <main>

      <Header />

      {/* HERO */}
      <section className="safeguarding-hero">
        <div className="safeguarding-hero-overlay" />

        <div className="container safeguarding-hero-content">
          <ShieldCheck size={42} />

          <p className="eyebrow">SAFEGUARDING & WELLBEING</p>

          <h1>
            A SAFE PLACE
            <br />
            FOR EVERYONE
          </h1>

          <p>
            Everyone involved with Danderhall Miners Football Club should
            feel safe, respected, included and supported.
          </p>

          <a href="#report-concern" className="btn btn-yellow">
            Report a Concern <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="safeguarding-intro">
        <div className="container safeguarding-intro-grid">

          <div>
            <p className="section-label dark">OUR COMMITMENT</p>

            <h2>
              PEOPLE
              <br />
              COME FIRST
            </h2>
          </div>

          <div className="safeguarding-intro-copy">
            <p>
              Danderhall Miners FC is committed to creating a safe,
              positive and inclusive environment for everyone who takes
              part in our club.
            </p>

            <p>
              Safeguarding is everyone's responsibility. Players, coaches,
              volunteers, parents, carers and supporters all have a role
              to play in maintaining the standards and culture we expect
              across the club.
            </p>

            <p>
              Particular care is taken to protect children, young people
              and adults who may be at greater risk of harm or abuse.
            </p>
          </div>

        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="safeguarding-principles">
        <div className="container">

          <div className="safeguarding-heading">
            <p className="section-label">OUR APPROACH</p>
            <h2>SAFE. RESPECTED. SUPPORTED.</h2>
          </div>

          <div className="safeguarding-card-grid">

            <SafeguardingCard
              icon={<ShieldCheck />}
              title="SAFE"
              text="We work to provide environments and activities where people can participate safely."
            />

            <SafeguardingCard
              icon={<Heart />}
              title="RESPECTED"
              text="Everyone should be treated with dignity, fairness and respect."
            />

            <SafeguardingCard
              icon={<Users />}
              title="INCLUSIVE"
              text="Our club welcomes people from across our community and promotes equality and inclusion."
            />

            <SafeguardingCard
              icon={<MessageCircle />}
              title="HEARD"
              text="Concerns should be listened to, taken seriously and handled appropriately."
            />

          </div>
        </div>
      </section>

      {/* REPORTING */}
      <section id="report-concern" className="safeguarding-report">
        <div className="container safeguarding-report-grid">

          <div className="safeguarding-report-heading">
            <p className="section-label dark">SPEAKING UP</p>

            <h2>
              HAVE A
              <br />
              CONCERN?
            </h2>
          </div>

          <div className="safeguarding-report-content">

            <p className="safeguarding-lead">
              If something doesn't feel right, please speak up.
            </p>

            <p>
              If you have a safeguarding or wellbeing concern involving
              someone connected with Danderhall Miners FC, please raise it
              with the club so that the appropriate action can be taken.
            </p>

            <div className="safeguarding-contact-box">
              <ShieldCheck size={28} />

              <div>
                <span>CLUB WELFARE & SAFEGUARDING</span>
                <strong>Contact details coming soon</strong>
                <p>
                  Safeguarding contact information will be published here.
                </p>
              </div>
            </div>

            <p className="safeguarding-note">
              You do not need to be certain that something is wrong before
              raising a concern. If you are worried about someone's safety
              or wellbeing, it is appropriate to speak up.
            </p>

          </div>

        </div>
      </section>

      {/* IMMEDIATE DANGER */}
      <section className="safeguarding-emergency">
        <div className="container safeguarding-emergency-inner">

          <AlertTriangle size={35} />

          <div>
            <span>IMMEDIATE DANGER</span>

            <h2>IF SOMEONE IS AT IMMEDIATE RISK</h2>

            <p>
              If you believe someone is in immediate danger or a crime is
              taking place, contact the emergency services by calling 999.
            </p>
          </div>

        </div>
      </section>

      {/* STANDARDS */}
      <section className="safeguarding-standards">
        <div className="container">

          <div className="safeguarding-heading safeguarding-heading-dark">
            <p className="section-label dark">CLUB STANDARDS</p>
            <h2>EVERYONE HAS A PART TO PLAY</h2>

            <p>
              Our safeguarding approach is supported by clear expectations
              around behaviour, welfare and how people representing the club
              conduct themselves.
            </p>
          </div>

          <div className="safeguarding-standard-grid">

            <Standard
              number="01"
              title="PLAYERS"
              text="Treat teammates, opponents, coaches and officials with respect."
            />

            <Standard
              number="02"
              title="COACHES & VOLUNTEERS"
              text="Create safe, positive environments and put participant welfare first."
            />

            <Standard
              number="03"
              title="PARENTS & CARERS"
              text="Support positive participation and raise concerns when something does not feel right."
            />

            <Standard
              number="04"
              title="SUPPORTERS"
              text="Help us create a welcoming and respectful environment around our teams."
            />

          </div>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="safeguarding-privacy">
        <div className="container safeguarding-privacy-inner">

          <Lock size={32} />

          <div>
            <p className="section-label">CONFIDENTIALITY</p>

            <h2>CONCERNS WILL BE TREATED SERIOUSLY</h2>

            <p>
              Information relating to safeguarding concerns will be handled
              sensitively and shared only where appropriate to protect
              individuals and allow concerns to be managed properly.
            </p>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="safeguarding-final">
        <div className="container safeguarding-final-inner">

          <div>
            <p className="section-label dark">OUR CLUB</p>
            <h2>FOOTBALL SHOULD BE A POSITIVE EXPERIENCE.</h2>

            <p>
              Together we can make sure Danderhall Miners FC remains a
              welcoming, supportive and safe club for everyone.
            </p>
          </div>

          <a href="/our-club" className="btn btn-dark">
            About Our Club <ArrowRight size={17} />
          </a>

        </div>
      </section>

    </main>
  );
}


function SafeguardingCard({ icon, title, text }) {
  return (
    <div className="safeguarding-card">
      <div className="safeguarding-card-icon">
        {icon}
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}


function Standard({ number, title, text }) {
  return (
    <div className="safeguarding-standard">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
