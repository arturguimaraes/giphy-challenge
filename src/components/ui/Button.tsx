interface Props {
  children: string;
  variant?: string;
  onClick: () => void;
}

const Button = ({ children, variant = "cyan", onClick }: Props) => {
  return (
    <button
      className={`px-4 py-2 font-semibold text-sm bg-${variant}-500 text-white rounded-md shadow-sm`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
