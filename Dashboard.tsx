import React from 'react';
import { 
  DollarSign, 
  FileText, 
  Users, 
  TrendingUp, 
  Calendar,
  Clock,
  Star,
  ArrowUpRight,
  MoreHorizontal
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Earnings',
      value: '$12,584',
      change: '+12.5%',
      icon: DollarSign,
      positive: true
    },
    {
      title: 'Active Gigs',
      value: '8',
      change: '+2',
      icon: FileText,
      positive: true
    },
    {
      title: 'Total Clients',
      value: '24',
      change: '+4',
      icon: Users,
      positive: true
    },
    {
      title: 'Success Rate',
      value: '87%',
      change: '+5.2%',
      icon: TrendingUp,
      positive: true
    }
  ];

  const recentGigs = [
    {
      id: 1,
      title: 'E-commerce Website Redesign',
      client: 'TechCorp Inc.',
      status: 'In Progress',
      deadline: '2025-01-25',
      value: '$2,500',
      progress: 65
    },
    {
      id: 2,
      title: 'Mobile App UI Design',
      client: 'StartupXYZ',
      status: 'Review',
      deadline: '2025-01-20',
      value: '$1,800',
      progress: 90
    },
    {
      id: 3,
      title: 'Brand Identity Package',
      client: 'Creative Agency',
      status: 'Planning',
      deadline: '2025-02-15',
      value: '$3,200',
      progress: 25
    },
    {
      id: 4,
      title: 'Website Development',
      client: 'Local Business',
      status: 'Completed',
      deadline: '2025-01-10',
      value: '$1,500',
      progress: 100
    }
  ];

  const upcomingTasks = [
    { id: 1, title: 'Review client feedback', time: '10:00 AM', priority: 'high' },
    { id: 2, title: 'Submit final designs', time: '2:00 PM', priority: 'medium' },
    { id: 3, title: 'Client call - Project kickoff', time: '4:30 PM', priority: 'high' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Planning':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your gigs.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    stat.positive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-primary-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Gigs */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Recent Gigs</h2>
                <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  View all
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentGigs.map((gig) => (
                  <div key={gig.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{gig.title}</h3>
                        <p className="text-sm text-gray-600">{gig.client}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(gig.status)}`}>
                          {gig.status}
                        </span>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Due {gig.deadline}
                      </div>
                      <div className="font-semibold text-gray-900">
                        {gig.value}
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${gig.progress}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{gig.progress}% complete</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Tasks */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Today's Tasks</h2>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{task.title}</p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        {task.time}
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
            </div>
            <div className="p-6 space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors">
                <span className="text-primary-700 font-medium">Create Proposal</span>
                <ArrowUpRight className="h-4 w-4 text-primary-600" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <span className="text-gray-700 font-medium">Add New Gig</span>
                <ArrowUpRight className="h-4 w-4 text-gray-500" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <span className="text-gray-700 font-medium">Invoice Client</span>
                <ArrowUpRight className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;