import Image from "next/image";
import { Bodoni_Moda } from "@next/font/google";

import scss from "./Hero.module.scss";

const bodoniModa = Bodoni_Moda({ subsets: ["latin"] });

type Props = {
  heading: JSX.Element;
  srcImg: string;
  altImg: string;
  titleImg: string;
};

const Hero = ({ heading, srcImg, altImg, titleImg }: Props): JSX.Element => {
  return (
    <div className={`${scss.hero} ${bodoniModa.className}`}>
      <div className={scss.headingWrapper}>{heading}</div>
      <div className={scss.imgWrapper}>
        <Image
          src={srcImg}
          alt={altImg}
          title={titleImg}
          className={scss.img}
          fill
          priority
          quality={100}
          sizes="(max-width: 576px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};

export default Hero;
