import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import './About.css';

function About() {

  const [count, setCount] = useState({ students: 0, courses: 0, mentors: 0 });

  // Counter animation
  useEffect(() => {
    let s = 0, c = 0, m = 0;
    const interval = setInterval(() => {
      if (s < 500) s += 10;
      if (c < 10) c += 1;
      if (m < 20) m += 1;

      setCount({ students: s, courses: c, mentors: m });

      if (s >= 500 && c >= 25 && m >= 10) clearInterval(interval);
    }, 50);
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container mt-5">

        {/* Hero Section */}
        <div className="text-center mb-5 about-hero">
          <h1 className="fw-bold">About Us</h1>
          <p className="fs-5">
            Empowering students through simple and practical learning
          </p>
          <img
            src="images\learning.jpg"
            alt="Learning"
            className="img-fluid about-image"
          />
        </div>

        {/* Stats Section */}
        <div className="row text-center mb-5">
          <div className="col-md-4">
            <div className="stat-box">
              <h2>{count.students}+</h2>
              <p>Students Trained</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-box">
              <h2>{count.courses}+</h2>
              <p>Courses Available</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-box">
              <h2>{count.mentors}+</h2>
              <p>Expert Mentors</p>
            </div>
          </div>
        </div>

        {/* Who We Are */}
        <div className="about-section interactive-box">
          <h3>Who We Are</h3>
          <p>
            We are a student-focused learning platform designed to make
            technology simple, practical, and career-oriented.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="row mb-5">
          <div className="col-md-6">
            <div className="card mission-card interactive-box h-100">
              <div className="card-body text-center">
                <h4>Our Mission</h4>
                <p>
                  To help beginners gain confidence by learning through
                  real-world projects and clear explanations.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-3 mt-md-0">
            <div className="card vision-card interactive-box h-100">
              <div className="card-body text-center">
                <h4>Our Vision</h4>
                <p>
                  To become a trusted learning hub for students preparing
                  for IT careers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="about-section interactive-box">
          <h3>What We Offer</h3>
          <ul>
            <li>Beginner-friendly courses</li>
            <li>Hands-on projects</li>
            <li>Industry-relevant skills</li>
            <li>Career guidance</li>
          </ul>
        </div>

        {/* Footer Line */}
        <div className="text-center text-muted mb-4">
          <p>Built by students, for students ❤️</p>
        </div>

      </div>
    </div>
  );
}

export default About;
