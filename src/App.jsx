import { useState, useEffect } from 'react'
import UserCard from './components/UserCard'
import SearchAndFilter from './components/SearchAndFilter'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'
import Modal from './components/Modal'

function App() {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedCompany, setSelectedCompany] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)
  const [showModal, setShowModal] = useState(false)

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }
        
        const userData = await response.json()
        setUsers(userData)
        setFilteredUsers(userData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  // Filter users based on search and filter criteria
  useEffect(() => {
    let filtered = users

    // Search by name or username
    if (searchTerm) {
      filtered = filtered.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by city
    if (selectedCity) {
      filtered = filtered.filter(user => user.address.city === selectedCity)
    }

    // Filter by company
    if (selectedCompany) {
      filtered = filtered.filter(user => user.company.name === selectedCompany)
    }

    setFilteredUsers(filtered)
  }, [users, searchTerm, selectedCity, selectedCompany])

  // Get unique cities and companies for filter options
  const cities = [...new Set(users.map(user => user.address.city))].sort()
  const companies = [...new Set(users.map(user => user.company.name))].sort()

  // Modal handlers
  const handleViewMore = (user) => {
    setSelectedUser(user)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedUser(null)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            User Profile Directory
          </h1>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Discover and connect with amazing people
          </p>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex justify-end mb-6">
          <div className="flex items-center space-x-3">
            <span className={`text-sm font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
            
            {/* Toggle Switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                darkMode ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              aria-label="Toggle dark mode"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-200 ${
                  darkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            
            {/* Icon */}
            <span className="text-lg">
              {darkMode ? '🌙' : '☀️'}
            </span>
          </div>
        </div>

        {/* Search and Filter */}
        <SearchAndFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
          cities={cities}
          companies={companies}
          darkMode={darkMode}
        />

        {/* Content */}
        {loading && <LoadingSpinner darkMode={darkMode} />}
        
        {error && <ErrorMessage message={error} darkMode={darkMode} />}
        
        {!loading && !error && (
          <>
            {/* User Grid */}
            {filteredUsers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredUsers.map(user => (
                  <UserCard 
                    key={user.id} 
                    user={user} 
                    darkMode={darkMode}
                    onViewMore={handleViewMore}
                  />
                ))}
              </div>
            ) : (
              <div className={`text-center py-12 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No users found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* User Details Modal - Rendered at root level */}
      {selectedUser && (
        <Modal isOpen={showModal} onClose={handleCloseModal} darkMode={darkMode}>
          <div className="text-center mb-6">
            {/* Large Avatar */}
            <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl font-bold ${
              darkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}>
              {selectedUser.name.split(' ').map(n => n[0]).join('')}
            </div>
            
            <h2 className={`text-2xl font-bold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              {selectedUser.name}
            </h2>
            
            <p className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              @{selectedUser.username}
            </p>
          </div>

          {/* Detailed Information */}
          <div className="space-y-4">
            {/* Contact Information */}
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 text-lg">📧</span>
                  <div>
                    <p className={`text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email
                    </p>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {selectedUser.email}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-500 text-lg">📞</span>
                  <div>
                    <p className={`text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Phone
                    </p>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {selectedUser.phone}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-indigo-500 text-lg">🌐</span>
                  <div>
                    <p className={`text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Website
                    </p>
                    <a 
                      href={`http://${selectedUser.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`text-sm hover:underline ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}
                    >
                      {selectedUser.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className={`pt-4 border-t ${
              darkMode ? 'border-gray-600' : 'border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Address
              </h3>
              <div className="flex items-start space-x-3">
                <span className="text-orange-500 text-lg">📍</span>
                <div>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {selectedUser.address.street}, {selectedUser.address.suite}<br/>
                    {selectedUser.address.city}, {selectedUser.address.zipcode}
                  </p>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className={`pt-4 border-t ${
              darkMode ? 'border-gray-600' : 'border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Company
              </h3>
              <div className="flex items-start space-x-3">
                <span className="text-gray-500 text-lg">💼</span>
                <div>
                  <p className={`text-sm font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {selectedUser.company.name}
                  </p>
                  <p className={`text-sm italic ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    "{selectedUser.company.catchPhrase}"
                  </p>
                  <p className={`text-sm mt-1 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {selectedUser.company.bs}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default App
