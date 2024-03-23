import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-10 bg-neutral-100 dark:bg-neutral-800">
      <section className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        <a
          className="cursor-pointer	 whitespace-nowrap text-2xl font-semibold text-slate-700"
          onClick={() => router.replace("/")}
        >
          SHANE STUDIO
        </a>
        <nav className="hidden space-x-8 text-xl md:block">
          <Button variant="link" onClick={() => router.replace("/")}>
            Home
          </Button>
          <Button variant="link" onClick={() => router.push("/blog")}>
            Blog
          </Button>
          <Button variant="link" onClick={() => router.replace("about")}>
            About
          </Button>
        </nav>
      </section>
    </header>
  );
}
