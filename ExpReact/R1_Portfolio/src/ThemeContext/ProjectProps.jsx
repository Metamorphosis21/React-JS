import React from 'react'

function ProjectProps( {imgSrc , link , altName , PName , PApp}) {
  return (
    <a href={link}>
          <img src={imgSrc} alt={altName} />
          <h3>{PName}</h3>
          <p>{PApp}</p>
        </a>
  )
}

export default ProjectProps
