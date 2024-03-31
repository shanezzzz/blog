import { Image } from "@chakra-ui/react";

const linkList = [
  {
    icon: "/x.png",
    link: "https://twitter.com/shane33539731",
  },
  {
    icon: "/instagram.png",
    link: "https://www.instagram.com/shane_acho/",
  },
];

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
            <div className="absolute bottom-4 right-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-solid border-slate-50 bg-neutral-300">
              🔧
            </div>
          </div>
          <h1 className="text-center text-4xl font-extrabold text-slate-700">
            Shane
          </h1>
          <h2 className="mt-4 text-center text-xl text-slate-600">
            Full stack development engineer 🧑‍💻
          </h2>
          <div className="mt-4 flex flex-wrap items-center justify-center">
            {linkList.map((item) => (
              <a
                key={item.icon}
                className="cursor-pointer	mr-4 br-4 w-10 h-10"
                href={item.link}
                target="_bank"
              >
                <Image src={item.icon} alt={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
