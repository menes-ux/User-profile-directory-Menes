const UserCard = ({ user, darkMode, onViewMore }) => {

  return (
    <div className={`rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
      darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
    }`}>
      {/* User Avatar */}
      <div className={`w-full h-32 rounded-t-xl flex items-center justify-center text-6xl ${
        darkMode ? 'bg-gray-700' : 'bg-gray-100'
      }`}>
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-gray-700">
          {user.name.split(' ').map(n => n[0]).join('')}
        </div>
      </div>

      <div className="p-6">
        {/* Required Fields */}
        <div className="mb-4">
          <h3 className={`text-xl font-bold mb-2 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            {user.name}
          </h3>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">📧</span>
              <span className={`text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {user.email}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-green-500">🏢</span>
              <span className={`text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {user.company.name}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-red-500">🏙️</span>
              <span className={`text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {user.address.city}
              </span>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <button
          onClick={() => onViewMore(user)}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
            darkMode 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          View More
        </button>
      </div>
    </div>
  )
}

export default UserCard
