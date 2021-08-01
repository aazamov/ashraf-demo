import classes from "./header.module.css";
import Image from "next/image";
import headimg from "../../public/img/header-image.svg";
import Link from 'next/link'

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.head}>
        <div className={classes["text"]}>
          <h1>Make Your Business More Profitable</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            assumenda ea quo cupiditate facere deleniti fuga officia.
          </p>
<Link href='/contact'>
<button >Get Started</button>
</Link>
          
        </div>
        <div className={classes.heade_img}>
          <Image src={headimg} />
        </div>
      </div>
    </div>
  );
}

export default Header;
