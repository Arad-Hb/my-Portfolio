import Image from 'next/image'
import React from 'react'

const PersonalImage = () => {
  return (
    <Image alt='Arad Habashi' key='myName' src={'/public/images/aradHb-withoutBackground.jpg'} width={80} height={80} />

  )
}

export default PersonalImage