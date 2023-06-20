import React from "react";
// import LanguageIcons from './LanguageIcons';


const Bio = ({ collapsed }) => {
  return (
    <div>
      <div id="main" className={collapsed ? "collapsed" : "expanded"}>
        <div className="inner">

          {/* <!-- Header --> */}
          <header id="header">
            <a href="index.html" className="logo"><strong>Catherine Sawyer</strong></a>
            <ul className="icons">
              <li><a href="https://www.linkedin.com/in/catherine-sawyer/" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
              <li><a href="https://github.com/crsawyer314" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
            </ul>
          </header>

          {/* <!-- Content --> */}
          <section>
            <header className="main">
              <h1>Catherine Sawyer</h1>
              <p>Technical educator, people manager, software developer, and creator</p>
              
            </header>
            <br />
              <section>
                <p>I am passionate about increasing diversity through code.</p>
                <p>I am a highly accomplished and versatile professional with expertise in technical education, software development, and curriculum design. Throughout my career, I have demonstrated a strong commitment to promoting diversity in the tech industry and have made significant contributions in various roles. I excel in curriculum development, instruction, and leadership positions, where I effectively oversee teams, secure grants, and drive impactful initiatives. My technical proficiency spans a wide range of technologies, including Python, Java, React, Django, and AWS. I am known for my exceptional leadership skills, instructional expertise, and dedication to fostering inclusive learning environments. With a deep passion for diversity, education, and technological innovation, I strive to make a lasting impact in the tech industry.</p>
              
                {/* <p>Languages:</p>
                <LanguageIcons />
                <br/>
                <p>You can download a copy of my resume <a href="../assets/Catherine_Resume.pdf" download="Catherine_Resume.pdf">here</a>.</p> */}
              </section>
            <hr className="major" />
            
            <h2>Brigham Young University</h2>
            <p>While working at <a href="https://acme.byu.edu/">Brigham Young University's Applied and Computational Math program</a>, I worked as a teaching assistant and curriculum developer. I focused on Python and data science fundamentals, including writing labs on <a href="https://acme.byu.edu/00000179-af53-d74f-a3ff-bfdb22530000/webscraping2020-pdf">web scraping</a> and <a href="https://acme.byu.edu/00000179-af53-d74f-a3ff-bfdb22520001/webcrawling2020-pdf">web crawling</a>. My favorite lab covered <a href="https://acme.byu.edu/00000179-af25-d5e1-a97b-bf6512fd0000/markov2020-pdf">Markov Models</a>, culminating in creating a text generator utilizing text from a variety of sources, including Yoda quotes and Taylor Swift's 1989 album.</p>
            <p>In addition worked as a research assistant in two different groups. One was focused on developing algorithms for root finding of large polynomials. While there, I earned a $1500 BYU ORCA grant and presented our findings at several different mathematical research conferences. The other was focused on utilizing big data techniques to find the "Optimal Pizza" in Provo, Utah. I presented our findings at a math research conference, and was also featured on the local news channel.</p>
            <p>I also <a href="https://scholarsarchive.byu.edu/studentpub_uht/132/">published a thesis</a> with the BYU Honors Department. This paper analyzed over 20 years of <a href="https://www.cdc.gov/nchs/ahcd/index.htm">the NAMCS dataset</a> to explore patterns of opiate prescribing and utilized machine learning and data analysis techniques to determine specific demographics and diagnoses that led to more frequent opiate prescriptions.</p>
            <p>Publications:</p>
            <ul>
              <li><a href="https://scholarsarchive.byu.edu/studentpub_uht/132/">An Analysis of Opiate Prescription for Chronic Degenerative Disease and Other Pain Syndromes</a></li>
              <li><a href="http://jur.byu.edu/?p=24132">Random Polynomial Interpolation from Known Roots in the Multivariate Case</a></li>
              <li><a href="https://acme.byu.edu/00000179-af25-d5e1-a97b-bf6512fd0000/markov2020-pdf">Markov Models</a> (co-author)</li>
              <li><a href="https://acme.byu.edu/00000179-af53-d74f-a3ff-bfdb22530000/webscraping2020-pdf">Web Scraping</a> (co-author)</li>
              <li><a href="https://acme.byu.edu/00000179-af53-d74f-a3ff-bfdb22520001/webcrawling2020-pdf">Web Crawling</a> (co-author)</li>
            </ul>
            <hr className="major" />

            <h2>The Coding School</h2>
            <p>While working at <a href="https://the-cs.org/">The Coding School</a>, I worked with many teams across different verticals. I headed several teams, working on content development and enhancement for tracks including Python, Java, Machine Learning, AI, Web Development, Computational Biology, and more. The Coding School is focused on helping students from under-represented backgrounds (LGBTQ+, BIPOC, neurodiverse, rural location, and more) in STEM to gain the experience and knowledge necessary to excel in technical fields. While there, I helped to secure <a href="https://blog.the-cs.org/featured/the-coding-school-awarded-3m-grant-from-department-of-defense-through-national-defense-education-program-to-empower-next-generation-of-artificial-intelligence-ai-leaders/">a $3MM NSF grant</a> to develop a year-long Machine Learning course.</p>
            <p>I also spearheaded the summer camp initiative, designed to help students with little or no prior coding experience to develop skills over the course of one or two weeks, culminating in showcases of projects that they had built. I built and led camps, including training and managing instructional assistants, in Web Design, Machine Learning, Python, and Java, and more.</p>

            <hr className="major" />

            <h2>ThriveDX (Formerly HackerU)</h2>
            <p>As the Associate Program Director (Program Director of Curriculum) at <a href="https://thrivedx.com/">ThriveDX</a>, I oversaw a team of 8 Curriculum Developers in designing and building a 10-month program covering full-stack softare development, covering technologies including HTML, CSS, JavaScript, React and Redux, SQL, MongoDB, RESTful apps, Python, and basic cloud computing and DevOps.</p>
            <p>In addition to overseeing curriculum development, I collaborated closely with Instructional Design and Graphic Design teams, facilitated communication with part-time instructors, conducted interviews for instructors and curriculum developers, and played a vital role in maintaining the course catalog. With a focus on Agile methodologies, I ensured the quality and up-to-date content of our Software Development bootcamp through continuous integration and deployment processes.</p>

            <hr className="major" />

            <h2>Aerial Data Labs</h2>
            <p><a href="https://www.aerialdatalabs.com/">Aerial Data Labs</a>, a subsidiary of <a href="https://wrsweb.com/">Western Refinery Services</a>, focuses on intuitive drone & data services.</p>
            <p>As a Senior Software Engineer and founding member of Aerial Data Labs, I played a pivotal role in shaping the direction and roadmap of the application. I collaborated with the Chief Product Officer to prioritize new features based on their impact and ease of implementation. One notable achievement was enhancing the usability and security of the API, resulting in a seamless deployment process and improved user experience. Additionally, I developed critical features, including creating a new microservice on AWS to optimize tiling geoTiff files, significantly reducing processing time and eliminating downtime and errors. I also led the transition from Wix to a self-hosted landing page, improving customer optics and streamlining operations. As a senior team member, I provided mentorship, supported the onboarding process, fostered a collaborative environment, and created comprehensive code documentation to enhance the team's effectiveness.</p>
            <p><strong>Experience:</strong></p>
            <ul>
              <li>Collaborated with the Chief Product Officer to refine the product backlog and prioritize new features based on impact and implementation feasibility.</li>
              <li>Enhanced the usability and security of the API by removing outdated code, implementing user permission checks, and updating the database structure, resulting in a smooth deployment process and improved user experience.</li>
              <li>Developed critical features, including a new microservice for tiling geoTiff files, optimizing processing time by 2-3x and eliminating downtime and errors. Leveraged AWS SQS for queueing and improved the service's stability and performance.</li>
              <li>Led the transition from Wix to a self-hosted landing page, creating a visually identical and responsive design. Consolidated domains and reduced operational costs, improving customer experience.</li>
              <li>Created comprehensive code documentation (following Google-style guidelines) for the entire ADL codebase, enabling the team to work more effectively by understanding the codebase thoroughly.</li>
              <li>Contributed to the interview process by assisting in the creation of job descriptions, participating in interviews, and reviewing technical coding exercises.</li>
              <li>Mentored and supported junior engineers, providing guidance on task selection, effective communication, work-life balance, and career growth.</li>
              <li>Developed comprehensive onboarding documentation, refining it over time based on feedback and personal experimentation. Encouraged collaboration in updating and maintaining documentation for future reference.</li>
            </ul>

            <hr className="major" />

            <h2>Other Current Work</h2>
            <p>In addition to my full-time job, I am currently obtaining my Masters of Science degree in Computer Science from Georgia Institute of Technology, serving as a <a href="https://www.cityofbanks.org/index.asp?SEC={0DF3E9D5-4694-4A9E-932A-D78B0605C805}">City Councilor for the City of Banks</a> in Banks, Oregon (term started January 2023), and expanding the course offerings on this website. I am also pursuing my hobbies of quilting, pyrography (wood burning), and others (see more on my hobbies page).</p>
            <p>Publications:</p>
            <ul>
              <li><a href="http://hdl.handle.net/1853/69986">JavaScript for the Adult Novice</a></li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Bio;
