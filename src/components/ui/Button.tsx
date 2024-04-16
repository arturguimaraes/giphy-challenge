interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-md shadow-sm"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
