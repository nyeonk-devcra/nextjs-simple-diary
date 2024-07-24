interface ButtonProps {
  name: string;
  width?: number;
  height?: number;
}

export default function Button(props: ButtonProps) {
  const { name, width, height } = props;
  return (
    <button className="bg-blue-900	w-full text-white rounded-md h-full">
      {name}
    </button>
  );
}
