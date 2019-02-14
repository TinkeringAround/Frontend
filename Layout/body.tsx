//--------------------------------------------------------------------------//
export interface Props {
  children?: any;
}

//--------------------------------------------------------------------------//
export default (props: Props) => {
  const { children } = props;

  return (
    <div className="body">
      {children}
      <style jsx>{`
        .body {
          margin: 0;
          padding: 0;
          height: 100vh;
          width: 100vw;
        }
      `}</style>
    </div>
  );
};
