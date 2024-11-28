import React from "react";
import Resume from "./components/Resume";
import data from "./data/data.json";
import { ResumeData } from "./interfaces/ResumeData";

const App: React.FC = () => {
  const resumeData: ResumeData = data;
  return (
    <div>
      <Resume data={resumeData} />
    </div>
  );
};

export default App;
