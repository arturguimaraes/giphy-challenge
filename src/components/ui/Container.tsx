interface Props {
  children: JSX.Element | JSX.Element[] | string | string[];
}

const Container = ({ children }: Props) => {
  return <div className="py-[4rem] max-w-7xl mx-auto px-4 flex flex-col gap-4">{children}</div>;
};

export default Container;
