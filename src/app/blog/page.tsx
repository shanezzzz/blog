"use client";

import { Card, CardBody, Text, Image, Stack, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const defaultArticleData = {
  imageUrl: "/author.png",
  title: "Hi, nice to meet you! 👋",
  context:
    "I am Shane, and I am glad you have come to browse my personal website. In the future, I will be posting my products and articles here.",
  id: "1",
};

const ArticleData1 = {
  imageUrl:
    "https://www.notion.so/images/page-cover/rijksmuseum_jansz_1637.jpg",
  title: "GO THE SEA",
  context: "-What’s the GTS? -For Freedom and Compound interest",
  id: "2",
};

export default function Blog() {
  const router = useRouter();
  const [articleList, setArticleList] = useState([defaultArticleData]);

  const handleGoDetails = (id: string) => {
    if (id === "2") {
      router.push(
        "https://pie-bassoon-564.notion.site/GTS-0865aea1001c4f9ea2d70cf1add6223f?pvs=4"
      );
    } else {
      router.push(`/blog/${id}`);
    }
  };

  useEffect(() => {
    setArticleList((prev) => prev.concat(ArticleData1));
  }, []);

  return (
    <main className="pb-32">
      <div className="justify-left mx-auto mt-8 flex max-w-screen-xl px-4">
        <article>
          <h1 className="text-4xl font-extrabold text-slate-700">Blog</h1>
          <div className="mt-2 text-lg text-slate-500"></div>
        </article>
      </div>
      <div className="mx-auto max-w-screen-xl">
        <div className="mt-8 grid grid-flow-row grid-cols-1 justify-items-center gap-8 px-4 lg:grid-cols-2">
          {articleList.map((item) => (
            <Card
              key={item.title}
              className="cursor-pointer"
              onClick={() => handleGoDetails(item.id)}
            >
              <CardBody>
                <Image
                  src={item.imageUrl}
                  style={{ width: 568, height: 568, objectFit: "cover" }}
                  alt="blogImage"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{item.title}</Heading>
                  <Text>{item.context}</Text>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
