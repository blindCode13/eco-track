const NotFound = () => {
  return (
    <div className="mt-18 flex flex-col items-center justify-center bg-gray-50 global-p-x text-center">
      
      <div className="mb-6">
        <div className="w-32 h-32 bg-(--primary-color)/10 rounded-full flex items-center justify-center mx-auto">
          <h1 className="text-6xl font-bold text-(--primary-color)">404</h1>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-600 max-w-md">
        Looks like this page wandered off the trail.  
        Let’s get you back on the right path.
      </p>

      <button
        onClick={() => window.location.href = "/"}
        className="primary-btn mt-6"
      >
        Go Back Home
      </button>

    </div>
  );
};

export default NotFound;