import { useState } from "react";
import { FaLeaf } from "react-icons/fa";

const MyActivityTrack = () => {
  const challenge = {
    title: "Plastic-Free July",
    duration: 30,
  };

  const [completedDays, setCompletedDays] = useState([]);

  const handleMarkToday = () => {
    const todayIndex = completedDays.length + 1;

    if (todayIndex > challenge.duration) return;

    setCompletedDays((prev) => [...prev, todayIndex]);
  };

  const progressPercent = Math.round(
    (completedDays.length / challenge.duration) * 100
  );

  const daysArray = Array.from(
    { length: challenge.duration },
    (_, i) => i + 1
  );

  return (
    <div className="min-h-screen bg-gray-50 global-p-x py-10 flex justify-center">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8">
        
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-(--primary-color)/10 flex items-center justify-center">
            <FaLeaf className="text-(--primary-color)" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            {challenge.title}
          </h1>
        </div>

        <p className="text-gray-600 mb-6">
          Track your daily progress to complete this challenge.
        </p>

        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-700 mb-2">
            Progress: {completedDays.length} / {challenge.duration} days ({progressPercent}%)
          </p>

          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
            <div
              className="h-full bg-(--primary-color)"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Daily Check-In
          </h3>

          <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
            {daysArray.map((day) => (
              <div
                key={day}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <span>Day {day}</span>
                {completedDays.includes(day) ? (
                  <span className="text-green-600 font-semibold">✓</span>
                ) : (
                  <span className="text-gray-400 font-semibold">—</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          className="primary-btn w-full"
          disabled={completedDays.length >= challenge.duration}
          onClick={handleMarkToday}
        >
          {completedDays.length >= challenge.duration
            ? "Challenge Completed 🎉"
            : "Mark Today as Completed"}
        </button>
      </div>
    </div>
  );
};

export default MyActivityTrack;
