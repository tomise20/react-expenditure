import React, { useEffect, useState } from "react";
import { DataGrid, ColDef, ValueGetterParams, RowProps } from "@material-ui/data-grid";
import { Typography } from "@material-ui/core";
import axios from "axios";

interface BarChartState {
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
	{ field: "sub_type", headerName: "Subtype", headerAlign: "center", width: 130, align: "center" },
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

export default function InfoTable() {
	const [barchart, setBarchart] = useState<BarChartState[]>([]);

	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/api/get-chart-data")
			.then((res: any) => {
				setBarchart(res.data.barChartData);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div style={{ height: 370, width: "auto" }}>
			<Typography variant="h4" align="center" color="primary" style={{ marginBottom: "10px" }}>
				Statisztika
			</Typography>
			<DataGrid rows={barchart} columns={columns} pageSize={5} checkboxSelection />
		</div>
	);
}
