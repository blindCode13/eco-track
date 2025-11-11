export default function ChallangeJoin() {
  return (
    <div className="min-h-screen flex items-center justify-center backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md animate-fadeIn">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Join Challenge
        </h2>

        <div className="border-t border-gray-200 my-4"></div>

        <div className="space-y-3 text-gray-700">
          <h3 className="text-2xl font-semibold text-(--primary-color)">
            Plastic-Free July
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Avoid single-use plastics for an entire month to reduce landfill
            waste and pollution. Take meaningful steps toward a cleaner
            environment by using reusables and inspiring others to follow.
          </p>

          <p>
            <span className="font-semibold">Target:</span> Reduce plastic waste
          </p>
          <p>
            <span className="font-semibold">Start Date:</span> 1 July 2024
          </p>
          <p>
            <span className="font-semibold">End Date:</span> 31 July 2024
          </p>
        </div>

        <div className="mt-8 flex gap-3">
          <button className="w-full bg-(--primary-color) text-white font-semibold py-2.5 rounded-lg hover:opacity-90 transition">
            Join Now
          </button>
          <button className="w-full border border-gray-300 text-gray-700 font-semibold py-2.5 rounded-lg hover:bg-gray-100 transition">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}