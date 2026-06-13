import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="navigation flex h-40 space-x-10 bg-linear-to-b from-gray-700 via-fuchsia-300 to-fuchsia-100 py-8 px-4 text-3xl justify-center items-center">
      <Link
        href="/"
        className="text-gray-600 dark:text-gray-100 hover:text-gray-900 dark:hover:text-teal-500 transition-colors duration-200"
      >
        Home
      </Link>
      <Link
        href="/projects"
        className="text-gray-600 dark:text-gray-100 hover:text-gray-900 dark:hover:text-teal-500 transition-colors duration-200"
      >
        Portfolio
      </Link>
      <Link
        href="/skills"
        className="text-gray-600 dark:text-gray-100 hover:text-gray-900 dark:hover:text-teal-500 transition-colors duration-200"
      >
        Skills
      </Link>
      <Link
        href="#contact"
        className="text-gray-600 dark:text-gray-100 hover:text-gray-900 dark:hover:text-teal-500 transition-colors duration-200"
      >
        Contact
      </Link>
    </nav>
  );
};
