
export function LandingHero() {
  return (
    <section className="w-full py-16 flex flex-col md:flex-row items-center justify-center gap-8 bg-gradient-to-br from-bg to-purple-100">
      <div className="flex-1 flex flex-col items-start px-6 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 font-inter leading-tight">
          Ace Your <span className="text-violet-600">Frontend Interviews</span>
          <br />
          with <span className="text-gradient-primary">FrontCops</span>
        </h1>
        <p className="text-gray-700 mb-6 text-lg">
          Practice theory, quizzes, coding challenges, and track your progress.
          FrontCops helps you master frontend interviews with real questions and instant feedback.
        </p>
        <a href="#features" className="mt-2 font-semibold text-white bg-primary py-3 px-6 rounded-xl shadow hover:scale-105 transition-transform duration-200">Explore Features</a>
      </div>
      <div className="flex-1 flex justify-center">
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
          alt="Frontend interview"
          className="rounded-2xl shadow-lg w-full max-w-md"
        />
      </div>
    </section>
  );
}
