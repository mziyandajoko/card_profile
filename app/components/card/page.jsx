import Footer from '@/app/components/footer/page'
import Image from 'next/image';
const card = () => {
  return (
    <div className='card min-h-full overflow-clip'>
    <div className='grid grid-cols-2'>
      <div className='w-80'>
      <div className='card__contact relative pt-32 p-5  text-white'>
              <h5 className='text-sm font-semibold leading-10'>Email</h5>
              <p className='text-xs leading-5'>joko.mzee@gmail.com</p>
              <h5 className='text-sm font-semibold leading-10'>Phone</h5>
              <p className='text-xs leading-5' tell="062 4204 382">062 4204 382</p>
        <Image className='p-2 absolute min-h-full left-52 top-7'
          alt="developer image" 
          src={`/images/developer.jpeg`} 
          width={300}
          height={300}/>
          </div>
          <Footer />
          </div>
        <div className='py-5 pr-5'>
          <h1 className='text-2xl pt-3 font-bold leading-8 color-green'>Mziyanda Joko</h1>
          <p className='text-sm font-semibold leading-10'>Front-end Developer . Cape Town</p>
          <p className='text-xs leading-5'>Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Itaque eos natus ipsam eius distinctio ullam quibusdam 
          tempore commodi provident maxime, consectetur quo sit consequuntur unde ipsa 
          voluptatem dolorem 
          consectetur quo sit consequuntur unde ipsa 
          voluptatem dolorem  sint et eaque deserunt praesentium excepturi.
          Laborum nihil vitae quaerat eos nam.</p>
        <h3 className='text-sm font-semibold leading-10'>Workign with technologies:</h3>
        <ul className='text-xs leading-6'>
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