import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement; //ReactElement = any html tag
  action: ReactElement;
};

const column: Column<DataType>[] = [
  { Header: "ID", accessor: "_id" },
  { Header: "Quantity", accessor: "quantity" },
  { Header: "Discount", accessor: "discount" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Status", accessor: "status" },
  { Header: "Action", accessor: "action" },
];

const Orders = () => {
  const [rows, setRows] = useState<DataType[]>([
    {
      _id: "abc",
      amount: 123,
      quantity: 12,
      discount: 5666,
      status: <span className="red">Processing</span>, //ReactElement = any html tag
      action: <Link to={`/order/abc`}>view</Link>,
    },
  ]);

  const Table = TableHOC<DataType>(
    column,
    rows,
    "dashboard-product-box",
    "Orders",
    rows.length > 6 ? true : false
  )();
  return (
    <div className="container">
      <h1>My orders</h1>
      {Table}
    </div>
  );
};

export default Orders;
