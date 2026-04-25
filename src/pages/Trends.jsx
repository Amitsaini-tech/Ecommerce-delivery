import React from 'react';
import { Link } from 'react-router-dom';

const Trends = () => (
    <div className="min-h-screen bg-white pt-20 px-6 md:px-16 lg:px-32" style={{fontFamily:"'Poppins', sans-serif"}}>
        {/* Hero */}
        <div className="w-full bg-blue-700 rounded-2xl px-8 md:px-14 py-12 md:py-16 mt-6">
            <span className="text-blue-200 font-semibold uppercase tracking-widest text-xs md:text-sm">Products · Delight</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Trends</h1>
            <p className="text-blue-100 text-base md:text-lg max-w-2xl">Data platform for Indian ecommerce. Get real-time insights on consumer trends, logistics performance, and market benchmarks to help you grow smarter and faster.</p>
            <Link to="/Login">
                <button className="mt-8 bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-sm md:text-base">
                    Get Started for Free
                </button>
            </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-12">
            {[
                {title:"Market Insights",desc:"Benchmark your performance against real industry trends."},
                {title:"Logistics Reports",desc:"Detailed reports on carrier and delivery performance metrics."},
                {title:"Growth Analytics",desc:"Spot opportunities and make confident data-driven decisions."}
            ].map((c, i) => (
                <div key={i} className="border border-gray-100 rounded-2xl shadow-sm p-6 hover:shadow-md hover:border-blue-200 transition-all">
                    <div className="w-10 h-10 bg-blue-700 rounded-xl mb-4 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{i + 1}</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 text-base md:text-lg mb-2">{c.title}</h3>
                    <p className="text-gray-500 text-sm">{c.desc}</p>
                </div>
            ))}
        </div>

        {/* Back link */}
        <div className="pb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-blue-700 font-medium text-sm hover:underline">
                &larr; Back to Home
            </Link>
        </div>
    </div>
);

export default Trends;

