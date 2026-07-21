import { useState } from "react";
import Header from "./Header";
import "./App.css";
import { courses } from "./data";
import Course from "./course";
import "./css/Course.css";

function App() {
  return (
    <>
      <Header />
      <div className="course-main">
        {courses?.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </>
  );
}

export default App;
