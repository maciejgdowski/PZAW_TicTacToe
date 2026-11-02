import Row from "./components/Row";

const App = () => {
  return (
    <div className="container-fluid min-vh-100 min-vw-100 bg-primary d-flex flex-column align-items-center justify-content-center">
      <h1>TIC TAC TOE</h1>
      <div>
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
};

export default App;
