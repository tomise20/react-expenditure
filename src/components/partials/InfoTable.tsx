import React, { useEffect, useState } from "react";
import { DataGrid, ColDef, ValueGetterParams, RowProps } from "@material-ui/data-grid";
import { Typography } from "@material-ui/core";
import axios from "axios";

interface IInfoTableProps {
	freshTable: string;
}

interface IDataTableState {
	name?: string;
	id: number;
	type: string;
	subType: string;
	amount: number;
	date: string;
}

const columns: ColDef[] = [
	{ field: "id", headerName: "ID", headerAlign: "center", width: 130, align: "center" },
	{ field: "name", headerName: "Name", headerAlign: "center", width: 200, align: "center" },
	{ field: "type", headerName: "Type", headerAlign: "center", width: 130, align: "center" },
	{ field: "subtype", headerName: "Subtype", headerAlign: "center", width: 130, align: "center" },
	{
		field: "amount",
		headerName: "Amount",
		type: "number",
		width: 150,
		headerAlign: "center",
		align: "left",
		valueGetter: (params: ValueGetterParams) => `${params.getValue("amount")} Ft`,
	},
	{ field: "date", headerName: "Date", headerAlign: "center", width: 200, align: "center" },
];

const InfoTable: React.FunctionComponent<IInfoTableProps> = (props) => {
	const [dataTableData, setdataTableData] = useState<IDataTableState[]>([]);
	const refreshTable = props.freshTable;

	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/api/get-details")
			.then((res: any) => {
				setdataTableData(res.data.infoTableData);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [refreshTable]);

	return (
		<div style={{ height: 370, width: "auto" }}>
			<Typography variant="h4" align="center" color="primary" style={{ marginBottom: "10px" }}>
				Statisztika
			</Typography>
			<DataGrid rows={dataTableData} columns={columns} pageSize={5} checkboxSelection />
		</div>
	);
};

export default InfoTable;
