// Layout
import Body from "./body";
import Header from "./header";

//--------------------------------------------------------------------------//
export interface Props {
  children?: any;
}

//--------------------------------------------------------------------------//
export default (props: Props) => {
  const { children } = props;

  return (
    <Body>
      <Header />
      {children}
    </Body>
  );
};
