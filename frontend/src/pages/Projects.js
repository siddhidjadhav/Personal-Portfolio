import React from 'react';
import './Projects.css'; // Ensure you have a CSS file for styling
import { Link } from 'react-router-dom';
import logo from './logo.jpg'; // Ensure this is the correct path to your logo

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            image: 'path/to/image1.jpg', // Replace with your image paths
            description: 'Description for project 1.',
        },
        {
            id: 2,
            title: 'Project 2',
            image: 'path/to/image2.jpg', // Replace with your image paths
            description: 'Description for project 2.',
        },
        {
            id: 3,
            title: 'Project 3',
            image: 'path/to/image3.jpg', // Replace with your image paths
            description: 'Description for project 3.',
        },
        {
            id: 4,
            title: 'Project 4',
            image: 'path/to/image4.jpg', // Replace with your image paths
            description: 'Description for project 4.',
        },
        {
            id: 5,
            title: 'Project 5',
            image: 'path/to/image5.jpg', // Replace with your image paths
            description: 'Description for project 5.',
        },
        {
            id: 6,
            title: 'Project 6',
            image: 'path/to/image6.jpg', // Replace with your image paths
            description: 'Description for project 6.',
        },
    ];
    return (
        <div>
            {/* Header Section */}
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" /> {/* Logo image */}
                    <span className="dot"></span> {/* Red dot */}
                </div>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/Me">About Me</Link>
                    <Link to="/Experience">Experience</Link>
                    
                </nav>
            </header>

            {/* Projects Section */}
            <div className="projects-container">
                <h1>My Projects</h1>
                <div className="projects-list">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;