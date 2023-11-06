import { SambaHero } from "../assets/images";

const Hero = () => {
  return (
    <section id="home" className="max-container mt-20">
      <div className="flex justify-between items-center">
        <div className="">
          <div>
            <p className="font-palanquin text-8xl">
              The <span className="text-brazil-yellow">Bra</span>
              <span className="text-brazil-green">zil's</span> <br />
              Flavor
            </p>
          </div>
          <p className="mt-5 text-justify mr-10">
            Samba Brazil Eatery, with three branches in Toronto, is your gateway
            to the exquisite world of Brazilian cuisine. With a menu featuring
            delectable pastel, savory coxinha, luscious pudim, and sandwiches,
            we offer an authentic taste of Brazil. Our warm and inviting
            atmosphere, coupled with friendly staff, makes every visit a
            cultural celebration. Whether you're dining in or ordering online,
            Samba Brazil Eatery promises an unforgettable culinary adventure
            that combines the flavors of Brazil with the sense of community.
            Come and savor a piece of Brazil in the heart of Toronto, with three
            convenient locations to choose from!
          </p>
        </div>

        <img
          src={SambaHero}
          alt=""
          className=" rounded-full"
          height={400}
          width={400}
        />
      </div>
    </section>
  );
};

export default Hero;
