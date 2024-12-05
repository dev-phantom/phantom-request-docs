import { motion } from "framer-motion";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    console.log(siteConfig);
    return (
      <motion.header
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white dark:from-gray-100 dark:via-gray-50 dark:to-gray-200"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center py-32 px-5">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight sm:text-6xl dark:text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Simplify API Requests with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 dark:from-purple-500 dark:to-indigo-400">
              {siteConfig?.title||"Phantom Request"}
            </span>
          </motion.h1>
          <motion.p
            className="mt-5 text-lg sm:text-xl text-gray-300 dark:text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Effortless HTTP requests in one line of code—designed for developers
            who value simplicity and speed.
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              className="px-6 py-3 hover:no-underline rounded-lg text-lg font-medium bg-green-500 hover:bg-green-600 hover:text-white text-white shadow-lg"
              to="/docs/intro"
            >
              Get Started 🚀
            </Link>
            <Link
              className="px-6 py-3 rounded-lg no-underline hover:no-underline text-lg font-medium bg-gray-700 hover:bg-gray-800 text-white shadow-lg"
              to="https://github.com/dev-phantom/phantom-request"
            >
              View on GitHub 🌌
            </Link>
          </motion.div>
        </div>
      </motion.header>
    );
  }