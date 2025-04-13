type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container px-8 max-w-full">{children}</div>;
};

export default Container;
