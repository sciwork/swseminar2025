import Image, { ImageProps } from "next/image";

// workaround for Next.js issue with Mdx images
// https://www.klastic.me/articles/workaround-for-nextjs-14-image-component-bug-in-mdx-files
const MdxImage = (props: ImageProps) => {
  return <Image {...props} alt={props.alt} />;
};

export default MdxImage;
