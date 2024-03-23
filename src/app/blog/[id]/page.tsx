"use client";

import { Image, Text } from "@chakra-ui/react";

export default function Article({ params }: { params: { id: string } }) {
  return (
    <main className="pb-24">
      <div className="justify-left mx-auto mt-8 flex max-w-screen-md px-4">
        <article>
          <h1 className="text-4xl font-extrabold text-slate-700 dark:text-slate-200">
            Hi, nice to meet you! 👋
          </h1>
          <h2 className="mt-4 text-2xl text-slate-500 dark:text-slate-400">
            Nice to meet you!
          </h2>
          <div className="mb-4 mt-2 text-sm text-slate-500 dark:text-slate-400">
            Sat Mar 23, 2024
          </div>
          <Image
            src="/author.png"
            alt="blogImage"
            borderRadius="lg"
            className="mb-8"
          />
          <Text className="mb-2 leading-7" fontSize="lg">
            I am Shane, and I am glad you have come to browse my personal
            website. In the future, I will be posting my products and articles
            here.
          </Text>
        </article>
      </div>
    </main>
  );
}
