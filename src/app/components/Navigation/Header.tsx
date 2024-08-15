import Link from "next/link";
import ButtonMedium from "../Buttons/ButtonMedium";
import ButtonSmall from "../Buttons/ButtonSmall";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="header-link">
          Header Link
        </Link>
        <nav>
          <ButtonMedium link="" textLink="Some btn" />
          <ButtonMedium link="" textLink="Some btn" />
          <ButtonMedium link="" textLink="Some btn" />
          <ButtonMedium link="/dashboard" textLink="Dashboard" />
        </nav>
      </div>
    </header>
  );
}
