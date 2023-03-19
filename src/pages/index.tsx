import Head from "next/head";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import Script from "next/script";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          portalId: "24295383",
          formId: "8577dd74-98c7-4979-8293-77dc2b51caf1",
          target: "#contact",
        });
      }
    });
  }, []);
  return (
    <>
      <Head>
        <title>Dakauann.DEV</title>
        <meta name="description" content="Personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <Script
          charSet="utf-8"
          type="text/javascript"
          src="//js.hsforms.net/forms/embed/v2.js"
        />
      </Head>
      <main>
        <header className="w-full h-96 flex gap-2 items-center mt-20">
          <div className="w-3/6">
            <h1 className="text-2xl font-bold ml-2 text-center">
              Hello, my name is <span className="text-red-500">Dakauann</span>.
              Im a <span className="text-red-500">Fullstack Developer</span>{" "}
              based in Brazil that loves working with technology.
            </h1>
          </div>
          <div className="w-3/6 ">
            <img
              src="https://avatars.githubusercontent.com/u/74578069?v=4"
              alt="Dakauann"
              className="lg:w-2/4 w-3/4 rounded-full mx-auto"
            />
          </div>
        </header>
        <h1 className="text-2xl font-bold ml-2 text-left border-b-4 border-b-primary w-max mt-20">
          Projects -{">"}
        </h1>
        <section
          className="w-full flex flex-wrap gap-2 px-2 justify-center"
          id="projects"
        >
          <div className="flex flex-col hover:bg-base-currentDarker p-2 duration-300 rounded cursor-pointer max-w-md">
            <div className="bg-gray-200 h-48 flex items-center justify-center">
              <img
                className="h-full"
                src={"/projects/lumin-ui.jpeg"}
                alt={`Image`}
              />
            </div>
            <div className="my-2">
              <h1 className="text-2xl font-bold ml-2 text-center">Lumin-ui</h1>

              <p className="text-center">
                A component class library made using tailwindcss. Its objective
                is to provide a simple and easy way to use class components and
                customize them.
              </p>
            </div>
            <div className="flex justify-center gap-2 mt-2">
              <button
                className="btn-ghost"
                onClick={() =>
                  (location.href = "https://github.com/Dakauann/lumin-ui")
                }
              >
                <AiFillGithub />
                Github
              </button>
              <button
                className="btn"
                onClick={() => (location.href = "https://lumin-ui.vercel.app")}
              >
                <AiOutlineLink />
                Live Demo
              </button>
            </div>
          </div>
          <div className="flex flex-col hover:bg-base-currentDarker p-2 duration-300 rounded cursor-pointe max-w-md cursor-pointer">
            <div className="bg-gray-200 h-48 flex items-center justify-center">
              <img
                className="h-full"
                src={"/projects/lumin-react.jpeg"}
                alt={`Image`}
              />
            </div>
            <div className="my-2">
              <h1 className="text-2xl font-bold ml-2 text-center">
                Lumin-ui (React)
              </h1>

              <p className="text-center">
                A react implementation of my library Lumin-ui. Its objective is
                to provide a simple and easy to use lumin-ui as a react
                "component" way.
              </p>
            </div>
            <div className="flex justify-center gap-2 mt-auto">
              <button
                className="btn-ghost"
                onClick={() =>
                  (location.href = "https://github.com/Dakauann/react-luminui")
                }
              >
                <AiFillGithub />
                Github
              </button>
              <button
                className="btn"
                onClick={() =>
                  (location.href =
                    "https://lumin-ui.vercel.app/components/react/buttons")
                }
              >
                <AiOutlineLink />
                Live Demo
              </button>
            </div>
          </div>
        </section>
        <h1 className="text-2xl font-bold ml-2 text-left border-b-4 border-b-primary w-max mt-20">
          Contact -{">"}
        </h1>
        <section
          className="w-9/12 mx-auto mt-10 flex flex-wrap gap-2 px-2 justify-center"
          id="contact"
        />
      </main>
    </>
  );
}
