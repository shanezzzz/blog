"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Header from "@/components/header";

const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        colorScheme: "#334155",
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "#f5f5f5",
        color: "#334155",
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      {children}
    </ChakraProvider>
  );
}
