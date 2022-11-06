import Image from "next/image";
import Container from "../../layout/container/Container";
import { Bodoni_Moda } from "@next/font/google";

import scss from "./Hero.module.scss";

const bodoniModa = Bodoni_Moda({ subsets: ["latin"] });

const Hero = (): JSX.Element => {
  return (
    <div className={`${scss.hero} ${bodoniModa.className}`}>
      <Container>
        <h1 className={`${scss.heading} ${scss.topHeading}`}>FASHION</h1>
        <h2 className={`${scss.heading} ${scss.middleHeading}`}>BEAUTY</h2>
        <h3 className={`${scss.heading} ${scss.bottomHeading}`}>STYLE</h3>
      </Container>
      <div className={scss.imgWrapper}>
        <Image
          src="/images/hero.jpg"
          alt="Fashion Design"
          title="Photo by Charlota Blunarova on Unsplash"
          className={scss.img}
          fill
          priority
          sizes="(max-width: 576px) 100vw,
          50vw"
        />
      </div>
    </div>
  );
};

export default Hero;
