import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen w-full'>

      <div className='flex flex-col'>
        <Link href="about" className='text-white hover:bg-yellow-400 bg-yellow-500 w-[200px] h-[70px] flex justify-center items-center rounded'>Go to about page</Link>
        <Link href="contact" className='text-white hover:scale-110 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[200px] h-[70px] flex justify-center items-center rounded-xl'>Go to contact page</Link>
      </div>

      <div className='w-[800px] h-[600px] flex justify-center items-center'>
        <div>
          <Image className='hover:scale-110' src="/dino.png" alt='' height={70} width={70} />
          <p className='font-extrabold text-[30px] my-[20px]'>No internet</p>
          <div>
            <p>Try:</p>
            <p className='ml-[22px]'>• Checking the network cables, modem, and router</p>
            <p className='ml-[22px]'>• Reconnecting to WiFi</p>
          </div>
          <p className='my-[20px]'>ERR_INTERNET_DISCONNECTED</p>
        </div>
      </div>
    </div>
  );
}

