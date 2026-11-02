import Circle from "./Circle";
import Cross from "./Cross";

const Block = () => {
  return (
    <div className="col-4 p-0">
      <div className="bg-danger m-1 position-relative ratio-1x1" style={{ padding: "6rem" }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-center p-3 overflow-hidden">
          <Circle />
        </div>
      </div>
    </div>
  );
};

export default Block;
