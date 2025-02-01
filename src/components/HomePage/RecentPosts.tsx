import Image from 'next/image';
import Link from 'next/link';

interface PostProps {
    image: string;
    alt: string;
    title: string;
    description: string;
    link: string;
    reverse: boolean
}

function Post({ image, alt, title, description, link, reverse }: PostProps) {
    return (
        <div className={`flex flex-col ${reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'} mb-5 xl:mb-10`}>
            <div className="xl:w-1/2 relative px-2">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    className='object-cover relative'
                />
            </div>
            <div className="xl:w-1/2 p-2 xl:p-4 flex flex-col justify-center gap-2 xl:gap-8 w-full">
                <Link href={link} className="block text-xl text-primary hover:text-primary-dark transition-all duration-300">
                    <h3 className="text-2xl xl:text-4xl">{title}</h3>
                </Link>
                <p className="text-lg xl:text-xl">{description}</p>
                <Link href={link} className="block text-lg xl:text-xl text-primary hover:text-primary-dark transition-all duration-300">
                    Continue reading →
                </Link>
            </div>
        </div>
    );
}

export default function RecentPosts() {
    return (
        <section className="bg-white text-black xl:px-10 pb-1">
            <div className="relative w-full flex justify-center items-center">
                <h2 className="text-5xl xl:text-4xl font-serif inline-block text-center z-[2] bg-white xl:px-8">
                    Latest Posts
                </h2>
                <div className="xl:max-w-8xl mx-auto w-full absolute top-[50%] hidden xl:block">
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-transparent to-primary w-[50%] h-[2px] z-[1]"></div>
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-transparent to-primary w-[50%] h-[2px] z-[1]"></div>
                </div>
            </div>
            <div className="w-full xl:max-w-8xl mx-auto mt-12 px-2 xl:px-8">
                <Post
                    image="/hero.jpg"
                    alt="Placeholder"
                    title="Exploring the Foothills | Discovering the Hidden Gems of Uttarakhand - Part 1"
                    description="On January 2nd, 2022, I set about on a birding trip to Uttarakhand. It is a popular destination among birdwatchers due to its diverse range of habitats, from the snow-capped Himalayan peaks to the woodlands and grasslands in the foothills…"
                    link="#"
                    reverse={false}
                />
                <Post
                    image="/hero.jpg"
                    alt="Placeholder"
                    title="Birding in Kashmir | Mission Kashmir - Part 4"
                    description="After the beautiful valleys of north Kashmir, the next destination in our Kashmir bucket list was Gulmarg, We reached…"
                    link="#"
                    reverse={true}
                />
            </div>
        </section>
    );
}
