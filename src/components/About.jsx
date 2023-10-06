import transform from "../assets/image-transform.jpg";
import standOut from "../assets/image-stand-out.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about__card">
        <img src={transform} alt="image of an egg" className="card__img" />
        <div className="card__info inverse-order">
          <div>
            <h3 className="card__title">Transform your brand</h3>
            <p className="card__desc">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you
            </p>
            <a href="#" className="card__link card__link--transform">
              learn more
            </a>
          </div>
        </div>
      </div>
      <div className="about__card">
        <img src={standOut} alt="image of an milkshake" className="card__img" />
        <div className="card__info">
          <div>
            <h3 className="card__title">Stand out to the right audience</h3>
            <p className="card__desc">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </p>
            <a href="#" className="card__link card__link--standout">
              learn more
            </a>
          </div>
        </div>
      </div>
      <div className="services">
        <article className="service service--graphic">
          <div className="service__info">
            <h3 className="service__title">graphic design</h3>
            <p className="service__desc">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention.
            </p>
          </div>
        </article>
        <article className="service service--photography">
          <div className="service__info">
            <h3 className="service__title">photography</h3>
            <p className="service__desc">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
