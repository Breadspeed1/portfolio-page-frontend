import type { Metadata } from "next";
import "./globals.css";
import { Theme } from "@radix-ui/themes";

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
      <Theme 
        panelBackground="translucent"
        scaling="100%"
        radius="medium"
      >
        <body>
          {children}
        </body>
      </Theme>
    </html>
  );
}
