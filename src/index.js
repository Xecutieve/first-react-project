import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img class="avatar" src="/profile.jpeg" alt="profile" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Görkem Cindemir</h1>
      <p>Learning Full-Stack React Development For My Career</p>
    </div>
  );
}

function SkillList() {
  return (
    <div>
      <ul class="skill-list">
        <Skill skill="HTML" style={{ backgroundColor: "blue" }} />
        <Skill skill="CSS" style={{ backgroundColor: "red" }} />
        <Skill skill="JavaScript" style={{ backgroundColor: "yellow" }} />
        <Skill skill="React" style={{ backgroundColor: "lightBlue" }} />
        <Skill
          skill="Git, Github and Gitlab"
          style={{ backgroundColor: "orange" }}
        />
        <Skill skill="PostgreSQL" style={{ backgroundColor: "gray" }} />
        <Skill skill="BackEnd" style={{ backgroundColor: "green" }} />
        <Skill skill="Postman" style={{ backgroundColor: "khaki" }} />
      </ul>
    </div>
  );
}

function Skill(props) {
  return (
    <li class="skill" style={props.style}>
      {props.skill}
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
/*
<li class="skill" style={{ backgroundColor: "red" }}>
        HTML + CSS
      </li>
      <li class="skill" style={{ backgroundColor: "yellow" }}>
        JavaScript
      </li>
      <li class="skill" style={{ backgroundColor: "blue" }}>
        React
      </li>
      <li class="skill" style={{ backgroundColor: "gray" }}>
        SQL
      </li>
      <li class="skill" style={{ backgroundColor: "lightGray" }}>
        PostgreSQL
      </li>
      <li class="skill" style={{ backgroundColor: "lightBlue" }}>
        Next.js{" "}
      </li>
      <li class="skill" style={{ backgroundColor: "orange" }}>
        Git Github Gitlab
      </li>
      <li class="skill" style={{ backgroundColor: "green" }}>
        Back End
      </li>
      */
