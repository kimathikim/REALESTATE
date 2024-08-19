import React, { useState } from 'react';
import Navbar from './components/common/layout/Navbar.jsx';
import './styles/PropertyList2.css';
import './styles/PropertyList.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './styles/MyTeam.css';
import image1 from './assets/manu13.jpg.jpg';
import image2 from './assets/block2.png';


function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: ' Ababu Oturi',
      role: 'Frontend Developer',
      role1:'CO-FOUNDER & C.E.O',
      image: image1,
      details: 'Emmanuel has expertise in React.Js,Flutter, Blockchain Development and also a reseacher in Investments.',
    },
    {
      name: 'Brian Kimathi',
      role: 'Backend Developer',
      role1:'CO-FOUNDER & C.T.O',
      image: image1,
      details: 'Brian specializes in Blockchain Development,Flutter and Python.',
    },
    {
      name: 'Olives Matei',
      role: 'Brand Influencer',
      role1:'C.M.O',
      image: image1,
      details: 'Olives is skilled in Marketing & Branding,Networking and API development.',
    },
    {
      name: 'Dion Nekesa',
      role: 'Project Manager',
      role1:'C.P.O',
      image: image1,
      details: 'Dion has experience in Agile methodologies, Scrum and AI.',
    },
    {
      name: 'Marvin Ngetich',
      role: 'Web Developer',
      role1:'C.I.O',
      image: image1,
      details: 'Marvin is proficient in AI, Mobile Development, and ML.',
    },
  ];

  const advisors = [
    {
      name: 'Andrew Kipkebut',
      role: 'Senior Advisor',
      image: image1,
      details: 'Andrew has over 10 years of experience in the tech industry.',
    },
   /* {
      name: 'Mark Taylor',
      role: 'Financial Advisor',
      image: image16,
      details: 'Mark is an expert in financial planning and analysis.',
    },*/
  ];

  const counsels = [
    /*{
      name: 'Sarah White',
      role: 'Legal Counsel',
      image: image17,
      details: 'Sarah specializes in tech law and contracts.',
    },
    {
      name: 'James Green',
      role: 'Business Counsel',
      image: image13,
      details: 'James has experience in business strategy and operations.',
    },*/
  ];

  const handleImageClick = (member) => {
    setSelectedMember(member);
  };

  const closePopup = () => {
    setSelectedMember(null);
  };

  return (
    <div className="my-team-page">
      <Navbar />

      <main>
      <div className='team2-content'>
    <div className='team2-text'>
      <p className='team1'>
        RETChain is a union of seasoned Real Estate Tokenization and blockchain industry experts, <br/>
        along with marketing and technology experts. Together,
        we are executing our collective vision to create a Real Estate Ownership Experience and also to ensure Liquidity.
      </p>
    </div>
    <div className='team2-image'>
      <img src={image2} alt="Description" />
    </div>
  </div>
      <div className="team-section">
        <h2>Team Members</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index} onClick={() => handleImageClick(member)}>
              <img src={member.image} alt={member.name} />
              <h3>
  {member.name} <br />
  <span style={{ fontSize: '0.8em' }}>{member.role1}</span>
</h3>
              
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="advisors-section">
        <h2>Advisors</h2>
        <div className="advisors">
          {advisors.map((advisor, index) => (
            <div className="advisor" key={index} onClick={() => handleImageClick(advisor)}>
              <img src={advisor.image} alt={advisor.name} />
              <h3>{advisor.name}</h3>
              <p>{advisor.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="counsels-section">
      
<div className="counsels">
  {counsels.map((counsel, index) => (
    <div className="counsel" key={index} onClick={() => handleImageClick(counsel)}>
      {/* Render counsel image */}
      <img src={counsel.image} alt={counsel.name} />
      {/* Render counsel name */}
      <h3>{counsel.name}</h3>
      {/* Render counsel role */}
      <p>{counsel.role}</p>
    </div>
  ))}
</div>

      </div>

      {selectedMember && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedMember.name}</h2>
            <p>{selectedMember.details}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
  

      </main>
    </div>
  );
}

export default Team;
