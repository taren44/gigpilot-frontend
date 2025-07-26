import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BarChart3, 
  Zap, 
  FileText, 
  Users, 
  Star,
  CheckCircle,
  Target,
  Bot,
  TrendingUp
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Smart Gig Matching',
      description: 'AI-powered algorithm finds the perfect gigs that match your skills, experience, and preferences automatically.'
    },
    {
      icon: Bot,
      title: 'AI Proposal Writer',
      description: 'Generate compelling, personalized proposals in seconds using advanced AI that understands client needs.'
    },
    {
      icon: Users,
      title: 'Client Tracker',
      description: 'Keep track of all your clients, communications, and project progress in one organized dashboard.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Freelance Designer',
      content: 'GigPilot\'s AI proposal writer helped me land 3 new clients in my first week. The quality is incredible!',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Full-Stack Developer',
      content: 'Smart gig matching saved me hours of searching. I now focus on what I do best - coding amazing projects.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emma Thompson',
      role: 'Content Writer',
      content: 'From 2 gigs per month to 8+ gigs. GigPilot transformed my freelance business completely.',
      rating: 5,
      avatar: 'ET'
    }
  ];

  const benefits = [
    'Find high-paying gigs faster',
    'Write winning proposals in minutes',
    'Track client relationships effortlessly',
    'Increase your success rate by 300%'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="relative bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">GigPilot</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-left">
              <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4 mr-2" />
                AI-Powered Freelancing
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Land Freelance Gigs
                <span className="text-primary-600 block">10x Faster with AI</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                Stop wasting time on endless job searches and proposal writing. Let our AI find perfect gigs 
                and craft winning proposals while you focus on delivering amazing work.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="inline-flex items-center justify-center border-2 border-gray-300 hover:border-primary-300 text-gray-700 hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                  Watch Demo
                </button>
              </div>

              {/* Benefits List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Hero Image Placeholder */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-500">GigPilot Dashboard</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-3">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">AI found 12 new gigs</div>
                          <div className="text-xs text-gray-500">Perfect matches for your skills</div>
                        </div>
                      </div>
                      <div className="text-primary-600 font-bold">$2,400</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                          <FileText className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">Proposal accepted!</div>
                          <div className="text-xs text-gray-500">E-commerce redesign project</div>
                        </div>
                      </div>
                      <div className="text-green-600 font-bold">$3,500</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                          <TrendingUp className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">Success rate: 87%</div>
                          <div className="text-xs text-gray-500">+23% this month</div>
                        </div>
                      </div>
                      <div className="text-blue-600 font-bold">↗ 23%</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-xs font-medium text-gray-700">Live Updates</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3">
                  <div className="text-xs text-gray-500">AI Powered</div>
                  <div className="text-sm font-bold text-primary-600">24/7 Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to dominate freelancing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful AI-driven tools designed to help freelancers find better gigs, 
              write winning proposals, and manage clients like never before.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Loved by 10,000+ freelancers worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See how GigPilot is transforming freelance careers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to 10x your freelance success?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of freelancers who are already using AI to land better gigs, 
            write winning proposals, and grow their income faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200">
              Schedule Demo
            </button>
          </div>
          <p className="text-primary-200 text-sm mt-4">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <BarChart3 className="h-8 w-8 text-primary-400" />
            <span className="ml-2 text-xl font-bold text-white">GigPilot</span>
          </div>
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              The AI-powered platform for freelance success
            </p>
            <p className="text-gray-500 text-sm">
              &copy; 2025 GigPilot. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;