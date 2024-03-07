import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export interface ImageuploaderProps {
  acceptFormat: string[];
  maxFiles: number;
  multiple: boolean;
  disabled: boolean;
  addIcon: () => JSX.Element;
  removeIcon: () => JSX.Element;
  containerColor: string;
}

interface FileWithPreview extends File {
  preview: string;
}

const ImageUploader = ({
  acceptFormat,
  maxFiles = 1,
  multiple,
  disabled = false,
  addIcon,
  removeIcon,
  containerColor = "Primary",
}: ImageuploaderProps) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: {
      "image/png": acceptFormat,
    },
    multiple,
    disabled,
    onDrop: (acceptedFiles) => {
      if (files.length + acceptedFiles.length <= maxFiles) {
        const filesWithPreview = acceptedFiles.map((file: File) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
        setFiles((files) => [...files, ...filesWithPreview]);
      }
    },
  });

  const removeFile = (file: FileWithPreview) => () => {
    const newFiles = files.filter((f) => f !== file);
    setFiles(newFiles);
    URL.revokeObjectURL(file.preview);
  };

  const thumbs = files.map((file) => (
    <div className="relative h-auto w-56" key={file.name}>
      <div>
        <img
          src={file.preview}
          alt={file.name}
          className="h-full w-full rounded-xl drop-shadow-md"
        />
      </div>
      <button className="absolute -top-2 -right-1" onClick={removeFile(file)}>
        {removeIcon()}
      </button>
    </div>
  ));

  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <>
      <section
        className={`container sm:w-2/4 rounded-xl p-4 mx-auto bg-${containerColor}`}
      >
        <div className="border-white border-dashed border-2 rounded-xl p-4">
          <div className="flex flex-col items-center">
            <div
              {...getRootProps({ className: "dropzone" })}
              onClick={(e) => e.stopPropagation()}
            >
              <input {...getInputProps()} />
            </div>
            <h5 className="md:text-xl md:font-bold text-white">
              Drag & Drop to Upload File
            </h5>
            <h5 className="md:text-xl md:font-bold text-white">OR</h5>
            <div className="cursor-pointer" onClick={open}>
              {addIcon()}
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto w-full lg:w-4/5 mt-10">
        <div className="flex flex-wrap justify-center gap-3 md:gap-5">
          {thumbs}
        </div>
      </div>
    </>
  );
};

export default ImageUploader;
