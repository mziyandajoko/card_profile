import {FaGithub, FaInbox, FaLinkedin} from 'react-icons/fa';
import Image from 'next/image';
const card = () => {
  return (
    <div className='card min-h-full overflow-clip'>
    <div className='grid grid-cols-2 justify-between'>
      <div className='card__contact w-48 relative pt-32 p-5 text-white'>
        <div>
            <h5 className='py-2'>Email</h5>
            <p>joko.mzee@gmail.com</p>
        </div>
        <div>
            <h5 className='py-2'>Phone</h5>
            <p tell="062 4204 382">062 4204 382</p>
        </div>
          <h5 className='py-2'>Find me on </h5>
        <div className='flex pe-8'>
          <FaInbox />
          <FaGithub />
          <FaLinkedin />


        </div>
<div className='bg-slate-50'>

       <Image className='p-2 absolute min-h-full  top-5 left-52' alt="developer image" src={`/images/developer.jpeg`}  width={500}
      height={900}/>
      </div>
      </div>
      <div className='py-5'>
      <h1 className='text-4xl font-bold'>Mziyanda Joko</h1>
      <p className='text-lg font-semibold'>Front-end Developer . Cape Town</p>
        <p className='text-sm'>A young dynamic individual willing to try new cutting edge technologies.A devoper who loves working in a teams,
        with good communication and leadershp skills.</p>
      <h3 className='text-lg font-semibold'>Workign with technologies:</h3>
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