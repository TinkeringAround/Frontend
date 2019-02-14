export default () => {
  return (
    <div className="errorPage">
      <h1>Sorry, ein Fehler ist aufgetreten.</h1>
      <style jsx>{`
        .errorPage {
          height: 200px;
          width: 500px;
          margin: 100px auto;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: grey;
        }

        h1 {
          flex: 1;
          font-size: 30px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};
