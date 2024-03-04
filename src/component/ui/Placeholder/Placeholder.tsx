import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { PropsWithChildren } from "react";

export interface placeholderProps {
  type: "basic" | "custom wrapper" | "custom placeholder";
  count?: number;
  loading: boolean;
  height?: number;
  width?: number;
  baseColor?: string;
  highlightColor?: string;
  enableAnimation?: true | false;
  duration?: number;
  direction?: "ltr" | "rtl";
  borderRadius?: string | number;
  customWrapper: ({ children }: PropsWithChildren<unknown>) => JSX.Element;
  ComponentAfterLoading: () => JSX.Element;
}

const Placeholder = ({
  type,
  count,
  loading,
  height,
  width,
  baseColor,
  highlightColor,
  enableAnimation,
  duration,
  direction,
  borderRadius,
  customWrapper,
  ComponentAfterLoading,
}: placeholderProps) => {
  if (type === "basic") {
    return loading ? (
      <SkeletonTheme
        highlightColor={highlightColor}
        baseColor={baseColor}
        enableAnimation={enableAnimation}
        duration={duration}
        direction={direction}
        borderRadius={borderRadius}
      >
        <Skeleton count={count} height={height} width={width} />
      </SkeletonTheme>
    ) : (
      <ComponentAfterLoading />
    );
  }

  if (type === "custom wrapper") {
    return loading ? (
      <SkeletonTheme
        highlightColor={highlightColor}
        baseColor={baseColor}
        enableAnimation={enableAnimation}
        duration={duration}
        direction={direction}
        borderRadius={borderRadius}
      >
        <Skeleton
          count={count}
          height={height}
          width={width}
          wrapper={customWrapper}
        />
      </SkeletonTheme>
    ) : (
      <ComponentAfterLoading />
    );
  }

  if (type === "custom placeholder") {
    return loading ? "as" : <ComponentAfterLoading />;
  }
};

export default Placeholder;
