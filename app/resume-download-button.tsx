"use client";

import { Button } from "@heroui/react";
import { Ripple } from "m3-ripple";

export default function ResumeDownloadButton() {
  return (
    <Button
      className="hero-resume"
      variant="secondary"
      size="sm"
      onPress={() => {
        const link = document.createElement("a");
        link.href = "/Mobarok_Hossen_Resume.pdf";
        link.download = "Mobarok_Hossen_Resume.pdf";
        link.click();
      }}
    >
      <Ripple />
      Download resume
    </Button>
  );
}
