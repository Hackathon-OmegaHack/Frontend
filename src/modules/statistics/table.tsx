const tableList = [
  {
    id: 1,
    name: "Lavadora",
    cost: 50,
    consumption: 3000,
  },
  {
    id: 2,
    name: "Secadora",
    cost: 70,
    consumption: 3000,
  },
  {
    id: 3,
    name: "Refrigerador",
    cost: 30,
    consumption: 2500,
  },
];

const Table = () => {
  return (
    <div className="rounded-lg overflow-hidden w-full mx-auto">
      <table className="table table-zebra text-secondary">
        <thead className="w-full p-4 bg-secondary text-white ">
          <tr>
            <th>Electrodomestico</th>
            <th>Costo</th>
            <th>Consumo {"(kW)"}</th>
          </tr>
        </thead>
        <tbody className="font-medium">
          {tableList.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.cost}</td>
              <td>{item.consumption}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
