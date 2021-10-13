

export default function Resume() {
  return (
    <div className="p-4 h-screen text-gray-600 text-3xl">
      <h1>Resume</h1>
      <section className="flex items-center">Education
        <h2>Full-Stack Web Developer</h2>
        <ul className="list-disc">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Git</li>
          <li>Jquery</li>
          <li>Nodejs</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>Heroku</li>
        </ul>
        <h2>History Teacher</h2>
        <ul className="list-disc">
          <li>Master Degree on Research on Teaching and learning the Social Sciences</li>
          <li>History degree: research specialization</li>
        </ul>
        <h2>Languages</h2>
        <ul className="list-disc">
          <li>Spanish</li>
          <li>English</li>
          <li>Italian</li>
        </ul>
      </section>
      <section>
        <button
          className="text-base font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-40"
          type="button"
        ><a href='https://drive.google.com/file/d/1t01Alijv7Ix9RMZyFEVx4L_FmlwOMeyE/view?usp=sharing' target="_blank" rel="noreferrer" >Download My Resume</a></button>

      </section>


    </div>
  );
}
