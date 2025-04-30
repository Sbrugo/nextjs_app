import Link from "next/link";

export const NavBar = () => (
  <nav className="flex justify-center gap-8 py-4 bg-slate-100 sticky top-0 shadow-md">
    <Link
      href="/jobs"
      className="text-gray-700 hover:text-gray-900 font-medium"
    >
      Jobs
    </Link>
    <Link
      href="/resources"
      className="text-gray-700 hover:text-gray-900 font-medium"
    >
      Resources
    </Link>
    <Link
      href="/information"
      className="text-gray-700 hover:text-gray-900 font-medium"
    >
      Information
    </Link>
  </nav>
);
