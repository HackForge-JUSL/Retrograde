import hero from "@/assets/hero.png";

const Hero = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={hero} className="max-w-full h-auto max-h-96" alt="Hero Image" />
    </div>
  );
};

export default Hero;
