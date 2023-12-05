import Footer from '@/app/components/footer/page'
import Image from 'next/image';
const card = () => {
  return (
   <div className="bg-white rounded-lg relative gap-10 flex flex-col container items-center justify-between overflow-clip md:items-start md:flex-row-reverse">
    
      <Image className='w-1/4 left-52 top-7  md:absolute'
          alt="developer image" 
          src={`/images/developer.jpeg`} 
          width={300}
          height={300}/>
    
    <div className='flex flex-col items-center py-7 w-1/2'>
      <h1 className='text-2xl font-bold leading-8 color-green'>Mziyanda Joko</h1>
          <p className='text-sm font-semibold leading-10'>Front-end Developer . Cape Town</p>
          <p className='text-xs leading-5'>Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Itaque eos natus ipsam eius distinctio ullam quibusdam 
          tempore commodi provident maxime, consectetur quo sit consequuntur unde ipsa 
          voluptatem dolorem 
          consectetur quo sit consequuntur unde ipsa 
          voluptatem dolorem  sint et eaque deserunt praesentium excepturi.
          Laborum nihil vitae quaerat eos nam.</p>
        <h3 className='text-sm font-semibold leading-10'>Workign with technologies:</h3>
        <ul className='text-xs flex flex-col items-center leading-6'>
          <li>Flutter</li>
          <li>React</li>
          <li>WordPress</li>
          <li>JavaScript</li>
        </ul>
    </div>
    
    <div className='flex flex-col items-center bg-darkgreen bg-cover w-1/4 text-white  p-7 md:items-start'>
      <h5 className='text-sm font-semibold leading-10'>Email</h5>
      <p className='text-xs leading-5'>joko.mzee@gmail.com</p>
      <h5 className='text-sm font-semibold leading-10'>Phone</h5>
      <p className='text-xs leading-5' tell="062 4204 382">062 4204 382</p>
      <Footer />
    </div>
   </div>
  )
}

export default card