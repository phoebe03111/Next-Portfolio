import Link from "next/link";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col items-center gap-4 py-4 bg-primary text-white text-lg absolute top-16 w-full h-fit">
      {links.map((link) => (
        <li key={link.key}>
          <Link href={link.href} className="hover:text-secondary">{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
