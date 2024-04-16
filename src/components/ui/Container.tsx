interface Props {
  children: JSX.Element | JSX.Element[] | string | string[];
}

const Container = ({ children }: Props) => {
  return <div className="py-[4rem] mx-auto container flex flex-col gap-4">{children}</div>;
};

export default Container;
