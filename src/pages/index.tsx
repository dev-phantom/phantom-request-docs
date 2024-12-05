import { motion } from "framer-motion";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

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
            Phantom Request
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
            to="https://github.com/your-repo-link"
          >
            View on GitHub 🌌
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}

function Features() {
  const featureList = [
    {
      title: "🚀 Single-Line Requests",
      description:
        "Perform HTTP requests in one line of code. No hassle, no boilerplate.",
    },
    {
      title: "🔒 Automatic Axios Integration",
      description:
        "Leverage the power of Axios for flexible and reliable HTTP requests.",
    },
    {
      title: "⚡ Real-Time Data Fetching",
      description: "Automatically fetch the latest data after POST requests.",
    },
    {
      title: "📂 File Uploads",
      description:
        "Effortlessly upload files (images, PDFs) with Cloudinary integration.",
    },
    {
      title: "🛠️ Token Management",
      description: "Handle custom headers and secure authorization seamlessly.",
    },
    {
      title: "🚪 Logout and Redirection",
      description: "Easily clear cookies, local storage, and redirect users.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-5">
        <motion.h2
          className="text-3xl font-bold text-center sm:text-4xl dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {featureList.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Installation() {
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
          className="mt-6 text-lg text-center text-gray-700 dark:text-gray-300 sm:text-xl"
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
          className="mt-10 bg-gray-100 dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg"
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
          <div className="font-mono text-gray-800 dark:text-gray-100">Yarn:</div>
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
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 dark:text-black dark:bg-green-400 dark:hover:bg-green-500"
          >
            View Documentation 📚
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function CallToAction() {
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
          className="mt-6 inline-block px-6 py-3 text-lg font-medium bg-black rounded-lg shadow-md hover:bg-gray-900"
          to="/docs/intro"
        >
          Get Started Now
        </Link>
      </div>
    </motion.section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Simplify API Requests | ${siteConfig.title}`}
      description="Phantom Request makes HTTP requests easy, fast, and secure."
    >
      <HomepageHeader />
      <main>
        <Features />
        <Installation />
        <CallToAction />
      </main>
    </Layout>
  );
}
