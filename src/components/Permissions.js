import React from 'react';
import { Link } from 'react-router-dom';
import './Permissions.css'; 

const Permissions = () => {
  return (<>
    <div className="permissions-container">
      <h2 className="permissions-title">Permissions and Procedures</h2>

      <div className="permissions-box">
        <h3 className="permissions-subtitle">Required Permissions</h3>
        <ol className="permissions-list">
          <li>Principal</li>
          <li>Permission for venue: <br/>Dean (Training and Placement), Training and Placement Cell</li>
          <li>Permission from Security Officer if attendees from other colleges/organizations</li>
 <li>Permission for first year promotion</li>
        </ol>
      </div>

      <div className="permissions-box">
        <h3 className="permissions-subtitle">Required Signatures</h3>
        <ol className="permissions-list">
          <li>Management Team GDG</li>
          <li>Faculty Incharge: Khushboo Khurana</li>
          <li>HOD (CSE Dept)</li>
        </ol>
      </div>
      <div className="permissions-box">
        <h3 className="permissions-subtitle">Applications</h3>
        <img 
              src="/Principal.png"  
              alt='pri'
            />
        <img 
              src="/Audi.png"  
              alt='audi'
            />
            <img 
              src="/security.png"  
              alt='security'
            />
             <img 
              src="/fy.png"  
              alt='sfy'
            />
      </div>
    </div>
      <div>
        <Link to="/"><button className="button">Home</button></Link>
      </div></>
  );
};

export default Permissions;
