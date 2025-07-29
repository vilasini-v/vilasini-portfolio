import React, {useState} from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Navbar } from "./header";
import pictureNoBg from "../picture-no-bg.png";


const SkillCards = () =>{
  const skills = [
    'HTML',
    'CSS',       
    'JavaScript',        
    'Python',        
    'C++',
    'C',
    'Java',  
    'SQL',
    'R',      
    'React JS',
    'Node.js',
    'Express JS',
    'Flutter',
    'Next.js',
    'PostgreSQL',
    'React Native',
    'TensorFlow',
    'pyTorch',
    'Langchain',
    'MongoDB',
    'Flask',
    'NodeJS',
    'Django',
    'AngularJS'
  ];

  return(
    <>
    <div className="mx-auto flex flex-wrap justify-center gap-5 text-md">
      {skills.map((skill, index)=>(
        <div
        key={index}
        className="bg-avacado justify-center text-black px-6 py-2 rounded-full font-medium hover:bg-algae hover:text-white transition-colors"
      >
        {skill}
      </div>
      ))}
    </div>
    </>
  );
}

const ProgressiveEducationCards = () => {
  const eduList = [
    {
      name: 'Vellore Institute of Technology',
      year: '2022-2026',
      specs: 'Bachelors of Technology in Computer Science',
      grade: '9.14/10',
      details: 'Focusing on core computer science subjects including data structures, algorithms, operating systems, and software engineering principles.'
    },
    {
      name: 'BASE PU college',
      year: '2020-2022',
      specs: 'PCMC combination',
      grade: '89%',
      details: 'Studied Physics, Chemistry, Mathematics and Computer Science with focus on building a strong foundation in STEM subjects.'
    },
    {
      name: 'Silicon City Academy Of Secondary Education',
      year: '2010-2020',
      specs: 'CBSE',
      grade: '95.2%',
      details: 'Completed comprehensive CBSE curriculum with focus on academics, sports and extracurricular activities.'
    }
  ];

  const [expandedCard, setExpandedCard] = useState(null);
  const [showAllCards, setShowAllCards] = useState(false);

  
  const toggleCard = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 space-y-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-[hahmlet] mb-4 sm:mb-6">Education</h2>
      <div className="bg-avacado rounded-lg shadow-md overflow-hidden transition-all duration-300">
        <div className="p-3 sm:p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer" onClick={() => toggleCard(0)}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 md:gap-10 mb-2 sm:mb-0">
            <h3 className="text-black text-lg sm:text-xl font-serif">{eduList[0].name}</h3>
            <p className="text-gray-600 text-base sm:text-lg">{eduList[0].year}</p>
          </div>
          
          <button className="py-1 text-white text-sm font-medium hover:text-blue-400 transition-colors">
            {expandedCard === 0 ? "View Less" : "View More"}
          </button>
        </div>
        
        <div className="pt-2 px-4 pb-4 flex flex-col sm:flex-row justify-between">
          <div className="mb-2 sm:mb-0">
            <p className="text-sm text-gray-500 mb-1">PROGRAM</p>
            <p className="font-medium text-black">{eduList[0].specs}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">GRADE</p>
            <p className="font-medium text-black">{eduList[0].grade}</p>
          </div>
        </div>
        
        <div 
          className={`overflow-hidden transition-all duration-300 ${
            expandedCard === 0 ? 'max-h-64' : 'max-h-0'
          }`}
        >
          <div className="p-4 pt-0 border-t border-gray-100">            
            <div className="mt-3">
              <p className="text-xs text-gray-500 mb-1">DETAILS</p>
              <p className="text-gray-700">{eduList[0].details}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end my-4">
        <button
          onClick={() => setShowAllCards(!showAllCards)}
          className="px-4 py-2 text-white rounded-md text-sm font-medium hover:text-blue-400 transition-colors"
        >
          {showAllCards ? "View Less" : "View Previous Education"}
        </button>
      </div>
      
      {showAllCards && (
        <div className="space-y-4 mt-4 animate-fadeIn">
          {eduList.slice(1).map((edu, index) => {
            const actualIndex = index + 1;
            return (
              <div 
                key={actualIndex}
                className="bg-avacado rounded-lg shadow-md overflow-hidden transition-all duration-300"
              >
                <div className="p-3 sm:p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer" onClick={() => toggleCard(actualIndex)}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 md:gap-10 mb-2 sm:mb-0">
                    <h3 className="text-black text-lg sm:text-xl font-serif">{edu.name}</h3>
                    <p className="text-gray-600 text-base sm:text-lg">{edu.year}</p>
                  </div>
                  
                  <button className="px-3 py-1 text-white text-sm font-medium hover:text-blue-400 transition-colors">
                    {expandedCard === actualIndex ? "View Less" : "View More"}
                  </button>
                </div>
                
                <div className="pt-2 px-4 pb-4 flex flex-col sm:flex-row justify-between">
                  <div className="mb-2 sm:mb-0">
                    <p className="text-sm text-gray-500 mb-1">PROGRAM</p>
                    <p className="font-medium text-black">{edu.specs}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">GRADE</p>
                    <p className="font-medium text-black">{edu.grade}</p>
                  </div>
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedCard === actualIndex ? 'max-h-64' : 'max-h-0'
                  }`}
                >
                  <div className="p-4 pt-0 border-t border-gray-100">            
                    <div className="mt-3">
                      <p className="text-xs text-gray-500 mb-1">DETAILS</p>
                      <p className="text-gray-700">{edu.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const LeftIntro = () => {
  const text = "I'm a passionate full-stack web and app developer with a strong foundation in coding and problem-solving. I specialize in building scalable and efficient applications, with a deep interest in DSA (Data Structures and Algorithms) to optimize performance. I enjoy taking on new challenges, constantly learning and expanding my skill set. In addition to back-end and front-end development, I have a keen eye for UI/UX design, ensuring that the user experience is intuitive and visually appealing. Currently, I'm exploring the fields of machine learning and data science, eager to integrate advanced technologies into my projects. My goal is to continue evolving as a developer and create impactful, innovative solutions."
 
  return(
    <>
      <div className="flex flex-col gap-3 text-white max-w-2xl">
        <p className="text-lg sm:text-3xl md:text-6xl font-serif my-0 sm:my-2 md:my-4">Hello,</p>
        <p className="text-lg sm:text-4xl md:text-8xl font-semibold font-serif my-0 sm:my-1 md:my-2">I'm Vilasini!</p>
        <p className="text-sm sm:text-md md:text-xl my-0 sm:my-1 md:my-2">{text}</p>
      </div>
    </>
  );
}

export default LeftIntro;

const ProfileCard = () => {
  return (
    <>
      <div className="flex flex-col w-full sm:w-3/4 md:flex-row md:justify-between md:w-full lg:flex-col lg:w-1/3 rounded-lg shadow-xs gap-2">
        <div className="bg-avacado border-2 border-gray-900 shadow-2xl rounded-full w-full max-w-xs mx-auto overflow-hidden aspect-square">
          <img className="object-cover w-full h-full" src={pictureNoBg} alt="picture of Vilasini Vijay" />
        </div>
        <div className="p-8 bg-black rounded-xl text-beige w-full">
          <h5 className="mb-2 text-xl text-white">contact me at</h5>
          <div className="flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <a href="mailto:vilasiniivj@gmail.com" className="px-4 py-2 text-sm underline"> vilasiniivj@gmail.com</a>
          </div>
          <div className="flex flex-row items-center">
            <GitHubIcon/>
            <a href="https://github.com/vilasini-v" className="px-4 py-2 text-sm underline"> github.com/vilasini-v</a>
          </div>
          <div className="flex flex-row items-center">
            <LinkedInIcon/>
            <a href="https://www.linkedin.com/in/vilasini-vijay/" className="px-4 py-2 text-sm underline"> linkedin.com/in/vilasini-vijay</a>
          </div>
        </div>
      </div>
    </>
  );
};

export function AboutMe({color}){
    return(<>
    <Navbar color={"green"}/>
    <div className="bg-algae min-h-screen">
        <section class="p-5 flex flex-col mx-10 gap-10 md:flex-col lg:flex-row lg:mx-40">
          <LeftIntro/>
          <ProfileCard/>
        </section>
        <section className="bg-beige text-black py-5">
          <SkillCards/>
        </section>
        <section class="">
          <ProgressiveEducationCards/>
        </section>
    </div>
    </>);
}
