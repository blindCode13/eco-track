export default function ChallengeDetails() {
  return (
    <section className="mt-18 bg-gray-50 flex items-center justify-center py-12 global-p-x">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-md overflow-hidden flex flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full">
          <img
            src="https://4626096.fs1.hubspotusercontent-ap1.net/hubfs/4626096/Imported_Blog_Media/Plastic_Free_July_807x538-1.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:w-1/2 w-full p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Plastic-Free July
            </h1>
            <p className="text-sm text-(--primary-color) font-semibold uppercase mb-4">
              Waste Reduction
            </p>

            <p className="text-gray-600 leading-relaxed mb-12">
              Avoid single-use plastics for an entire month to reduce landfill
              waste and pollution. Take small but meaningful steps toward a
              cleaner environment by replacing disposable plastics with reusable
              alternatives and inspiring others to do the same.
            </p>

            <div className="grid grid-cols-2 gap-2 text-gray-700 mb-8">
              <p><span className="font-semibold">Duration:</span> 30 days</p>
              <p><span className="font-semibold">Target:</span> Reduce plastic waste</p>
              <p><span className="font-semibold">Metric:</span> kg plastic saved</p>
              <p><span className="font-semibold">Participants:</span> 0 joined</p>
              <p><span className="font-semibold">Start:</span> 1 July 2024</p>
              <p><span className="font-semibold">End:</span> 31 July 2024</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="w-full primary-btn">
              Join Challenge
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Created by: <span className="font-medium text-gray-700">admin@ecotrack.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}
