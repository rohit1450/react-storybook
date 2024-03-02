export interface progressBarProps {
  type: string;
  text?: string;
  color: string;
  height?: string;
  percentage: number;
  sizeWidth: number;
  topColor?: string;
  progressColor?: string;
  hasLabel: boolean;
}

const Progress = ({
  percentage,
  color,
  sizeWidth,
  height,
  type,
  topColor,
  progressColor,
  text,
  hasLabel,
}: progressBarProps) => {
  if (type === "top progress") {
    return (
      <>
        {hasLabel && (
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-amber mt-2 mb-10">
            {text}
          </span>
        )}
        <div
          className="bg-white relative h-4 w-full rounded-2xl border-2 border-black"
          style={{
            height: `${height || "1rem"}`,
            width: `${sizeWidth || 100}%`,
          }}
        >
          <div
            className={`absolute top-0 left-0 h-full rounded-2xl ${progressColor ?? "bg-Primary"}`}
            style={{
              width: `${percentage}%`,
              backgroundColor: `${progressColor}`
            }}
          >
            <span
              className={`absolute -right-4 bottom-full mb-2 rounded-md px-3.5 py-1 text-sm text-white bg-${topColor}`}
            >
              <span
                className={`absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-${topColor}`}
              ></span>
              {`${percentage}%`}
            </span>
          </div>
        </div>
      </>
    );
  }

  if (type === "normal") {
    return (
      <>
        {hasLabel && (
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-amber mt-2 mb-10">
            {text}
          </span>
        )}
        <div
          className="bg-white rounded-xl shadow-sm overflow-hidden p-1 border-2"
          style={{ width: `${sizeWidth || 100}%` }}
        >
          <div
            className={`relative flex items-center justify-center`}
            style={{ height: `${height}` }}
          >
            <div
              className={`absolute top-0 bottom-0 left-0 rounded-lg ${color ?? "bg-Primary"}`}
              style={{ width: `${percentage}%` , backgroundColor: color }}
            ></div>
            <div className="relative text-green-500 font-medium text-sm">{`${percentage}%`}</div>
          </div>
        </div>
      </>
    );
  }
};

export default Progress;
