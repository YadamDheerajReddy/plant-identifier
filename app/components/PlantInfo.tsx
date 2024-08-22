interface PlantDetail {
  key: string;
  value: string;
}

interface PlantInfoProps {
  info: {
    name: string;
    details: PlantDetail[];
  };
}

export default function PlantInfo({ info }: PlantInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-lg w-full">
      <h2 className="text-3xl font-semibold mb-4 text-green-800">{info.name}</h2>
      <table className="w-full">
        <tbody>
          {info.details.map((detail, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-green-50' : 'bg-white'}>
              <td className="py-2 px-4 font-semibold text-green-700">{detail.key}</td>
              <td className="py-2 px-4 text-gray-700">{detail.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}