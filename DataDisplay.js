import  Axios from "axios";

import React, { useEffect, useState } from "react";


function DataDisplay() {
    const[data, setData] = useState([]);
    let num = 0;
    
    useEffect(() => {
        Axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.error(err))
    }, []);
    
    
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Language</th>
            <th scope="col">type</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item?.show?.id}>
                <th scope="row">{++num}</th>
                <td>{item?.show?.name}</td>
                <td>{item?.show?.language}</td>
                <td>{item?.show?.type}</td>
                
                <td><button type="button" class="btn btn-danger">Book</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataDisplay;
