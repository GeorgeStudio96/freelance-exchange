import Link from "next/link";

import ButtonMedium from "../Buttons/ButtonMedium";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="header-link">
          LOGO
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
