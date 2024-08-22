import Image from 'next/image'

function ImagePreview({ src }: { src: string }) {
  return (
    <div>
      <Image src={src} alt="Plant preview" width={600} height={400} />
    </div>
  )
}

export default ImagePreview;
