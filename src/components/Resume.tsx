import React, { useState } from "react";
import { ResumeData } from "../interfaces/ResumeData";
import "../styles/Resume.css";

const Resume: React.FC<{ data: ResumeData }> = ({ data }) => {
  const {
    oneLineDescription,
    contactDetails,
    skillset,
    softskills,
    education,
    experiences,
  } = data;

  const [name, setName] = useState(data.name);

  return (
    <div className="resume">
      <h1 style={{ alignItems: "center" }}>RESUME1</h1>
      <div className="name">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            width: "100%",
            marginBottom: "10px",
          }}
        />
        <h2>OBJECTIVE</h2>
        <p>{oneLineDescription}</p>

        <section>
          <h2>TECHNICAL SKILLS</h2>
          <ul>
            {skillset.map(({ title, proficiency }, index) => (
              <li key={index}>
                {title} - Proficiency: {proficiency}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>SOFT SKILLS</h2>
          <ul>
            {softskills.map(({ title }, index) => (
              <li key={index}>{title}</li>
            ))}
          </ul>
        </section>

        <h2>CONTACT</h2>
        <p>Phone: {contactDetails.phone}</p>
        <p>Address: {contactDetails.address}</p>
        <p>Email: {contactDetails.email}</p>
      </div>

      <div className="contactDetails">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section>
          <h3>EDUCATION</h3>
          <hr></hr>
          {education.map(({ title, university, branch, link }, index) => (
            <div key={index}>
              <h4>{title}</h4>
              <pre>
                Board: {university} <br></br>
                Branch: {branch}
              </pre>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </div>
          ))}
        </section>

        <section>
          <h3>EXPERIENCE</h3>
          <hr></hr>
          {experiences.map(
            ({
              id,
              role,
              company,
              location,
              workStyle,
              jobType,
              responsibilities,
            }) => (
              <div key={id}>
                <h4>
                  {company}, {location} -- {role}
                </h4>
                <p>
                  {workStyle} | {jobType}
                </p>
                <pre>
                  <ul>
                    {responsibilities.map((res, index) => (
                      <li key={index}>{res}</li>
                    ))}
                  </ul>
                </pre>
              </div>
            )
          )}
        </section>
      </div>
    </div>
  );
};

export default Resume;
