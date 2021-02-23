import Image from "../UI/Image";

const Founder = () => {
  return (
    <div className="container mx-auto mb-20">
      <h1 className="w-full text-5xl font-bold leading-tight text-center my-14 ">
        Founder
      </h1>
      <div className="flex flex-col items-center my-10 mx-20 xl:flex-row ">
        <div className="flex flex-col m-5 w-full text-center xl:w-1/2 lg:text-left">
          <h1 className="text-4xl font-bold mb-5">Elon Musk</h1>
          <p className="text-base">
            In 2001, Musk conceived Mars Oasis : a miniature greenhouse on Mars
            would grow food crops and reawaken public interest in space
            exploration. In October 2001, Musk traveled with a group to Moscow
            to buy refurbished Dnepr Intercontinental ballistic missiles (ICBMs)
            that could send the greenhouse payloads into space. He met with
            companies such as NPO Lavochkin and Kosmotras; however, Musk was
            seen as a novice and was even spat on by one of the Russian chief
            designers. The group returned to the United States empty-handed. In
            February 2002, the group returned to Russia to look for three ICBMs.
            They had another meeting with Kosmotras and were offered one rocket
            for $8 million, which Musk rejected. Musk instead decided to start a
            company that could build affordable rockets. With $100 million of
            his early fortune, Musk founded Space Exploration Technologies
            Corp., traded as SpaceX, in May 2002
          </p>
        </div>
        <div className="flex flex-1 justify-center">
          <Image
            className="w-auto rounded-3xl mt-10 hidden sm:block"
            src="elon.webp"
            width="416px"
            height="416px"
          />
        </div>
      </div>
    </div>
  );
};

export default Founder;
