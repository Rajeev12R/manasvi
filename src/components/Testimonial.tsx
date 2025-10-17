const Testimonial = () => {
  return (
    <section className="py-20 px-6 bg-teal-light">
      <div className="container mx-auto max-w-4xl text-center">
        <blockquote className="space-y-6">
          <h3 className="font-serif text-3xl md:text-4xl leading-relaxed">
            "Collaborating with Manasvi was an incredible experience."
          </h3>

          <p className="text-lg leading-relaxed">
            She captured the essence of our story with depth, emotion and honesty. Through her interviews and storytelling, she highlighted perspectives we’d never been able to express ourselves.
          </p>
          <p className="text-lg leading-relaxed">
            Her professionalism, curiosity and attention to detail brought our narrative to life — and reminded us why authentic journalism still matters.
          </p>


          <footer className="pt-4">
            <p className="text-sm font-medium tracking-wide uppercase">
              Urvashi Patel / <span className="font-bold">Shekunj Foundation</span>
            </p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonial;
