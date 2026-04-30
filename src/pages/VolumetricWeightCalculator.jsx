import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DIVISORS = [
    { label: 'Standard (÷ 5000)', value: 5000, carriers: 'Delhivery, DTDC, Ekart' },
    { label: 'Premium (÷ 4000)', value: 4000, carriers: 'Bluedart, FedEx, DHL' },
    { label: 'Economy (÷ 6000)', value: 6000, carriers: 'India Post, Some regional' },
];

const VolumetricWeightCalculator = () => {
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [actualWeight, setActualWeight] = useState('');
    const [unit, setUnit] = useState('cm');
    const [divisor, setDivisor] = useState(5000);
    const [result, setResult] = useState(null);
    const [animated, setAnimated] = useState(false);

    // Live calculation on any input change
    useEffect(() => {
        const l = parseFloat(length);
        const w = parseFloat(width);
        const h = parseFloat(height);
        const a = parseFloat(actualWeight);

        if (l > 0 && w > 0 && h > 0) {
            // Convert inches to cm if needed
            const factor = unit === 'in' ? 2.54 : 1;
            const lcm = l * factor;
            const wcm = w * factor;
            const hcm = h * factor;

            const volWeight = parseFloat(((lcm * wcm * hcm) / divisor).toFixed(2));
            const actual = a > 0 ? a : null;
            const chargeable = actual !== null ? Math.max(volWeight, actual) : volWeight;
            const isVolHigher = actual !== null ? volWeight > actual : true;

            setResult({ volWeight, actual, chargeable, isVolHigher });
            setAnimated(false);
            setTimeout(() => setAnimated(true), 50);
        } else {
            setResult(null);
        }
    }, [length, width, height, actualWeight, unit, divisor]);

    const handleReset = () => {
        setLength(''); setWidth(''); setHeight('');
        setActualWeight(''); setResult(null);
    };

    const inputCls = "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all placeholder:text-gray-300";

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20 px-4 md:px-12 lg:px-24 pb-16"
            style={{ fontFamily: "'Poppins', sans-serif" }}>

            {/* Hero Banner */}
            <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-2xl px-8 md:px-14 py-12 mt-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/4" />
                <div className="relative">
                    <span className="text-blue-200 font-semibold uppercase tracking-widest text-xs md:text-sm">Resources · Product Help</span>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-3">Volumetric Weight Calculator</h1>
                    <p className="text-blue-100 text-base md:text-lg max-w-2xl">
                        Instantly calculate the chargeable weight of your shipment. Carriers bill based on whichever is higher — actual weight or volumetric (dimensional) weight.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-6">
                        {['Live Calculation', 'CM & Inch Support', 'Multiple Carrier Divisors', 'Free to Use'].map((badge, i) => (
                            <span key={i} className="bg-white/15 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
                                ✓ {badge}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Calculator */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-7">

                {/* Input Panel */}
                <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                            <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">📐</span>
                            Package Dimensions
                        </h2>
                        {(length || width || height || actualWeight) && (
                            <button onClick={handleReset}
                                className="text-xs text-gray-400 hover:text-red-500 border border-gray-100 hover:border-red-200 rounded-lg px-3 py-1.5 transition-all">
                                ✕ Reset
                            </button>
                        )}
                    </div>

                    {/* Unit & Divisor Toggles */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Unit of Measurement</label>
                            <div className="flex bg-gray-100 rounded-xl p-1">
                                {['cm', 'in'].map(u => (
                                    <button key={u} onClick={() => setUnit(u)}
                                        className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${unit === u ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                                        {u === 'cm' ? 'Centimeters (cm)' : 'Inches (in)'}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Carrier Divisor</label>
                            <select value={divisor} onChange={e => setDivisor(Number(e.target.value))}
                                className="w-full bg-gray-100 border-0 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                {DIVISORS.map(d => (
                                    <option key={d.value} value={d.value}>{d.label}</option>
                                ))}
                            </select>
                            <p className="text-xs text-gray-400 mt-1.5">
                                {DIVISORS.find(d => d.value === divisor)?.carriers}
                            </p>
                        </div>
                    </div>

                    {/* Dimension Inputs */}
                    <div className="grid grid-cols-3 gap-4 mb-5">
                        {[
                            { label: 'Length', value: length, set: setLength, icon: '↔', placeholder: '0' },
                            { label: 'Width', value: width, set: setWidth, icon: '↕', placeholder: '0' },
                            { label: 'Height', value: height, set: setHeight, icon: '↑', placeholder: '0' },
                        ].map(({ label, value, set, icon, placeholder }) => (
                            <div key={label}>
                                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                                    {label} <span className="text-gray-300">({unit})</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="number" value={value}
                                        onChange={e => set(e.target.value)}
                                        placeholder={placeholder}
                                        min="0.1" step="0.1"
                                        className={inputCls}
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 text-xs font-bold">{unit}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Visual Box Preview */}
                    {length && width && height && (
                        <div className="mb-5 bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-center gap-4">
                            <div className="relative flex-shrink-0" style={{ width: 80, height: 60 }}>
                                {/* Simple 3D box CSS illustration */}
                                <div className="absolute inset-0 border-2 border-blue-400 bg-blue-100 rounded-md opacity-80"
                                    style={{ transform: 'perspective(200px) rotateX(10deg) rotateY(-15deg)', width: 60, height: 45, top: 8, left: 8 }} />
                                <div className="absolute border-2 border-blue-500 bg-blue-200 rounded-md opacity-60"
                                    style={{ width: 60, height: 45, top: 0, left: 0, clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)' }} />
                            </div>
                            <div className="text-sm text-blue-700 font-medium">
                                {length} × {width} × {height} {unit}
                                <p className="text-blue-400 text-xs font-normal mt-0.5">
                                    Volume: {(parseFloat(length) * parseFloat(width) * parseFloat(height) * (unit === 'in' ? 2.54 ** 3 : 1)).toFixed(1)} cm³
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Actual Weight */}
                    <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1.5">
                            Actual Weight <span className="text-gray-300">(kg)</span> <span className="text-gray-400 font-normal">— optional, to find chargeable weight</span>
                        </label>
                        <div className="relative">
                            <input
                                type="number" value={actualWeight}
                                onChange={e => setActualWeight(e.target.value)}
                                placeholder="e.g. 1.5"
                                min="0.01" step="0.01"
                                className={inputCls}
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 text-xs font-bold">kg</span>
                        </div>
                    </div>

                    {/* Formula Hint */}
                    <div className="mt-5 bg-gray-50 rounded-xl px-4 py-3 flex items-center gap-3">
                        <span className="text-2xl">🔢</span>
                        <div>
                            <p className="text-xs font-semibold text-gray-600">Formula being used</p>
                            <p className="text-xs text-gray-400 mt-0.5 font-mono">
                                Vol. Weight = (L × W × H{unit === 'in' ? ' × 2.54³' : ''}) ÷ {divisor}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Results Panel */}
                <div className="lg:col-span-2 flex flex-col gap-5">

                    {result ? (
                        <>
                            {/* Volumetric Weight Card */}
                            <div className={`bg-gradient-to-br from-blue-700 to-indigo-700 rounded-2xl p-6 text-white shadow-lg transition-all duration-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                <p className="text-blue-200 text-xs uppercase tracking-wider mb-1">Volumetric Weight</p>
                                <div className="flex items-end gap-2 mb-1">
                                    <span className="text-5xl font-bold">{result.volWeight}</span>
                                    <span className="text-blue-300 text-lg mb-1">kg</span>
                                </div>
                                <p className="text-blue-200 text-xs">Based on dimensions ÷ {divisor}</p>
                            </div>

                            {/* Actual Weight Card */}
                            {result.actual !== null && (
                                <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-5 transition-all duration-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Actual Weight</p>
                                    <div className="flex items-end gap-2">
                                        <span className="text-3xl font-bold text-gray-700">{result.actual}</span>
                                        <span className="text-gray-400 text-base mb-0.5">kg</span>
                                    </div>
                                </div>
                            )}

                            {/* Chargeable Weight */}
                            {result.actual !== null && (
                                <div className={`rounded-2xl p-5 border-2 shadow-sm transition-all duration-500 ${result.isVolHigher ? 'bg-amber-50 border-amber-300' : 'bg-green-50 border-green-300'} ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xl">{result.isVolHigher ? '⚠️' : '✅'}</span>
                                        <p className={`text-xs font-semibold uppercase tracking-wider ${result.isVolHigher ? 'text-amber-700' : 'text-green-700'}`}>
                                            Chargeable Weight
                                        </p>
                                    </div>
                                    <div className="flex items-end gap-2 mb-2">
                                        <span className={`text-4xl font-bold ${result.isVolHigher ? 'text-amber-700' : 'text-green-700'}`}>{result.chargeable}</span>
                                        <span className={`text-base mb-0.5 ${result.isVolHigher ? 'text-amber-500' : 'text-green-500'}`}>kg</span>
                                    </div>
                                    <p className={`text-xs ${result.isVolHigher ? 'text-amber-600' : 'text-green-600'}`}>
                                        {result.isVolHigher
                                            ? '📦 Volumetric weight is higher — carrier will bill on dimensional weight.'
                                            : '⚖️ Actual weight is higher — carrier will bill on actual weight.'}
                                    </p>
                                </div>
                            )}

                            {/* Tip */}
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                                <p className="text-xs font-semibold text-gray-600 mb-2">💡 Money-Saving Tip</p>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    {result.isVolHigher && result.actual !== null
                                        ? 'Your package is light but bulky. Consider compressing packaging to reduce dimensions and lower your volumetric weight.'
                                        : 'Your packaging is efficient. The actual weight is what you\'ll be billed on — great job optimizing your box size!'}
                                </p>
                                <Link to="/generate-shipment">
                                    <div className="mt-4 bg-blue-700 text-white text-xs font-semibold py-2.5 px-4 rounded-xl text-center hover:bg-blue-800 transition-all">
                                        📦 Book This Shipment
                                    </div>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col gap-5">
                            <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-10 flex flex-col items-center justify-center text-center min-h-[220px]">
                                <div className="text-5xl mb-4">📦</div>
                                <p className="text-gray-500 text-sm font-medium">Enter dimensions above</p>
                                <p className="text-gray-300 text-xs mt-1">Results update live as you type</p>
                            </div>

                            {/* Info Cards */}
                            {[
                                { icon: '🧮', title: 'Formula Explained', desc: `Vol. Weight = (L × W × H) ÷ ${divisor} for ${DIVISORS.find(d => d.value === divisor)?.carriers.split(',')[0]}` },
                                { icon: '💰', title: 'Compare & Save', desc: 'Know your chargeable weight before booking to pick the best carrier.' },
                                { icon: '🚫', title: 'Avoid Surprises', desc: 'Prevent unexpected billing by calculating upfront before dispatch.' },
                            ].map((c, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-start gap-4">
                                    <div className="text-2xl flex-shrink-0">{c.icon}</div>
                                    <div>
                                        <h3 className="font-semibold text-gray-700 text-sm mb-1">{c.title}</h3>
                                        <p className="text-gray-400 text-xs leading-relaxed">{c.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Divisor Comparison Table */}
            <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                <h2 className="text-base font-semibold text-gray-800 mb-5 flex items-center gap-2">
                    📊 Carrier Divisor Comparison
                    <span className="text-xs font-normal text-gray-400 ml-1">— same package, different billing</span>
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-gray-50 rounded-xl">
                                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3 rounded-l-xl">Carrier Type</th>
                                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">Divisor</th>
                                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">Common Carriers</th>
                                <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3 rounded-r-xl">
                                    {result ? 'Vol. Weight' : 'Example (30×20×15 cm)'}
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {DIVISORS.map((d, i) => {
                                const exampleVol = result
                                    ? parseFloat(((parseFloat(length || 0) * (unit === 'in' ? 2.54 : 1)) *
                                        (parseFloat(width || 0) * (unit === 'in' ? 2.54 : 1)) *
                                        (parseFloat(height || 0) * (unit === 'in' ? 2.54 : 1)) / d.value).toFixed(2))
                                    : parseFloat((30 * 20 * 15 / d.value).toFixed(2));
                                return (
                                    <tr key={i} className={`hover:bg-blue-50/50 transition-colors ${d.value === divisor ? 'bg-blue-50' : ''}`}>
                                        <td className="px-4 py-3.5 font-medium text-gray-700">
                                            {d.label.split(' ')[0]}
                                            {d.value === divisor && <span className="ml-2 text-[10px] bg-blue-700 text-white px-2 py-0.5 rounded-full">Selected</span>}
                                        </td>
                                        <td className="px-4 py-3.5">
                                            <span className="font-mono text-blue-600 font-semibold">÷ {d.value}</span>
                                        </td>
                                        <td className="px-4 py-3.5 text-gray-400 text-xs">{d.carriers}</td>
                                        <td className="px-4 py-3.5 text-right font-bold text-gray-700">{exampleVol} kg</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* CTA Row */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                <Link to="/resources/shipping-rate-calculator">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 hover:shadow-md hover:border-blue-200 transition-all group">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl group-hover:bg-blue-700 group-hover:text-white transition-all">💸</div>
                        <div>
                            <h3 className="font-semibold text-gray-700 text-sm">Compare Shipping Rates</h3>
                            <p className="text-gray-400 text-xs mt-0.5">Find the cheapest carrier for your shipment</p>
                        </div>
                        <span className="ml-auto text-gray-300 group-hover:text-blue-600 transition-colors">→</span>
                    </div>
                </Link>
                <Link to="/generate-shipment">
                    <div className="bg-gradient-to-r from-blue-700 to-indigo-600 rounded-2xl p-5 flex items-center gap-4 hover:from-blue-800 transition-all group shadow-lg shadow-blue-200">
                        <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center text-2xl">📦</div>
                        <div>
                            <h3 className="font-semibold text-white text-sm">Generate a Shipment</h3>
                            <p className="text-blue-200 text-xs mt-0.5">Create a tracking code and dispatch your order</p>
                        </div>
                        <span className="ml-auto text-white/50 group-hover:text-white transition-colors">→</span>
                    </div>
                </Link>
            </div>

            <div className="pt-10">
                <Link to="/" className="inline-flex items-center gap-2 text-blue-700 font-medium text-sm hover:underline">← Back to Home</Link>
            </div>
        </div>
    );
};

export default VolumetricWeightCalculator;
