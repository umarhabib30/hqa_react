export default function Attendees({ data = [] }) {
  if (!data.length) {
    return (
      <div className="p-6 bg-white rounded-md shadow-md">
        <p className="text-gray-800">No attendees yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.map((attendee, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-4 bg-white rounded-md shadow-md"
        >
          <img
            src={attendee.image}
            alt={attendee.name}
            className="w-12 h-12 rounded-full object-cover border"
          />
          <p className="font-semibold text-gray-800">{attendee.name}</p>
        </div>
      ))}
    </div>
  );
}
