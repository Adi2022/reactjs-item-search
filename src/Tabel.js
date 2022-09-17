import React from "react";
import "./Tabel.css";
const Tabel = ({ data }) => {
  return (
    <tabel>
      <tbody>
        <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
        </tr>

        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </tabel>
  );
};

export default Tabel;
