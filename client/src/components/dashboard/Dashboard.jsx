import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Plus } from 'lucide-react';
import SurveyStats from './SurveyStats';
import SurveyFilters from './SurveyFilters';
import SurveyCard from '../SurveyCard';

const mockSurveys = [
  {
    id: 1,
    title: "Annual Safety Inspection 2024",
    description: "Comprehensive workplace safety assessment for Q1 2024",
    status: "active",
    dueDate: "Mar 31, 2024",
    respondents: 45,
    completionRate: 68
  },
  {
    id: 2,
    title: "Employee Satisfaction Survey",
    description: "Gathering feedback on workplace environment and culture",
    status: "draft",
    dueDate: "Apr 15, 2024",
    respondents: 0,
    completionRate: 0
  },
  {
    id: 3,
    title: "IT Equipment Audit",
    description: "Inventory check of all company IT assets and their condition",
    status: "active",
    dueDate: "Mar 25, 2024",
    respondents: 89,
    completionRate: 92
  },
  {
    id: 4,
    title: "Project Completion Survey",
    description: "Feedback on recently completed projects",
    status: "complete",
    dueDate: "Feb 28, 2024",
    respondents: 100,
    completionRate: 100
  }
];

export default function Dashboard() {
  const [filter, setFilter] = useState('all');

  const filteredSurveys = mockSurveys.filter(survey => {
    if (filter === 'all') return true;
    return survey.status === filter;
  });

  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Better Proposals & Inspections</h1>
          <p className="text-gray-600">Manage and monitor your surveys efficiently</p>
        </div>
        <Link
          to="/create-quotations" // Link to the create survey page
          className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800"
        >
          <Plus size={20} />
          <span>Create New</span>
        </Link>
      </div>

      {/* Filter Buttons */}
    
      {/* Survey Statistics */}
      <div className="bg-gray-100 p-4 rounded-lg mb-8">
        <SurveyStats />
      </div>
  <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg border border-black ${filter === 'all' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-4 py-2 rounded-lg border border-black ${filter === 'active' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('draft')}
          className={`px-4 py-2 rounded-lg border border-black ${filter === 'draft' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}
        >
          Draft
        </button>
        <button
          onClick={() => setFilter('complete')}
          className={`px-4 py-2 rounded-lg border border-black ${filter === 'complete' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}
        >
          Complete
        </button>
      </div>

      {/* Filters Section */}
      {/* <div className="bg-gray-100 p-4 rounded-lg mb-8">
        <SurveyFilters />
      </div> */}

      {/* Surveys Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSurveys.map(survey => (
          <div key={survey.id} className=" bg-white  p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <SurveyCard survey={survey} />
          </div>
        ))}
      </div>
    </main>
  );
}
