interface ImagePreviewProps {
    src: string;
  }
  
  export default function ImagePreview({ src }: ImagePreviewProps) {
    return (
      <div className="mb-6 w-full max-w-lg">
        <img src={src} alt="Uploaded plant" className="w-full h-auto rounded-lg shadow-md" />
      </div>
    );
  } 