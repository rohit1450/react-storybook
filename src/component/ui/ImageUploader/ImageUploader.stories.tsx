import Avatar from "react-avatar";
import { Meta, StoryFn } from "@storybook/react";
import ImageUploader, {
  ImageuploaderProps,
  PreviewStructureProps,
} from "./ImageUploader";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { CloudArrowUpIcon } from "@heroicons/react/16/solid";
import { IoClose } from "react-icons/io5";
import { CameraIcon } from "@heroicons/react/20/solid";

export default {
  title: "Components/ui/ImageUploader",
  component: ImageUploader,
  tags: ["autodocs"],
  argTypes: {
    type: { description: "type of the uploader" },
    acceptFormat: {
      control: "object",
      description: "Accepted file formats and their corresponding extensions",
    },
    maxFiles: {
      control: "number",
      description: "Maximum number of files allowed to be uploaded",
    },
    multiple: {
      control: "boolean",
      description: "Whether multiple files can be uploaded at once",
    },
    disabled: {
      control: "boolean",
      description: "Whether the uploader is disabled",
    },
    noDrag: {
      control: "boolean",
      description: "Whether drag and drop functionality is disabled",
    },
    PreviewStructure: {
      description: "Component for rendering the preview of uploaded files",
    },
    DropboxStructure: {
      description: "Component for rendering the Dropbox structure",
    },
    AvatarContainer: {
      description: "Component for rendering the avatar container",
    },
    getFiles: {
      description: "get array of files that are uploaded for preview",
    },
  },
} as Meta;

export const Default: StoryFn<ImageuploaderProps> = (args) => {
  const getFiles = (files: {}[]) => {
    console.log(files);
  };
  return <ImageUploader {...args} getFiles={getFiles} />;
};
Default.args = {
  type: "default",
  acceptFormat: {
    "image/png": [".png", ".jpeg", ".jpg"],
    "text/pdf": [".pdf"],
  },
  maxFiles: 7,
  multiple: true,
  disabled: false,
  noDrag: false,
  PreviewStructure: (props: PreviewStructureProps) => {
    return (
      <div className="relative" key={props.file.name}>
        <div className="sm:h-40 sm:w-56 xxs:w-40 xxs:h-36 w-full">
          <img
            src={
              props.file.type !== "application/pdf"
                ? props.file.preview
                : "https://alltopstartups.com/wp-content/uploads/2020/01/What-Is-a-PDF-File-And-What-Are-PDFs-For.png.webp"
            }
            alt={props.file.name}
            className="w-full h-full rounded-xl drop-shadow-md object-cover"
          />
        </div>
        <button
          className="absolute -top-2 -right-3 border bg-white rounded-full"
          onClick={props.onClick}
        >
          <IoClose className=" text-secondary text-2xl" />
        </button>
      </div>
    );
  },
  DropboxStructure: ({ getRootProps, getInputProps, open, thumbs }: any) => (
    <>
      <section
        className={`container sm:w-2/4 rounded-xl p-4 mx-auto bg-Primary`}
      >
        <div className="border-white border-dashed border-2 rounded-xl p-4">
          <div
            {...getRootProps({ className: "dropzone" })}
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center"
          >
            <CloudArrowUpIcon className="h-16 text-white" />
            <input {...getInputProps()} />
            <h5 className="md:text-xl md:font-bold text-white">
              Drag & Drop to Upload File
            </h5>
            <h5 className="md:text-xl md:font-bold text-white">OR</h5>
            <div>
              <PlusCircleIcon
                onClick={open}
                className="h-10 w-10 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto w-full lg:w-4/5 mt-10">
        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {thumbs}
        </div>
      </div>
    </>
  ),
};

export const AvatarUploader: StoryFn<ImageuploaderProps> = (args) => {
  const getFiles = (files: any) => {
    console.log(files[files.length - 1]);
  };
  return <ImageUploader {...args} getFiles={getFiles} />;
};
AvatarUploader.args = {
  type: "avatar",
  maxFiles: 999,
  noDrag: true,
  acceptFormat: {
    "image/png": [".png", ".jpeg", ".jpg"],
  },
  multiple: false,
  AvatarContainer: ({ open, files }: any) => (
    <div>
      <div className="relative w-fit">
        <div className="flex flex-col items-center gap-2">
          <div className="border-4 border-white border-solid h-fit w-fit rounded-full">
            <Avatar
              name="Person"
              size="120"
              src={
                files.length !== 0
                  ? files[files.length - 1].preview
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              className="relative"
              maxInitials={2}
              round={true}
              title="profile pic"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 -translate-x-1/2 -translate-y-1/2 z-10 border-2 border-white bg-white rounded-full p-1">
            <CameraIcon onClick={open} className="h-5 w-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  ),
};
