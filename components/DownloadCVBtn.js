"use client";

import { Button } from "./ui/button";

const DownloadCVBtn = () => {
  return (
    <Button onClick={() => window.open("/Phoebe_Chang_Resume.pdf")}>
      Download CV
    </Button>
  );
};

export default DownloadCVBtn;
