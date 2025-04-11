import React from 'react';

const repository = ["Trackit Init", "Trackit Ignore", "Trackit Clone"];
const stagingArea = ["Trackit Stage", "Trackit Unstage", "Trackit Status"];
const commit = ["Trackit Commit", "Trackit Checkout", "Trackit Restore", "Trackit Tag"];
const branch = ["Trackit Branch", "Trackit Merge"];
const remote = ["Trackit Push", "Trackit Pull", "Trackit Fetch"];
const administration = ["Trackit Log", "Trackit Diff", "Trackit Blame", "Trackit GR", "Trackit Config"];
const permissions = ["Trackit User", "Trackit Role", "Trackit BranchPerms", "Trackit RolePerms"];

const TutorialTable = () => {
  const sections = [
    { title: "Repository", items: repository },
    { title: "Staging Area", items: stagingArea },
    { title: "Commit", items: commit },
    { title: "Branch", items: branch },
    { title: "Remote", items: remote },
    { title: "Administration", items: administration },
    { title: "Permissions", items: permissions },
  ];

  return (
    <table className="tutorialTable">
        <tbody>
            {sections.map((section, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                    <tr>
                        <th colSpan={2}>{section.title}</th>
                    </tr>
                    {section.items.map((tutorial, index) => (
                        <tr key={index}>
                            <td>{tutorial}</td>
                        </tr>
                    ))}
                </React.Fragment>
            ))}
        </tbody>
    </table>
  );
};

export default TutorialTable;
