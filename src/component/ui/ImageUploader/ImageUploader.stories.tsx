import Avatar from "react-avatar";
import { Meta, StoryFn } from "@storybook/react";
import ImageUploader, {
  ImageuploaderProps,
  PreviewStructureProps,
  AvatarContainerProps,
  DropboxStructureProps,
} from "./ImageUploader";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { CloudArrowUpIcon } from "@heroicons/react/16/solid";
import { IoClose } from "react-icons/io5";
import Button from "../Button/Button";

export default {
  title: "Components/ui/ImageUploader",
  component: ImageUploader,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<ImageuploaderProps> = (args: ImageuploaderProps) => (
  <ImageUploader {...args} />
);

export const Default: StoryFn<ImageuploaderProps> = Template.bind({});
Default.args = {
  type: "default",
  acceptFormat: {
    "image/png": [".png", ".jpeg", ".jpg"],
    "text/pdf": [".pdf"],
  },
  maxFiles: 99,
  multiple: true,
  disabled: false,
  noDrag: false,
  PreviewStructure: (props: PreviewStructureProps) => (
    <div className="relative" key={props.file.name}>
      <div className="h-40 w-56">
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
  ),
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
        <div className="flex flex-wrap justify-center gap-3 md:gap-5">
          {thumbs}
        </div>
      </div>
    </>
  ),
};

export const AvatarUploader: StoryFn<ImageuploaderProps> = Template.bind({});
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
          <div className="border-4 border-red border-solid h-fit w-fit rounded-full">
            <Avatar
              name="Person"
              size="120"
              src={
                files.length !== 0
                  ? files[files.length - 1].preview
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              className="rounded-xl relative"
              maxInitials={2}
              round={true}
              title="profile pic"
            />
          </div>
          <Button
            onClick={open}
            label="update"
            buttonType="primary"
            color="white"
            isLoading={false}
            className="btn"
          />
        </div>
      </div>
    </div>
  ),
};
