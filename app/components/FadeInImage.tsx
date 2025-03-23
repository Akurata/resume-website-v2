import {Image} from "@heroui/react";
import {LazyMotion, domAnimation, m, useAnimation} from "motion/react";
import {useEffect, useState, type ImgHTMLAttributes} from "react";

const animationVariants = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
};

export const FadeInImage = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const animationControls = useAnimation();

  useEffect(() => {
    if (isLoaded) {
      animationControls.start("visible");
    }
  }, [isLoaded]);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        animate={animationControls}
        initial="hidden"
        transition={{duration: 0.5, ease: "easeOut"}}
        variants={animationVariants}
      >
        <Image
          alt={props.alt}
          src={props.src}
          onLoad={() => setIsLoaded(true)}
        />
      </m.div>
    </LazyMotion>
  );
};

export default FadeInImage;
