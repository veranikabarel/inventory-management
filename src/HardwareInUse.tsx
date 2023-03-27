import { HardwareInUse, HARDWARE_IN_USE } from "./data";

const HardwareInUse = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Hardware in Use</h1>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Serial Number</th>
            <th className="px-4 py-2">Model</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Employee Name</th>
            <th className="px-4 py-2">Employee Surname</th>
          </tr>
        </thead>
        <tbody>
          {HARDWARE_IN_USE.map((hw: HardwareInUse, index: number) => (
            <tr key={hw.serialNumber}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{hw.serialNumber}</td>
              <td className="border px-4 py-2">{hw.model}</td>
              <td className="border px-4 py-2">{hw.quantity}</td>
              <td className="border px-4 py-2">{hw.employeeName}</td>
              <td className="border px-4 py-2">{hw.employeeSurname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HardwareInUse;
