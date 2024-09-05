import { Metadata } from "next";

export default function generateProjectMetadata(
  title: string,
  description: string
): Metadata {
  return {
    title,
    description,
  };
}
