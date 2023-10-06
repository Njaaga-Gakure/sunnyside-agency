import emily from "../assets/image-emily.jpg";
import thomas from "../assets/image-thomas.jpg";
import jennie from "../assets/image-jennie.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h4 className="testimonials__title">client testimonials</h4>
      <div className="testimonials__grid">
        <article className="testimonial">
          <div className="testimonial__header">
            <img src={emily} alt="emily" className="profile__img" />
          </div>
          <div className="testimonial__body">
            <p className="testimonial__desc">
              We put out trust in Sunnyside and they delivered. making sure our
              needs were met, and deadlines were always hit.
            </p>
          </div>
          <div className="testimonial__footer">
            <h5 className="testimonial__name">Emily R.</h5>
            <span className="testimonial__role">marketing director</span>
          </div>
        </article>
        <article className="testimonial">
          <div className="testimonial__header">
            <img src={thomas} alt="thomas" className="profile__img" />
          </div>
          <div className="testimonial__body">
            <p className="testimonial__desc">
              Sunnyside's enthusiasm coupled with their keen interest in our
              brand's success made it a satisfying and enjoyable experience.
            </p>
          </div>
          <div className="testimonial__footer">
            <h5 className="testimonial__name">Thomas S.</h5>
            <span className="testimonial__role">chief operating officer</span>
          </div>
        </article>
        <article className="testimonial">
          <div className="testimonial__header">
            <img src={jennie} alt="jennie" className="profile__img" />
          </div>
          <div className="testimonial__body">
            <p className="testimonial__desc">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
          </div>
          <div className="testimonial__footer">
            <h5 className="testimonial__name">Jennie F.</h5>
            <span className="testimonial__role">business owner</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
