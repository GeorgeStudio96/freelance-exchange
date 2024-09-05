"use client";

import Link from "next/link";
import { ButtonLinkSetting } from "src/app/utils/utils";

export default function ButtonMedium({ link, textLink }: ButtonLinkSetting) {
  return (
    <Link className="btn btn-16--32" href={link}>
      {textLink}
    </Link>
  );
}
