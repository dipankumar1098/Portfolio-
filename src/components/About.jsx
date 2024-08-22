import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Deepan, a passionate Web developer with a keen eye for MERN
          Stack . <br/> With a background in Computer Science & Engineering, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <>
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div >
          <h2 className="text-2xl font-bold text-green-600 mb-4">Education</h2>
          <ul className="list-disc space-y-2">
            <li className="text-black">
              <p className="font-bold">College of Engineering,Bhubaneswar</p>
              <p>Computer Science & Engineering (B. Tech)</p>
              <p className="text-gray-600 text-sm">2021-2025</p>
            </li>
            <li className="text-black">
              <p className="font-bold">Jupiter Higher Secondary School,Bhubaneswar</p>
              <p>Intermediate in Science (+2)</p>
              <p className="text-gray-600 text-sm">2019-2021</p>
            </li>
          </ul>
        </div>

        <div className=" p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Experience</h2>
          <ul className="list-disc space-y-2">
            <li>
              <p className="font-bold">Greet Labs Pvt Ltd</p>
              <p>Fullstack Web Development - Bootcamp (MERN)</p>
              <p className="text-gray-600 text-sm">June 2024 - Present</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
        </>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
            <ul className="list-disc space-y-2">
             <li>
              <a href="https://drive.google.com/file/d/1y_E-7L7PsjYYGAyS0r-0SiX_KTv19n9b/view?usp=sharing" className="font-bold">Career Skill Certification</a>
              <p className="text-sm">Tata Consultancy Service</p>
              <p className="text-gray-600 text-sm">june 2023</p>
             </li>
             <li><a href="https://drive.google.com/file/d/14Vb4HU3ULz0gy399PR52RAafb6jqdLPj/view?usp=sharing" className="font-bold">Impactful Presentations Certification</a>
              <p className="text-sm">Tata Consultancy Service</p>
              <p className="text-gray-600 text-sm">july 2023</p>
             </li>
            </ul>
          </div>
          
          <div>
           <ul className="list-disc space-y-2">
            <li>
              <a href="https://drive.google.com/file/d/1dzshpqIRKCLtxIA9TfIpSprRQfnccaIm/view?usp=sharing" className="font-bold">MERN stack development</a>
              <p className="text-sm">Infosys Springboard</p>
              <p className="text-gray-600 text-sm">Oct 2023</p>
             </li>
            <li><p className="font-bold">Fullstack Web Development</p>
              <p className="text-sm">Greet Labs pvt Ltd.</p>
              <p className="text-gray-600 text-sm">2024</p>
            </li>
          </ul>
            </div>
            </div>
          </div>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Target Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative solutions that exceed client expectations and
          contribute positively to the digital landscape. <br />I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons. <br /> That's it...
        </p>
      </div>
    </div>
  );
}

export default About;
