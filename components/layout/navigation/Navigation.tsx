import Link from "next/link";
import Image from "next/image";

import scss from "./Navigation.module.scss";

const Navigation = (): JSX.Element => {
  return (
    <header className={scss.header}>
      <Link href="/">
        <Image
          src="/images/logo.svg"
          priority
          width={100}
          height={44}
          alt="logo"
          title="logo"
        />
      </Link>
      <nav>
        <ul className={scss.menuList}>
          <li>
            <Link href="/posts" className={scss.menuLink}>
              Posts
            </Link>
          </li>
          <li>
            <Link href="/contact" className={scss.menuLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
