import Image from "next/image";
import avatar from "/public/avatar-jessica.jpeg"

export default function Home() {
  return (
    <main className="flex flex-col justify-center bg-off-black w-screen h-screen px-6">
      {/* main elements centers everything horizontally */}
      <div className="flex flex-col justify-center items-center w-full max-w-[24rem] h-full max-h-[38.1875rem] bg-dark-gray rounded-xl mx-auto">
        {/* The first div justifies containing items vertically. note: this does not center the attribution text, 
             so the screenshot will align with example. */}
        <div className="flex flex-col w-full max-w-[19rem] items-center gap-6 m-auto">
          <Image
            className="w-[5.5rem] h-auto rounded-full aspect-square object-cover"
            src={avatar}
            width={88}
            height={88}
            alt="Picture of the author"
            placeholder="blur"
          />
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-white text-2xl font-semibold leading-normal">Jessica Randall</h1>
            <h2 className="text-green text-sm font-bold leading-normal">London, United Kingdom</h2>
          </div>
          <q className="text-white text-sm leading-normal">Front-end developer and avid reader.</q>
          <div className="flex flex-col items-center justify-center text-center gap-y-4 w-full">
            <a className="hover:bg-green hover:text-gray hover:cursor-pointer focus:bg-green focus:text-gray text-white text-sm font-bold w-full p-3 bg-gray rounded-lg leading-normal" href="https://github.com">GitHub</a>
            <a className="hover:bg-green hover:text-gray hover:cursor-pointer focus:bg-green focus:text-gray text-white text-sm font-bold w-full p-3 bg-gray rounded-lg leading-normal" href="https://www.frontendmentor.io">Frontend Mentor</a>
            <a className="hover:bg-green hover:text-gray hover:cursor-pointer focus:bg-green focus:text-gray text-white text-sm font-bold w-full p-3 bg-gray rounded-lg leading-normal" href="https://www.linkedin.com">LinkedIn</a>
            <a className="hover:bg-green hover:text-gray hover:cursor-pointer focus:bg-green focus:text-gray text-white text-sm font-bold w-full p-3 bg-gray rounded-lg leading-normal" href="https://www.twitter.com">Twitter</a>
            <a className="hover:bg-green hover:text-gray hover:cursor-pointer focus:bg-green focus:text-gray text-white text-sm font-bold w-full p-3 bg-gray rounded-lg leading-normal" href="https://www.instagram.com">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-2 left-0 right-0 justify-self-center">
        <footer id="attribution">
          <p className="text-white text-center text-[0.6875rem]">Challenge by <a className="text-blue" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          </p>
          <p className="text-white text-center text-[0.6875rem]">Coded by <a className="text-blue" href="#">Chelsea Anne Livingston Cruz</a>.
          </p>
        </footer>
      </div>
    </main>
  );
}
