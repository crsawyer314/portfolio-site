import React from 'react';

const Resumes = ({ collapsed }) => {
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
              <h1>Resumes and Interviewing</h1>
            </header>
            <p>
                In today's competitive job market, it is crucial to leverage professional networking platforms and well-crafted resumes to enhance your chances of finding the right job. <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and traditional resumes play complementary roles in showcasing your skills, experience, and qualifications to potential employers. This page will walk you through some of the key elements you can use to help improve your visibility to recruiters and land a job.
            </p>

            <h3>The Importance of LinkedIn:</h3>
            <p>
                LinkedIn offers a multitude of advantages for job seekers. Here are two key reasons to use this platform:
            </p>
            <ol>
                <li>
                    Networking: LinkedIn enables you to connect with professionals in your field, including recruiters and hiring managers. By cultivating a strong network, you increase your visibility and gain access to potential job opportunities. <strong>You should aim to have at least 500 connections</strong>. However, making connections takes time, and you should try to mostly connect with people you actually know, through school, family, or best of all work. Connections can endorse you for skills and also be a great resource to reach out to for potential job opportunities. The more connections you have, the more visible you will be to recruiters looking for your skills.
                </li>
                <li>
                    Professional Branding: Your LinkedIn profile acts as your professional online presence. It allows you to showcase your skills, experience, and achievements in a comprehensive and visually appealing manner. A well-optimized LinkedIn profile can make a positive impression on recruiters and potential employers and increase your chances of being noticed.
                </li>
            </ol>

            <h3>Crafting an Effective LinkedIn Profile:</h3>
            <p>
                To make the most of LinkedIn, follow these essential steps:
            </p>
            <ol>
                <li>
                    Complete Your Profile: Provide accurate and up-to-date information, including a professional profile picture and headline, summary, work experience, education, skills, and endorsements.
                    <ul>
                      <li>Profile picture and headline: These are the first things that recruiters and others will see. Make sure that your profile picture is professional. One way to gauge whether a picture is professional is to imagine showing it to your grandma. For your headline, it is common to use your current job title or the title that you would like to have.</li>
                      <li>Education: Only list your GPA if it is 3.5 on a 4.0 scale or higher. Only include an unweighted GPA. It is fine to include unfinished degrees, especially if you have an anticipated graduation date. Certifications, bootcamps, etc can go here or in achievements, but should absolutely be included.</li>
                      <li>Experience: Your Experience section can be used as a "master resume" - though you may not include everything from your experience section in every resume that you hand out, everything should be listed in your LinkedIn profile. As such, make sure to write out your experience in an easily-readable format, wiht an action verb first, bullets where possible, and use numbers to quantify impact as much as possible.</li>
                      <li>Skills and Endorsements: Adding a list of your skills (such as languages, libraries, etc) can be a very important part of your resume, and therefore it is also very important for your LinkedIn profile. Endorsing others for their listed skills helps recruiters to know that they really have the skills that they're listing, and may encourage others to endorse your skills. You can also write an endorsement/recommendation for someone that you've worked with, which can reflect well on both of you.</li>
                    </ul>
                </li>
                <li>
                  Claim your personal link: When you visit your profile page on Linkedin, in the upper right corner you will see an "Edit public profile & URL" button. Select this and update your LinkedIn URL to something closer to your name, with as few numbers as possible. This is a more professional option than the link you are auto-generated, and is a very easy step that you can take to make your profile look more professional.
                </li>
                <li>
                    Keywords and SEO: Incorporate relevant keywords throughout your profile to optimize it for search engines. Use industry-specific terms, skills, and job titles that recruiters often search for. This improves the discoverability of your profile by potential employers. One really good method to make this happen is to find job descriptions for jobs that you're intersted in, and incorporate language from the job descriptions into your profile.
                </li>
                <li>
                    Showcasing Achievements: Highlight your accomplishments, projects, and certifications. Include quantifiable results whenever possible to demonstrate the impact of your work (this means using numbers over descriptors where you can! For example, say "Sped up website load time by 200% by implementing caching" instead of "implemented caching to improve website load time"). Utilize the featured section to display samples of your work or link to relevant articles and publications.
                </li>
                <li>
                    Request Recommendations: Request recommendations from colleagues, supervisors, or mentors who can attest to your skills and work ethic. These endorsements add credibility to your profile and enhance your professional reputation.
                </li>
            </ol>

            <h3>The Significance of Resumes:</h3>
            <p>
                While LinkedIn serves as a dynamic professional platform, a well-crafted resume remains essential. Here's why:
            </p>
            <ol>
                <li>
                    Customization: Resumes allow you to tailor your application to specific job opportunities. You can highlight the most relevant skills and experiences for each role, emphasizing how your qualifications align with the job requirements. Make sure to build a resume that fits the requirements listed in the job descriptions of the jobs you apply for. It can be exhausting and mind-numbing to actually customize your resume for every job that you apply to, but some online tools such as <a href="https://www.tealhq.com">Teal </a> can help (even their free tier can be quite helpful). Note that there are a lot of tools out there, and I would recommend being careful about which tools you actually pay for, as free tiers can do most of what you will need, and the resume-writing, job-finding industry tends to prey on desperation.
                </li>
                <li>
                    Conciseness and Clarity: A resume provides a concise overview of your professional background. Use clear headings, bullet points, and action verbs to present your accomplishments and responsibilities in a reader-friendly format. Keep it concise - one good rule of thumb is that until you have 15-20 years of experience, you should never go over one page. Consider the recruiters who look at resumes all day every day. On everage, they will spend 6 seconds looking at any one individual resume. You want to make it as easy as possible for them to see that you know what you're talking about.
                </li>
                <li>
                    Design and Formatting: Choose a clean and professional resume template that enhances readability. Use consistent fonts, spacing, and formatting throughout. Ensure that your contact information is clearly visible.</li>
              </ol>
              <p>For additional help on content to include, formatting, etc, we recommend that you use some of the following resources:</p>
              <ul>
                <li><a href="https://www.reddit.com/r/resumes/wiki/index/">Resumes Subreddit</a> - Although Reddit is a social media platform, specific special-interest communities, such as the Resumes one, are very helpful for learning about specific things. In particular, this subreddit page has a very helpful wiki about how to write a resume, what type of experience to include, and how to format your resume.</li>
                <li><a href="https://www.tealhq.com">Teal </a> - This website can help you customize your resume, or create it in the first place based on your LinkedIn profile. Their free tier will do most of what you need, but they also have a paid tier for (at time of writing) ~$10/week or $30/month. Note that there are a lot of tools out there, and I would recommend being careful about which tools you actually pay for, as free tiers can do most of what you will need, and the resume-writing, job-finding industry tends to prey on desperation.</li>
            </ul>
        </section>


        </div>
      </div>
	</div>
    );
}

export default Resumes;
