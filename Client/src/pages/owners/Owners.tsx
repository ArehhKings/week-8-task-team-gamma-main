import './owners.scss';
import { useState } from 'react';
import DataTable from '../../components/dataTable/DataTable';
import Add from '../../components/add/Add';
import { GridColDef } from '@mui/x-data-grid';
import { owners } from '../../data';



const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "image",
      width: 100,
      renderCell: (params) => {
        return (
          <img
            src={params.row.img}/>
        );
      },
    },
    {
      field: "fullName",
      type: "string",
      headerName: "Full Name",
      width: 150,
    },
    {
      field: "noOfProperties",
      type: "string",
      headerName: "No of Properties",
      width: 150,
    },
    {
      field: "Owner",
      type: "string",
      headerName: "Property Owner",
      width: 200,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 150,
    },
    {
      field: "phone",
      type: "string",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      width: 100,
      type: "string",
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 100,
      type: "boolean",
    },
]
const Owners = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className ="owners">
            <div className="info">
           <h1>Users</h1>
           <button onClick={()=>setOpen(true)}>Add New Owner</button>
           </div>
           <DataTable slug="owners" columns={columns} rows={owners}/>
          {open && <Add slug="owner" columns={columns} setOpen={setOpen}/>}       
        </div>
    );
}

export default Owners;