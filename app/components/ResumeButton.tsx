import { Link } from "react-router";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function () {
  return (
    <Button
      as={Link}
      color="primary"
      endContent={<Icon icon="material-symbols:download" ssr />}
      prefetch="render"
      to={{ pathname: "/AlexKurataResume.pdf" }}
      target="_blank"
      download
    >
      Resume
    </Button>
  );
}
