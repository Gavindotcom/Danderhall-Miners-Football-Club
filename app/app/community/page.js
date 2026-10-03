import {
  ArrowRight,
  Heart,
  Users,
  PersonStanding,
  HandHeart,
  ShieldCheck,
  House,
} from "lucide-react";

export const metadata = {
  title: "Our Community",
  description:
    "Danderhall Miners Football Club - rooted in the history of Danderhall and building opportunities for our growing community.",
};

export default function CommunityPage() {
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
            <a href="/teams">Teams</a>
            <a className="active" href="/community">Community</a>
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
      <section className="community-page-hero">

        <div className="community-page-hero-overlay" />

        <div className="container community-page-hero-content">

          <p className="eyebrow">
            DANDERHALL MINERS FOOTBALL CLUB
          </p>

          <h1>
            ROOTED IN
            <br />
            DANDERHALL.
            <br />
            <span>BUILT FOR ITS FUTURE.</span>
          </h1>

          <p className="community-hero-copy">
            Danderhall has always been a community with a strong identity.
            As our area enters one of the biggest periods of growth in its
            history, we want to make sure community remains at the heart of it.
          </p>

          <a href="#our-story" className="btn btn-yellow">
            Our Community Story <ArrowRight size={17} />
          </a>

        </div>

      </section>


      {/* HERITAGE */}
      <section id="our-story" className="community-heritage">

        <div className="container community-heritage-grid">

          <div>
            <p className="section-label dark">
              OUR HERITAGE
            </p>

            <h2>
              PROUD OF
              <br />
              WHERE WE
              <br />
              COME FROM.
            </h2>
          </div>

          <div className="community-heritage-copy">

            <p>
              Danderhall's identity has been shaped by its mining heritage
              and the communities that grew around the local collieries.
              That history created more than employment. It created
              connection, resilience, friendships and a strong sense
              of belonging.
            </p>

            <p>
              The landscape around us is changing, but we believe those
              values remain every bit as important today.
            </p>

            <p>
              Danderhall Miners Football Club carries that heritage in its
              name. As the club develops, we want to preserve what makes
              Danderhall special while creating something that welcomes
              the people and families who are now making this area
              their home.
            </p>

          </div>

        </div>

        <div className="container community-story-line">

          <span>DANDERHALL</span>
          <strong>→</strong>
          <span>MINING</span>
          <strong>→</strong>
          <span>COMMUNITY</span>
          <strong>→</strong>
          <span>FOOTBALL</span>
          <strong>→</strong>
          <span>FUTURE</span>

        </div>

      </section>


      {/* GROWTH */}
      <section className="community-growth">

        <div className="container">

          <div className="community-growth-heading">

            <p className="section-label">
              A COMMUNITY TRANSFORMING
            </p>

            <h2>
              OUR COMMUNITY
              <br />
              IS GROWING.
            </h2>

            <p>
              Danderhall and Shawfair are experiencing extraordinary change.
              New neighbourhoods, schools, green spaces and community
              infrastructure are creating a new chapter for our area.
            </p>

          </div>


          <div className="community-stats">

            <Stat
              number="3,990"
              title="HOMES"
              text="Within the Shawfair masterplan"
            />

            <Stat
              number="1,000+"
              title="DELIVERED"
              text="New homes already delivered"
            />

            <Stat
              number="1,500+"
              title="GROWING"
              text="Completed, committed or under construction"
            />

            <Stat
              number="1,800"
              title="PUPILS"
              text="Planned capacity for Shawfair Community Campus"
            />

          </div>

        </div>

      </section>


      {/* PEOPLE BEHIND THE NUMBERS */}
      <section className="community-people">

        <div className="container community-people-inner">

          <p className="community-big-statement">
            THOSE AREN'T SIMPLY
            <br />
            HOUSING NUMBERS.
          </p>

          <h2>
            THEY REPRESENT THOUSANDS
            <br />
            OF PEOPLE WHO WILL NEED
            <br />
            SOMEWHERE TO BELONG.
          </h2>

          <p>
            Children looking for their first football team. Parents willing
            to coach or volunteer. Women and girls looking for opportunities
            to play. Older residents looking to stay active and connected.
            Families who have lived in Danderhall for generations alongside
            families who have only just arrived.
          </p>

          <strong>
            That's the opportunity we see for Danderhall Miners Football Club.
          </strong>

        </div>

      </section>


      {/* ONE COMMUNITY */}
      <section className="one-community">

        <div className="container one-community-grid">

          <div>
            <p className="section-label dark">
              ONE COMMUNITY
            </p>

            <h2>
              OLD DANDERHALL.
              <br />
              NEW DANDERHALL.
              <br />
              <span>ONE COMMUNITY.</span>
            </h2>
          </div>

          <div className="one-community-copy">

            <p>
              Growth brings enormous opportunity, but building houses
              doesn't automatically build a community.
            </p>

            <p>
              Community comes from the places where people meet each other,
              where children make friends, where volunteers give their time
              and where people begin to feel that they belong.
            </p>

            <p>
              We believe a strong community football club can be one of
              those places.
            </p>

            <p>
              Our ambition isn't to distinguish between people who have
              lived here for generations and people arriving in the new
              developments around us. It is to create one club representing
              one growing community.
            </p>

          </div>

        </div>

      </section>


      {/* MORE THAN FOOTBALL */}
      <section className="community-purpose">

        <div className="container">

          <div className="community-purpose-heading">

            <p className="section-label">
              MORE THAN FOOTBALL
            </p>

            <h2>A CLUB WITH A PURPOSE.</h2>

          </div>


          <div className="community-purpose-grid">

            <PurposeCard
              icon={<Users />}
              title="YOUTH FOOTBALL"
              text="Create opportunities for more local children to play, develop, make friends and enjoy football."
            />

            <PurposeCard
              icon={<PersonStanding />}
              title="WOMEN & GIRLS"
              text="Build sustainable pathways and opportunities for women and girls throughout the club."
            />

            <PurposeCard
              icon={<Heart />}
              title="HEALTH & WELLBEING"
              text="Use football and physical activity to support healthier lives, confidence and positive wellbeing."
            />

            <PurposeCard
              icon={<ShieldCheck />}
              title="INCLUSION"
              text="Create opportunities for people who may otherwise face barriers to sport or community life."
            />

            <PurposeCard
              icon={<HandHeart />}
              title="VOLUNTEERING"
              text="Develop coaches, volunteers and future community leaders while giving local people opportunities to contribute."
            />

            <PurposeCard
              icon={<House />}
              title="CONNECTION"
              text="Create activities that bring people together, tackle isolation and strengthen relationships across our community."
            />

          </div>

        </div>

      </section>


      {/* GROWING WITH PURPOSE */}
      <section className="community-purpose-growth">

        <div className="container community-purpose-growth-grid">

          <div>

            <p className="section-label dark">
              OUR APPROACH
            </p>

            <h2>
              GROWING
              <br />
              WITH PURPOSE.
            </h2>

          </div>

          <div className="community-purpose-growth-copy">

            <blockquote>
              We will not measure growth only by the number of teams
              wearing the badge.
            </blockquote>

            <p>
              Our ambition is significant, but growth has to be sustainable.
              We want to create more teams and opportunities when we have
              the coaches, volunteers, safeguarding, governance, facilities
              and finances required to provide them properly.
            </p>

            <p>
              Today that journey is already underway through our Women's
              Team and our youth football.
            </p>

            <p>
              Tomorrow it could mean more boys' and girls' teams, adult
              football, recreational opportunities, disability football,
              walking football and programmes designed around the needs
              of our community.
            </p>

            <strong>
              We don't simply want to become a bigger football club.
              We want to become a more valuable part of our community.
            </strong>

          </div>

        </div>

      </section>


      {/* FACILITIES VISION */}
      <section className="community-facilities">

        <div className="community-facilities-overlay" />

        <div className="container community-facilities-content">

          <p className="section-label">
            OUR FUTURE
          </p>

          <h2>
            BUILDING SOMETHING
            <br />
            THAT LASTS.
          </h2>

          <p>
            As Danderhall and Shawfair grow, the club has an opportunity
            to think beyond the next season.
          </p>

          <p>
            Our long-term ambition is to help create sustainable football
            and community facilities that can serve local people throughout
            the year — a home for our teams, but also a place for coaching,
            volunteering, community activity, wellbeing programmes
            and partnerships.
          </p>

          <p className="community-facilities-emphasis">
            We want Danderhall Miners Football Club to play its part
            in that future.
          </p>

          <p className="community-facilities-final">
            Not by forgetting where we came from.
            <br />
            <strong>By building on it.</strong>
          </p>

          <a href="/facilities" className="btn btn-yellow">
            Our Facilities Vision <ArrowRight size={17} />
          </a>

        </div>

      </section>


      {/* FINAL STATEMENT */}
      <section className="community-final">

        <div className="container community-final-inner">

          <img
            src="/images/badge.png"
            alt="Danderhall Miners Football Club"
          />

          <p>THIS IS OUR HOME.</p>
          <p>THIS IS OUR COMMUNITY.</p>
          <p>THIS IS OUR CLUB.</p>

          <span>
            Football. Community. Opportunity.
          </span>

        </div>

      </section>

    </main>
  );
}


function Stat({ number, title, text }) {
  return (
    <div className="community-stat">

      <strong>{number}</strong>

      <h3>{title}</h3>

      <p>{text}</p>

    </div>
  );
}


function PurposeCard({ icon, title, text }) {
  return (
    <article className="community-purpose-card">

      <div className="community-purpose-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

    </article>
  );
}
