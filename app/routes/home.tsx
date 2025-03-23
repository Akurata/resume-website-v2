import {Link} from "react-router";
import {Button} from "@heroui/react";

export default function Index() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Button
        as={Link}
        color="primary"
        prefetch="render"
        to={{pathname: "/Resume.pdf"}}
        target="_blank"
        download
      >
        Resume
      </Button>
    </div>
  );
}
