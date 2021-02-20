const Founder = (props) => {
  return (
    <div className="container mx-auto">
      <h1 className="w-full text-5xl font-bold leading-tight text-center my-14 ">
        Founder
      </h1>
      <div className="flex flex-col items-center my-10 mx-20 xl:flex-row">
        <div className="flex flex-col m-5 w-full xl:w-1/2">
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
          <img
            src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"
            className="w-auto rounded-3xl transition duration-2000 transform hover:-rotate-3 hover:shadow-2xl xl:block"
            alt="Can't load img"
          />
        </div>
      </div>
    </div>
  );
};

export default Founder;
