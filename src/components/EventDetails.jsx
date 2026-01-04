import { FaCalendarAlt, FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import LoadingState from "./LoadingState";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const EventDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {data: event = [], isLoading} = useQuery({
      queryKey: [id],
      queryFn: async () => {
        const result = await axios(`${import.meta.env.VITE_API_URL}/events/${id}`, {params: {dataLimit: 0}});
        return result.data;
      }
    });

    if (isLoading) { return <LoadingState></LoadingState> }
    if (event.length === 0) {return navigate("/404", {replace: true})};
  return (
    <div className="mt-18 flex items-center justify-center global-p-x py-14 bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full space-y-6">

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-(--primary-color)/10 flex items-center justify-center">
            <FaCalendarAlt className="text-(--primary-color)" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {event.title}
            </h2>
            <p className="text-sm mt-1 text-gray-500">{event.location}</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">{event.description}</p>

        <div className="border-t pt-4 space-y-2 text-gray-600 text-sm">
          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-(--primary-color)" />
            <span>{event.date}</span>
          </p>

          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-(--primary-color)" />
            <span>{event.location}</span>
          </p>

          <p>
            Organizer:{" "}
            <span className="font-semibold text-(--primary-color)">
              {event.organizer}
            </span>
          </p>

          <p className="flex items-center gap-2">
            <FaUserFriends className="text-(--primary-color)" />
            <span>
              Participants: {event.currentParticipants} / {event.maxParticipants}
            </span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default EventDetails;