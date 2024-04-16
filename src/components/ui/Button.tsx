interface Props {
  children: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ children, disabled = false, onClick }: Props) => {
  return (
    <button
      className={`px-4 py-2 font-semibold text-sm bg-${disabled ? "gray" : "cyan"}-500 text-white rounded-md shadow-sm`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
