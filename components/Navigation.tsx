// import Link from "next/link";

// export const Navigation = () => {
//   return (
//     <nav className="navigation flex h-40 space-x-10 bg-linear-to-b from-gray-700 via-fuchsia-300 to-fuchsia-100 py-8 px-4 text-3xl justify-center items-center">
//       <Link
//         href="/"
//         className="text-gray-600 dark:text-gray-100 hover:text-gray-900 dark:hover:text-teal-500 transition-colors duration-200"
//       >
//         Home
//       </Link>
//       <Link
//         href="/projects"
//         className="text-gray-600 dark:text-gray-100 hover:text-gray-900 dark:hover:text-teal-500 transition-colors duration-200"
//       >
//         Portfolio
//       </Link>
//       <Link
//         href="/skills"
//         className="text-gray-600 dark:text-gray-100 hover:text-gray-900 dark:hover:text-teal-500 transition-colors duration-200"
//       >
//         Skills
//       </Link>
//       <Link
//         href="/contact"
//         className="text-gray-600 dark:text-gray-100 hover:text-gray-900 dark:hover:text-teal-500 transition-colors duration-200"
//       >
//         Contact
//       </Link>
//     </nav>
//   );
// };

import Link from "next/link";

const linkClassName =
  "text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-teal-400 transition-colors duration-200";

export const Navigation = () => {
  return (
    <nav className="navigation bg-linear-to-b from-gray-700 via-fuchsia-300 to-fuchsia-100 px-4 py-4 sm:py-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 text-xl sm:flex-row sm:gap-8 sm:text-2xl lg:text-3xl">
        <Link href="/" className={linkClassName}>
          Home
        </Link>
        <Link href="/projects" className={linkClassName}>
          Portfolio
        </Link>
        <Link href="/skills" className={linkClassName}>
          Skills
        </Link>
        <Link href="/contact" className={linkClassName}>
          Contact
        </Link>
      </div>
    </nav>
  );
};