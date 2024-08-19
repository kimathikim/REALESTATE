import React, { useEffect } from 'react';
import './styles/PropertyList2.css'; // Make sure this CSS file is imported

function Team() {
  useEffect(() => {
    const image = document.getElementById('team2-image');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });
    
    if (image) {
      observer.observe(image);
    }
    
    return () => {
      if (image) {
        observer.unobserve(image);
      }
    };
  }, []);
  
  return (
    <div className='my-team-page'>
      <Navbar />
      <main>
        <div className='team2'>
          <h1>Meet Our Team</h1>
          <div className='team2-content'>
            <div className='team2-text'>
              <p className='team1'>
                RETChain is a union of seasoned Real Estate Tokenization and blockchain industry experts, <br/>
                along with marketing and technology experts. Together,
                we are executing our collective vision to create a Real Estate Ownership Experience and also to ensure Liquidity.
              </p>
            </div>
            <div className='team2-image' id='team2-image'>
              <img src={image2} alt="Description" />
            </div>
          </div>
        </div>
        {/* Other components */}
      </main>
    </div>
  );
}

export default Team;
