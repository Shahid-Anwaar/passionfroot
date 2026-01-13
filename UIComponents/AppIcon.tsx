"use client";

import { Icon } from "@iconify/react";

export default function AppIcon({
  name,
  className = "h-4 w-4",
}: {
  name: string;
  className?: string;
}) {
  return <Icon icon={name} className={className} />;
}
