const Testimonial = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Decorative quote mark */}
      <div className="absolute top-12 left-6 md:left-20 text-9xl font-serif text-accent/10 leading-none select-none">
        &ldquo;
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <blockquote className="space-y-8">
          <h3 className="font-serif text-3xl md:text-5xl leading-tight text-foreground font-medium">
            "Collaborating with Manasvi was an incredible experience."
          </h3>

          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
              She captured the essence of our story with depth, emotion and honesty. Through her interviews and storytelling, she highlighted perspectives we’d never been able to express ourselves.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
              Her professionalism, curiosity and attention to detail brought our narrative to life — and reminded us why authentic journalism still matters.
            </p>
          </div>

          <footer className="pt-8 flex flex-col items-center gap-2">
            <div className="w-12 h-0.5 bg-accent/50 mb-2" />
            <cite className="not-italic text-sm font-medium tracking-widest uppercase text-foreground">
              Urvashi Patel
            </cite>
            <span className="text-xs text-muted-foreground font-medium">
              Shekunj Foundation
            </span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonial;
