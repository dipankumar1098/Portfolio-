import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpeg";
import bootstrap from "../../public/bootstrap.png";
import tailwind from "../../public/Tailwind.jpeg";
import javascript from "../../public/javascript.png";
import react from "../../public/Mern.jpeg";
import git from "../../public/git.jpeg";
import java from "../../public/java.png";
import sql from "../../public/sql.png";
import api from "../../public/postman.png";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "Javascript",
    },
    {
      id: 4,
      logo: bootstrap,
      name: "Bootstrap",
    },
    {
      id: 5,
      logo: tailwind,
      name: "Tailwindcss",
    },
    {
      id: 6,
      logo: react,
      name: "mern Stack",
    },
    {
      id: 7,
      logo: java,
      name: "Java",
    },
    {
      id: 8,
      logo: sql,
      name: "mySQL",
    },
    {
      id: 9,
      logo: git,
      name: "GitHub",
    },
    {
      id: 10,
      logo: api,
      name: "Postman API",
    }
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="  ">
          I've been working in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
