import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TIMELINE_ICONS = ['📦', '🚚', '🔄', '🛵', '✅'];
const STATUS_COLORS = [
    'from-blue-500 to-blue-600',
    'from-indigo-500 to-indigo-600',
    'from-purple-500 to-purple-600',
    'from-orange-400 to-orange-500',
    'from-green-500 to-green-600',
];

const TrackOrder = () => {
    const [code, setCode] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    const handleTrack = (e) => {
        e.preventDefault();
        const trimmed = code.trim().toUpperCase();
        if (!trimmed) { setError('Please enter a tracking code'); return; }

        setLoading(true);
        setError('');
        setResult(null);

        // Simulate async lookup
        setTimeout(() => {
            const shipments = JSON.parse(localStorage.getItem('elivery_shipments') || '{}');
            const found = shipments[trimmed];
            if (found) {
                setResult(found);
                setError('');
            } else {
                setResult(null);
                setError('No shipment found with this tracking code. Please check and try again.');
            }
            setLoading(false);
            setSearched(true);
        }, 900);
    };

    const handleCodeChange = (val) => {
        // Auto-format: insert dashes
        let raw = val.toUpperCase().replace(/[^A-Z0-9]/g, '');
        if (raw.startsWith('ELV') && raw.length > 3) {
            let rest = raw.slice(3);
            let formatted = 'ELV';
            for (let i = 0; i < rest.length; i++) {
                if (i === 3 || i === 6) formatted += '-';
                formatted += rest[i];
            }
            setCode(formatted);
        } else {
            setCode(raw);
        }
        setError('');
        setSearched(false);
        setResult(null);
    };

    const currentStep = result ? (result.status ?? 0) : 0;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20 px-4 md:px-12 lg:px-24 pb-16"
            style={{ fontFamily: "'Poppins', sans-serif" }}>

            {/* Hero */}
            <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-2xl px-8 md:px-14 py-12 mt-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <span className="text-blue-200 font-semibold uppercase tracking-widest text-xs md:text-sm">Elivery · Real-Time Tracking</span>
                <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-3">Track Your Order</h1>
                <p className="text-blue-100 text-base md:text-lg max-w-2xl">
                    Enter your unique tracking code to get real-time updates on your shipment status and delivery timeline.
                </p>
            </div>

            {/* Search Bar */}
            <div className="mt-10 max-w-2xl mx-auto">
                <form onSubmit={handleTrack} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        🔍 Enter Tracking Code
                    </h2>
                    <div className="flex gap-3">
                        <div className="flex-1 relative">
                            <input
                                id="trackingCodeInput"
                                type="text"
                                value={code}
                                onChange={e => handleCodeChange(e.target.value)}
                                placeholder="ELV-XXXX-XXXXX"
                                maxLength={16}
                                className={`w-full border rounded-xl px-4 py-4 text-base font-mono tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${error ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-blue-300'}`}
                            />
                            {code && (
                                <button type="button" onClick={() => { setCode(''); setResult(null); setError(''); setSearched(false); }}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg">✕</button>
                            )}
                        </div>
                        <button
                            id="trackBtn"
                            type="submit"
                            disabled={loading}
                            className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white px-6 py-4 rounded-xl font-semibold text-sm hover:from-blue-800 hover:to-indigo-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-60 whitespace-nowrap">
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                    </svg>
                                    Tracking…
                                </span>
                            ) : 'Track Order'}
                        </button>
                    </div>
                    {error && (
                        <div className="mt-3 flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                            <span>⚠️</span> {error}
                        </div>
                    )}
                    <p className="text-xs text-gray-400 mt-3">
                        Tracking codes are in the format <span className="font-mono font-medium text-blue-600">ELV-XXXX-XXXXX</span>. Find it in your shipment confirmation.
                    </p>
                </form>
            </div>

            {/* Loading Skeleton */}
            {loading && (
                <div className="mt-8 max-w-2xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-8 animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-1/3 mb-6" />
                    <div className="h-3 bg-gray-100 rounded w-2/3 mb-4" />
                    <div className="h-3 bg-gray-100 rounded w-1/2" />
                </div>
            )}

            {/* Result */}
            {result && !loading && (
                <div className="mt-8 max-w-2xl mx-auto space-y-5">

                    {/* Status Banner */}
                    <div className={`bg-gradient-to-r ${STATUS_COLORS[currentStep]} rounded-2xl p-6 text-white shadow-lg`}>
                        <div className="flex items-center justify-between mb-2">
                            <div>
                                <p className="text-white/70 text-xs uppercase tracking-wider">Tracking Code</p>
                                <p className="font-mono font-bold text-lg tracking-widest">{result.code}</p>
                            </div>
                            <div className="text-5xl">{TIMELINE_ICONS[currentStep]}</div>
                        </div>
                        <div className="mt-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            <span className="font-semibold text-lg">{result.timeline[currentStep]?.label}</span>
                        </div>
                        {result.timeline[currentStep]?.time && (
                            <p className="text-white/70 text-xs mt-1">{result.timeline[currentStep].time}</p>
                        )}
                    </div>

                    {/* Progress Steps */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                        <h3 className="font-semibold text-gray-800 text-sm mb-6">Shipment Journey</h3>
                        <div className="relative">
                            {/* Connector line */}
                            <div className="absolute left-5 top-6 bottom-6 w-0.5 bg-gray-100" />
                            <div
                                className="absolute left-5 top-6 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600 transition-all duration-700"
                                style={{ height: `${(currentStep / (result.timeline.length - 1)) * 100}%` }}
                            />
                            <div className="flex flex-col gap-6 relative">
                                {result.timeline.map((step, i) => (
                                    <div key={i} className={`flex items-start gap-5 ${i <= currentStep ? '' : 'opacity-40'}`}>
                                        <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm flex-shrink-0 transition-all duration-500 ${i <= currentStep ? 'bg-gradient-to-br from-blue-600 to-indigo-600 shadow-blue-200 shadow-md scale-110' : 'bg-gray-100'}`}>
                                            {i < currentStep ? '✓' : TIMELINE_ICONS[i]}
                                        </div>
                                        <div className="pt-1.5">
                                            <p className={`font-medium text-sm ${i <= currentStep ? 'text-gray-800' : 'text-gray-400'}`}>{step.label}</p>
                                            {step.time ? (
                                                <p className="text-xs text-gray-400 mt-0.5">{step.time}</p>
                                            ) : i === currentStep ? (
                                                <p className="text-xs text-blue-500 mt-0.5 font-medium animate-pulse">In Progress…</p>
                                            ) : i > currentStep ? (
                                                <p className="text-xs text-gray-300 mt-0.5">Pending</p>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Shipment Details */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                        <h3 className="font-semibold text-gray-800 text-sm mb-5">Shipment Details</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                            {[
                                { icon: '👤', label: 'Provider', value: result.providerName },
                                { icon: '📱', label: 'Sender Phone', value: result.phone },
                                { icon: '📍', label: 'Dispatch From', value: result.address },
                                { icon: '🏁', label: 'Destination', value: result.destination },
                                { icon: '⚖️', label: 'Weight', value: `${result.weight} kg` },
                                { icon: '🗓️', label: 'Created', value: new Date(result.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) },
                            ].map((item, i) => (
                                <div key={i} className="bg-gray-50 rounded-xl p-3">
                                    <p className="text-gray-400 text-xs flex items-center gap-1 mb-1">{item.icon} {item.label}</p>
                                    <p className="font-semibold text-gray-700 text-sm">{item.value}</p>
                                </div>
                            ))}
                        </div>
                        {result.productDescription && (
                            <div className="mt-3 bg-blue-50 border border-blue-100 rounded-xl p-3">
                                <p className="text-blue-400 text-xs mb-0.5">📋 Product</p>
                                <p className="text-blue-700 text-sm font-medium">{result.productDescription}</p>
                            </div>
                        )}
                    </div>

                    {/* Receiver Info */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                        <h3 className="font-semibold text-gray-800 text-sm mb-4">Receiver Information</h3>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 bg-gray-50 rounded-xl p-4">
                                <p className="text-gray-400 text-xs mb-1">👤 Name</p>
                                <p className="font-semibold text-gray-700 text-sm">{result.receiverName}</p>
                            </div>
                            <div className="flex-1 bg-gray-50 rounded-xl p-4">
                                <p className="text-gray-400 text-xs mb-1">📱 Phone</p>
                                <p className="font-semibold text-gray-700 text-sm">{result.receiverPhone}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button onClick={() => { setCode(''); setResult(null); setSearched(false); }}
                            className="flex-1 border border-gray-200 text-gray-600 rounded-xl py-3 text-sm font-medium hover:bg-gray-50 transition-all">
                            Track Another
                        </button>
                        <Link to="/generate-shipment" className="flex-1">
                            <button className="w-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white rounded-xl py-3 text-sm font-semibold hover:from-blue-800 transition-all shadow-lg shadow-blue-200">
                                + Generate New Shipment
                            </button>
                        </Link>
                    </div>
                </div>
            )}

            {/* Empty State */}
            {!result && !loading && !searched && (
                <div className="mt-8 max-w-2xl mx-auto space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { icon: '⚡', title: 'Real-Time Updates', desc: 'Get instant status updates from pickup to delivery.' },
                            { icon: '🔐', title: 'Secure Tracking', desc: 'Only you and your carrier can access shipment data.' },
                            { icon: '📍', title: 'Full History', desc: 'View the complete journey of your shipment.' },
                        ].map((card, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
                                <div className="text-3xl mb-3">{card.icon}</div>
                                <h3 className="font-semibold text-gray-700 text-sm mb-1">{card.title}</h3>
                                <p className="text-gray-400 text-xs">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Generate Shipment CTA */}
                    <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">📦</div>
                            <div>
                                <h3 className="text-white font-semibold text-base">New to Elivery?</h3>
                                <p className="text-blue-100 text-sm mt-0.5">Generate a shipment code and start tracking your deliveries instantly.</p>
                            </div>
                        </div>
                        <Link to="/generate-shipment" className="flex-shrink-0">
                            <div className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl text-sm hover:bg-blue-50 transition-all whitespace-nowrap shadow-md">
                                🚀 Generate Shipment
                            </div>
                        </Link>
                    </div>
                </div>
            )}

            {/* No result after search */}
            {!result && !loading && searched && (
                <div className="mt-8 max-w-2xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
                    <div className="text-5xl mb-4">🔍</div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">No Shipment Found</h3>
                    <p className="text-gray-400 text-sm mb-6">We couldn't find a shipment with code <span className="font-mono font-bold text-blue-600">{code}</span>. Please verify the code and try again.</p>
                    <Link to="/generate-shipment">
                        <div className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-blue-800 transition-all">
                            📦 Create a New Shipment
                        </div>
                    </Link>
                </div>
            )}

            <div className="pt-10">
                <Link to="/" className="inline-flex items-center gap-2 text-blue-700 font-medium text-sm hover:underline">← Back to Home</Link>
            </div>
        </div>
    );
};

export default TrackOrder;
