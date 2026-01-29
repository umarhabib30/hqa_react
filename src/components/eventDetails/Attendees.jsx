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
      {data.map((attendee) => {
        const fullName = `${attendee.first_name} ${attendee.last_name}`;

        const imageUrl = attendee.profile_pic
          ? `http://localhost:8000/storage/${attendee.profile_pic}`
          : "https://via.placeholder.com/100";

        return (
          <div
            key={attendee.id}
            className="flex items-center gap-4 p-4 bg-white rounded-md shadow-md"
          >
            <img
              src={imageUrl}
              alt={fullName}
              className="w-12 h-12 rounded-full object-cover border"
            />
            <div>
              <p className="font-semibold text-gray-800">{fullName}</p>
              <p className="text-xs text-gray-500">
                Guests: {attendee.number_of_guests}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
