export interface LoaderProps {
  size?: string;
  color?: string;
  measure: number | string;
  width: number | string;
}

const Loader = ({ size, color }: LoaderProps) => {
  const prop = size === "small" && `h-7 w-7 border-t-${color} border-2`;
  const prop2 = size === "medium" && `h-14 w-14 border-t-${color} border-4`;
  const prop3 = size === "large" && `h-24 w-24 border-t-${color} border-8`;

  return (
    <div
      className={`border-loaderBg ${prop || prop2 || prop3} animate-spin rounded-full`}
    />
  );
};

export default Loader;
