import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, {siteTitle} from '../components/layout';
import {getSortedPostsData} from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home ({ allPostsData }) {
    return (
        <Layout home>
          {/* Keep the existing code here */}
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hello, My name is Valentino and I am currently working on building side projects</p>
                <p>
                  (This is a sample website - you'll be building a site like this on {' '}
                  <a href="https://nextjs.org/learn">Our Next.js Tutorial</a>.)
                </p>
            </section>
          {/* Add this <section> tag below the existing <section> tag */}
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small>
                    <Date dateString={date}/>
                </small>
                </li>
              ))}
            </ul>
          </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}