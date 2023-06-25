import { Image } from "@chakra-ui/react";

export default function ImageComponent({ src, alt, height, fit }: any) {
  return (
    <Image
      src={src}
      alt={alt}
      objectFit={fit ? fit : "cover"}
      w="100%"
      height={height}
    />
  );
}
