export interface progressBarProps {
  size: string;
  color: string;
  percentage: number;
  sizeWidth: number;
}

const Progress = ({ size, percentage, color, sizeWidth }: progressBarProps) => {
  return (
    <div
      className="bg-white rounded-xl shadow-sm overflow-hidden p-1 border-2"
      style={{ width: `${sizeWidth}%` }}
    >
      <div className="relative h-6 flex items-center justify-center">
        <div
          className="absolute top-0 bottom-0 left-0 rounded-lg"
          style={{ backgroundColor: `${color}`, width: `${percentage}%` }}
        ></div>
        <div className="relative text-green-500 font-medium text-sm">15%</div>
      </div>
    </div>
  );
};

export default Progress;
