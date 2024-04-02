import drawing1 from "../assets/drawing1.jpg";
import drawing2 from "../assets/drawing2.jpg";
import codeAndCoffee from "../assets/CodeAndCoffee.png";
import storybook from "../assets/Storybook.png";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="aboutMe" className="mb-4">
      <h2 className="text-6xl my-12 px-5">After Hours</h2>

      <ul className="max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:px-10">
        <li className="list-disc ml-10 text-2xl leading-10">
          I love to take walks outside, it's a great way to clear my head and
          it's a great break from the screen.
        </li>
        <li className="list-disc ml-10 text-2xl leading-10">
          Exercising, cardio, and working out are daily activities I use to
          regulate my stress while also being a great method to wake up.
        </li>
        <li className="list-disc ml-10 text-2xl leading-10">
          I love to draw, it's a passion of mine and it's something I continue
          to work and improve on, just like coding.
        </li>

        <li className="list-disc ml-10 text-2xl leading-10">
          By getting to meet new people in tech and catching up with friends at
          meetups, I cannot only have fun by being with amazing people, but I
          get to talk about the tech world and coding.
        </li>
        <li></li>
      </ul>

      <div className="flex flex-wrap justify-evenly items-center flex-col">
        <Image
          src={drawing1}
          alt="my drawing of Miko Ino from the anime Kaguya-sama: Love is War"
          width={800}
          className="mt-8 max-[1000px]:w-4/5"
        />
        <Image
          src={drawing2}
          alt="my drawing of Megumin from the anime Konosuba"
          width={800}
          className="mt-8 max-[1000px]:w-4/5"
        />
        <Image
          src={codeAndCoffee}
          alt="linknedIn post of code and coffee meetup"
          width={800}
          className="mt-8 max-[1000px]:w-4/5"
        />
        <Image
          src={storybook}
          alt="linkedIn post of storybook meetup"
          width={800}
          className="mt-8 max-[1000px]:w-4/5"
        />
      </div>
    </section>
  );
}
