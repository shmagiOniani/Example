import React from "react";
import UserTable from "./components/UserTable/UserTable";
import DeviceData from "./components/DeviceData/DeviceData";

export default function AddForm(props) {
  return (
    <>
      <UserTable />
      <DeviceData />
    </>
  );
}
