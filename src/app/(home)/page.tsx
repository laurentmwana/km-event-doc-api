import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
        Guest-to-Guest Documentation
      </h1>

      <p className="text-lg mb-8 text-gray-800 dark:text-gray-300 max-w-2xl">
        Welcome to the official documentation for Guest-to-Guest, the
        intelligent SaaS platform for event and invitation management. This
        documentation covers everything from API endpoints to feature
        specifications.
      </p>

      <div className="flex items-center gap-4">
        <Link
          href="/docs"
          className="p-3 bg-gray-400 dark:bg-gray-100 text-white dark:text-black border border-gray-500 rounded-lg text-lg font-semibold hover:shadow-lg transition-all"
        >
          Documentation
        </Link>
         <Link
          href="/docs/auth"
          className="p-3 bg-gray-400 dark:bg-gray-100 text-white dark:text-black border border-gray-500 rounded-lg text-lg font-semibold hover:shadow-lg transition-all"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
