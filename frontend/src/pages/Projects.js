import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';
import Salon from './Salon.png';
import Healthiness from './Healthiness.png';
import Weather from './Weather.png';
import MySeller from './MySeller.png';
import Carelink from './Carelink.png';
import Cinestark from './Cinestark.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Carelink',
            image: Carelink,
            description: 'Carelink is a React-based web application developed to deliver essential items such as groceries, masks, and other necessities during the COVID-19 pandemic. It connects users with local suppliers to ensure safe, contactless deliveries, prioritizing community health and convenience in challenging times',
            link: 'https://carelink-green.vercel.app/',
        },
        {
            id: 2,
            title: 'MySeller',
            image: MySeller,
            description: 'An E-commerce website for purchasing items (clothing, shoes, etc). Deployed on Vercel. Implemented component-based architecture using React. Utilized AWS services for hosting the backend, leveraging tools such as Amazon EC2, and Lambda for scalable and reliable infrastructure deployment, Used Firebase OAuth, implemented Google auth provider',
            link: 'https://my-seller.vercel.app/',
        },
        {
            id: 3,
            title: 'Salon Fuchsia',
            image: Salon,
            description: 'Salon Fuchsia is a React-powered web application designed to streamline appointment bookings for hair and nail services. The platform allows users to browse available services, select their preferred stylists, and conveniently schedule appointments online, enhancing the overall customer experience with a modern, user-friendly interface.',
            link: 'https://salon-fuchsia.vercel.app/',
        },
        {
            id: 4,
            title: 'Cinestark',
            image: Cinestark,
            description: 'An online web-based platform for movies, their genres, plot, and the cast.The platform includes functionality for students to personalize their lists of watched movies and provides each student with a dedicated profile page.A simple web application with an external API to fetch the initial movie list.',
        },
        {
            id: 5,
            title: 'Healthiness',
            image: Healthiness,
            description: 'Robust web app to streamline healthcare management for doctors, patients, and insurance providers.Developed using Python and Django, hosted on Google Cloud Platform (GCP), data storage handled by PostgreSQL, ensuring highly secure, scalable, and reliable architecture.',
        },
        {
            id: 6,
            title: 'Weather App',
            image: Weather,
            description: 'Built server using Express.js and Node.js to make API calls to Weather Stack. Understand API integration on the server side.Understand the fundamentals of full-stack web development to make requests to the Node server from the client side.',
            link: 'https://my-weather-service.onrender.com/',
        },
    ];

    return (
        <div>
            {/* Header Section */}
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <span className="dot"></span>
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
                            <a 
                                href={project.link || '#'} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="project-card-link"
                            >
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="project-image" 
                                />
                                <h2>{project.title}</h2>
                            </a>
                            <p className="project-description">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
