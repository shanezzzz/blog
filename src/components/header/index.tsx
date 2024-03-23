import {
  Button,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  useDisclosure,
  DrawerCloseButton,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header className="sticky top-0 z-10 bg-neutral-100">
      <section className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        <a
          className="cursor-pointer	 whitespace-nowrap text-2xl font-semibold text-slate-700"
          onClick={() => router.replace("/")}
        >
          SHANE STUDIO
        </a>
        <div
          className="h-8 w-8 cursor-pointer text-3xl md:hidden"
          onClick={onOpen}
        >
          <HamburgerIcon />
        </div>
        <nav className="hidden space-x-8 text-xl md:block">
          <Button variant="link" onClick={() => router.replace("/")}>
            Home
          </Button>
          <Button variant="link" onClick={() => router.push("/blog")}>
            Blog
          </Button>
          <Button variant="link" onClick={() => router.replace("/about")}>
            About
          </Button>
        </nav>
      </section>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen} isFullHeight>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody
            onClick={onClose}
            className="flex justify-center items-center"
          >
            <div className="flex flex-col h-1/3 justify-around items-center">
              <Button variant="link" onClick={() => router.replace("/")}>
                Home
              </Button>
              <Button variant="link" onClick={() => router.push("/blog")}>
                Blog
              </Button>
              <Button variant="link" onClick={() => router.replace("/about")}>
                About
              </Button>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </header>
  );
}
