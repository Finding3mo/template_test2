import React from "react";

type Props = {
  value: string | null;
  onClick: () => any;
};

const Square = (props: Props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
