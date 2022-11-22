import React from "react";
import "./Table.css";
import Frame from '../../../components/frame/Frame'
const Table = (props) => {
  return (
  <div className='container'>
  <div className="table">
  <Frame text='&emsp; &ensp; More Information'/>
  <table>
    <thead>
      <tr>
        <th>Capital</th>
        <th>Language</th>
        <th>The Total Area</th>
        <th>Government</th>
        <th>Census</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{props.table[0]}</td>
        <td>{props.table[1]}</td>
        <td>{props.table[2]}</td>
        <td>{props.table[3]}</td>
        <td>{props.table[4]}</td>
        <td>{props.table[5]}</td>
      </tr>
    </tbody>
  </table>
</div>
  </div>
  );
};

export default Table;
