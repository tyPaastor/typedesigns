import Link from "next/link";

const Header = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/">
          <img src="/assets/images/logo.svg" style={{height: 35}}/>
        </Link>
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <Link href="/information">Information</Link>
      </h4>
    </section>
  );
};

export default Header;
