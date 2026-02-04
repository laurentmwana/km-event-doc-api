import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">

      {/* Hero */}
      <main className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm mb-8">
            <FileText className="w-4 h-4" />
            <span>Official Documentation</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-6 text-balance">
            Guest-to-Guest Documentation
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-12 leading-relaxed text-pretty">
            Welcome to the official documentation for Guest-to-Guest, the
            intelligent SaaS platform for event and invitation management. This
            documentation covers everything from API endpoints to feature
            specifications.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Documentation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/docs/auth"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-24">
          <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
              <span className="text-lg">📚</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              API Reference
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Complete documentation of all API endpoints with code examples.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
              <span className="text-lg">🔐</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Authentication
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Guides for authentication and access token management.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
              <span className="text-lg">⚡</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Quick Start
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Quickly get started with our step-by-step integration guides.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p className="text-sm text-gray-500 dark:text-gray-500 text-center">
            © 2026 Guest-to-Guest. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
