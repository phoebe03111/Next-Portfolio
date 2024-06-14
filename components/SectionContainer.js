const SectionContainer = ({ children }) => {
  return (
    <section className="h-[80vh] flex flex-col justify-center space-y-4 md:space-y-0 md:flex-row md:justify-between items-center">
      {children}
    </section>
  );
};

export default SectionContainer;
