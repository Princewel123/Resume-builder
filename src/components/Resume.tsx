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
  const [objective, setObjective] = useState("OBJECTIVE");
  const [tec, setTec] = useState("TECHNICAL SKILLS");
  const [soft, setSoft] = useState("SOFT SKILLS");
  const [contact, setContact] = useState("CONTACT");

  return (
    <div className="resume">
      <div className="name">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <textarea
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              marginTop: "20px",
              textAlign: "center",
              fontSize: "40px",
              fontWeight: "900",
              width: "100%",
              backgroundColor: "transparent",
              border: "0px solid transparent",
              resize: "none",
              overflow: "hidden",
            }}
            onInput={(e) => {
              const textarea = e.target as HTMLTextAreaElement;
              textarea.style.height = "auto";
              textarea.style.height = `${textarea.scrollHeight}px`;
            }}
          />
        </div>
        <input
          type="text"
          value={objective}
          onChange={(e) => setObjective(e.target.value)}
          style={{
            marginTop: "10px",
            width: "100%",
            fontSize: "25px",
            fontWeight: "bold",
            backgroundColor: "transparent",
            border: "0px solid transparent",
            borderRadius: "5px",
            color: "#1995f5",
            resize: "none",
            overflow: "hidden",
          }}
          onInput={(e) => {
            const textarea = e.target as HTMLTextAreaElement;
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
          }}
        />
        <p>{oneLineDescription}</p>

        <section>
          <input
            type="text"
            value={tec}
            onChange={(e) => setTec(e.target.value)}
            style={{
              width: "100%",
              fontSize: "25px",
              fontWeight: "bold",
              backgroundColor: "transparent",
              border: "0px solid transparent",
              borderRadius: "5px",
              color: "#1995f5",
              resize: "none",
              overflow: "hidden",
            }}
            onInput={(e) => {
              const textarea = e.target as HTMLTextAreaElement;
              textarea.style.height = "auto";
              textarea.style.height = `${textarea.scrollHeight}px`;
            }}
          />
          <ul>
            {skillset.map(({ title, proficiency }, index) => (
              <li key={index}>
                {title} - Proficiency: {proficiency}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <input
            type="text"
            value={soft}
            onChange={(e) => setSoft(e.target.value)}
            style={{
              width: "100%",
              fontSize: "25px",
              fontWeight: "bold",
              backgroundColor: "transparent",
              border: "0px solid transparent",
              borderRadius: "5px",
              color: "#1995f5",
              resize: "none",
              overflow: "hidden",
            }}
            onInput={(e) => {
              const textarea = e.target as HTMLTextAreaElement;
              textarea.style.height = "auto";
              textarea.style.height = `${textarea.scrollHeight}px`;
            }}
          />
          <ul>
            {softskills.map(({ title }, index) => (
              <li key={index}>{title}</li>
            ))}
          </ul>
        </section>

        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          style={{
            width: "100%",
            fontSize: "25px",
            fontWeight: "bold",
            backgroundColor: "transparent",
            border: "0px solid transparent",
            borderRadius: "5px",
            color: "#1995f5",
            resize: "none",
            overflow: "hidden",
          }}
          onInput={(e) => {
            const textarea = e.target as HTMLTextAreaElement;
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
          }}
        />
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
