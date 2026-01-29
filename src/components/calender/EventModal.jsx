import React from "react";
import { CalendarDays, Clock, MapPin, X, Link, FileText } from "lucide-react";
import dayjs from "dayjs";

const EventModal = ({ event, onClose, showFullDay }) => {
  if (!event) return null;

  const [startTime, endTime] = event.time
    ? event.time.split(" - ")
    : ["N/A", "N/A"];

  const cardColorClass = event.color
    ? event.color.replace("bg-", "text-")
    : "text-gray-900";

  return (
    <div
      className="fixed inset-0 bg-opacity-90 backdrop-blur-[2px] z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#bcddfc] rounded-2xl w-full max-w-sm shadow-2xl transform transition-all duration-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 flex-grow pr-4">
            {event.title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Event Details */}
        <div className="p-6 space-y-5 text-gray-700">
          <div className="space-y-3">
            {/* Date */}
            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <CalendarDays size={20} className="text-indigo-500" />
              <p className="font-semibold text-gray-800">
                {event.date
                  ? dayjs(event.date).format("dddd, D MMMM")
                  : "Date not available"}
              </p>
            </div>

            {/* Time */}
            <div className="flex space-x-2">
              <div className="flex items-center justify-center space-x-2 p-3 bg-gray-50 rounded-lg w-1/2">
                <Clock size={20} className="text-gray-500" />
                <p className="font-medium">{startTime}</p>
              </div>
              <div className="flex items-center justify-center space-x-2 p-3 bg-gray-50 rounded-lg w-1/2">
                <p className="font-medium">{endTime}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <MapPin size={20} className="text-gray-900" />
              <p className="font-medium text-gray-800">
                {event.location || "Not specified"}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {/* Link */}
            {event.link && (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-lg font-medium transition-colors 
                                         hover:shadow-md cursor-pointer bg-gray-50 text-gray-800"
              >
                <Link size={18} className="text-gray-900" />
                <span className="text-gray-900"> Link</span>
              </a>
            )}

            {/* Form */}
            {event.formLink && (
              <a
                href={event.formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-lg bg-red-100 font-medium transition-colors 
                                       hover:shadow-md cursor-pointer text-gray-800"
              >
                <FileText size={18} className="text-red-700" />
                <span>Form</span>
              </a>
            )}
          </div>

          {/* Details */}
          <div className="space-y-2 pt-2">
            <p className="font-bold text-gray-900">Details</p>
            <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
              {event.details || "No additional details provided."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
