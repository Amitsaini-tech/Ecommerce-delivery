import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';
import { updateProfile } from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig';

const GENDERS = ['Prefer not to say', 'Male', 'Female', 'Non-binary', 'Other'];

const Field = ({ label, icon, value, onChange, type = 'text', readOnly, placeholder }) => (
    <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{label}</label>
        <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base">{icon}</span>
            <input
                type={type} value={value} onChange={onChange}
                readOnly={readOnly} placeholder={placeholder}
                className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${readOnly ? 'bg-gray-50 border-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border-gray-200 text-gray-800 hover:border-blue-300'}`}
            />
        </div>
        {readOnly && <p className="text-xs text-gray-400 mt-1 pl-1">Cannot be changed here.</p>}
    </div>
);

export default function Profile() {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const [displayName, setDisplayName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('Prefer not to say');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [saving, setSaving] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!currentUser) { navigate('/Login'); return; }
        setDisplayName(currentUser.displayName || '');
        const load = async () => {
            try {
                const snap = await getDoc(doc(db, 'users', currentUser.uid));
                if (snap.exists()) {
                    const d = snap.data();
                    setPhone(d.phone || ''); setGender(d.gender || 'Prefer not to say');
                    setAddress(d.address || ''); setPincode(d.pincode || ''); setCity(d.city || '');
                }
            } catch (e) { console.warn('Profile load offline:', e.message); }
            finally { setLoading(false); }
        };
        load();
    }, [currentUser, navigate]);

    const handleSave = async (e) => {
        e.preventDefault(); setSaving(true); setError(''); setSuccess(false);
        try {
            if (displayName !== currentUser.displayName)
                await updateProfile(auth.currentUser, { displayName });
            await setDoc(doc(db, 'users', currentUser.uid), {
                uid: currentUser.uid, name: displayName, email: currentUser.email || '',
                phone, gender, address, pincode, city, updatedAt: serverTimestamp(),
            }, { merge: true });
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        } catch (err) { setError(err.message); }
        finally { setSaving(false); }
    };

    if (!currentUser) return null;
    const initial = (currentUser.displayName || currentUser.email || 'U')[0].toUpperCase();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:bg-gray-950 pt-20 pb-16 px-4 md:px-12 lg:px-24" style={{ fontFamily: "'Poppins',sans-serif" }}>

            {/* Banner */}
            <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-2xl px-8 py-10 mt-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="relative flex items-center gap-6">
                    {currentUser.photoURL
                        ? <img src={currentUser.photoURL} alt="avatar" referrerPolicy="no-referrer" className="w-20 h-20 rounded-2xl border-4 border-white/30 object-cover shadow-lg" />
                        : <div className="w-20 h-20 rounded-2xl border-4 border-white/30 bg-white/20 flex items-center justify-center text-white text-3xl font-bold">{initial}</div>
                    }
                    <div>
                        <p className="text-blue-200 text-xs uppercase tracking-widest font-semibold">My Profile</p>
                        <h1 className="text-white text-2xl md:text-3xl font-bold mt-1">{displayName || 'Your Name'}</h1>
                        <p className="text-blue-200 text-sm mt-0.5">{currentUser.email || currentUser.phoneNumber}</p>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-6 mb-5 text-sm text-gray-400">
                <Link to="/" className="hover:text-blue-600">Home</Link><span>/</span>
                <span className="text-gray-700 font-medium">My Profile</span>
            </div>

            <form onSubmit={handleSave}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main form */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                            <h2 className="text-base font-semibold text-gray-800 mb-5 flex items-center gap-2">
                                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">👤</span>
                                Personal Information
                            </h2>
                            {error && <div className="mb-4 bg-red-50 border border-red-100 text-red-700 text-xs rounded-xl px-4 py-3">⚠️ {error}</div>}
                            {success && <div className="mb-4 bg-green-50 border border-green-100 text-green-700 text-xs rounded-xl px-4 py-3">✅ Profile saved!</div>}
                            {loading ? (
                                <div className="flex justify-center py-12">
                                    <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="sm:col-span-2">
                                        <Field label="Full Name" icon="✏️" value={displayName} onChange={e => setDisplayName(e.target.value)} placeholder="Your full name" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <Field label="Email Address" icon="📧" value={currentUser.email || '(Phone login — no email)'} readOnly />
                                    </div>
                                    <Field label="Phone Number" icon="📱" value={phone} onChange={e => setPhone(e.target.value)} type="tel" placeholder="+91 98765 43210" />
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Gender</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base">🧬</span>
                                            <select value={gender} onChange={e => setGender(e.target.value)}
                                                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition-all appearance-none">
                                                {GENDERS.map(g => <option key={g}>{g}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Address */}
                        {!loading && (
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                                <h2 className="text-base font-semibold text-gray-800 mb-5 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center">📍</span>
                                    Address
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Street Address</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-4 text-base">🏠</span>
                                            <textarea value={address} onChange={e => setAddress(e.target.value)} rows={3} placeholder="House no., street, locality..."
                                                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition-all resize-none" />
                                        </div>
                                    </div>
                                    <Field label="City" icon="🌆" value={city} onChange={e => setCity(e.target.value)} placeholder="Mumbai" />
                                    <Field label="Pincode" icon="📮" value={pincode} onChange={e => setPincode(e.target.value)} placeholder="400001" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-5">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                            <h3 className="text-sm font-semibold text-gray-700 mb-4">Save Changes</h3>
                            <button type="submit" disabled={saving || loading}
                                className="w-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white font-semibold py-3.5 rounded-xl hover:from-blue-800 transition-all shadow-lg shadow-blue-200 disabled:opacity-60 text-sm">
                                {saving ? '⏳ Saving…' : '💾 Save Profile'}
                            </button>
                            <p className="text-xs text-gray-400 text-center mt-3">Changes sync instantly to your account.</p>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                            <h3 className="text-sm font-semibold text-gray-700 mb-4">Account Details</h3>
                            <div className="space-y-3">
                                {[
                                    { label: 'User ID', value: currentUser.uid.slice(0, 12) + '…', icon: '🔑' },
                                    { label: 'Auth Provider', value: currentUser.providerData[0]?.providerId?.replace('.com', '') || 'email', icon: '🔐' },
                                    { label: 'Created', value: currentUser.metadata?.creationTime ? new Date(currentUser.metadata.creationTime).toLocaleDateString('en-IN') : '—', icon: '📅' },
                                    { label: 'Last Login', value: currentUser.metadata?.lastSignInTime ? new Date(currentUser.metadata.lastSignInTime).toLocaleDateString('en-IN') : '—', icon: '🕐' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span>{item.icon}</span>
                                        <div>
                                            <p className="text-xs text-gray-400">{item.label}</p>
                                            <p className="text-xs font-semibold text-gray-700">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                            <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Links</h3>
                            {[
                                { icon: '⚙️', label: 'Settings', to: '/settings' },
                                { icon: '🔍', label: 'Track Order', to: '/track-order' },
                                { icon: '📦', label: 'Generate Shipment', to: '/generate-shipment' },
                            ].map(item => (
                                <Link key={item.to} to={item.to}>
                                    <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-50 transition-all group">
                                        <span>{item.icon}</span>
                                        <span className="text-sm font-medium text-gray-600 group-hover:text-blue-700">{item.label}</span>
                                        <span className="ml-auto text-gray-300 group-hover:text-blue-500">→</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
