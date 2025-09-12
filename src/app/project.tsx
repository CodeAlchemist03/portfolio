import React from 'react';

const projects = [
  {
    name: 'SAR images to Optical Image translation using Machine Learning',
    description: 'A GAN-based deep learning model that converts Synthetic Aperture Radar (SAR) images into optical images, enhancing visual interpretability for remote sensing. Research accepted for publication at IEEE IGARSS 2025, Brisbane, Australia.',
    features: [
      'Advanced GAN architecture for image translation',
      'Enhanced visual interpretability for remote sensing',
      'Published research with international recognition',
      'Cutting-edge computer vision implementation',
    ],
    techStack: ['Python', 'TensorFlow', 'GAN', 'PyTorch', 'OpenCV'],
    //Comments: 'https://connx.in', // Replace with actual project link
  },
  {
    name: 'GadgetNet',
    description: 'A marketplace web application for buying and selling pre-owned engineering stationery and gadgets, facilitating cost-effective resource exchange among students.',
    features: [
      'User registration and authentication system',
      'Product listing and search functionality',
      'Secure buying and selling transactions',
      'Cost-effective resource sharing platform',
    ],
    techStack: ['React.js', 'Node.js', 'JavaScript', 'SQL', 'HTML/CSS'],
    //Comments: 'https://campusreveal.vercel.app',
  },
  {
    name: 'Easy-Ebooks',
    description: 'An online platform serving as a digital library for engineering students, offering curated academic content and interactive ebooks to improve accessibility and streamline learning.',
    features: [
      'Curated academic content for engineering students',
      'Interactive ebook reading experience',
      'User-friendly search and browsing functionality',
      'Improved accessibility for educational resources',
    ],
    techStack: ['HTMl/CSS', 'JavaScript', 'SQL', 'PHP'],
    // Comments: 'https://announcepro.vercel.app/',
  },
  {
    name: 'Software Engineering Virtual Labs',
    description: 'Designed and deployed virtual lab environments to simulate real-world software engineering experiments, enabling practical, hands-on learning experiences remotely.',
    features: [
      'Virtual lab environment simulation',
      'Real-world software engineering experiments',
      'Remote learning accessibility',
      'Hands-on practical experience platform',
    ],
    techStack: ['javaScript', 'HTML/CSS', 'Node.js', 'Git'],
    // Comments: 'https://github.com/amitkumar2308/Content-based-recommendation',
  },
];

const Project = () => {
  return (
    <div className="bg-gray-50 py-20 px-10 lg:px-32 min-h-screen">
      <h1 className="text-5xl font-bold text-gray-900 text-center mb-16">
        <span className="border-b-4 border-purple-500 pb-2">My Projects</span>
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500 hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-800">{project.name}</h2>
            <p className="text-gray-700 mt-2">{project.description}</p>
            {project.features && (
              <ul className="mt-3 text-gray-600 list-disc list-inside">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )}
            <div className="mt-3">
              <strong className="text-gray-800">Tech Stack:</strong>
              <ul className="flex flex-wrap gap-2 mt-2">
                {project.techStack.map((tech, i) => (
                  <li key={i} className="bg-purple-100 text-purple-800 px-3 py-1 text-sm rounded-md">{tech}</li>
                ))}
              </ul>
            </div>
            <a href={project.Comments} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-purple-600 font-medium hover:underline">
              Comments →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
