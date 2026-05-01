import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const generateTrackingCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = 'ELV';
    for (let i = 0; i < 9; i++) {
        if (i === 3 || i === 6) code += '-';
        code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
};


const GenerateShipment = () => {
    const [form, setForm] = useState({
        providerName: '',
        address: '',
        phone: '',
        destination: '',
        weight: '',
        productDescription: '',
        receiverName: '',
        receiverPhone: '',
    });
    const [generated, setGenerated] = useState(null);
    const [copied, setCopied] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const e = {};
        if (!form.providerName.trim()) e.providerName = 'Provider name is required';
        if (!form.address.trim()) e.address = 'Dispatch address is required';
        if (!/^\d{10}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit phone number';
        if (!form.destination.trim()) e.destination = 'Destination is required';
        if (!form.weight || isNaN(form.weight) || parseFloat(form.weight) <= 0) e.weight = 'Enter valid weight in kg';
        if (!form.receiverName.trim()) e.receiverName = "Receiver's name is required";
        if (!/^\d{10}$/.test(form.receiverPhone)) e.receiverPhone = "Enter a valid 10-digit receiver phone";
        return e;
    };

    const handleChange = (key, val) => {
        setForm(prev => ({ ...prev, [key]: val }));
        if (errors[key]) setErrors(prev => ({ ...prev, [key]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }

        const code = generateTrackingCode();
        const now = new Date();
        const shipment = {
            code,
            providerName: form.providerName,
            address: form.address,
            phone: form.phone,
            destination: form.destination,
            weight: form.weight,
            productDescription: form.productDescription,
            receiverName: form.receiverName,
            receiverPhone: form.receiverPhone,
            createdAt: now.toISOString(),
            status: 0, // index into STATUSES
            timeline: [
                { label: 'Shipment Created', time: now.toLocaleString(), done: true },
                { label: 'Picked Up', time: '', done: false },
                { label: 'In Transit', time: '', done: false },
                { label: 'Out for Delivery', time: '', done: false },
                { label: 'Delivered', time: '', done: false },
            ],
        };

        // Save to localStorage
        const existing = JSON.parse(localStorage.getItem('elivery_shipments') || '{}');
        existing[code] = shipment;
        localStorage.setItem('elivery_shipments', JSON.stringify(existing));

        setGenerated(shipment);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generated.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleNew = () => {
        setGenerated(null);
        setForm({ providerName: '', address: '', phone: '', destination: '', weight: '', productDescription: '', receiverName: '', receiverPhone: '' });
        setErrors({});
    };

    const inputClass = (field) =>
        `w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white hover:border-blue-300'}`;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20 px-4 md:px-12 lg:px-24 pb-16"
            style={{ fontFamily: "'Poppins', sans-serif" }}>

            {/* Hero Banner */}
            <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-2xl px-8 md:px-14 py-12 mt-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <span className="text-blue-200 font-semibold uppercase tracking-widest text-xs md:text-sm">Elivery · Shipment Management</span>
                <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-3">Generate Shipment Code</h1>
                <p className="text-blue-100 text-base md:text-lg max-w-2xl">
                    Fill in the shipment details to generate a unique tracking code. Share it with your customer to track their order in real time.
                </p>
            </div>

            {!generated ? (
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Form */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                            Shipment Details
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Sender Info */}
                            <div className="pb-2 border-b border-gray-100">
                                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">Sender / Provider Information</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Provider / Sender Name <span className="text-red-500">*</span></label>
                                        <input id="providerName" type="text" value={form.providerName}
                                            onChange={e => handleChange('providerName', e.target.value)}
                                            placeholder="e.g. Amit Saini / ABC Store"
                                            className={inputClass('providerName')} />
                                        {errors.providerName && <p className="text-red-500 text-xs mt-1">{errors.providerName}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Sender Phone <span className="text-red-500">*</span></label>
                                        <input id="phone" type="tel" value={form.phone}
                                            onChange={e => handleChange('phone', e.target.value)}
                                            placeholder="10-digit mobile number"
                                            maxLength={10}
                                            className={inputClass('phone')} />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Dispatch Address <span className="text-red-500">*</span></label>
                                    <textarea id="address" value={form.address}
                                        onChange={e => handleChange('address', e.target.value)}
                                        placeholder="Complete pickup / dispatch address"
                                        rows={2}
                                        className={`${inputClass('address')} resize-none`} />
                                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                                </div>
                            </div>

                            {/* Receiver Info */}
                            <div className="pb-2 border-b border-gray-100">
                                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">Receiver Information</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Receiver Name <span className="text-red-500">*</span></label>
                                        <input id="receiverName" type="text" value={form.receiverName}
                                            onChange={e => handleChange('receiverName', e.target.value)}
                                            placeholder="Receiver's full name"
                                            className={inputClass('receiverName')} />
                                        {errors.receiverName && <p className="text-red-500 text-xs mt-1">{errors.receiverName}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Receiver Phone <span className="text-red-500">*</span></label>
                                        <input id="receiverPhone" type="tel" value={form.receiverPhone}
                                            onChange={e => handleChange('receiverPhone', e.target.value)}
                                            placeholder="10-digit mobile number"
                                            maxLength={10}
                                            className={inputClass('receiverPhone')} />
                                        {errors.receiverPhone && <p className="text-red-500 text-xs mt-1">{errors.receiverPhone}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Shipment Info */}
                            <div>
                                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">Shipment Information</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Destination <span className="text-red-500">*</span></label>
                                        <input id="destination" type="text" value={form.destination}
                                            onChange={e => handleChange('destination', e.target.value)}
                                            placeholder="City, State or Pincode"
                                            className={inputClass('destination')} />
                                        {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg) <span className="text-red-500">*</span></label>
                                        <input id="weight" type="number" value={form.weight}
                                            onChange={e => handleChange('weight', e.target.value)}
                                            placeholder="e.g. 1.5"
                                            min="0.1" step="0.1"
                                            className={inputClass('weight')} />
                                        {errors.weight && <p className="text-red-500 text-xs mt-1">{errors.weight}</p>}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Description <span className="text-gray-400 font-normal">(optional)</span></label>
                                    <input id="productDescription" type="text" value={form.productDescription}
                                        onChange={e => handleChange('productDescription', e.target.value)}
                                        placeholder="e.g. Blue T-Shirt, Size M"
                                        className={inputClass('productDescription')} />
                                </div>
                            </div>

                            <button type="submit"
                                id="generateBtn"
                                className="w-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white font-semibold py-4 rounded-xl hover:from-blue-800 hover:to-indigo-700 transition-all text-sm shadow-lg shadow-blue-200 flex items-center justify-center gap-2 mt-2">
                                <span>🚀</span> Generate Tracking Code
                            </button>
                        </form>
                    </div>

                    {/* Side Info */}
                    <div className="flex flex-col gap-5">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                            <h3 className="font-semibold text-gray-800 text-sm mb-4">How it works</h3>
                            <ol className="flex flex-col gap-4">
                                {['Fill in sender & receiver details', 'Provide destination & package weight', 'Click Generate to get a unique tracking code', 'Share the code with your customer', 'Customer can track at the Track Orders page'].map((step, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="min-w-6 h-6 w-6 bg-blue-700 text-white text-xs rounded-full flex items-center justify-center font-bold">{i + 1}</span>
                                        <span className="text-sm text-gray-600">{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="bg-gradient-to-br from-blue-700 to-indigo-600 rounded-2xl p-6 text-white">
                            <div className="text-3xl mb-3">🔐</div>
                            <h3 className="font-semibold mb-2">Unique & Secure</h3>
                            <p className="text-blue-100 text-sm">Every shipment gets a cryptographically unique code. Codes are stored locally and linked to all shipment details.</p>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                            <h3 className="font-semibold text-gray-800 text-sm mb-3">Already have a code?</h3>
                            <Link to="/track-order">
                                <div className="w-full border border-blue-600 text-blue-600 rounded-xl py-3 text-sm font-medium text-center hover:bg-blue-600 hover:text-white transition-all">
                                    🔍 Track an Order
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                /* Success State */
                <div className="mt-10 max-w-2xl mx-auto">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-10 text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">✅</div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-1">Shipment Created!</h2>
                        <p className="text-gray-500 text-sm mb-6">Your unique tracking code has been generated successfully.</p>

                        {/* Code Display */}
                        <div className="bg-gradient-to-r from-blue-700 to-indigo-600 rounded-2xl p-6 mb-6">
                            <p className="text-blue-200 text-xs uppercase tracking-wider mb-2">Tracking Code</p>
                            <div className="text-3xl md:text-4xl font-bold text-white tracking-[0.25em] font-mono mb-4">{generated.code}</div>
                            <button id="copyCodeBtn" onClick={handleCopy}
                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${copied ? 'bg-green-500 text-white' : 'bg-white text-blue-700 hover:bg-blue-50'}`}>
                                {copied ? '✓ Copied!' : '📋 Copy Code'}
                            </button>
                        </div>

                        {/* Summary */}
                        <div className="bg-gray-50 rounded-xl p-5 text-left space-y-3 mb-6">
                            <h3 className="font-semibold text-gray-700 text-sm">Shipment Summary</h3>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                    <p className="text-gray-400 text-xs">Provider</p>
                                    <p className="font-medium text-gray-700">{generated.providerName}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">Destination</p>
                                    <p className="font-medium text-gray-700">{generated.destination}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">Receiver</p>
                                    <p className="font-medium text-gray-700">{generated.receiverName}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">Weight</p>
                                    <p className="font-medium text-gray-700">{generated.weight} kg</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button id="newShipmentBtn" onClick={handleNew}
                                className="flex-1 border border-gray-200 text-gray-600 rounded-xl py-3 text-sm font-medium hover:bg-gray-50 transition-all">
                                + Create Another
                            </button>
                            <Link to="/track-order" className="flex-1">
                                <button id="trackNowBtn"
                                    className="w-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white rounded-xl py-3 text-sm font-semibold hover:from-blue-800 transition-all shadow-lg shadow-blue-200">
                                    🔍 Track This Order
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            <div className="pt-10">
                <Link to="/" className="inline-flex items-center gap-2 text-blue-700 font-medium text-sm hover:underline">← Back to Home</Link>
            </div>
        </div>
    );
};

export default GenerateShipment;
