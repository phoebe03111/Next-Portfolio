import Link from "next/link";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col items-center py-4">
      {links.map((link) => (
        <li key={link.key}>
          <Link
            href={link.href}
            className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-gray-200"
            >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
