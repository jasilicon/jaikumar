export default function Resume() {
    const education = [
        {
            period: '2022 - 2026',
            title: 'B.Tech in Information Technology',
            description: 'Pursuing a Bachelor of Technology in Information Technology with a focus on full-stack web development and modern software engineering practices.',
        },
    ];

    const certifications = [
        {
            period: 'November 30, 2025',
            title: 'Ubuntu Linux Professional Certificate',
            issuer: 'Canonical (LinkedIn Learning)',
            description: 'Completed professional Linux administration training covering system setup, package management, and command-line proficiency.',
        },
        {
            period: 'August 22, 2026',
            title: 'Responsive Web Design (v9)',
            issuer: 'freeCodeCamp',
            description: 'Mastered modern responsive design using HTML and CSS, building five certification projects.',
        },
    ];

    const skills = [
        { name: 'UI/UX Design', level: 95 },
        { name: 'React / Next.js', level: 90 },
        { name: 'JavaScript / TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Node.js', level: 80 },
        { name: 'Figma / Adobe XD', level: 95 },
    ];

    return (
        <section id="resume" className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4">
                    My <span className="text-orange-500">Resume</span>
                </h2>
                <p className="text-gray-600 text-center mb-16">My journey so far</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                            Education
                        </h3>
                        <div className="space-y-8">
                            {education.map((item, i) => (
                                <div key={i} className="relative pl-8 border-l-2 border-orange-200">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                                    <span className="text-sm text-orange-500 font-medium">{item.period}</span>
                                    <h4 className="text-lg font-bold mt-1">{item.title}</h4>
                                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                            Certifications
                        </h3>
                        <div className="space-y-8">
                            {certifications.map((item, i) => (
                                <div key={i} className="relative pl-8 border-l-2 border-orange-200">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                                    <span className="text-sm text-orange-500 font-medium">{item.period}</span>
                                    <h4 className="text-lg font-bold mt-1">{item.title}</h4>
                                    <p className="text-gray-700 font-medium">{item.issuer}</p>
                                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                        Skills
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skills.map((skill, i) => (
                            <div key={i}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium">{skill.name}</span>
                                    <span className="text-gray-600">{skill.level}%</span>
                                </div>
                                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-orange-500 rounded-full transition-all duration-1000"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
