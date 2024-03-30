const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <br />
      <p>
        "Sometimes it's the person no one imagines anything of who does the things that no one can imagine." - Alan Turing
        <br />
        <br />
        As a Fullstack Development Analyst, I dive headfirst into the digital creation world, driven by a fervent passion for delivering exceptional user experiences. My journey is guided by a deep commitment to finding the perfect synergy between design and functionality, where every pixel and line of code contributes to a cohesive and engaging experience.
        <br />
        <br />
        With a solid foundation in cutting-edge technologies such as NodeJS, NestJS, and SQL databases, I have the versatility and capability to navigate seamlessly through all layers of development. Whether designing elegant layouts or optimizing backend performance, I am always striving for excellence in every aspect of the development process.
        <br />
        <br />
        <strong>Key Skills and Knowledge</strong>
        
        <ul style={{
          marginTop: '1rem',
          marginLeft: '1rem',
        }}>
          <li>Senior Fullstack Web Development, with expertise in creating engaging and intuitive interfaces.</li>
          <li>Mastery of essential technologies including HTML, CSS, and JavaScript, allowing me to shape the appearance and interactivity of applications.</li>
          <li>Experience with Electron, GitHub, and Azure DevOps, ensuring effective collaboration and continuous development workflow.</li>
          <li>Proficiency in frameworks like ReactJS and NextJS, leveraging their ability to build modern and responsive applications.</li>
          <li>Strong knowledge of Bootstrap to streamline the development process and ensure a consistent experience across different devices.</li>
          <li>Competence in NodeJS and NestJS, enabling me to contribute to backend development when necessary.</li>
          <li>Experience working with MySQL databases, ensuring efficient and secure data handling.</li>
          <li>Practical knowledge in languages such as PHP, Kotlin, Python, TypeScript, and JavaScript, enabling a flexible approach to different projects and challenges.</li>
          <li>Ability to develop themes for WordPress using PHP, adding customization and functionality to web platforms.</li>
          <li>Capability to perform maintenance and enhancements on existing web applications, ensuring their continuous quality.</li>
          <li>Experience in graphic design, allowing me to incorporate visually appealing and functional elements into my projects.</li>
          <li>Specialization in responsive design, ensuring that the interfaces I create adapt seamlessly to a variety of devices and screen sizes.</li>
        </ul>
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
