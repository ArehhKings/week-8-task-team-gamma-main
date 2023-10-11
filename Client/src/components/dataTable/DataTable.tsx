// import * as React from "react";
// import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";

type Props = {
    columns: GridColDef[];
    rows:object[];
    slug:string;
}

const handleDelete = (id:number) => {
    //delete id row
    console.log(id + " has been deleted");
}

const handleEdit = (id:number) => {
    console.log(id +" has been edited succesfully");
}

const DataTable = (props:Props) => {

const actionColumn: GridColDef = {
    field:"action",
    headerName:"Action",
    width: 200,
    renderCell:(params) => {
        return(
            <div className ="action">
                <Link to={`/${props.slug}/${params.row.id}`}>
                <img src="/view.png" alt=""/>
                </Link>
                <div className="edit" onClick={()=>handleEdit(params.row.id)}>
                    <img src="/edit.png" alt=""/>
                </div>
                <div className="delete" onClick={()=>handleDelete(params.row.id)}>
                    <img src="/delete.svg" alt=""/>
                </div>
            </div>
        );

},
};

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
