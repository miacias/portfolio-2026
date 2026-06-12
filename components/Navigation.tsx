import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="navigation flex space-x-10 bg-teal-600 py-8 px-4 text-3xl justify-center ">
      <Link
        href="/"
        className="text-gray-600 dark:text-gray-100 hover:text-gray-900 dark:hover:text-fuchsia-200 transition-colors duration-200"
      >
        Home
      </Link>
      <Link
        href="/projects"
        className="text-gray-600 dark:text-gray-100 hover:text-gray-900 dark:hover:text-fuchsia-200 transition-colors duration-200"
      >
        Portfolio
      </Link>
      <Link
        href="/skills"
        className="text-gray-600 dark:text-gray-100 hover:text-gray-900 dark:hover:text-fuchsia-200 transition-colors duration-200"
      >
        Skills
      </Link>
      <Link
        href="#contact"
        className="text-gray-600 dark:text-gray-100 hover:text-gray-900 dark:hover:text-fuchsia-200 transition-colors duration-200"
      >
        Contact
      </Link>
    </nav>
  );
};
