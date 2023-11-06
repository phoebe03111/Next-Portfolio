const Button = ({ type = "button", title }) => {
  return (
    <button
      type={type}
      className="rounded-full border bg-primary text-white hover:text-secondary font-semibold px-6 py-4 my-4 w-fit"
    >
      {title}
    </button>
  );
};

export default Button;
