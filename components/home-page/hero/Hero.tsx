import Image from "next/image";

import Container from "../../layout/container/Container";
import scss from "./Hero.module.scss";

const Hero = (): JSX.Element => {
  return (
    <section className={scss.hero}>
      <Container>
        <Image
          src="/images/myAvatar.png"
          alt="avatar"
          title="Avatar"
          width={200}
          height={200}
          className={scss.avatar}
          priority
        />
        <div className={scss.title}>Hi, I'm Aneta</div>
        <p className={scss.text}>This is not a real blog, but it could be.</p>
      </Container>
    </section>
  );
};

export default Hero;
