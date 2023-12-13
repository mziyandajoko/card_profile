import Footer from '@/app/components/footer/page'
import Image from 'next/image';
const card = () => {
  return (
    <div className='bg-white rounded-lg overflow-clip relative drop-shadow-xl hover:drop-shadow-2xl hover:scale-105  transition ease-in-out duration-700'>
   <div className=" gap-5 flex flex-col container items-center justify-between  md:items-start md:flex-row-reverse md:gap-10">
    
      <Image className='w-[100%] h-[400px] left-52 top-7 md:h-auto md:w-1/4  md:absolute'
          alt="developer image" 
          src={`/images/developer.jpeg`} 
          width={300}
          height={300}/>
    
    <div className='p-5 w-[100%] md:w-[53%]'>
      <div className='flex flex-col items-center  md:items-start'>

      <h1 className='text-2xl font-bold leading-8 color-green'>Mziyanda Joko</h1>
          <p className='text-sm font-semibold leading-10'>Front-end Developer . Cape Town</p>
          <p className='flex text-xs items-center  leading-5'>Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Itaque eos natus ipsam eius distinctio ullam quibusdam 
          tempore commodi provident maxime, consectetur quo sit consequuntur unde ipsa 
          voluptatem dolorem 
          consectetur quo sit consequuntur unde ipsa 
          voluptatem dolorem  sint et eaque deserunt praesentium excepturi.
          Laborum nihil vitae quaerat eos nam.</p>
        <h3 className='text-sm font-semibold leading-10'>Workign with technologies:</h3>
        <ul className='text-xs flex flex-col items-center leading-6 md:items-start'>
          <li>Flutter</li>
          <li>React</li>
          <li>WordPress</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </div>
    
    <div className='bg-darkgreen w-[100%] md:w-1/4 md:items-start'>
      <div className='flex flex-col items-center text-white py-5 md:py-24 '>

      <h5 className='text-sm font-semibold leading-10'>Email</h5>
      <p className='text-xs leading-5'>joko.mzee@gmail.com</p>
      <h5 className='text-sm font-semibold leading-10'>Phone</h5>
      <p className='text-xs leading-5' tell="062 4204 382">062 4204 382</p>
      
      <Footer /> 
      </div>
    </div>

    </div>
   </div>
  )
}

export default card