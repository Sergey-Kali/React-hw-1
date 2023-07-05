import React from "react";
import "./App.css";
import profilePhoto from "./images/profile-photo.png";
import ProfileImage from "./components/ProfileImage";
import ContactInfo from "./components/ContactInfo";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="App">
      <main className="main">
        <aside className="aside">
          <ProfileImage imageSrc={profilePhoto} />
          <ContactInfo />
        </aside>
        <WorkExperience />
      </main>
    </div>
  );
}

export default App;
