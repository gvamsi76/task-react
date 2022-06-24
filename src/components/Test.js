import React, { useState } from 'react'
import Papa from "papaparse";

function Test() {
  const [parsedData, setParsedData] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [values, setValues] = useState([])


  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
       const rowsArray= [];
       const valuesArray =[];

       results.data.map((d)=>{
        rowsArray.push(Object.keys(d))
        valuesArray.push(Object.values(d))

        setParsedData(results.data)
        setTableRows(rowsArray[0]);
        setValues(valuesArray);
       //console.log(results.data);
       })
      },
    });
  };
  return (
    <div className='App'>
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={changeHandler}
        style={{ display: "block", margin: "10px auto" }}
      /><br />
       <table style={{backgroundColor :'lightblue'}}>
        <thead style={{backgroundColor :'yellow'}}>
          <tr>
            {tableRows.map((rows, index) => {
              return <th key={index}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((val, i) => {
                  return <td key={i}>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Test
