import { Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center">
        <div className="mt-auto flex h-[75vh] flex-col items-center justify-center">
          <div className="relative w-48">
            <Image
              className="mb-2 h-48 w-48 rounded-full"
              width="192"
              height="192"
              alt="Qubt"
              src="/author.png"
            />
            <div className="absolute bottom-4 right-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-solid border-slate-50 bg-neutral-300 dark:bg-neutral-500">
              🔧
            </div>
          </div>
          <h1 className="text-center text-4xl font-extrabold text-slate-700 dark:text-slate-200">
            Shane
          </h1>
          <h2 className="mt-4 text-center text-xl text-slate-600 dark:text-slate-400">
            Full stack development engineer 🧑‍💻
          </h2>
          <div className="mt-4 flex flex-wrap items-center justify-center"></div>
        </div>
      </div>
    </main>
  );
}
