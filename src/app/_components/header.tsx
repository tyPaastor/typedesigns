import Link from "next/link";

const Header = () => {
  return (
    <section className="flex justify-between items-center mt-10 mb-16 md:mb-8">
      <Link href="/">
        <img src="/assets/images/logo.svg" style={{ height: 30 }} alt="Typedesigns logo" />
      </Link>
      <Link
        href="/information"
        className="text-sm md:text-lg hover:underline"
      >
        Information
      </Link>
    </section>
  );
};

export default Header;
