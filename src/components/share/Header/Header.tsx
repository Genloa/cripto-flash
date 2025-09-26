import Link from "next/link";
export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link href="/">
            <li>Inicio</li>
          </Link>
          <Link href="/nosotros">
            <li>Nosotros</li>
          </Link>
          <Link href="/mercado">
            <li>Mercado</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
