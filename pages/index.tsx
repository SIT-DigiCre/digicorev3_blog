import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

type Props = {};
export default function Home() {
  return (
    <div>
      <Head>
        <title>デジコアブログ</title>
      </Head>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    return { props: {} };
  } catch (e) {
    return { props: {} };
  }
};
