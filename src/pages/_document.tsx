import { Html, Head, Main, NextScript } from "next/document";
import { useContext, useEffect, useState } from "react";

export default function Document() {
  const [theme, setTheme] = useState("light-mode");

  useEffect(() => {
    const userPrefersDark =
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      !localStorage.getItem("theme");
    const hasUserSelectedDark = localStorage.getItem("theme") === "dark";

    if (hasUserSelectedDark) {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
      return;
    }

    if (userPrefersDark) {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  }, []);

  return (
    <Html lang="en">
      <Head />
      <body className={theme}>
        <nav className="w-full h-12 shadow-sm">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center">
              <button
                className="btn-ghost text-lg font-bold ml-2 uppercase"
                onClick={() => {
                  location.href = "/";
                }}
              >
                Dakauann.Dev
              </button>
            </div>
            <div className="ml-auto px-2 flex gap-5">
              <a
                href="#about-me"
                className="font-semibold hover:border-b-red-500 border-b-4 border-transparent"
              >
                About me
              </a>
              <a
                href="#projects"
                className="font-semibold hover:border-b-red-500 border-b-4 border-transparent"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="font-semibold hover:border-b-red-500 border-b-4 border-transparent"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
