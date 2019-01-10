import React from "react";
import Row from "./Row";

const Table = props => (
  <table className="table table-bordered">
    <thead className="table-success">
      <tr>
        {props.headings.map((heading, index) => {
          return <th key={index}>{heading}</th>;
        })}
      </tr>
    </thead>
    <tbody>
      {props.data.map((row, index) => {
        return (
          <Row
            key={index}
            when={row.when}
            who={row.who}
            description={row.description}
          />
        );
      })}
    </tbody>
  </table>
);

export default Table;
