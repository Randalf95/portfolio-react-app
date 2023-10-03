

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl font-bold">Hi, I´m Alejandro. Please take a look around.</p>
          </div>
          <div>
            <p>
            I have experience in developing web projects using technologies such as JavaScript, TypeScript, Python, NodeJS, Express, PostgreSQL, SQL, Prisma, Sequelize, React, Redux, and NextJS. My background as a finance student at the University of San Andrés has provided me with a platform to approach challenges strategically and analytically. I´m proactive and results-oriented and currently looking for new excitement challenges!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
