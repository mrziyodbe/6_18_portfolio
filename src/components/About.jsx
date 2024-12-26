import React from "react";

export default function About() {
  return (
    <section className="mt-52 text-gray-800" id="about">
      <p className="text-4xl text-center font-extrabold p-5">About</p>
      <hr />
      <div className="bg-[#6c8ce2] mt-16 px-20 py-32 bg-opacity-70 mb-16 rounded-lg hover:scale-[103%] hover:backdrop-blur-lg transition-transform duration-300">
        <h2 className="py-10 font-bold">Company 2018 - 2020</h2>
        <p className="text-white">
          From 2018 to 2020, I worked at XYZ Corporation, where I gained
          valuable experience in software development and project management.
          During my tenure, I was responsible for leading a team of developers
          to create innovative software solutions. I also played a key role in
          improving the company's project management processes, which resulted
          in a 20% increase in project delivery efficiency. Additionally, I
          mentored junior developers and conducted code reviews to ensure
          high-quality code standards.
        </p>
      </div>
      <div className="bg-[#6c8ce2] px-16 py-24 bg-opacity-80 rounded-lg hover:scale-105 hover:backdrop-blur-md transition-transform duration-300">
        <h2 className="py-8 font-semibold">Company 2020 - 2022</h2>
        <p className="text-white">
          From 2020 to 2022, I worked at DEF Solutions, where I specialized in
          front-end development and user experience design. During this period,
          I led the redesign of the company's main product, resulting in a 25%
          increase in user engagement. I also implemented new design systems and
          collaborated closely with the back-end team to ensure seamless
          integration of front-end components. My efforts contributed to a more
          intuitive and visually appealing user interface, which was
          well-received by both clients and stakeholders.
        </p>
      </div>
      <div className="bg-[#6c8ce2] px-16 py-24 bg-opacity-80 rounded-lg hover:scale-105 hover:backdrop-blur-md transition-transform duration-300">
        <h2 className="py-8 font-semibold">Company 2022 - 2023</h2>
        <p className="text-white">
          From 2022 to 2023, I worked at ABC Tech, where I further honed my
          skills in full-stack development and cloud computing. I was
          instrumental in migrating the company's infrastructure to the cloud,
          which improved scalability and reduced costs by 30%. I also led the
          development of several key projects, including a real-time data
          analytics platform that provided valuable insights to clients. My role
          involved collaborating with cross-functional teams, ensuring seamless
          integration of new technologies, and maintaining high standards of
          code quality through rigorous testing and code reviews.
        </p>
      </div>
    </section>
  );
}
