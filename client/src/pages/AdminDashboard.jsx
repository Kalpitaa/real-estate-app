import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaUsers, FaEnvelope, FaChartLine, FaCog, FaSignOutAlt } from 'react-icons/fa';
import AdminMessages from '../components/AdminMessages';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { icon: <FaHome />, label: 'Properties', value: '156', change: '+12%' },
    { icon: <FaBuilding />, label: 'Projects', value: '24', change: '+5%' },
    { icon: <FaUsers />, label: 'Users', value: '1,234', change: '+18%' },
    { icon: <FaEnvelope />, label: 'Messages', value: '89', change: '-3%' }
  ];

  return (
    <div className="pt-20 pb-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex gap-6">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 h-fit sticky top-24"
          >
            <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold">Admin Panel</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Welcome back, Admin</p>
            </div>
            
            <nav className="space-y-2">
              {[
                { id: 'dashboard', icon: <FaChartLine />, label: 'Dashboard' },
                { id: 'properties', icon: <FaHome />, label: 'Properties' },
                { id: 'projects', icon: <FaBuilding />, label: 'Projects' },
                { id: 'users', icon: <FaUsers />, label: 'Users' },
                { id: 'messages', icon: <FaEnvelope />, label: 'Messages' }, // Changed from 'enquiries' to 'messages'
                { id: 'settings', icon: <FaCog />, label: 'Settings' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-xl transition-all ${
                    activeTab === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all">
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            {/* Stats Grid - Only show on dashboard tab */}
            {activeTab === 'dashboard' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-3xl text-blue-600">{stat.icon}</div>
                      <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change}
                      </span>
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Dashboard Tab Content */}
            {activeTab === 'dashboard' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Welcome to Admin Dashboard</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Manage your properties, projects, users, and messages from here.
                </p>
                
                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <button 
                    onClick={() => setActiveTab('properties')}
                    className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-left hover:bg-blue-100 transition-colors"
                  >
                    <FaHome className="text-blue-600 text-2xl mb-2" />
                    <h3 className="font-semibold">Manage Properties</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Add, edit, or remove properties</p>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('messages')}
                    className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-left hover:bg-purple-100 transition-colors"
                  >
                    <FaEnvelope className="text-purple-600 text-2xl mb-2" />
                    <h3 className="font-semibold">View Messages</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Check contact form submissions</p>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('users')}
                    className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl text-left hover:bg-green-100 transition-colors"
                  >
                    <FaUsers className="text-green-600 text-2xl mb-2" />
                    <h3 className="font-semibold">Manage Users</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">View and manage registered users</p>
                  </button>
                </div>
              </div>
            )}

            {/* Properties Tab Content */}
            {activeTab === 'properties' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Properties Management</h2>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                    + Add Property
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3">Title</th>
                        <th className="text-left py-3">Price</th>
                        <th className="text-left py-3">Location</th>
                        <th className="text-left py-3">Status</th>
                        <th className="text-left py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3].map((item) => (
                        <tr key={item} className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3">Luxury Apartment</td>
                          <td className="py-3">₹2.5 Cr</td>
                          <td className="py-3">Chennai</td>
                          <td className="py-3">
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm">Available</span>
                          </td>
                          <td className="py-3">
                            <button className="text-blue-600 mr-2">Edit</button>
                            <button className="text-red-600">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Projects Tab Content */}
            {activeTab === 'projects' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Projects Management</h2>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                    + Add Project
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Manage your upcoming projects here.</p>
              </div>
            )}

            {/* Users Tab Content */}
            {activeTab === 'users' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Users Management</h2>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                    + Add User
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Manage registered users and their roles.</p>
              </div>
            )}

            {/* Messages Tab Content - This is where AdminMessages goes */}
            {activeTab === 'messages' && <AdminMessages />}

            {/* Settings Tab Content */}
            {activeTab === 'settings' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Settings</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Site Name</label>
                    <input 
                      type="text" 
                      defaultValue="ChennaiRealty" 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Admin Email</label>
                    <input 
                      type="email" 
                      defaultValue="admin@chennairealty.com" 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                    />
                  </div>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">
                    Save Settings
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;