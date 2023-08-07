

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
              I´m a Full Stack Web Developer with experience in developing web
              projects using technologies such as JavaScript, React, Redux,
              Node, Express, PostgreSQL, SQL, and Sequelize. Background in
              finance as a student at the Universidad de San Andrés. Extensive
              musical training as a guitarist and singer, with notable
              participation in the Cuerdos Vocales ensemble. Strategic and
              analytical thinker. English proficiency level: C2 Proficient.
              Seeking opportunities to apply my passion for programming and
              problem-solving skills in a collaborative environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
