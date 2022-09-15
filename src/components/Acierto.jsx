import React from 'react'

const Acierto = ({mensaje}) => {
  return (
    (<div className='bg-green-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
    <p>{mensaje}</p>
       </div>)
  )
}

export default Acierto