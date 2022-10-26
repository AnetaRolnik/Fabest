import Image from "next/image";

import scss from "./Hero.module.scss";

const Hero = (): JSX.Element => {
  return (
    <section className={scss.hero}>
      <Image
        src="/images/myAvatar.png"
        alt="My Avatar"
        title="My Avatar"
        width={250}
        height={250}
        className={scss.avatar}
        priority
      />
      <div className={scss.title}>Hi, I'm Aneta</div>
      <p className={scss.text}>This is not a real blog, but it could be.</p>
    </section>
  );
};

export default Hero;
