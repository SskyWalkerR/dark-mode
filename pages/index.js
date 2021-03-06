import Head from "next/head";
import Content from "../components/Content";
import Hero from "../components/Hero";

export default function Home() {
    return (
        <div className="bg-white dark:bg-black">
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Hero />
                <Content />
            </div>
        </div>
    );
}
