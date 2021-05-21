import React from "react";
import MUIDataTable from "mui-datatables";

export default function Customers() {
  const columns = [
    "ორგანიზაციის დასახელება",
    "საიდენტიფიკაციო კოდი",
    "მისამართი",
  ];

  const data = [
    ["Business Analyst", 1232453536, "Minneapolis"],
    ["Business Consultant", 1232453536, "Dallas"],
    ["Attorney", 1232453536, "Ana"],
    ["Business Analyst", 1232453536, "St. Petersburg"],
    ["Business Consultant", 1232453536, "Toledo"],
    ["Business Management Analyst", 1232453536, " Diego"],
    ["Agency Legal Counsel", 1232453536, "Jacksonville"],
    ["Commercial Specialist", 1232453536, "Omaha"],
    ["Business Analyst", 1232453536, "Los Angeles"],
    ["Business Consultant", 1232453536, "OklahomaCity"],
    ["Attorney", 1232453536, "Pittsburgh"],
    ["Agency Legal Counsel", 1232453536, "Laredo"],
    ["Industrial Analyst", 1232453536, "Austin"],
    ["Business Analyst", 1232453536, "Norfolk"],
    ["Business Consultant", 1232453536, "Chicago"],
    ["Agency Legal Counsel", 1232453536, "Seattle"],
    ["Commercial Specialist", 1232453536, "Long Beach"],
    ["Industrial Analyst", 1232453536, "Hartford"],
    ["Computer Scientist", 1232453536, "Newark"],
    ["Corporate Counselor", 1232453536, "Cincinnati"],
    ["Business Analyst", 1232453536, "Baltimore"],
    ["Agency Legal Counsel", 1232453536, "Tampa"],
    ["Commercial Specialist", 1232453536, "Miami"],
    ["Attorney", 1232453536, "Tucson"],
    ["Computer Scientist", 1232453536, "Memphis"],
    ["Industrial Analyst", 1232453536, "Buffalo"],
    ["Corporate Counselor", 1232453536, "Arlington"],
    ["Computer Scientist", 1232453536, "Francisco"],
  ];

  const options = {
    filterType: "dropdown",
    responsive: "scroll",
  };

  return (
    <MUIDataTable
      title={"მომხმარებელთა სია"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}
