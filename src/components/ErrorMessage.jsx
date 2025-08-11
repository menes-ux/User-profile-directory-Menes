const ErrorMessage = ({ message, darkMode }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      {/* Error Icon */}
      <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-6 ${
        darkMode ? 'bg-red-900 bg-opacity-20' : 'bg-red-100'
      }`}>
        <span className="text-red-500">⚠️</span>
      </div>
      
      {/* Error Content */}
      <div className={`text-center max-w-md ${
        darkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        <h3 className={`text-xl font-semibold mb-3 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          Oops! Something went wrong
        </h3>
        
        <p className="mb-4">
          {message || 'Failed to load user data. Please try again later.'}
        </p>
        
        <button
          onClick={() => window.location.reload()}
          className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
            darkMode 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          Try Again
        </button>
      </div>
    </div>
  )
}

export default ErrorMessage
