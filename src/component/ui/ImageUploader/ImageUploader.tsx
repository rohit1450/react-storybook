import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export interface ImageuploaderProps {
  type: string;
  acceptFormat: {};
  maxFiles: number;
  multiple: boolean;
  disabled: boolean;
  noDrag: boolean;
  getFiles: (files: {}[]) => void;
  PreviewStructure: (props: PreviewStructureProps) => JSX.Element;
  DropboxStructure: (props: DropboxStructureProps) => JSX.Element;
  AvatarContainer: (props: AvatarContainerProps) => JSX.Element;
}

export interface AvatarContainerProps {
  open: () => void;
  files: FileWithPreview[];
}

export interface FileWithPreview extends File {
  preview: string;
}

export interface PreviewStructureProps {
  file: FileWithPreview;
  name: string;
  preview: string;
  onClick: () => void;
}

export type DropboxStructureProps = {
  getRootProps: () => void;
  getInputProps: () => void;
  open: () => void;
  thumbs: JSX.Element[];
};

const ImageUploader = ({
  type,
  acceptFormat,
  maxFiles = 1,
  multiple,
  disabled = false,
  PreviewStructure,
  DropboxStructure,
  AvatarContainer,
  noDrag,
  getFiles,
}: ImageuploaderProps) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: {
      ...acceptFormat,
    },
    multiple,
    noDrag,
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

  const thumbs = files.map((file, index: number) => (
    <PreviewStructure
      key={index}
      file={file}
      onClick={removeFile(file)}
      name={file.name}
      preview={file.preview}
    />
  ));

  useEffect(() => {
    getFiles(files);
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  if (type === "avatar") {
    return <AvatarContainer files={files} open={open} />;
  }

  return (
    <DropboxStructure
      getRootProps={getRootProps}
      getInputProps={getInputProps}
      open={open}
      thumbs={thumbs}
    />
  );
};

export default ImageUploader;
