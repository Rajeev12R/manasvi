const TestimonialsGrid = () => {
  const testimonials = [
    {
      quote: "Her words don’t just inform — they move you.",
      text: "Working with Manasvi was a reminder of what journalism should be. She brings sensitivity, research, and a powerful sense of humanity into every story. Her coverage for our platform sparked genuine conversation and engagement.",
      author: "Kirti Verma",
      company: "Project Management Executive, Shekunj Foundation"
    },
    {
      quote: "She captures emotion through every medium.",
      text: "From voiceovers to anchoring, Manasvi brings energy and authenticity to every project. Her clarity, tone, and preparation set a professional standard that elevates the entire team’s work.",
      author: "Simmi Ma'am",
      company: "HR, My FM 94.3"
    },
    {
      quote: "Her curiosity and honesty make her stories unforgettable.",
      text: "Manasvi doesn’t just write — she investigates, listens, and makes people feel heard. Her reporting has added immense depth to our local coverage, combining data with real human experiences.",
      author: "Aman vyas",
      company: "Journalist, The Journalist"
    },
    {
      quote: "A storyteller with rare empathy and precision.",
      text: "Manasvi’s work consistently stands out — not just for her writing, but for her ability to understand people and tell their stories with care. Her articles for our foundation helped us connect deeply with our readers and donors.",
      author: "Bhavy Diwedi",
      company: "Editor, Publicat"
    },
  ];

  return (
    <section className="py-20 px-6 bg-cream">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-serif text-2xl">
                "{testimonial.quote}"
              </h3>
              
              <p className="leading-relaxed">
                {testimonial.text}
              </p>
              
              <p className="text-sm font-medium tracking-wide uppercase pt-2">
                {testimonial.author} / {testimonial.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;
