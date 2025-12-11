import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type FeatureItem = {
  emoji: string;
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    emoji: '⚡',
    title: 'Easy to Remember',
    description: (
      <>
        Simple class names like <code>ta-c</code> for Text Align Center.
        No more guessing - the naming is intuitive!
      </>
    ),
  },
  {
    emoji: '📱',
    title: 'Works Everywhere',
    description: (
      <>
        Built-in responsive classes for phones, tablets & desktops.
        Mobile-first approach that scales beautifully.
      </>
    ),
  },
  {
    emoji: '🎨',
    title: 'Customizable',
    description: (
      <>
        Change colors, spacing, and more with CSS variables.
        Make it yours without touching the source.
      </>
    ),
  },
];

function Feature({emoji, title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className={styles.featureEmoji}>{emoji}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>
          A <strong>micro</strong>, utility-first CSS framework for modern UIs
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            Get Started
          </Link>
          <Link
            className="button button--outline button--lg margin-left--md"
            href="https://github.com/dufeut/uizy">
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function ComparisonSection() {
  return (
    <section className={styles.comparison}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          What is Uizy?
        </Heading>
        <p className="text--center margin-bottom--lg">
          Uizy is a <strong>utility-first CSS framework</strong> that makes styling super easy!
          Instead of writing CSS from scratch, you just add class names to your HTML.
        </p>
        <div className="row">
          <div className="col col--6">
            <div className={styles.comparisonBox}>
              <Heading as="h4">❌ The Old Way (writing CSS)</Heading>
              <pre className={styles.codeBlock}>{`.my-button {
  padding: 16px;
  margin-top: 8px;
  text-align: center;
  border-radius: 8px;
}`}</pre>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.comparisonBox}>
              <Heading as="h4">✅ The Uizy Way (just add classes!)</Heading>
              <pre className={styles.codeBlock}>{`<button class="pa-4 mt-2 ta-c br-2">
  Click me!
</button>`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          Quick Start
        </Heading>
        <p className="text--center margin-bottom--lg">
          Add Uizy to your project in seconds:
        </p>
        <div className="row">
          <div className="col col--6">
            <div className={styles.installOption}>
              <Heading as="h4">📦 NPM</Heading>
              <pre className={styles.codeBlock}>npm install @dufeut/uizy</pre>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.installOption}>
              <Heading as="h4">🔗 CDN</Heading>
              <pre className={styles.codeBlock}>{`<link
  rel="stylesheet"
  href="https://unpkg.com/@dufeut/uizy/dist/index.css"
>`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          Why Love Uizy?
        </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Utility-First CSS Framework`}
      description="A micro, utility-first CSS framework for modern UIs. Tiny footprint, limitless possibilities.">
      <HomepageHeader />
      <main>
        <ComparisonSection />
        <QuickStartSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
