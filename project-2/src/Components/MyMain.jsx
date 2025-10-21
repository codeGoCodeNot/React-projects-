import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <>
      <main className="w-[420px] bg-[#1A1B21] shadow-2xl">
        <article className="flex flex-col items-center gap-3">
          <h1 className="text-[#FFFFFF] text-[1.8rem] font-bold mt-10">
            Mugen Odelle Berdin
          </h1>
          <h3 className="text-[#F3BF99] text-[1.5rem] font-normal">Cry Baby</h3>
          <p className="text-[#F5F5F5] text-[1rem]">MugenOdelle.web</p>
          <div className="flex justify-center items-center gap-8 mt-5">
            <button className="text-[1rem] bg-[#ffffff] w-[150px] h-[40px] flex items-center justify-center rounded-md gap-2 cursor-pointer">
              <FaEnvelope />
              Email
            </button>
            <button className="text-[1rem] text-[#FFFFFF] bg-[#5093E2] w-[150px] h-[40px] flex items-center justify-center rounded-md gap-2 cursor-pointer">
              <FaLinkedin />
              LinkedIn
            </button>
          </div>
        </article>
        <article className="text mt-5 px-10.5 py-5 ">
          <h1 className="text-[#F5F5F5] text-[1.2rem] font-bold mb-4">About</h1>
          <p className="text-[#DCDCDC] text-[1rem] mb-8">
            I am a little explorer who loves to giggle and discover new things
            every day. I brighten up any room with my smile and am always ready
            for cuddles and playtime adventures.
          </p>
          <h1 className="text-[#F5F5F5] text-[1.2rem] font-bold mb-4">
            Interests
          </h1>
          <p className="text-[#DCDCDC] text-[1rem] mb-8">
            Loves milk, nap time, and peekaboo. Toy collector. Blanket snuggler.
            Giggle master. Music wiggler. Crayon artist. Bubble chaser.
            Storytime superstar. Always ready for hugs!
          </p>
        </article>
      </main>
    </>
  );
};

export default Main;
