import Image from "next/image";

const images = [
  "/hero2.jpg",
  "/hero.jpg",
  "/hero3.jpg",
  "/me.jpg",
  "/hero.jpg",
  "/hero2.jpg",
  "/me.jpg",
  "/hero3.jpg",
  "/hero.jpg",
  "/hero.jpg",
];

export default function MasonryGrid() {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-2 space-y-2">
      {images.map((src, index) => (
        <div key={index} className="break-inside-avoid">
          <Image 
            src={src} 
            alt={`Masonry Image ${index}`} 
            width={400} 
            height={600} 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      ))}
    </div>
  );
}