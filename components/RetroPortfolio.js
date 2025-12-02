import React, { useState, useEffect } from 'react';
import { Folder, FileText, HardDrive, Cpu, Mail, X, Minus, Square, Terminal, Briefcase, GraduationCap, Code } from 'lucide-react';

const RetroPortfolio = () => {
  const [time, setTime] = useState(new Date());
  
  // Window State Management
  const [windows, setWindows] = useState({
    about: { x: 100, y: 50, z: 1, isOpen: false, isMinimized: false, origin: {x:0, y:0} },
    experience: { x: 150, y: 80, z: 2, isOpen: false, isMinimized: false, origin: {x:0, y:0} },
    projects: { x: 200, y: 110, z: 3, isOpen: false, isMinimized: false, origin: {x:0, y:0} },
    skills: { x: 250, y: 140, z: 4, isOpen: false, isMinimized: false, origin: {x:0, y:0} },
    education: { x: 300, y: 170, z: 5, isOpen: false, isMinimized: false, origin: {x:0, y:0} },
    contact: { x: 350, y: 200, z: 6, isOpen: false, isMinimized: false, origin: {x:0, y:0} }
  });

  const [activeWindowId, setActiveWindowId] = useState(null);
  const [maxZ, setMaxZ] = useState(10);
  
  // Dragging State
  const [dragState, setDragState] = useState({ isDragging: false, winId: null, offset: {x: 0, y: 0} });

  // Update clock
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Global Drag Events
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragState.isDragging && dragState.winId) {
        setWindows(prev => ({
          ...prev,
          [dragState.winId]: {
            ...prev[dragState.winId],
            x: e.clientX - dragState.offset.x,
            y: e.clientY - dragState.offset.y
          }
        }));
      }
    };

    const handleMouseUp = () => {
      if (dragState.isDragging) {
        setDragState({ isDragging: false, winId: null, offset: {x: 0, y: 0} });
      }
    };

    if (dragState.isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragState]);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  const handleOpenWindow = (key, e) => {
    const originX = e.clientX;
    const originY = e.clientY;
    const newZ = maxZ + 1;
    setMaxZ(newZ);
    setActiveWindowId(key);

    setWindows(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        isOpen: true,
        isMinimized: false,
        z: newZ,
        origin: { x: originX, y: originY },
      }
    }));
  };

  const handleCloseWindow = (key, e) => {
    e.stopPropagation();
    setWindows(prev => ({
      ...prev,
      [key]: { ...prev[key], isOpen: false }
    }));
  };

  const handleFocusWindow = (key) => {
    if (activeWindowId !== key) {
      const newZ = maxZ + 1;
      setMaxZ(newZ);
      setActiveWindowId(key);
      setWindows(prev => ({
        ...prev,
        [key]: { ...prev[key], z: newZ }
      }));
    }
  };

  const handleDragStart = (e, key) => {
    e.preventDefault(); 
    handleFocusWindow(key);
    
    const win = windows[key];
    setDragState({
      isDragging: true,
      winId: key,
      offset: {
        x: e.clientX - win.x,
        y: e.clientY - win.y
      }
    });
  };

  // Static Data for content
  const windowsContentData = {
    about: { title: 'About_Me.txt', icon: <FileText size={20} />, content: <AboutContent />, w: 'w-[90%] md:w-[600px]', h: 'h-auto' },
    experience: { title: 'Professional_Experience', icon: <Briefcase size={20} />, content: <ExperienceContent />, w: 'w-[95%] md:w-[700px]', h: 'h-[500px]' },
    skills: { title: 'System_Skills', icon: <Cpu size={20} />, content: <SkillsContent />, w: 'w-[90%] md:w-[500px]', h: 'h-auto' },
    projects: { title: 'Project_Highlights', icon: <Code size={20} />, content: <ProjectsContent />, w: 'w-[90%] md:w-[600px]', h: 'h-auto' },
    education: { title: 'Education_History', icon: <GraduationCap size={20} />, content: <EducationContent />, w: 'w-[90%] md:w-[450px]', h: 'h-auto' },
    contact: { title: 'Contact_Info', icon: <Mail size={20} />, content: <ContactContent />, w: 'w-[90%] md:w-[400px]', h: 'h-auto' }
  };

  return (
    // Main Container -> Removed inline styles, added 'retro-bg' class
    <div className="min-h-screen retro-bg font-mono overflow-hidden flex flex-col relative selection:bg-black selection:text-white">
      
      {/* Overlay to soften the black pattern to gray-ish */}
      <div className="absolute inset-0 bg-gray-500 opacity-50 pointer-events-none z-0"></div>

      {/* Menu Bar */}
      <div className="h-8 bg-white border-b-2 border-black flex items-center justify-between px-2 z-50 shadow-sm relative select-none">
        <div className="flex items-center space-x-4">
          <span className="font-bold flex items-center gap-1 cursor-pointer hover:underline">
            <Terminal size={16} fill="black" /> System
          </span>
          <span className="cursor-pointer hover:underline hidden sm:inline">File</span>
          <span className="cursor-pointer hover:underline hidden sm:inline">Edit</span>
          <span className="cursor-pointer hover:underline hidden sm:inline">View</span>
          <span className="cursor-pointer hover:underline hidden sm:inline">Special</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
             <span className="text-sm font-bold">Eray Kırkpınar</span>
          </div>
          <div className="bg-white border border-black px-2 py-0.5 text-sm shadow-[2px_2px_0_0_rgba(0,0,0,0.2)]">
            {formatTime(time)}
          </div>
        </div>
      </div>

      {/* Desktop Area */}
      <div className="flex-1 p-4 relative overflow-hidden z-0">
        
        {/* Desktop Icons */}
        <div className="grid grid-cols-3 sm:grid-cols-1 gap-6 w-full sm:w-24 justify-items-center sm:absolute sm:right-4 sm:top-4 z-0">
          <DesktopIcon label="My Computer" icon={<HardDrive size={32} strokeWidth={1.5} />} onClick={(e) => handleOpenWindow('about', e)} />
          <DesktopIcon label="Experience" icon={<Folder size={32} strokeWidth={1.5} fill="#000" className="text-white" />} onClick={(e) => handleOpenWindow('experience', e)} />
          <DesktopIcon label="Projects" icon={<Code size={32} strokeWidth={1.5} />} onClick={(e) => handleOpenWindow('projects', e)} />
          <DesktopIcon label="Skills" icon={<Cpu size={32} strokeWidth={1.5} />} onClick={(e) => handleOpenWindow('skills', e)} />
          <DesktopIcon label="Education" icon={<GraduationCap size={32} strokeWidth={1.5} />} onClick={(e) => handleOpenWindow('education', e)} />
          <DesktopIcon label="Contact" icon={<Mail size={32} strokeWidth={1.5} />} onClick={(e) => handleOpenWindow('contact', e)} />
        </div>

        {/* Windows Rendering */}
        {Object.keys(windows).map((key) => {
          const winState = windows[key];
          const winData = windowsContentData[key];
          
          if (!winState.isOpen) return null;

          const isActive = activeWindowId === key;
          
          return (
            <div
              key={key}
              onMouseDown={() => handleFocusWindow(key)}
              style={{
                backgroundColor: '#ffffff',
                transformOrigin: `${winState.origin.x}px ${winState.origin.y}px`,
                left: `${winState.x}px`,
                top: `${winState.y}px`,
                zIndex: winState.z,
              }}
              className={`
                absolute flex flex-col border-2 border-black
                ${winData.w} ${winData.h} max-h-[85vh] max-w-[100vw]
                origin-center animate-zoomIn 
                ${isActive ? 'shadow-retro-active' : 'shadow-retro'}
              `}
            >
              {/* --- Title Bar --- */}
              <div 
                onMouseDown={(e) => handleDragStart(e, key)}
                className={`
                  h-8 border-b-2 border-black flex items-center justify-between px-1 select-none cursor-grab active:cursor-grabbing
                  ${isActive ? 'bg-black text-white' : 'bg-white text-black'}
                `}
              >
                <div className="flex items-center gap-2 pointer-events-none">
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleCloseWindow(key, e); }}
                    className={`pointer-events-auto w-4 h-4 border border-current flex items-center justify-center hover:bg-gray-400 ${!isActive && 'border-black'}`}
                    style={{ backgroundColor: '#ffffff', color: '#000000' }}
                  >
                    <X size={10} />
                  </button>
                  <span className="font-bold text-sm tracking-wide truncate ml-2 flex items-center gap-2">
                    {winData.icon} {winData.title}
                  </span>
                </div>
                
                {/* Decorative Pinstripes (Title Bar Texture) */}
                <div className="flex-1 mx-4 flex flex-col gap-[2px] opacity-50 pointer-events-none">
                   <div className={`h-[1px] w-full ${isActive ? 'bg-white' : 'bg-black'}`}></div>
                   <div className={`h-[1px] w-full ${isActive ? 'bg-white' : 'bg-black'}`}></div>
                   <div className={`h-[1px] w-full ${isActive ? 'bg-white' : 'bg-black'}`}></div>
                   <div className={`h-[1px] w-full ${isActive ? 'bg-white' : 'bg-black'}`}></div>
                   <div className={`h-[1px] w-full ${isActive ? 'bg-white' : 'bg-black'}`}></div>
                </div>

                <div className="flex gap-1 pointer-events-none">
                  <button className={`w-4 h-4 border border-current flex items-center justify-center ${!isActive && 'border-black'}`} style={{backgroundColor: '#fff', color: '#000'}}>
                    <Minus size={10} />
                  </button>
                  <button className={`w-4 h-4 border border-current flex items-center justify-center ${!isActive && 'border-black'}`} style={{backgroundColor: '#fff', color: '#000'}}>
                    <Square size={8} />
                  </button>
                </div>
              </div>

              {/* --- Window Content --- */}
              <div className="flex-1 overflow-auto p-0 relative bg-white">
                 {/* Retro Scrollbar Track */}
                <div className="absolute right-0 top-0 bottom-0 w-4 border-l-2 border-black bg-gray-100 flex flex-col items-center justify-between py-1 z-20 pointer-events-none" style={{ backgroundColor: '#f3f4f6' }}>
                   <div className="w-full h-4 border-b border-black flex items-center justify-center bg-white"><div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-black"></div></div>
                   <div className="w-3 flex-1 bg-gray-300 mx-0.5 my-1 border border-gray-400 relative" style={{ backgroundImage: 'radial-gradient(black 1px, transparent 0)', backgroundSize: '2px 2px', opacity: 0.2 }}></div>
                   <div className="w-full h-4 border-t border-black flex items-center justify-center bg-white"><div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-black"></div></div>
                </div>
                
                {/* Main Content Area */}
                <div className="p-6 pr-8 leading-relaxed text-sm md:text-base h-full text-black retro-scrollbar overflow-y-auto">
                  {winData.content}
                </div>
              </div>
              
              {/* --- Footer Status Bar --- */}
              <div className="h-6 border-t-2 border-black flex items-center px-2 text-xs justify-between select-none" style={{ backgroundColor: '#f3f4f6' }}>
                 <span>{winData.w.includes('w-full') ? '1 item' : 'System Ready'}</span>
                 <div className="w-3 h-3 border border-black bg-white flex items-center justify-center cursor-se-resize">
                    <div className="w-1.5 h-1.5 bg-black rotate-45 transform origin-center"></div>
                 </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// --- Sub Components ---

const DesktopIcon = ({ label, icon, onClick }) => (
  <div 
    onClick={onClick}
    className="group flex flex-col items-center gap-1 cursor-pointer w-24 p-2 active:opacity-60 z-0"
  >
    <div className="bg-white border-2 border-black p-1.5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] group-hover:bg-black group-hover:text-white group-hover:border-white transition-colors" style={{ backgroundColor: '#ffffff' }}>
      {icon}
    </div>
    <span className="bg-white border border-black px-1 text-xs font-bold shadow-[2px_2px_0_0_rgba(0,0,0,0.5)] whitespace-nowrap" style={{ backgroundColor: '#ffffff' }}>
      {label}
    </span>
  </div>
);

// --- Content Components ---

const AboutContent = () => (
  <div className="space-y-4 select-text">
    <h2 className="text-xl font-bold border-b-2 border-black pb-2 mb-4">HELLO_WORLD</h2>
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-32 h-32 border-2 border-black bg-gray-200 shrink-0 flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
        <span className="text-4xl">👨‍💻</span>
      </div>
      <div>
        <p className="mb-4">
          <strong className="bg-black text-white px-1">Senior Software Engineer</strong> with 5+ years of experience in the banking and finance sector.
        </p>
        <p className="mb-4">
          Specializing in building high-performance backend services, automation tools, and secure web applications using 
          <strong> .NET Core, C#, Python, and React</strong>.
        </p>
        <p>
          Proven track record of replacing costly 3rd-party tools with custom in-house solutions and reducing operational processing times by ~98%.
        </p>
      </div>
    </div>
    
    <div className="mt-6 bg-gray-100 border border-black p-4" style={{backgroundColor: '#f3f4f6'}}>
      <h3 className="font-bold mb-2">Current Status:</h3>
      <p className="text-sm">📍 Based in Istanbul, Turkiye</p>
      <p className="text-sm">💼 Integration Engineer @ Garanti Teknoloji</p>
      <p className="text-sm">🚀 Focusing on CI/CD & Automation</p>
    </div>
  </div>
);

const ExperienceContent = () => (
  <div className="space-y-8 select-text">
    
    {/* Job 1 */}
    <div className="relative">
      <div className="absolute -left-3 top-1.5 w-2 h-2 bg-black"></div>
      <h3 className="font-bold text-lg">Garanti Teknoloji</h3>
      <p className="italic text-sm mb-2">Software Integration Engineer | Feb 2024 – Present</p>
      <ul className="list-none space-y-2 text-sm pl-4 border-l-2 border-black ml-1">
        <li className="before:content-['-'] before:mr-2">Engineered automation tool adopted by internal teams, processing thousands of transactions daily.</li>
        <li className="before:content-['-'] before:mr-2 font-bold bg-yellow-100 inline-block px-1 border border-dashed border-gray-400">Reduced specific workflow execution time from 2 days to 15 minutes.</li>
        <li className="before:content-['-'] before:mr-2">Developed backend services using .NET Core and RabbitMQ.</li>
        <li className="before:content-['-'] before:mr-2">Implemented Jenkins pipelines for automated deployment.</li>
      </ul>
    </div>

    {/* Job 2 */}
    <div className="relative">
      <div className="absolute -left-3 top-1.5 w-2 h-2 bg-gray-400"></div>
      <h3 className="font-bold text-lg">Intellium Bilişim</h3>
      <p className="italic text-sm mb-2">Full Stack Developer | Feb 2021 – Feb 2024</p>
      <ul className="list-none space-y-2 text-sm pl-4 border-l-2 border-gray-300 ml-1">
        <li className="before:content-['-'] before:mr-2 font-bold">Re-engineered proprietary fraud detection system using Python (90%+ accuracy).</li>
        <li className="before:content-['-'] before:mr-2">Built Centralized Data Dictionary Platform ensuring ISO/BTK compliance.</li>
        <li className="before:content-['-'] before:mr-2">Designed secure front-end using Next.js (SSR) for financial data.</li>
        <li className="before:content-['-'] before:mr-2">Developed Python automation scripts for deployment.</li>
      </ul>
    </div>

    {/* Job 3 */}
    <div className="relative opacity-75">
      <div className="absolute -left-3 top-1.5 w-2 h-2 bg-gray-300"></div>
      <h3 className="font-bold text-lg">Intellium Bilişim</h3>
      <p className="italic text-sm mb-2">Intern | Mar 2019 – Feb 2021</p>
      <ul className="list-none space-y-2 text-sm pl-4 border-l-2 border-gray-200 ml-1">
        <li className="before:content-['-'] before:mr-2">Developed fraud detection algorithms using ML.</li>
        <li className="before:content-['-'] before:mr-2">Designed .NET-based desktop interface prototype.</li>
      </ul>
    </div>

  </div>
);

const SkillsContent = () => (
  <div className="select-text">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="border-2 border-black p-3 shadow-[3px_3px_0_0_rgba(0,0,0,0.2)]" style={{backgroundColor: '#fff'}}>
        <h4 className="font-bold bg-black text-white px-2 mb-2 inline-block">Languages</h4>
        <div className="flex flex-wrap gap-2">
          {['C#', 'Python', 'JavaScript (ES6+)', 'SQL', 'T-SQL'].map(s => (
            <span key={s} className="bg-gray-200 px-2 py-1 text-xs border border-gray-400">{s}</span>
          ))}
        </div>
      </div>

      <div className="border-2 border-black p-3 shadow-[3px_3px_0_0_rgba(0,0,0,0.2)]" style={{backgroundColor: '#fff'}}>
        <h4 className="font-bold bg-black text-white px-2 mb-2 inline-block">Frameworks</h4>
        <div className="flex flex-wrap gap-2">
          {['.NET Core', 'ASP.NET Web API', 'Entity Framework', 'React.js', 'Next.js', 'Pandas'].map(s => (
            <span key={s} className="bg-gray-200 px-2 py-1 text-xs border border-gray-400">{s}</span>
          ))}
        </div>
      </div>

      <div className="border-2 border-black p-3 shadow-[3px_3px_0_0_rgba(0,0,0,0.2)]" style={{backgroundColor: '#fff'}}>
        <h4 className="font-bold bg-black text-white px-2 mb-2 inline-block">DevOps & Tools</h4>
        <div className="flex flex-wrap gap-2">
          {['Git', 'Docker', 'Jenkins', 'RabbitMQ', 'Azure DevOps', 'MSSQL'].map(s => (
            <span key={s} className="bg-gray-200 px-2 py-1 text-xs border border-gray-400">{s}</span>
          ))}
        </div>
      </div>

      <div className="border-2 border-black p-3 shadow-[3px_3px_0_0_rgba(0,0,0,0.2)]" style={{backgroundColor: '#fff'}}>
        <h4 className="font-bold bg-black text-white px-2 mb-2 inline-block">Architecture</h4>
        <div className="flex flex-wrap gap-2">
          {['Microservices', 'OOP', 'Clean Architecture', 'SOLID', 'Design Patterns'].map(s => (
            <span key={s} className="bg-gray-200 px-2 py-1 text-xs border border-gray-400">{s}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ProjectsContent = () => (
  <div className="space-y-6 select-text">
    <div className="border border-black p-4 bg-gray-50" style={{backgroundColor: '#f9fafb'}}>
      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
        <Terminal size={18} /> Fraud Detection Replacement
      </h3>
      <p className="text-sm mb-3 text-justify">
        Replaced a paid 3rd-party tool by engineering a custom Python-based solution. 
        Achieved <strong>90%+ accuracy</strong> in anomaly detection. 
        Integrated with a custom C# Desktop Dashboard for real-time visualization.
      </p>
      <div className="text-xs font-mono text-gray-500">Stack: Python, ML, C# WPF, .NET</div>
    </div>

    <div className="border border-black p-4 bg-gray-50" style={{backgroundColor: '#f9fafb'}}>
      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
        <Cpu size={18} /> Workflow Automation Engine
      </h3>
      <p className="text-sm mb-3 text-justify">
        Developed for Garanti Teknoloji. Reduced a specific 2-day manual banking process down to 
        <strong>15 minutes</strong>. Used by nearly all internal teams.
      </p>
      <div className="text-xs font-mono text-gray-500">Stack: .NET Core, RabbitMQ, Jenkins</div>
    </div>

     <div className="border border-black p-4 bg-gray-50" style={{backgroundColor: '#f9fafb'}}>
      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
        <HardDrive size={18} /> Data Dictionary Platform
      </h3>
      <p className="text-sm mb-3 text-justify">
        Enterprise banking system visualization platform ensuring ISO/BTK compliance. 
        Utilized Server-Side Rendering for maximum data security.
      </p>
      <div className="text-xs font-mono text-gray-500">Stack: Next.js, React, MSSQL</div>
    </div>
  </div>
);

const EducationContent = () => (
  <div className="space-y-4 text-center select-text">
    <div className="border-b-2 border-black pb-4">
      <h3 className="font-bold text-lg">Istanbul University</h3>
      <p className="text-sm">Management Information Systems</p>
      <p className="text-xs text-gray-500">Bachelors Degree | 2020 – 2025</p>
    </div>
    <div>
      <h3 className="font-bold text-lg">Marmara University</h3>
      <p className="text-sm">Computer Programming</p>
      <p className="text-xs text-gray-500">Associate Degree | 2018 – 2020</p>
    </div>
  </div>
);

const ContactContent = () => (
  <div className="flex flex-col items-center justify-center space-y-6 py-4 select-text">
    <div className="text-center space-y-2">
      <p className="font-bold border-b border-black w-full pb-1">Email Protocol</p>
      <a href="mailto:eraykirkpinar@gmail.com" className="block text-blue-700 hover:bg-blue-100 px-2">eraykirkpinar@gmail.com</a>
    </div>

    <div className="text-center space-y-2">
      <p className="font-bold border-b border-black w-full pb-1">Voice Line</p>
      <p className="font-mono">+90 553 320 57 96</p>
    </div>

    <div className="text-center space-y-2">
      <p className="font-bold border-b border-black w-full pb-1">World Wide Web</p>
      <a href="#" className="block text-blue-700 hover:bg-blue-100 px-2">linkedin.com/in/eraykirkpinar</a>
      <a href="#" className="block text-blue-700 hover:bg-blue-100 px-2">eraykrkpnr.com</a>
    </div>

    <div className="w-full bg-black text-white text-center py-2 mt-4 text-xs font-mono">
      Ready to Collaborate
    </div>
  </div>
);

export default RetroPortfolio;