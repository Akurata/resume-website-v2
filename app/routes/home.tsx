import {Link} from "react-router";
import {Button} from "@heroui/react";

export default function TestHomePage() {
  return (
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
  );
}
