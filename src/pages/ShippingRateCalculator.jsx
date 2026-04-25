import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShippingRateCalculator = () => {
    const [weight, setWeight] = useState('');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [zone, setZone] = useState('');
    const [results, setResults] = useState(null);

    const zones = ['Within City', 'Within State', 'Regional', 'National', 'Remote'];

    const rateTable = {
        'Within City': { base: 30, perKg: 8 },
        'Within State': { base: 45, perKg: 12 },
        'Regional': { base: 60, perKg: 18 },
        'National': { base: 80, perKg: 25 },
        'Remote': { base: 100, perKg: 35 },
    };

    const carriers = [
        { name: 'Bluedart Express', multiplier: 1.3, rating: '4.8★', eta: '1-2 days' },
        { name: 'Delhivery', multiplier: 1.0, rating: '4.5★', eta: '2-3 days' },
        { name: 'DTDC', multiplier: 0.9, rating: '4.2★', eta: '3-4 days' },
        { name: 'Ekart Logistics', multiplier: 0.85, rating: '4.3★', eta: '3-5 days' },
        { name: 'Elivery Express', multiplier: 1.1, rating: '4.9★', eta: '1-2 days' },
    ];

    const calculate = (e) => {
        e.preventDefault();
        if (!weight || !zone) return;
        const w = parseFloat(weight);
        const { base, perKg } = rateTable[zone];
        const baseRate = base + perKg * Math.ceil(w);
        const gst = 0.18;
        const res = carriers.map(c => {
            const amt = Math.round(baseRate * c.multiplier);
            return { ...c, amount: amt, total: Math.round(amt * (1 + gst)) };
        }).sort((a, b) => a.amount - b.amount);
        setResults(res);
    };

    return (
        <div className="min-h-screen bg-white pt-20 px-6 md:px-16 lg:px-32" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {/* Hero */}
            <div className="w-full bg-blue-700 rounded-2xl px-8 md:px-14 py-12 mt-6">
                <span className="text-blue-200 font-semibold uppercase tracking-widest text-xs md:text-sm">Resources · Product Help</span>
                <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-3">Shipping Rate Calculator</h1>
                <p className="text-blue-100 text-base md:text-lg max-w-2xl">Compare live shipping rates across 25+ carriers instantly. Enter your shipment details to find the best deal for your order.</p>
            </div>

            {/* Calculator Form */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="border border-gray-100 rounded-2xl shadow-sm p-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Enter Shipment Details</h2>
                    <form onSubmit={calculate} className="flex flex-col gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Pincode / City</label>
                            <input
                                type="text" value={origin} onChange={e => setOrigin(e.target.value)}
                                placeholder="e.g. 400001 or Mumbai"
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Pincode / City</label>
                            <input
                                type="text" value={destination} onChange={e => setDestination(e.target.value)}
                                placeholder="e.g. 110001 or Delhi"
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Zone</label>
                            <select
                                value={zone} onChange={e => setZone(e.target.value)} required
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            >
                                <option value="">Select zone</option>
                                {zones.map(z => <option key={z} value={z}>{z}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Actual Weight (kg)</label>
                            <input
                                type="number" value={weight} onChange={e => setWeight(e.target.value)}
                                placeholder="e.g. 0.5" min="0.1" step="0.1" required
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition-colors text-sm"
                        >
                            Calculate Shipping Rates
                        </button>
                    </form>
                </div>

                {/* Results */}
                <div>
                    {results ? (
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Rates</h2>
                            <div className="flex flex-col gap-3">
                                {results.map((r, i) => (
                                    <div key={i} className={`border rounded-xl p-5 flex items-center justify-between transition-all ${i === 0 ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-gray-100 hover:border-blue-200 hover:shadow-sm'}`}>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-gray-800 text-sm">{r.name}</span>
                                                {i === 0 && <span className="text-[10px] bg-blue-700 text-white px-2 py-0.5 rounded-full font-medium">Best Price</span>}
                                            </div>
                                            <div className="text-xs text-gray-500 mt-1">{r.rating} · ETA: {r.eta}</div>
                                            <div className="text-xs text-gray-400 mt-0.5">Incl. 18% GST: ₹{r.total}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xl font-bold text-blue-700">₹{r.amount}</div>
                                            <div className="text-xs text-gray-400">+ GST</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-gray-400 mt-4">* Rates are indicative. Final rates may vary based on actual shipment dimensions and carrier availability.</p>
                        </div>
                    ) : (
                        <div className="border border-dashed border-gray-200 rounded-2xl h-full flex flex-col items-center justify-center p-10 text-center min-h-[300px]">
                            <div className="text-5xl mb-4">📦</div>
                            <p className="text-gray-500 text-sm">Fill in the shipment details and click <span className="font-semibold text-blue-700">Calculate</span> to compare carrier rates.</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="py-12 mt-4">
                <Link to="/" className="inline-flex items-center gap-2 text-blue-700 font-medium text-sm hover:underline">&larr; Back to Home</Link>
            </div>
        </div>
    );
};

export default ShippingRateCalculator;
