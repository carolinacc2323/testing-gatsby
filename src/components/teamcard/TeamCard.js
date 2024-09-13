import React from 'react'
import './teamcard.css'
import gitlab from './gitlab.svg'
import linkedin from './linkedin.svg'


const TeamCard = ({ imageSrc, title, role, description }) => {
    return (
      <div className="card" data-testid="card-team">
        <img src={imageSrc} alt={title} className="card-image-team" />
        <div className='team-redes'>
          <img src={gitlab} width={20}/>
          <img src={linkedin} width={20}/>
        </div>
        <h2 className="card-title-team">{title}</h2>
        <h2 className="card-role-team">{role}</h2>
        <p className="card-description-team">{description}</p>
      </div>
    )
  }
  
  export default TeamCard
