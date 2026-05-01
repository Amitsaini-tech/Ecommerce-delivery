import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';

const MOCK_HISTORY = [
    { id: 'SHP-9823471', date: 'Oct 24, 2023', status: 'Delivered', destination: 'Mumbai, MH', type: 'Express', amount: '₹140' },
    { id: 'SHP-9823470', date: 'Oct 21, 2023', status: 'In Transit', destination: 'Delhi, DL', type: 'Standard', amount: '₹85' },
    { id: 'SHP-9823469', date: 'Oct 15, 2023', status: 'Cancelled', destination: 'Bangalore, KA', type: 'Express', amount: '₹120' },
    { id: 'SHP-9823468', date: 'Oct 02, 2023', status: 'Delivered', destination: 'Pune, MH', type: 'Standard', amount: '₹65' },
    { id: 'SHP-9823467', date: 'Sep 28, 2023', status: 'Delivered', destination: 'Chennai, TN', type: 'B2B', amount: '₹450' },
];

export default function History() {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
                <span className="text-6xl mb-4">🔒</span>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Login Required</h2>
                <p className="text-gray-500 mb-6">Please log in to view your shipment history.</p>
                <Link to="/Login" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-xl transition-colors">
                    Go to Login
                </Link>
            </div>
        );
    }

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Delivered': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
            case 'In Transit': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
            case 'Cancelled': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
            default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-20 pb-16 px-4 md:px-12 lg:px-24 font-poppins">
            
            {/* Banner */}
            <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-2xl px-8 py-10 mt-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="relative">
                    <p className="text-blue-200 text-xs uppercase tracking-widest font-semibold">Account</p>
                    <h1 className="text-white text-2xl md:text-3xl font-bold mt-1 flex items-center gap-3">
                        <span>📦</span> Shipment History
                    </h1>
                    <p className="text-blue-200 text-sm mt-1">View and manage all your past and current shipments.</p>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center justify-between mt-6 mb-5">
                <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">History</span>
                </div>
                <Link to="/generate-shipment">
                    <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 text-blue-600 dark:text-blue-400 text-xs font-semibold py-2 px-4 rounded-lg shadow-sm transition-all">
                        + New Shipment
                    </button>
                </Link>
            </div>

            {/* Main History Card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
                
                {/* Controls (Search & Filter) */}
                <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center gap-4 justify-between bg-gray-50/50 dark:bg-gray-800/20">
                    <div className="relative w-full sm:w-72">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
                        <input 
                            type="text" 
                            placeholder="Search Tracking ID..." 
                            className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow text-gray-700 dark:text-gray-200"
                        />
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <select className="w-full sm:w-auto border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>All Statuses</option>
                            <option>Delivered</option>
                            <option>In Transit</option>
                            <option>Cancelled</option>
                        </select>
                        <button className="border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                            <span>⬇️</span> Export
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-800/50 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold border-b border-gray-100 dark:border-gray-800">
                                <th className="p-4 pl-6">Tracking ID</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Destination</th>
                                <th className="p-4">Type</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-right pr-6">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {MOCK_HISTORY.map((item, idx) => (
                                <tr key={idx} className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors group">
                                    <td className="p-4 pl-6">
                                        <p className="font-semibold text-sm text-gray-800 dark:text-gray-200">{item.id}</p>
                                    </td>
                                    <td className="p-4">
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.date}</p>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-400 text-xs">📍</span>
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.destination}</p>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.type}</p>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide inline-block ${getStatusStyle(item.status)}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right pr-6">
                                        <Link to="/track-order">
                                            <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 focus:opacity-100">
                                                Track
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                {/* Pagination (Mock) */}
                <div className="p-5 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900">
                    <p>Showing 1 to 5 of 24 entries</p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50" disabled>Prev</button>
                        <button className="px-3 py-1 border border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded">1</button>
                        <button className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">2</button>
                        <button className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">3</button>
                        <button className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Next</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
