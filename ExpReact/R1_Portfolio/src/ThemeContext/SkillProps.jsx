import React from 'react'

function SkillProps({imgSrc , p}) {
  return (
    <span>
      <img src={imgSrc} alt="" />
      <p>{p}</p>
    </span>
  )
}

export default SkillProps
