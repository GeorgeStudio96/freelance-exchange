"use client";

import Link from "next/link";
import { ButtonLinkSetting } from "src/app/utils/utils";

export default function ButtonSmall({ link, textLink }: ButtonLinkSetting) {
  return (
    <Link className="btn btn-8--16" href={link}>
      {textLink}
    </Link>
  );
}
