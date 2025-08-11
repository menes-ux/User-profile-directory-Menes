const SearchAndFilter = ({
  searchTerm,
  setSearchTerm,
  selectedCity,
  setSelectedCity,
  selectedCompany,
  setSelectedCompany,
  cities,
  companies,
  darkMode
}) => {
  const handleClearFilters = () => {
    setSearchTerm('')
    setSelectedCity('')
    setSelectedCompany('')
  }

  const hasActiveFilters = searchTerm || selectedCity || selectedCompany

  return (
    <div className={`p-6 rounded-xl mb-6 ${
      darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg'
    }`}>
      <div className={`grid gap-4 items-end ${
        hasActiveFilters 
          ? 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5' 
          : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4'
      }`}>
        {/* Search Input */}
        <div className="lg:col-span-2">
          <label className={`block text-sm font-medium mb-2 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Search Users
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or username..."
              className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-colors duration-200 ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>🔍</span>
            </div>
          </div>
        </div>

        {/* City Filter */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Filter by City
          </label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className={`w-full py-2 px-3 rounded-lg border transition-colors duration-200 ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
          >
            <option value="">All Cities</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Company Filter */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Filter by Company
          </label>
          <select
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
            className={`w-full py-2 px-3 rounded-lg border transition-colors duration-200 ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
          >
            <option value="">All Companies</option>
            {companies.map(company => (
              <option key={company} value={company}>{company}</option>
            ))}
          </select>
        </div>

        {/* Clear Filters Button - Only shows when needed */}
        {hasActiveFilters && (
          <div>
            <button
              onClick={handleClearFilters}
              className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 border border-gray-600' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'
              }`}
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchAndFilter
