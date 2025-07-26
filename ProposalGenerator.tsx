import React, { useState } from 'react';
import { 
  FileText, 
  Send, 
  Save, 
  Eye, 
  Copy,
  Sparkles,
  Clock,
  DollarSign
} from 'lucide-react';

const ProposalGenerator: React.FC = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    projectTitle: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    deliverables: '',
    terms: ''
  });

  const [templates] = useState([
    {
      id: 1,
      name: 'Web Development',
      description: 'Perfect for website and web app projects',
      category: 'Development'
    },
    {
      id: 2,
      name: 'Graphic Design',
      description: 'Ideal for branding and design projects',
      category: 'Design'
    },
    {
      id: 3,
      name: 'Content Writing',
      description: 'Great for blog posts and copywriting',
      category: 'Writing'
    },
    {
      id: 4,
      name: 'Marketing Campaign',
      description: 'For digital marketing and advertising',
      category: 'Marketing'
    }
  ]);

  const [recentProposals] = useState([
    {
      id: 1,
      title: 'E-commerce Website Redesign',
      client: 'TechCorp Inc.',
      date: '2025-01-15',
      status: 'Sent',
      value: '$2,500'
    },
    {
      id: 2,
      title: 'Brand Identity Package',
      client: 'StartupXYZ',
      date: '2025-01-12',
      status: 'Accepted',
      value: '$1,800'
    },
    {
      id: 3,
      title: 'Mobile App Development',
      client: 'Creative Agency',
      date: '2025-01-08',
      status: 'Draft',
      value: '$4,200'
    }
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Accepted':
        return 'bg-green-100 text-green-800';
      case 'Sent':
        return 'bg-blue-100 text-blue-800';
      case 'Draft':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Proposal Generator</h1>
        <p className="text-gray-600">Create professional proposals that win more clients.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">New Proposal</h2>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center px-3 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors">
                    <Sparkles className="h-4 w-4 mr-1" />
                    AI Assist
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-2">
                      Client Name
                    </label>
                    <input
                      type="text"
                      id="clientName"
                      name="clientName"
                      value={formData.clientName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter client name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Title
                    </label>
                    <input
                      type="text"
                      id="projectTitle"
                      name="projectTitle"
                      value={formData.projectTitle}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter project title"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Describe the project scope and requirements..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="h-4 w-4 inline mr-1" />
                      Timeline
                    </label>
                    <input
                      type="text"
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g., 2-3 weeks"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      <DollarSign className="h-4 w-4 inline mr-1" />
                      Budget
                    </label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g., $2,500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="deliverables" className="block text-sm font-medium text-gray-700 mb-2">
                    Deliverables
                  </label>
                  <textarea
                    id="deliverables"
                    name="deliverables"
                    value={formData.deliverables}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="List what you'll deliver to the client..."
                  />
                </div>

                <div>
                  <label htmlFor="terms" className="block text-sm font-medium text-gray-700 mb-2">
                    Terms & Conditions
                  </label>
                  <textarea
                    id="terms"
                    name="terms"
                    value={formData.terms}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Add payment terms, revision policy, etc..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="button"
                    className="flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Proposal
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Draft
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Templates */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Templates</h2>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {templates.map((template) => (
                  <div key={template.id} className="p-3 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{template.name}</h3>
                      <span className="text-xs text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                        {template.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{template.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Proposals */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Recent Proposals</h2>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {recentProposals.map((proposal) => (
                  <div key={proposal.id} className="p-3 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-gray-900 text-sm">{proposal.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(proposal.status)}`}>
                        {proposal.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{proposal.client}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{proposal.date}</span>
                      <span className="font-semibold text-gray-900">{proposal.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalGenerator;