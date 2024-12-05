import { motion } from "framer-motion";

export function Installation() {
    return (
      <section className="py-16 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">
        <div className="container mx-auto px-6 sm:px-10">
          <motion.h2
            className="text-4xl font-extrabold text-center sm:text-5xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Installation
          </motion.h2>
          <motion.p
            className="mt-6 text-md text-center text-gray-700 dark:text-gray-300 sm:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Get started by installing{" "}
            <span className="font-bold text-green-600 dark:text-green-400">
              phantom-request
            </span>{" "}
            via npm or yarn:
          </motion.p>
          <motion.div
            className="mt-10 bg-gray-100 dark:bg-gray-800 rounded-xl p-4 sm:p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="font-mono text-gray-800 dark:text-gray-100">NPM:</div>
            <pre className="text-lg font-mono bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 rounded-lg">
              <code className="block">
                <span className="text-green-600 dark:text-green-400">$</span> npm
                install phantom-request
              </code>
            </pre>
            <div className="font-mono text-gray-800 dark:text-gray-100">
              Yarn:
            </div>
            <pre className="text-lg font-mono bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 rounded-lg">
              <code className="block">
                <span className="text-green-600 dark:text-green-400">$</span> yarn
                add phantom-request
              </code>
            </pre>
          </motion.div>
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a
              href="/docs/intro"
              className="inline-block px-6 py-3 text-lg font-medium hover:no-underline hover:text-white text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 dark:text-black dark:bg-green-400 dark:hover:bg-green-500"
            >
              View Documentation 📚
            </a>
          </motion.div>
        </div>
      </section>
    );
  }