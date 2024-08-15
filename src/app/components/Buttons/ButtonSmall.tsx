"use client";

import Link from "next/link";
import { ButtonLinkSetting } from "@/utils/utils";

export default function ButtonSmall({ link, textLink }: ButtonLinkSetting) {
  return (
    <Link className="btn btn-8--16" href={link}>
      {textLink}
    </Link>
  );
}
