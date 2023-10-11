import { useState } from 'react';
import './property.scss';
import DataTable from '../../components/dataTable/DataTable';
import Add from '../../components/add/Add';
import { GridColDef } from '@mui/x-data-grid';
import { properties } from '../../data';



const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return (
          <img
            src={params.row.img}/>
        );
      },
    },
    {
      field: "building",
      type: "string",
      headerName: "Building",
      width: 100,
    },
    {
      field: "location",
      type: "string",
      headerName: "Location",
      width: 200,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 100,
    },
    {
      field: "propertyOwner",
      type: "string",
      headerName: "Property Owner",
      width: 150,
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 100,
      type: "boolean",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 100,
      type: "string",
    },
]
const Property = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className ="properties">
            <div className="info">
           <h1>Properties</h1>
           <button onClick={()=>setOpen(true)}>Add New Property</button>
           </div>
           <DataTable slug="properties" columns={columns} rows={properties}/>
          {open && <Add slug="property" columns={columns} setOpen={setOpen}/>}       
        </div>
    );
}

export default Property;