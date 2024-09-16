import styles from "./page.module.css";
import Image from "next/image";
import ButtonLink from "@/app/_components/Buttonlink";
import NewsList  from "./_components/NewsList";
import{News} from "@/app/_libs/microcms"
/** 
type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};
*/

const data:{contents:News[]} = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "2",
      title: "当社CEOが業界TOP30に選出",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "3",
      title: "IPSJで発表しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
  ],
};

export default function HomePage() {
  const name = "世界"; // This needs to be inside the component if you're using it below
  const sliceData = data.contents.slice(0,2);
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で{name}を変える</h1>
          <p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニーです．</p>
        </div>
        <Image
          className={styles.bgimg} 
          src="/img-mv.jpg" 
          alt="Main visual"
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
