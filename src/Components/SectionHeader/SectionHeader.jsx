export const SectionHeader = ({ title, text }) => {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-slate-900 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl text-purple-100">{text}</p>
        </div>
      </div>
    </section>
  );
};
