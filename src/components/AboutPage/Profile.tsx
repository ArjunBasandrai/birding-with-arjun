import Image from "next/image";

function ImageGrid() {
    const col_1_images = [
        ["/me.jpg", "Hero 3"],
        ["/hero.jpg", "Hero 1"],
        ["/me.jpg", "Hero 3"],
        ["/hero3.jpg", "Hero 2"],
    ];
    const col_2_images = [
        ["/hero3.jpg", "Hero 2"],
        ["/me.jpg", "Hero 3"],
        ["/hero.jpg", "Hero 1"],
        ["/hero2.jpg", "Hero 4"],
    ];

    return (
        <div className="flex w-full h-full">
            <div className="xl:w-1/2 flex flex-col gap-2 p-2 xl:p-1">
                {col_1_images.map((image, index) => (
                    <div key={index} className="relative w-full">
                        <Image
                            src={image[0]}
                            alt={image[1]}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>

            <div className="hidden xl:flex w-1/2 flex-col gap-2 p-1">
                {col_2_images.map((image, index) => (
                    <div key={index} className="relative w-full">
                        <Image
                            src={image[0]}
                            alt={image[1]}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Profile() {
    return (
        <>
            <section className="w-full py-10">
                <div className="flex w-full xl:py-8 xl:px-32 flex-col xl:flex-row">
                    <div className="xl:w-1/2 px-4 xl:px-8 w-full">
                        <h2 className="text-4xl">About me</h2>
                        <p className=" text-lg mt-4 text-black/60">
                            Hello there! I&apos;m Arjun Basandrai and this is my blog where I share stories from my adventures around the world.
                        </p>
                        <p className="text-lg mt-4 text-black/60">
                            I am an aspiring Computer Science Engineer and a travel enthusiast and bird photographer by passion. When I am not drowning in huge datasets and building Machine Learning / Deep Learning models, I&apos;m usually out in the wild chasing birds and exploring new places.
                        </p>
                        <p className="text-lg mt-4 text-black/60">
                            I&apos;m that &rdquo;weird kid from school&rdquo; who likes forests more than malls, birds more than people, and misty peaks more than the city lights.
                        </p>
                        <h2 className="text-4xl mt-8">How did I get into birding?</h2>
                        <p className="text-lg mt-4 text-black/60">
                            Well, that is all thanks to my father, who taught me to differentiate a Jungle Babbler from a Common Myna before I had my first English lesson.
                        </p>
                        <p className="text-lg mt-4 text-black/60">
                            Growing up next to a forest was a blessing, and every Sunday, my father would take me there, teaching me how to identify common birds. Soon after, he gifted me my first bird book, and I was instantly hooked. I already used to spend countless hours immersed in the Atlas, but now, I found myself just as absorbed in the bird book. 
                        </p>
                        <p className="text-lg mt-4 text-black/60">
                            Watching for birds wherever we went and instinctively calling out their names became second nature. Before I knew it, this hobby had completely captivated me, and my passion for it has only grown ever since!
                        </p>
                        <h2 className="text-4xl mt-8">What are my most memorable experiences?</h2>
                        <p className="text-lg mt-4 text-black/60">
                            My most unforgettable experience so far has been road-tripping across Kashmir and Ladakh with my family! The landscapes were breathtaking, and the wildlife was just amazing! 
                        </p>
                        <p className="text-lg mt-4 text-black/60">
                            Another incredible memory was birding in the Andaman Islands along with a group of six fellow birders. We saw over 100 species of birds in just 5 days and had the time of our lives!
                        </p>
                        <p className="text-lg mt-4 text-black/60">
                            And how can I forget Spiti! This place was just out of the this world. The landscapes, the people, the culture, everything was just so unique and beautiful. I just can&apos;t wait to go back there!
                        </p>
                    </div>
                    <div className="xl:w-1/2 mt-8 xl:mt-0">
                        <ImageGrid />
                    </div>
                </div>
            </section>
        </>
    );
}