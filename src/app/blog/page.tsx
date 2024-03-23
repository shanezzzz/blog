"use client";

import { Card, CardBody, Text, Image, Stack, Heading } from "@chakra-ui/react";
import { useState } from "react";

const defaultArticleData = {
  imageUrl: "/author.png",
  title: "Hi, nice to meet you! 👋",
  context:
    "I am Shane, and I am glad you have come to browse my personal website. In the future, I will be posting my products and articles here.",
};

export default function Blog() {
  const [articleList, setArticleList] = useState([defaultArticleData]);

  return (
    <main className="pb-32">
      <div className="justify-left mx-auto mt-8 flex max-w-screen-xl px-4">
        <article>
          <h1 className="text-4xl font-extrabold text-slate-700 dark:text-slate-200">
            Blog
          </h1>
          <div className="mt-2 text-lg text-slate-500 dark:text-slate-400"></div>
        </article>
      </div>
      <div className="mx-auto max-w-screen-xl">
        <div className="mt-8 grid grid-flow-row grid-cols-1 justify-items-center gap-8 px-4 lg:grid-cols-2">
          {articleList.map((item) => (
            <Card key={item.title} className="cursor-pointer">
              <CardBody>
                <Image src={item.imageUrl} alt="blogImage" borderRadius="lg" />
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
