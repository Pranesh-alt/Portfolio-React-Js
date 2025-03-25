import React, { useState, useEffect, useMemo } from 'react';
import './Portfolio.css';

const Portfolio = () => {
    const [theme, setTheme] = useState('light');
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const skills = useMemo(() => [
        { name: 'JavaScript', percentage: 40 },
        { name: 'Node.js', percentage: 50 },
        { name: 'Express', percentage: 50 },
        { name: 'Python (FastAPI)', percentage: 70 },
        { name: 'MySQL', percentage: 100 },
        { name: 'HTML', percentage: 80 },
        { name: 'CSS', percentage: 80 },
        { name: 'Problem Solving', percentage: 100 }
    ], []);

    const projects = useMemo(() => [
        { title: 'Expense Tracker', description: 'A finance tracking app', link: '#' },
        { title: 'Movie Streaming Platform', description: 'An OTT platform with live streaming', link: 'https://node-js-ott-6.onrender.com/' }
    ], []);

    return (
        <div className={`portfolio ${theme}`}>
            <header>
                <h1>Pranesh's Portfolio</h1>
                <nav>
                    <ul className={showMenu ? 'mobile-menu' : ''}>
                        {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <li key={item}><a href={`#${item.toLowerCase()}`}>{item}</a></li>
                        ))}
                    </ul>
                    <button onClick={() => setShowMenu(!showMenu)}>Menu</button>
                </nav>
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
            </header>
            <section id="about">
                <h2>About Me</h2>
                <img src="/path-to-your-image.jpg" alt="Pranesh" className="profile-pic" />
                <p>Passionate about web development and building scalable applications.</p>
            </section>
            <section id="skills">
                <h2>Skills</h2>
                <ul>
                    {skills.map(skill => (
                        <li key={skill.name}>{skill.name} - {skill.percentage}%</li>
                    ))}
                </ul>
            </section>
            <section id="projects">
                <h2>Projects</h2>
                <div className="project-list">
                    {projects.map(({ title, description, link }) => (
                        <div key={title} className="project">
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    ))}
                </div>
            </section>
            <footer>
                <p>Contact: <a href="mailto:pranesh@example.com">pranesh@example.com</a></p>
                <div className="social-links">
                    <a href="#" aria-label="GitHub Profile">GitHub</a>
                    <a href="#" aria-label="LinkedIn Profile">LinkedIn</a>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
