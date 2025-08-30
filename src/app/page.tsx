'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const gdpData = [
  { year: '2019', value: 21.43 },
  { year: '2020', value: 20.95 },
  { year: '2021', value: 23.32 },
  { year: '2022', value: 25.46 },
  { year: '2023', value: 26.95 },
  { year: '2024', value: 27.36 }
];

const unemploymentData = [
  { month: 'Jan', rate: 3.7 },
  { month: 'Feb', rate: 3.5 },
  { month: 'Mar', rate: 3.8 },
  { month: 'Apr', rate: 3.4 },
  { month: 'May', rate: 4.0 },
  { month: 'Jun', rate: 4.0 },
  { month: 'Jul', rate: 4.3 },
  { month: 'Aug', rate: 4.2 },
  { month: 'Sep', rate: 4.1 },
  { month: 'Oct', rate: 4.1 },
  { month: 'Nov', rate: 4.2 },
  { month: 'Dec', rate: 3.7 }
];

const interestRatesData = [
  { year: '2019', rate: 1.75 },
  { year: '2020', rate: 0.25 },
  { year: '2021', rate: 0.25 },
  { year: '2022', rate: 4.25 },
  { year: '2023', rate: 5.25 },
  { year: '2024', rate: 4.75 }
];

const bondYieldsData = [
  { year: '2019', yield: 2.14 },
  { year: '2020', yield: 0.93 },
  { year: '2021', yield: 1.44 },
  { year: '2022', yield: 3.01 },
  { year: '2023', yield: 4.05 },
  { year: '2024', yield: 4.25 }
];

function ChartCard({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-900 mb-1">{title}</h3>
        <p className="text-xs text-gray-600">{subtitle}</p>
      </div>
      <div className="h-48">
        {children}
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen p-4">
      <div className="mb-6">
        <h1 className="text-lg font-semibold text-gray-900">FRED Indicators</h1>
        <p className="text-sm text-gray-600">Economic Data Dashboard</p>
      </div>
      
      <nav className="space-y-2">
        <div className="bg-blue-100 text-blue-900 px-3 py-2 rounded-md text-sm font-medium flex items-center">
          <span className="mr-2">📊</span>
          Key Indicators
        </div>
        <div className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium cursor-pointer flex items-center">
          <span className="mr-2">📈</span>
          Inflation
        </div>
        <div className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium cursor-pointer flex items-center">
          <span className="mr-2">👥</span>
          Employment
        </div>
        <div className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium cursor-pointer flex items-center">
          <span className="mr-2">💰</span>
          Interest Rates
        </div>
        <div className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium cursor-pointer flex items-center">
          <span className="mr-2">💹</span>
          Economic Growth
        </div>
        <div className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium cursor-pointer flex items-center">
          <span className="mr-2">💱</span>
          Exchange Rates
        </div>
        <div className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium cursor-pointer flex items-center">
          <span className="mr-2">🏠</span>
          Housing
        </div>
        <div className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium cursor-pointer flex items-center">
          <span className="mr-2">🛒</span>
          Consumer Spending
        </div>
      </nav>
      
      <div className="mt-8 pt-8 border-t border-gray-200 text-xs text-gray-500">
        Data provided by Federal Reserve<br />
        Economic Data (FRED)
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      
      <main className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Economic Indicators Dashboard</h1>
          <p className="text-gray-600">Real-time economic data from the Federal Reserve Economic Data (FRED) system</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard 
            title="GDP - Last five years" 
            subtitle="Gross Domestic Product (Seasonally Adjusted Annual Rate)"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={gdpData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
          
          <ChartCard 
            title="Initial Annual Labor Statistics: Unemployment Rate Total" 
            subtitle="Unemployment Rate - All persons 16 years and over"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={unemploymentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Line type="monotone" dataKey="rate" stroke="#2563eb" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
          
          <ChartCard 
            title="Interest Rates: Long-Term Government Bond Yields: 10-Year" 
            subtitle="10-Year Treasury Constant Maturity Rate"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={interestRatesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Line type="monotone" dataKey="rate" stroke="#2563eb" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
          
          <ChartCard 
            title="Interest Rates: 3-Month or 90-Day Rates and Yields" 
            subtitle="3-Month Treasury Bill: Secondary Market Rate"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={bondYieldsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Line type="monotone" dataKey="yield" stroke="#2563eb" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </main>
    </div>
  );
}
