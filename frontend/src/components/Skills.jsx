import React from 'react';

const Skills = () => {
    // Array of skills using online CDNs in prioritized Web Dev order
    const skills = [
        { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', isSquare: true },
        { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', bg: 'bg-[#f7df1e]' },
        { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg', wide: true },
        { name: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
        { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
        { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
        { name: 'Framer Motion', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg' },
        { name: 'GSAP', src: 'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg' },
        { name: 'VS Code', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
        { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
        { name: 'C++', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
        { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
        { name: 'Canva', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg' },
        { name: 'Illustrator', src: 'https://cdn.simpleicons.org/adobeillustrator/FF7C00', bg: 'bg-[#330000]' },
        { name: 'Photoshop', src: 'https://cdn.simpleicons.org/adobephotoshop/31A8FF', bg: 'bg-[#001d26]' },
    ];

    return (
        <section id="skills" className="relative w-full py-24 overflow-hidden text-center bg-slate-50 dark:bg-black transition-colors duration-300">
            <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 sm:px-12 flex flex-col items-center">

                {/* Section Heading */}
                <h2 className="text-slate-800 dark:text-[#e2e2e5] text-xl font-medium tracking-[0.4em] mb-16 text-center uppercase transition-colors">
                    My Skills
                </h2>

                {/* Logo Box Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3 sm:gap-4 md:gap-6 w-full max-w-[800px] mt-4 sm:mt-0">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-center rounded-sm overflow-hidden ${skill.bg ? skill.bg : 'bg-white dark:bg-[#e4e4e7] border border-slate-200 dark:border-transparent'
                                } ${skill.wide ? 'col-span-2 aspect-[2/1]' : 'aspect-square'} transition-all duration-300 hover:scale-105 shadow-md`}
                            title={skill.name}
                        >
                            <img
                                src={skill.src}
                                alt={skill.name}
                                className={`object-contain ${skill.isSquare ? 'w-3/4 h-3/4' : 'w-2/3 h-2/3 hover:scale-110 transition-transform duration-300'}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
