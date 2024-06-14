"use client";

import { Button } from "./ui/button";

const DownloadCVBtn = () => {
  return (
    <Button
      variant="outline"
      className="text-lg text-primary border-primary hover:bg-primary hover:shadow-xl hover:text-white"
      onClick={() => window.open("/Phoebe_Chang_Resume.pdf")}
    >
      Download CV
    </Button>
  );
};

export default DownloadCVBtn;
