import Footer from '@/app/components/footer/page'
import Image from 'next/image';
const card = () => {
  return (
    <div className='card min-h-full overflow-clip'>
    <div className='grid grid-cols-2'>
      <div className='w-80'>

      <div className='card__contact relative pt-32 pb-24 p-5  text-white'>
          <div>
              <h5 className=''>Email</h5>
              <p>joko.mzee@gmail.com</p>
          </div>
          <div>
              <h5 className=''>Phone</h5>
              <p tell="062 4204 382">062 4204 382</p>
          </div>
         

        <Image className='p-2 pb-24 absolute min-h-full max-w-[100%] left-52 top-5'
          alt="developer image" 
          src={`/images/developer.jpeg`} 
          width={300}
          height={100}/>
          </div>
          <Footer />
          </div>
        <div className='py-5'>
          <h1 className='text-4xl font-bold'>Mziyanda Joko</h1>
          <p className='text-lg font-semibold'>Front-end Developer . Cape Town</p>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Itaque eos natus ipsam eius distinctio ullam quibusdam 
          tempore commodi provident maxime, consectetur quo sit consequuntur unde ipsa 
          voluptatem dolorem  sint et eaque deserunt praesentium excepturi.
          Laborum nihil vitae quaerat eos nam.</p>
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