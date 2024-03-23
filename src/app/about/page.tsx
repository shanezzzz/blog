"use client";

import { Image, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <main>
      <div className="mx-auto mb-2 mt-12 flex max-w-screen-xl flex-col items-center justify-center">
        <div className="relative w-48">
          <Image
            className="mb-2 h-48 w-48 rounded-full"
            width="192"
            height="192"
            alt="Qubt"
            src="/author.png"
          />
          <div className="absolute bottom-4 right-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-solid border-slate-50 bg-neutral-300 dark:bg-neutral-500">
            ☕️
          </div>
        </div>
        <h1 className="text-center text-4xl font-extrabold text-slate-700 dark:text-slate-200">
          Shane Studio
        </h1>
        <h2 className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400">
          Full stack development engineer 🧑‍💻
        </h2>
      </div>
      <div className="justify-left mx-auto mt-8 flex max-w-screen-lg px-4">
        <article>
          <h1 className="mb-4 text-4xl font-extrabold text-slate-700 dark:text-slate-200">
            Biography
          </h1>
          <div className="prose prose-slate break-words text-lg text-slate-700 dark:prose-invert prose-pre:max-w-[90vw] md:prose-pre:max-w-screen-md dark:text-slate-200">
            <Text className="mb-2 leading-7" fontSize="lg">
              I am a full-stack software development engineer with 5 years of
              experience in frontend development. My main tech stack includes
              React.js, Next.js, Nest.js, and Vue.js.
            </Text>
          </div>
        </article>
      </div>
    </main>
  );
}
