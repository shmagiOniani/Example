export const editableTable = [
  {
    xs: 12,
    sm: 12,
    inputType: "select",
    userId: "choose-gender",
    userName: "gender",
    userLabel: "აირჩიეთ ოპერანდის ტიპი",
    error: "genderError",
    option: [
      {
        key: "number",
        name: "რიცხვი",
      },
      {
        key: "deviceVariable",
        name: "მოწყობილობის ცვლადი",
      },
    ],
  },
  {
    xs: 12,
    sm: 12,
    inputType: "text",
    userId: "firstName",
    userName: "firstname",
    userLabel: "firstname",
    error: "firstnameError",
  },
];
