import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="relative flex-grow w-full text-purple-400 flex items-center justify-center">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/hero.jpg"
                        alt="Hero Background"
                        fill
                        className='object-cover'
                        priority
                    />
                </div>

                <div className="absolute h-full w-full bg-black/40 z-0"></div>
                <div className="flex flex-col items-center justify-center text-white z-[1]">
                    <h1 className="text-center text-6xl xl:text-9xl font-medium font-Atma text-shadow">Hi, I&apos;m Arjun</h1>
                    <p className="px-4 text-xl xl:max-w-[800px] text-center mt-5 text-shadow">This is my travel and birding blog where I share stories from the trails I walk, the skies I watch, and the wonders I discover along the way.</p>

                    <Link href="blog" className="border-white border px-10 py-3 mt-7 uppercase text-xl transition-all duration-300 hover:bg-primary hover:border-primary text-shadow">Explore with me</Link>
                </div>
            </div>
        </>
    );
}