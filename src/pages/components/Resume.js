import React from "react";
import pdf from "../../pdf/Brandon_Espinosa_Resume.pdf";

const Resume = () => {
  return (
    <section className="resume" >
      <div className="resume-heading" id="resume">
        <h3 className="resume-main-heading">Brandon Espinosa Resume</h3>
        <h3 className="resume-sub-heading">Full Stack Software Developer</h3>
        <div className="resume-sm-heading">Portfolio: <a className="resume-sm-heading-link" href="bit.ly/43DWnG2">bit.ly/43DWnG2 </a>| Email:  <a className="resume-sm-heading-link" href="mailto:" >espinbrandon49@gmail.com</a> | Phone: 313-645-0722
          <br></br>Address:  Detroit, MI | Available to relocate</div>
      </div>

      <div className="resume-body container">
        <div className="resume-technical resume-body-section">
          <h4 className="resume-header">Technical Experience</h4>
          <ul className="technical-skills-list">
            <li><strong>Computer Science</strong> - Algorithms (Searches, Sorts), Performance, Time Complexity, Data Structures</li>
            <li><strong>Browser Based Technologies</strong> - HTML/CSS, JavaScript, Responsive Design, Bootstrap, React.js</li>
            <li><strong>Databases </strong> - MySQL, MongoDB</li>
            <li><strong>Server Side Development</strong> - User Authentication, Template Engines, MERN (MongoDB, Express.js, React.js, Node.js)</li>
            <li><strong>API Design </strong> - Client-Server Model, API, Rest, JSON, AJAX (Fetch API), HTTP request methods, GraphQL</li>
            <li><strong>Deployment and Delivery</strong> - Git, GitHub, Heroku, Shell Scripting, Unit Testing, Linting, Continuous Integration</li>
            <li><strong>Object-oriented programming</strong> - Python, Java</li>
          </ul>
        </div>

        <div className="resume-work resume-body-section">
          <h4 className="resume-header">Military Experience</h4>
          <h4 className="resume-subtitle">U.S. Army - Healthcare Specialist</h4>
          <div>September 2021 - June 2005 | Ft. Benning, GA</div>
          <ul className="resume-list">
            <li className="resume-list-item">Honorable Discharge, Army Commendation Medal for Valor</li>
          </ul>

          <h4 className="resume-subtitle">U.C. Berkeley Extension Coding Bootcamp - Fullstack Software Developer, Alumni</h4>
          <div>June 2022 - Present | Berkeley, CA</div>
          <ul className="resume-list">
            <li className="resume-list-item"> Craft and launch powerful, multi-channel marketing campaigns across email, SMS, push notifications, and web—maximizing engagement at every digital touchpoint.</li>
            <li className="resume-list-item"> Code pixel-perfect, responsive HTML/CSS for high-converting emails and landing pages that shine across devices.</li>
            <li className="resume-list-item">Develop smart, dynamic scripts to deliver deeply personalized and memorable customer experiences.</li>
            <li className="resume-list-item"> Utilize GitHub and VSCode like a pro—collaborating on code, performing peer reviews, and maintaining clean version control.</li>
            <li className="resume-list-item">Partner with creative, product, and strategy teams to transform business goals into seamless, scalable technical marketing solutions.</li>
            <li className="resume-list-item">Spot bottlenecks before they happen—proactively engineering streamlined workflows and innovative fixes.</li>
            <li className="resume-list-item">Guarantee flawless rendering across email clients and screen sizes—delivering polished, bug-free campaigns every time.</li>
            <li className="resume-list-item">Harness the power of approved AI tools to supercharge productivity, spark innovation, and fine-tune marketing performance.</li>
            <li className="resume-list-item">Lead the charge on implementing advanced MarTech strategies, driving results with cutting-edge tools and streamlined processes.</li>
            <li className="resume-list-item">Stay at the forefront of digital marketing and Salesforce Marketing Cloud trends, continuously sharing insights and fresh ideas with the team.</li>
            <li className="resume-list-item">Champion compliance by rigorously adhering to CAN-SPAM and other critical email regulations—ensuring trust and legal integrity.</li>
          </ul>

          <h4 className="resume-subtitle">Smith Hampton & Devlin, LLC - Operations Manager, Recruiter</h4>
          <div>December 2009 - June 2023 | Oakland, CA</div>
          <ul className="resume-list">
            <li className="resume-list-item">Recruiter and Executive Assistant to the Principal at a fast-paced, boutique staffing agency</li>
            <li className="resume-list-item">Reviewed 300+ resumes to determine candidates' credentials</li>
            <li className="resume-list-item">Maintain accurate candidate records and ensure ATS is accurate</li>
          </ul>
        </div>

        <div className="resume-education resume-body-section">
          <h4 className="resume-header">Education</h4>
          <p>
            <h4 className="resume-subtitle">University of Phoenix - B.S., Psychology</h4>
            <p>Phoenix, AZ | 2008 - 2011 </p>
          </p>
          <p>
            <h4 className="resume-subtitle">U.C. Berkeley Extension Coding Bootcamp</h4>
            <p>Berkeley, CA | 2022</p>
            <ul className="resume-list">
              <li className="resume-list-item">Berkeley Coding Bootcamp</li>
              <li className="resume-list-item">Full Stack Software Development</li>
              <li className="resume-list-item">Web Development - HTML, CSS, JavaScript, Database</li>
            </ul>
          </p>
        </div>
      </div>
      <a href={pdf} target='__blank' download><button type="button" className="resume-main-btn main-btn">Download</button>
      </a>
    </section >
  );
};

export default Resume;
