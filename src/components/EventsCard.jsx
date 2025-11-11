
import { format } from 'date-fns';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const EventsCard = ({data}) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-5 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 border-l-4 pl-2 border-(--primary-color)">
          {data.title}
        </h2>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {data.description}
        </p>
      </div>

      <div className="border-t border-gray-200 pt-6 flex items-center justify-between gap-3">
        <div className="text-sm text-gray-700 space-y-1">
          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-(--primary-color)" />
            <span><span className="font-semibold">Date: </span>{format(new Date(data.date), "EEEE, dd MMM yyyy · p")}</span>
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-(--primary-color)" />
            <span><span className="font-semibold">Location: </span>{data.location}</span>
          </p>
        </div>

        <button className="primary-btn">
          View Details
        </button>
      </div>
    </div>
    );
};

export default EventsCard;