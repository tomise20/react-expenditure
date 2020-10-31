import * as React from 'react';
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';
import { Typography} from "@material-ui/core";

const columns: ColDef[] = [
  { field: 'id', headerName: 'ID', headerAlign:"center", width: 130, align:"center" },
  { field: 'type', headerName: 'Type', headerAlign:"center", width: 130, align:"center" },
  { field: 'subType', headerName: 'Subtype', headerAlign:"center", width: 130, align:"center" },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 150,
    headerAlign:"center",
    align: "left",
    valueGetter: (params: ValueGetterParams) =>
      `${params.getValue('amount')} Ft`,
  },
];

const rows = [
  { id: 1, type: 'kiadas', subType: 'Rezsi', amount: 22500 },
  { id: 2, type: 'kiadas', subType: 'Étel/Nasi', amount: 5650 },
  { id: 3, type: 'kiadas', subType: 'Egyéb', amount: 2500 },
  { id: 4, type: 'bevetel', subType: 'Étel/Nasi', amount: 3840 },
  { id: 5, type: 'kiadas', subType: 'Telefonszámla', amount: 800 },
  { id: 6, type: 'bevetel', subType: 'Egyéb', amount: 23000 },
  { id: 7, type: 'kiadas', subType: 'Étel/Nasi', amount: 950 },
  { id: 8, type: 'kiadas', subType: 'Étel/Nasi', amount: 1350 },
  { id: 9, type: 'bevetel', subType: 'Egyéb', amount: 5000 },
];

export default function InfoTable() {
  return (
    <div style={{ height: 370, width: "auto" }}>
        <Typography variant="h4" align="center" color="primary" style={{marginBottom: '10px'}}>
            Statisztika
        </Typography>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
