interface Props {
  name: string;
  value: number;
}

export default function Stats({ name, value }: Props) {
  return (
    <div className="flex justify-between items-center p-1 gap-x-2">
      <span className="w-14 text-sm font-medium capitalize text-gray-700">
        {name}
      </span>
      <div className="w-64 bg-gray-300 rounded-lg h-[8px]">
        <div
          className="bg-gray-700 h-full rounded-lg"
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <span className="w-4 text-sm font-medium text-gray-700">{value}</span>
    </div>
  );
}
