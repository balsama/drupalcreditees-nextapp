import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const TableData = require('../public/data/recent-new-creditees.json');

function DynamicTable(){
// get table column
    const column = Object.keys(TableData[0]);
    // get table heading data
    const ThData =()=>{

        return column.map((data)=>{
            return <th key={data}>{data}</th>
        })
    }
// get table row data
    const tdData =() =>{

        return TableData.map((data)=>{
            return(
                <tr>
                    {
                        column.map((a)=>{
                            return <td>{data[a]}</td>
                        })
                    }
                </tr>
            )
        })
    }
    return (
        <table className="table">
            <thead>
            <tr>{ThData()}</tr>
            </thead>
            <tbody>
            {tdData()}
            </tbody>
        </table>
    )
}

export function RecentNewCreditees() {
    return <DynamicTable/>;
}