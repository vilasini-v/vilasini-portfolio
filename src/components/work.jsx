import React, { useState, useEffect } from "react";
import { Navbar } from "./header";
import { ChevronDown, ChevronUp } from "lucide-react";

export function Work() {
  const internships = [
    {
      name: "Samsung Prism",
      year: "July 2024 - Feb 2025",
      specs: "AI and ML Intern",
      grade: "",
      details: "Developed a state-of-the-art Transformer Architecture for Image Restoration and Detail Enhancement.",
    },
    {
      name: "Xencia Technologies",
      year: "June 2024 July 2024",
      specs: "Data Science Intern",
      grade: "",
      details: "Worked on projects with langchain, lang graph and open ai.",
    },
    {
      name: "Reverse Innovations",
      year: "July 2024 - Aug 2024",
      specs: "Software Research Intern",
      grade: "",
      details: "Worked with Flutter to produce a CRM application on the frontend side.",
    },
  ];

  const hackathons = [
    {
      name: "SIH Hackathon - Finalist",
      year: "2024",
      specs: "App Development & ML",
      grade: "",
      details: "Developed an app that bridges farmers and retailers, offering a platform for open market interactions aligning with SDG 8, 9, and 10. Secured rank 1 out of 300 applications nationwide for our problem statement. Tech Stack: Flutter, ML."
    },
    {
      name: "WebDex",
      year: "2024",
      specs: "Full Stack Web Development",
      grade: "",
      details: "Secured 1st place in the hackathon conducted by ACM student chapter and received prize money and an internship opportunity by Reverse Innovations. Developed a platform that bridges the gap and creates an easy communication platform between volunteers and NGOs aligning with SDGs 4, 8, 9, and 17. Tech Stack: HTML5, CSS, JS."
    },
    {
      name: "Cook'Off Hackathon",
      year: "2024",
      specs: "Web Development & Sustainability",
      grade: "",
      details: "A website that bridges the gap between nurseries and buyers, promoting sustainable practices in line with SDGs 15 (Life on Land) and 2 (Zero Hunger). Tech Stack: HTML5, CSS, JS, Node.js, Python."
    },
    {
      name: "UI/UX Zero to Hero",
      year: "2023",
      specs: "UI/UX Design",
      grade: "",
      details: "Created a FIGMA mockup for a Music App and was ranked in the top 3 out of 80 participants. Tech Stack: Figma."
    },
    {
      name: "IEEE Robotics Society Hackathon",
      year: "2023",
      specs: "Machine Learning & Healthcare",
      grade: "",
      details: "Implemented a machine learning model to determine a patient's condition with an accuracy of 0.76. Ranked in the top 5 out of 60 teams. Tech Stack: Python."
    },
    {
      name: "SMART INDIA HACKATHON",
      year: "2023",
      specs: "Web Development & Research Networking",
      grade: "",
      details: "Devised a web app that helps students network with professors for research partnerships and mentorship programs. Tech Stack: React.js, Django, Sci-kit Learn."
    }
  ];


  const formatKey = (key) => {
    const keyMappings = {
      name: "Company/Event",
      year: "Year",
      specs: "Focus",
      grade: "Grade",
      details: "Details",
    };
    return keyMappings[key] || key;
  };

  const ProgressiveEducationCards = ({ list, name }) => {
    const [expandedCard, setExpandedCard] = useState(null);
    const [showAllCards, setShowAllCards] = useState(false);

    const toggleCard = (index) => {
      setExpandedCard(expandedCard === index ? null : index);
    };

    // Display only the most recent internship when showAllCards is false
    const displayedItems = showAllCards ? list : [list[0]];

    return (
      <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-[hahmlet] mb-4 sm:mb-6">
          {name}
        </h2>

        {displayedItems.map((item, index) => (
          <div
            key={index}
            className="bg-avacado rounded-lg shadow-md overflow-hidden transition-all duration-300"
          >
            <div
              className="p-3 sm:p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer"
              onClick={() => toggleCard(index)}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 md:gap-10 mb-2 sm:mb-0">
                <h3 className="text-black text-lg sm:text-xl font-serif">{item.name}</h3>
                <p className="text-gray-600 text-base sm:text-lg">{item.year}</p>
              </div>

              <button className="py-1 text-white text-sm font-medium hover:text-blue-400 transition-colors">
                {expandedCard === index ? "View Less" : "View More"}
              </button>
            </div>

            {/* Dynamic Key-Value Display (Excluding Empty Values) */}
            <div className="pt-2 px-4 pb-4 flex flex-col sm:flex-row justify-between">
              {Object.entries(item)
                .filter(([key, value]) => value !== "" && key !== "name" && key !== "details" && key !== "year") // Exclude name & empty values
                .map(([key, value]) => (
                  <div key={key} className="mb-2 sm:mb-0">
                    <p className="text-sm text-gray-500 mb-1">{formatKey(key)}</p>
                    <p className="font-medium text-black">{value}</p>
                  </div>
                ))}
            </div>

            {/* Expandable Details */}
            {item.details && (
              <div className={`overflow-hidden transition-all duration-300 ${expandedCard === index ? "max-h-96" : "max-h-0"}`}>
                <div className="p-4 pt-0 border-t border-gray-100">
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 mb-1">Details</p>
                    <p className="text-gray-700">{item.details}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Toggle Button for Previous Items */}
        {list.length > 1 && (
          <div className="flex justify-end my-4">
            <button
              onClick={() => setShowAllCards(!showAllCards)}
              className="px-4 py-2 text-black rounded-md text-sm font-medium hover:text-blue-400 transition-colors"
            >
              {showAllCards ? "View Less" : `View All ${name}`}
            </button>
          </div>
        )}
      </div>
    );
  };

  const projects=[
    {
      name: "Better - a productivity app",
      link: "https://github.com/vilasini-v/pink-better",
      desc: 'Built a flutter app with local storage (hive) for productivity. Contains screens such as Notes Page, a Habit Tracker and a Weekly task view page.',
      techStacks: "Flutter and hiveDB"
    },
    {
      name:"Online Job Portal",
      link:"https://github.com/vilasini-v/job_portal",
      desc:"Building a portal to connect job seekers and clients, using ML for tailored job recommendations to the job seekers",
      techStacks:"MongoDB, ReactJS, Flask, tailwind CSS"
    },
    {
      name:"Personalized Online Mentor",
      link:"https://github.com/Better-Mentor/frontend-cil",
      desc:"Utilizing LLMs to generate comprehensive personalized reports of the tests taken, aiming for enhancing user learning outcomes, tracked through improved test completion rates.",
      techStacks:"Django, Amazon RDS, ReactJS, tailwind CSS"
    },
      {
      name:'Affirmations generator',
      link:'https://affirmations-iota.vercel.app/',
      desc:'A frontend project that generates affirmations with the option to share it to twitter/X.',
      techStacks:"HTML, CSS, JavaScript"
  },
  {
      name:'Arcade',
      link:'https://arcade-navy.vercel.app/',
      desc:'An arcade with mini games made with javascript such as rock-paper-scissors, coin-flip, and guess-the-number',
      techStacks:"Javascript, HTML, CSS, React JS"
  }
  ];


const ProjectCard = ({ title, description, url, details}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-md w-full p-4 shadow-lg rounded-2xl bg-avacado text-black border">
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <h2 className="text-xl font-semibold text-black">{title}</h2>
        <a href={url} className="underline text-gray-900 hover:text-blue-600">Check it out!</a>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
        {expanded && (
          <p className="text-gray-700 py-2 text-md">Tech Stacks: {details}</p>
      )}
        <button
          className="flex items-center justify-end py-2 rounded-lg text-gray-700 hover:text-beige"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Show More"}
          {expanded ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </button>

        
    </div>
  );
};

const ProjectList = ({ projects }) => {
  const [showAll, setShowAll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024); // lg breakpoint (1024px)
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Decide how many projects to show
  const displayedProjects = isSmallScreen && !showAll ? projects.slice(0, 2) : projects;

  return (
    <div className="flex flex-wrap p-4 gap-4 justify-center">
      {displayedProjects.map((item, index) => (
        <ProjectCard
          key={index}
          title={item.name}
          description={item.desc}
          url={item.link}
          details={item.techStacks}
        />
      ))}

      {/* Show button only on tablet/phone screens */}
      {isSmallScreen && (
        <div className="w-full flex justify-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 text-white rounded-md"
        >
          {showAll ? "Show Less" : "View More"}
        </button>
      </div>
    )}
  </div>
  );
};


  return (
    <>
      <Navbar color={"beige"} />
      <section className="bg-algae text-white p-5">
      <p className="text-3xl sm:text-4xl md:text-5xl text-white font-[hahmlet] mb-4 sm:mb-6">Projects</p>
      <ProjectList projects = {projects}/>
    </section>
      <section className="bg-beige text-black">
        <ProgressiveEducationCards list={internships} name="Internships" />
      </section>
      <section className="bg-algae text-white">
        <ProgressiveEducationCards list={hackathons} name="Hackathons" />
      </section>
    </>
  );
}