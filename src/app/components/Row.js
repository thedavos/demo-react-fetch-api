import React from "react";

const Row = props => (
  <tr>
    <td>{props.when}</td>
    <td>{props.who}</td>
    <td>{props.description}</td>
  </tr>
);

export default Row;
