
const JoinChallenge = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 global-p-x">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Plastic-Free July
        </h1>

        <p className="text-gray-600 mb-1">
          Start: <span className="font-semibold">2025-11-15</span>
        </p>
        <p className="text-gray-600 mb-4">
          End: <span className="font-semibold">2025-12-15</span>
        </p>

        <p className="text-gray-700 mb-6">
          Ready to begin this challenge and start tracking your progress?
        </p>

        <button className="primary-btn w-full">
          Join Challenge
        </button>
      </div>
    </div>
  );
};

export default JoinChallenge;