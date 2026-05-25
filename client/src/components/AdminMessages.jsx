import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaCheck, FaTrash, FaEye } from 'react-icons/fa';
import api from '../services/api';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await api.get('/admin/messages');
      setMessages(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setLoading(false);
    }
  };

  const markAsRead = async (id) => {
    try {
      await api.put(`/contact/${id}/read`);
      fetchMessages();
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  const deleteMessage = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await api.delete(`/contact/${id}`);
        fetchMessages();
      } catch (error) {
        console.error('Error deleting message:', error);
      }
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading messages...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Contact Messages</h2>
        <div className="text-sm text-gray-600">
          Total: {messages.length} | Unread: {messages.filter(m => m.status === 'unread').length}
        </div>
      </div>

      <div className="grid gap-4">
        {messages.map((message, index) => (
          <motion.div
            key={message._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg ${
              message.status === 'unread' ? 'border-l-4 border-blue-600' : ''
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg">{message.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{message.email}</p>
              </div>
              <div className="flex gap-2">
                {message.status === 'unread' && (
                  <button
                    onClick={() => markAsRead(message._id)}
                    className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg hover:bg-blue-200 transition-colors"
                    title="Mark as read"
                  >
                    <FaCheck className="text-blue-600" />
                  </button>
                )}
                <button
                  onClick={() => setSelectedMessage(message)}
                  className="p-2 bg-green-100 dark:bg-green-900 rounded-lg hover:bg-green-200 transition-colors"
                  title="View details"
                >
                  <FaEye className="text-green-600" />
                </button>
                <button
                  onClick={() => deleteMessage(message._id)}
                  className="p-2 bg-red-100 dark:bg-red-900 rounded-lg hover:bg-red-200 transition-colors"
                  title="Delete"
                >
                  <FaTrash className="text-red-600" />
                </button>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-2">{message.message}</p>
            <div className="text-xs text-gray-500">
              Received: {new Date(message.createdAt).toLocaleString()}
            </div>
          </motion.div>
        ))}

        {messages.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No messages yet
          </div>
        )}
      </div>

      {/* Message Detail Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">Message Details</h3>
              <button
                onClick={() => setSelectedMessage(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="font-semibold">From:</label>
                <p>{selectedMessage.name} ({selectedMessage.email})</p>
              </div>
              <div>
                <label className="font-semibold">Message:</label>
                <p className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mt-1">
                  {selectedMessage.message}
                </p>
              </div>
              <div>
                <label className="font-semibold">Received:</label>
                <p>{new Date(selectedMessage.createdAt).toLocaleString()}</p>
              </div>
              <div>
                <label className="font-semibold">Status:</label>
                <p className={`capitalize ${selectedMessage.status === 'unread' ? 'text-blue-600' : 'text-green-600'}`}>
                  {selectedMessage.status}
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setSelectedMessage(null)}
              className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminMessages;