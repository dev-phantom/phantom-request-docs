import { motion } from "framer-motion";
import Link from "@docusaurus/Link";

export function CallToAction() {
    return (
      <motion.section
        className="py-16 bg-gradient-to-br from-green-500 to-blue-500 dark:from-purple-500 dark:to-indigo-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center px-5">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to streamline your API requests?
          </h2>
          <p className="mt-4 text-lg">
            Join the growing community of developers making their code cleaner and
            more efficient with Phantom Request.
          </p>
          <Link
            className="mt-6 inline-block px-6 py-3  hover:no-underline hover:text-white text-lg font-medium bg-black rounded-lg shadow-md hover:bg-gray-900"
            to="/docs/intro"
          >
            Get Started Now
          </Link>
        </div>
      </motion.section>
    );
  }