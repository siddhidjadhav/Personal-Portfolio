import React from 'react';
import { Link } from 'react-router-dom';
import './Me.css'; // Ensure this is the correct CSS file
import logo from './logo.jpg'; // Ensure this is the correct path to your logo
import artncraft from './artncraft.jpg'; // Example company icon image
import henna from './henna.jpg';
const Me = () => {
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
                    <Link to="/Experience">Experience</Link>
                    <Link to="/Projects">Projects</Link>
                </nav>
            </header>

            {/* Main Content */}
            <div className="aboutme-content">
                <div className="bio">
                    
                    <p>
                       I am glad you are here. This is a page for my Technical skills and my hobbies
                    </p>
                </div>

                {/* Skills Section */}
                <div className="skills-container">
                    {/* Technical Skills Section with Progress Bars */}
                    <div className="skills technical-skills">
                        <h3>Technical Skills</h3>
                        <br></br>
                        <div className="skill">
                            <label></label>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '90%' }}>
                                    <span className="skill-name">C</span>
                                </div>
                            </div>
                        </div>
                        <div className="skill">
                            <label></label>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '95%' }}>
                                    <span className="skill-name">C++</span>
                                </div>
                            </div>
                        </div>
                        <div className="skill">
                            <label></label>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '90%' }}>
                                    <span className="skill-name">Python</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="skill">
                            <label></label>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '85%' }}>
                                    <span className="skill-name">JavaScript</span>
                                </div>
                            </div>
                        </div>
                        <div className="skill">
                            <label></label>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '88%' }}>
                                    <span className="skill-name">TypeScript</span>
                                </div>
                            </div>
                        </div>
                       
                        <div className="skill">
                            <label></label>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '89%' }}>
                                    <span className="skill-name">Node.js</span>
                                </div>
                            </div>
                        </div>
                        <div className="skill">
                            <label></label>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '95%' }}>
                                    <span className="skill-name">React.js</span>
                                </div>
                            </div>
                        </div>
                        <div className="skill">
                            <label></label>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '92%' }}>
                                    <span className="skill-name">Angular.js</span>
                                </div>
                            </div>
                        </div>
                      
                     
                        <div className="skill">
                            <label></label>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '90%' }}>
                                    <span className="skill-name">HTML</span>
                                </div>
                            </div>
                        </div>
                        <div className="skill">
                            <label></label>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '85%' }}>
                                    <span className="skill-name">CSS</span>
                                </div>
                            </div>
                        </div>
                       
                        
                        
                      
                        
                        <div className="skill">
                            <label></label>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '85%' }}>
                                    <span className="skill-name">MySQL</span>
                                </div>
                            </div>
                        </div>
                        <div className="skill">
                            <label></label>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '75%' }}>
                                    <span className="skill-name">MongoDB</span>
                                </div>
                            </div>
                        </div>
                        <div className="skill">
                            <label></label>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '70%' }}>
                                    <span className="skill-name">PostgreSQL</span>
                                </div>
                            </div>
                        </div>
                      
                        <div className="skill">
                            <label></label>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '75%' }}>
                                    <span className="skill-name">AWS</span>
                                </div>
                            </div>
                        </div>
                      
                     
                        <div className="skill">
                            <label></label>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '65%' }}>
                                    <span className="skill-name">Google Cloud</span>
                                </div>
                            </div>
                        </div>
                        <div className="skill">
                            <label></label>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '60%' }}>
                                    <span className="skill-name">WordPress</span>
                                </div>
                            </div>
                        </div>
                     
                        <div className="skill">
                            <label></label>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '90%' }}>
                                    <span className="skill-name">Git</span>
                                </div>
                            </div>
                        </div>
                      
                       
                        <div className="skill">
                            <label></label>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '70%' }}>
                                    <span className="skill-name">Figma</span>
                                </div>
                            </div>
                        </div>
                        <div className="skill">   
                    </div>
                    <div className="hobbies-container">
                        <h3>Hobbies</h3>
                        <div className="hobby-cards">
                           
                            <div className="hobby-card">
                                <img src={artncraft} alt="Hobby 2" />
                                <h4>Art and Craft</h4>
                                <p>I love canvas painting and playing with clay to turn them into beautiful creatures as u can see above</p>
                            </div>
                            <div className="hobby-card-2">
                                <img src={henna} alt="Hobby 2" />
                                <h4>Henna</h4>
                                <p>I really love Henna art. I like to draw Henna on my hand and sometimes 
                                    when my friends insist I draw on their hand too!!<br></br>
                                    Email me if you want any tips for Henna Art
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    );
};

export default Me;
