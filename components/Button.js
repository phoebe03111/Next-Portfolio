const Button = ({ title }) => {
  return (
    <button
      tyope="button"
      className="rounded-full border bg-primary text-white hover:text-secondary  font-semibold px-6 py-4 my-4"
    >
      {title}
    </button>
  );
};

export default Button;
