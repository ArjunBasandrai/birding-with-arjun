import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div
      className="relative bg-purple-500 text-white px-10 py-24 bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: 'url("/hero.jpg")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-white flex flex-col items-center">
        <h2 className="text-3xl xl:text-6xl font-bold mb-4 text-shadow text-center font-Atma">Let&apos;s Connect</h2>
        <p className="text-shadow text-lg xl:text-xl mb-6 py-4 xl:max-w-3xl text-center">
          Have questions about travel or birding, suggestions for blog topics, or just want to share your thoughts?
        </p>
        <div className="flex space-x-6">
          <Link href="https://www.instagram.com/birdingwitharjun" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-pink-500 text-3xl xl:text-2xl transition-colors duration-300" />
          </Link>
          <Link href="https://www.facebook.com/arjun.basandrai" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-blue-500 text-3xl xl:text-2xl transition-colors duration-300" />
          </Link>
          <Link href="https://github.com/ArjunBasandrai" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="text-white hover:text-black text-3xl xl:text-2xl transition-colors duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/arjun-basandrai" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-blue-500 text-3xl xl:text-2xl transition-colors duration-300" />
          </Link>
          <Link href="mailto:birdingwitharjun@example.com">
            <FontAwesomeIcon icon={faEnvelope} className="text-white hover:text-red-500 text-3xl xl:text-2xl transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
