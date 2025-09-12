import React from 'react';

const experiences = [
  {
    role: 'Software Development Engineer Intern',
    company: 'Blazetrail Fintech Solutions Pvt. Ltd.',
    dates: 'Feb 2025 – Apr 2025',
    description: 'Worked on design, development, and testing of fintech applications, collaborating closely with developers to enhance functionality and code quality.',
    achievements: [
      'Assisted in design, development, and testing of software applications',
      'Collaborated with developers to implement new features',
      'Wrote clean, maintainable code and participated in code reviews',
    ],
    techStack: ['API','Postman', 'React.js', 'Git', 'Agile'],
  },
  {
    role: 'Web Developer Intern',
    company: 'All World Gayatri Pariwar (AWGP)',
    dates: 'May 2024 – Jul 2024',
    description: 'Developed a user-friendly audiobook application interface with features like browsing, searching, recording, and playback.',
    achievements: [
      'Designed and built interactive audiobook app interface',
      'Implemented search, record, and playback functionality',
      'Collaborated with the team for accurate and timely task completion',
    ],
    techStack: ['React.js', 'HTML/CSS', 'JavaScript'],
  },
  {
    role: 'Machine Learning Intern / Web Developer Intern',
    company: 'Claidroid Technologies',
    dates: 'Dec 2023 – Jan 2024',
    description: 'Worked as Web Developer optimizing UIs and returned as ML Intern focusing on model training and data analysis.',
    achievements: [
      'Created and optimized responsive user interfaces',
      'Gained hands-on experience with ML models and data pipelines',
      'Collaborated on end-to-end model experimentation',
    ],
    techStack: ['Python', 'Scikit-learn', 'React.js', 'SQL'],
  },
  {
    role: 'B.Tech Thesis — SAR-to-Optical Image Translation',
    company: 'K J Somaiya Institute of Technology',
    dates: '2024 – 2025',
    description: 'Research project on GAN-based model translating SAR satellite images into optical images. Accepted and presented at IEEE IGARSS 2025.',
    achievements: [
      'Developed GAN-based model for SAR-to-Optical image translation',
      'Prepared dataset pipelines and reproducible training code',
      'Presented and published research at IEEE IGARSS 2025, Brisbane',
    ],
    techStack: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV'],
  },
];

const Experience = () => {
  return (
    <div className="bg-gray-50 py-20 px-10 lg:px-32 min-h-screen">
      <h1 className="text-5xl font-bold text-gray-900 text-center mb-16">
        <span className="border-b-4 border-purple-500 pb-2">My Experience</span>
      </h1>

      {/* Experience Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500 hover:scale-105 transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800">{exp.role}</h2>
            <p className="text-gray-600 text-sm mt-1">
              {exp.company} • {exp.dates}
            </p>
            <p className="text-gray-700 mt-2">{exp.description}</p>

            {exp.achievements && (
              <ul className="mt-3 text-gray-600 list-disc list-inside">
                {exp.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            )}

            <div className="mt-3">
              <strong className="text-gray-800">Tech Stack:</strong>
              <ul className="flex flex-wrap gap-2 mt-2">
                {exp.techStack.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-purple-100 text-purple-800 px-3 py-1 text-sm rounded-md"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
