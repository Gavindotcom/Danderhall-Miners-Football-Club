import Header from "../components/Header";
import {
  ArrowRight,
  Newspaper,
  Users,
  Heart,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Latest News",
  description:
    "Latest news, updates and stories from Danderhall Miners Football Club.",
};

const news = [
  {
    category: "CLUB NEWS",
    title: "Building the Future of Danderhall Miners FC",
    text:
      "An exciting new chapter for our football club as we build a stronger, sustainable community club for Danderhall.",
    icon: <TrendingUp />,
    href: "/our-club",
  },
  {
    category: "COMMUNITY",
    title: "Our Community Vision",
    text:
      "As Danderhall and Shawfair continue to grow, we want our football club to provide a place where people can participate, volunteer and belong.",
    icon: <Heart />,
    href: "/community",
  },
  {
    category: "YOUTH FOOTBALL",
    title: "Growing Our Youth Section",
    text:
      "Creating more opportunities for young players to play, develop and enjoy football within their local community.",
    icon: <Users />,
    href: "/teams/2015s",
  },
];

export default function NewsPage() {
  return (
    <main>

      <Header />

      {/* HERO */}
      <section className="news-page-hero">
        <div className="news-page-overlay" />

        <div className="container news-page-hero-content">

          <Newspaper size={42} />

          <p className="eyebrow">DANDERHALL MINERS FC</p>

          <h1>
            LATEST
            <br />
            NEWS
          </h1>

          <p>
            Club updates, community stories, team news and everything
            happening across Danderhall Miners Football Club.
          </p>

          <a href="#club-news" className="btn btn-yellow">
            From The Club <ArrowRight size={17} />
          </a>

        </div>
      </section>


      {/* INTRO */}
      <section className="news-page-intro">

        <div className="container news-page-intro-grid">

          <div>
            <p className="section-label dark">FROM THE CLUB</p>

            <h2>
              OUR CLUB.
              <br />
              OUR STORIES.
            </h2>
          </div>

          <div className="news-page-intro-copy">

            <p>
              Danderhall Miners FC is growing and there is plenty happening
              both on and off the pitch.
            </p>

            <p>
              This is where we'll share the latest news from our teams,
              community activity, club development, facilities and the
              people helping move Danderhall Miners forward.
            </p>

          </div>

        </div>

      </section>


      {/* NEWS */}
      <section id="club-news" className="news-directory">

        <div className="container">

          <div className="news-directory-heading">

            <p className="section-label">LATEST STORIES</p>

            <h2>FROM DANDERHALL MINERS</h2>

          </div>

          <div className="news-page-grid">

            {news.map((story) => (
              <NewsStory
                key={story.title}
                category={story.category}
                title={story.title}
                text={story.text}
                icon={story.icon}
                href={story.href}
              />
            ))}

          </div>

        </div>

      </section>


      {/* WHAT YOU'LL FIND */}
      <section className="news-content-types">

        <div className="container">

          <div className="news-content-heading">

            <p className="section-label dark">KEEP UP TO DATE</p>

            <h2>
              MORE THAN
              <br />
              MATCH RESULTS
            </h2>

            <p>
              As the club develops, this page will become the home for
              stories from across Danderhall Miners FC.
            </p>

          </div>


          <div className="news-type-grid">

            <NewsType
              number="01"
              title="TEAM NEWS"
              text="Updates from our women's, youth and future teams."
            />

            <NewsType
              number="02"
              title="COMMUNITY"
              text="Stories about the people, organisations and initiatives around our club."
            />

            <NewsType
              number="03"
              title="CLUB DEVELOPMENT"
              text="Updates on the growth and development of Danderhall Miners FC."
            />

            <NewsType
              number="04"
              title="FACILITIES"
              text="Progress and developments around our home and future facilities."
            />

          </div>

        </div>

      </section>


      {/* COMMUNITY FEATURE */}
      <section className="news-community-feature">

        <div className="news-community-overlay" />

        <div className="container news-community-content">

          <p className="section-label">OUR COMMUNITY</p>

          <h2>
            SOMETHING
            <br />
            TO SHARE?
          </h2>

          <p>
            Our club is built around its people. If there's a story,
            achievement or community initiative connected to Danderhall
            Miners FC that we should know about, get in touch.
          </p>

          <a href="/contact" className="btn btn-yellow">
            Contact The Club <ArrowRight size={17} />
          </a>

        </div>

      </section>


      {/* FINAL */}
      <section className="news-final">

        <div className="container news-final-inner">

          <div>
            <p className="section-label dark">FOLLOW OUR JOURNEY</p>

            <h2>THE NEXT CHAPTER IS JUST BEGINNING.</h2>

            <p>
              Follow the development of our teams, club, facilities and
              community as Danderhall Miners FC continues to grow.
            </p>
          </div>

          <a href="/teams" className="btn btn-dark">
            Our Teams <ArrowRight size={17} />
          </a>

        </div>

      </section>

    </main>
  );
}


function NewsStory({ category, title, text, icon, href }) {
  return (
    <article className="news-page-card">

      <div className="news-page-card-icon">
        {icon}
      </div>

      <span>{category}</span>

      <h3>{title}</h3>

      <p>{text}</p>

      <a href={href}>
        Find Out More <ArrowRight size={16} />
      </a>

    </article>
  );
}


function NewsType({ number, title, text }) {
  return (
    <div className="news-type-card">

      <span>{number}</span>

      <h3>{title}</h3>

      <p>{text}</p>

    </div>
  );
}
