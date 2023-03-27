export interface Hardware {
  serialNumber: string;
  model: string;
  quantity: number;
}

export const HARDWARE: Hardware[] = [
  { serialNumber: "SN1234", model: "Lenovo ThinkPad X1", quantity: 10 },
  { serialNumber: "SN5678", model: "Dell Latitude 9510", quantity: 5 },
  { serialNumber: "SN9101", model: "HP EliteBook x360", quantity: 3 },
];

export interface HardwareInUse extends Hardware {
  employeeName: string;
  employeeSurname: string;
}

export const HARDWARE_IN_USE: HardwareInUse[] = [
  {
    serialNumber: "SN1234",
    model: "Lenovo ThinkPad X1",
    quantity: 2,
    employeeName: "John",
    employeeSurname: "Doe",
  },
  {
    serialNumber: "SN5678",
    model: "Dell Latitude 9510",
    quantity: 3,
    employeeName: "Jane",
    employeeSurname: "Doe",
  },
];
