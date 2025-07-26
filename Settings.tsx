import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  CreditCard, 
  Shield, 
  Mail,
  Phone,
  MapPin,
  Camera,
  Save,
  Eye,
  EyeOff
} from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Experienced freelance web developer specializing in React and Node.js applications.',
    website: 'https://johndoe.dev',
    hourlyRate: '75'
  });

  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
    marketing: true
  });

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'security', name: 'Security', icon: Shield },
  ];

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your account settings and preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <nav className="p-4">
              <ul className="space-y-1">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <tab.icon className={`mr-3 h-4 w-4 ${
                        activeTab === tab.id ? 'text-primary-500' : 'text-gray-400'
                      }`} />
                      {tab.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <>
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Profile Information</h2>
                  <p className="text-gray-600">Update your profile details and public information.</p>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {/* Profile Photo */}
                    <div className="flex items-center space-x-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center">
                          <User className="h-10 w-10 text-white" />
                        </div>
                        <button className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full p-1 hover:bg-gray-50">
                          <Camera className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">Profile Photo</h3>
                        <p className="text-sm text-gray-500">JPG, GIF or PNG. 1MB max.</p>
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={profileData.firstName}
                          onChange={handleProfileChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={profileData.lastName}
                          onChange={handleProfileChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="h-4 w-4 inline mr-1" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleProfileChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          <Phone className="h-4 w-4 inline mr-1" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={profileData.phone}
                          onChange={handleProfileChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                          <MapPin className="h-4 w-4 inline mr-1" />
                          Location
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={profileData.location}
                          onChange={handleProfileChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                        Bio
                      </label>
                      <textarea
                        id="bio"
                        name="bio"
                        value={profileData.bio}
                        onChange={handleProfileChange}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Tell clients about yourself and your expertise..."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                          Website
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          value={profileData.website}
                          onChange={handleProfileChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="https://yourwebsite.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700 mb-2">
                          Hourly Rate ($)
                        </label>
                        <input
                          type="number"
                          id="hourlyRate"
                          name="hourlyRate"
                          value={profileData.hourlyRate}
                          onChange={handleProfileChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <>
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Notification Preferences</h2>
                  <p className="text-gray-600">Choose how you want to be notified about updates.</p>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {Object.entries(notifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900 capitalize">
                            {key === 'sms' ? 'SMS' : key} Notifications
                          </h3>
                          <p className="text-sm text-gray-500">
                            {key === 'email' && 'Receive notifications via email'}
                            {key === 'push' && 'Receive push notifications in your browser'}
                            {key === 'sms' && 'Receive text message notifications'}
                            {key === 'marketing' && 'Receive updates about new features and tips'}
                          </p>
                        </div>
                        <button
                          onClick={() => handleNotificationChange(key)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            value ? 'bg-primary-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              value ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <>
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Billing & Subscription</h2>
                  <p className="text-gray-600">Manage your subscription and payment methods.</p>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {/* Current Plan */}
                    <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-primary-900">Pro Plan</h3>
                          <p className="text-primary-700">$29/month • Billed monthly</p>
                        </div>
                        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                          Upgrade
                        </button>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-3">Payment Method</h3>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                              <span className="text-white text-xs font-bold">VISA</span>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">•••• •••• •••• 4242</p>
                              <p className="text-sm text-gray-500">Expires 12/25</p>
                            </div>
                          </div>
                          <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                            Update
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Billing History */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-3">Recent Invoices</h3>
                      <div className="space-y-2">
                        {['January 2025', 'December 2024', 'November 2024'].map((month, index) => (
                          <div key={index} className="flex items-center justify-between py-2">
                            <div>
                              <p className="text-sm font-medium text-gray-900">{month}</p>
                              <p className="text-sm text-gray-500">Pro Plan</p>
                            </div>
                            <div className="flex items-center space-x-4">
                              <span className="text-sm font-medium text-gray-900">$29.00</span>
                              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                                Download
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <>
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Security Settings</h2>
                  <p className="text-gray-600">Manage your account security and privacy.</p>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {/* Change Password */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-3">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-2">
                            Current Password
                          </label>
                          <div className="relative">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              id="currentPassword"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent pr-10"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4 text-gray-400" />
                              ) : (
                                <Eye className="h-4 w-4 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                            New Password
                          </label>
                          <input
                            type="password"
                            id="newPassword"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            id="confirmPassword"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          />
                        </div>
                        
                        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                          Update Password
                        </button>
                      </div>
                    </div>

                    {/* Two-Factor Authentication */}
                    <div className="border-t border-gray-200 pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h3>
                          <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                        </div>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors">
                          Enable
                        </button>
                      </div>
                    </div>

                    {/* Session Management */}
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-sm font-medium text-gray-900 mb-3">Active Sessions</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="text-sm font-medium text-gray-900">Current Session</p>
                            <p className="text-sm text-gray-500">Chrome on macOS • San Francisco, CA</p>
                          </div>
                          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Save Button */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-xl">
              <div className="flex justify-end">
                <button className="flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;