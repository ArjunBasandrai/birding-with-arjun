import Image from 'next/image';

export default function DestinationsHero() {
    return (
        <>
            <div className="relative h-[65vh] w-full">
                <Image
                    src="/hero.jpg"
                    alt="Destinations"
                    fill
                    className='object-cover'
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center">
                    <h1 className="text-6xl xl:text-8xl font-Atma text-white">Destinations</h1>
                </div>
            </div>
        </>
    );
}