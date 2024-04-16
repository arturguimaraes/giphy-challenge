interface Props {
  children: JSX.Element | JSX.Element[] | string | string[];
}

const Card = ({ children }: Props) => {
  return <div className="border-[1px] border-gray-300 rounded-md shadow-md bg-white p-4">{children}</div>;
};

export default Card;
