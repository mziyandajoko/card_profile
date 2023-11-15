import React from 'react'

const card = () => {
  return (
    <div className='card min-h-full min-w-full'>
    <div className='flex justify-between'>
      <div className='card__contact'>
        <div>
            <h5>Email</h5>
            <p>joko.mzee@gmail.com</p>
        </div>
        <div></div>
      </div>
      <div>
        Image
      </div>
      <div>
      <h1 className='text-3xl font-semibold'>Mziyanda Joko</h1>
      <p className='text-lg font-medium'>Front-end Developer . Cape Town</p>
        <p className='text-sm'>A young dynamic individual willing to try new cutting edge technologies.A devoper who loves working in a teams,
        with good communication and leadershp skills.</p>
      <h3 className='text-lg font-medium'>Workign with technologies:</h3>
      <ul className='text-sm'>
        <li>Flutter</li>
        <li>React</li>
        <li>WordPress</li>
        <li>JavaScript</li>
      </ul>
      </div>
    </div>
    </div>
  )
}

export default card