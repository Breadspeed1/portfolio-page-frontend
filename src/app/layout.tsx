import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Aiden Voth",
  description: "Aiden Voth's Portfolio Page!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <body>
          <ThemeProvider defaultTheme="light" attribute="class">
            <Theme 
              panelBackground="translucent"
              scaling="110%"
              radius="medium"
              accentColor="red"
              grayColor="gray"
            >
              {/*<ThemePanel/>*/}
              {children}
            </Theme>
          </ThemeProvider>
        </body>
      </html>
  );
}
