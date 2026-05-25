import Image from "next/image";

type IpadFrameImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  imageClassName?: string;
};

export function IpadFrameImage({
  src,
  alt,
  sizes,
  priority = false,
  imageClassName,
}: IpadFrameImageProps) {
  return (
    <div className="rounded-[34px] border border-apriil-line/80 bg-[#ece9e2] p-2 shadow-[0_18px_40px_rgba(23,23,23,0.12)]">
      <div className="mb-2 flex justify-center">
        <span className="h-[5px] w-14 rounded-full bg-apriil-dark/25" />
      </div>
      <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] border border-apriil-line/70 bg-[#111111]">
        <Image
          src={src}
          alt={alt}
          fill
          className={imageClassName ? imageClassName : "object-contain"}
          sizes={sizes}
          priority={priority}
        />
      </div>
    </div>
  );
}