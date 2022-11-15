import React from "react";
import "./Table.css";
import Frame from '../../../../components/frame/Frame'
const Table = () => {
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
        <td>Nicosia</td>
        <td>Greek</td>
        <td>9251 Square Km</td>
        <td>Constitutional Republic</td>
        <td>1.18 Million</td>
        <td>Euro</td>
      </tr>
    </tbody>
  </table>
</div>
  </div>
  );
};

export default Table;
