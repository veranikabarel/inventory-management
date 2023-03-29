export interface HardwareProps {
  serialNumber: string;
  model: string;
  quantity: number;
}

export interface HardwareInUseProps {
  serialNumber: string;
  model: string;
  quantity: number;
  employeeName: string;
  employeeSurname: string;
}

export const Hardware: HardwareProps[] = [
  {
    serialNumber: "ABC123",
    model: "HP EliteBook 840 G3",
    quantity: 5,
  },
  {
    serialNumber: "DEF456",
    model: "Dell Latitude E7470",
    quantity: 2,
  },
  {
    serialNumber: "GHI789",
    model: "Lenovo ThinkPad T470s",
    quantity: 3,
  },
  {
    serialNumber: "JKL012",
    model: "Apple MacBook Pro",
    quantity: 1,
  },
  {
    serialNumber: "MNO345",
    model: "Microsoft Surface Pro 7",
    quantity: 4,
  },
  {
    serialNumber: "PQR678",
    model: "Acer Aspire E5-576G",
    quantity: 2,
  },
  {
    serialNumber: "STU901",
    model: "Asus ZenBook UX430UN",
    quantity: 1,
  },
  {
    serialNumber: "VWX234",
    model: "HP Pavilion x360",
    quantity: 3,
  },
];

export const HardwareInUseMock: HardwareInUseProps[] = [
  {
    serialNumber: "ABC123",
    model: "HP EliteBook 840 G3",
    quantity: 1,
    employeeName: "John",
    employeeSurname: "Doe",
  },
  {
    serialNumber: "DEF456",
    model: "Dell Latitude E7470",
    quantity: 2,
    employeeName: "Jane",
    employeeSurname: "Doe",
  },
  {
    serialNumber: "GHI789",
    model: "Lenovo ThinkPad T470s",
    quantity: 3,
    employeeName: "Bob",
    employeeSurname: "Smith",
  },
  {
    serialNumber: "JKL012",
    model: "Apple MacBook Pro",
    quantity: 1,
    employeeName: "Alice",
    employeeSurname: "Johnson",
  },
  {
    serialNumber: "MNO345",
    model: "Microsoft Surface Pro 7",
    quantity: 4,
    employeeName: "Charlie",
    employeeSurname: "Brown",
  },
  {
    serialNumber: "PQR678",
    model: "Acer Aspire E5-576G",
    quantity: 2,
    employeeName: "David",
    employeeSurname: "Jones",
  },
  {
    serialNumber: "STU901",
    model: "Asus ZenBook UX430UN",
    quantity: 1,
    employeeName: "Emily",
    employeeSurname: "Wilson",
  },
  {
    serialNumber: "VWX234",
    model: "HP Pavilion x360",
    quantity: 3,
    employeeName: "Frank",
    employeeSurname: "Davis",
  },
];
