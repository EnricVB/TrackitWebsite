import React, { useEffect, useState } from 'react';

const TutorialTable = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeTable, setActiveTable] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const repository = ["Trackit Init", "Trackit Ignore", "Trackit Clone"];
  const stagingArea = ["Trackit Stage", "Trackit Unstage", "Trackit Status"];
  const commit = ["Trackit Commit", "Trackit Checkout", "Trackit Restore", "Trackit Tag"];
  const branch = ["Trackit Branch", "Trackit Merge"];
  const remote = ["Trackit Push", "Trackit Pull", "Trackit Fetch"];
  const administration = ["Trackit Log", "Trackit Diff", "Trackit Blame", "Trackit Garbage Recollector", "Trackit Config"];
  const permissions = ["Trackit User", "Trackit Role", "Trackit BranchPermissions", "Trackit RolePermissions"];

  const sections = [
    { title: "Repository", items: repository },
    { title: "Staging Area", items: stagingArea },
    { title: "Commit", items: commit },
    { title: "Branch", items: branch },
    { title: "Remote", items: remote },
    { title: "Administration", items: administration },
    { title: "Permissions", items: permissions },
  ];

  // Toggle section visibility for mobile view
  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const toggleTable = () => {
    setActiveTable(!activeTable);
  };

  return (
      <div className={`tutorialTable  ${activeTable ? "" : "hidden"}`}>
        <div className="tutorialTitle" onClick={toggleTable}>
            <h3 style={{ cursor: 'pointer' }}>{activeTable ? 'Tutorials ▲' : '▼'}</h3>
        </div>

        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className={`tableSection`}>

            <div 
              className={`sectionHeader ${activeSection === sectionIndex ? 'active' : ''}`}
              onClick={() => isMobile && toggleSection(sectionIndex)}>
              <h3>{section.title}</h3>
              {isMobile && <span className="toggle-icon">{activeSection === sectionIndex ? '−' : '+'}</span>}
            </div>

            <div className={`sectionItems ${isMobile && activeSection !== sectionIndex ? 'hidden' : ''}`}>
              {section.items.map((tutorial, index) => (
                <div className="tutorialItem" key={index}>
                  {tutorial}
                </div>
              ))}
            
            </div>
          </div>
        ))}
      </div>
  );
};

export default TutorialTable;