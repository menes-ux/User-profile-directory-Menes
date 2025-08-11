const LoadingSpinner = ({ darkMode }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      {/* Animated Spinner */}
      <div className="relative">
        <div className={`w-16 h-16 border-4 border-opacity-20 rounded-full animate-spin ${
          darkMode ? 'border-white' : 'border-blue-500'
        }`}></div>
        <div className={`absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-current rounded-full animate-spin ${
          darkMode ? 'text-blue-400' : 'text-blue-500'
        }`}></div>
      </div>
      
      {/* Loading Text */}
      <div className={`mt-6 text-center ${
        darkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        <h3 className="text-lg font-semibold mb-2">Loading Users...</h3>
        <p className="text-sm">Please wait while we fetch the user data</p>
      </div>

      {/* Animated Dots */}
      <div className="flex space-x-1 mt-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full animate-pulse ${
              darkMode ? 'bg-blue-400' : 'bg-blue-500'
            }`}
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1s'
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default LoadingSpinner
