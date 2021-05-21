export const alertLogsInputs = [
  {
    xs: 12,
    sm: 4,
    inputType: "date",
    userId: "startDate",
    userName: "startDate",
    userLabel: "დაწყების დრო",
  },
  {
    xs: 12,
    sm: 4,
    inputType: "date",
    userId: "endDate",
    userName: "endDate",
    userLabel: "დამთავრების დრო",
  },
  {
    xs: 12,
    sm: 4,
    inputType: "select",
    userId: "status",
    userName: "status",
    userLabel: "აირჩიე ხელსაწყო",
    error: "status",
    option: [
      {
        key: "open",
        name: "ღია",
      },
      {
        key: "closed",
        name: "დახურული",
      },
    ],
  },
];
