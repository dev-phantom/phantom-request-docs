import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { HomepageHeader } from "../components/home/header";
import { Features } from "../components/home/features";
import { Installation } from "../components/home/installation";
import { CallToAction } from "../components/home/callToAction";

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
