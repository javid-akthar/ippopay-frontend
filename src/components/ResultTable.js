import React  from "react";
import {tableStyle} from './ResultTableCssComponent'

function ResultTable(props) {
  
  let ele = "";
  if(props.DBdata)
   ele = props.DBdata.map( (item, index) =>{
    return (
        <tr key={item._id}>
          <th scope="row" >{item.index}</th>
          <td>{item.input}</td>
          <td>{item.output}</td>
        </tr>
    );
  })

  return (
    <table className="table table-striped" style={tableStyle}>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Input Password</th>
          <th scope="col">Minimum no of Changes required</th>
        </tr>
      </thead>
      <tbody>
        
            {ele}
      </tbody>
    </table>
  );
}

export default ResultTable;
