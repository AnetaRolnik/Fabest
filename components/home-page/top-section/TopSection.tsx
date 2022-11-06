import Hero from "../../layout/hero/Hero";
import scss from "./TopSection.module.scss";

const TopSection = (): JSX.Element => {
  return (
    <Hero
      heading={
        <>
          <h1 className={`${scss.heading} ${scss.topHeading}`}>FASHION</h1>
          <h2 className={`${scss.heading} ${scss.middleHeading}`}>BEAUTY</h2>
          <h3 className={`${scss.heading} ${scss.bottomHeading}`}>STYLE</h3>
        </>
      }
      srcImg="/images/hero.jpg"
      altImg="Fashion Design"
      titleImg="Photo by Charlota Blunarova on Unsplash"
    />
  );
};

export default TopSection;
