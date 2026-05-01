import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../firebase/ThemeContext';
import { useAuth } from '../firebase/AuthContext';

const Toggle = ({ checked, onChange, id }) => (
    <button
        type="button"
        role="switch"
        id={id}
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-7 w-13 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${checked ? 'bg-blue-600' : 'bg-gray-200'}`}
        style={{ width: 52 }}
    >
        <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform ${checked ? 'translate-x-7' : 'translate-x-1'}`} />
    </button>
);

const SettingRow = ({ icon, title, description, right }) => (
    <div className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0 gap-4">
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-xl flex-shrink-0">{icon}</div>
            <div>
                <p className="text-sm font-semibold text-gray-800">{title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{description}</p>
            </div>
        </div>
        <div className="flex-shrink-0">{right}</div>
    </div>
);

const SectionCard = ({ title, icon, children }) => (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-50 flex items-center gap-3">
            <span className="text-xl">{icon}</span>
            <h2 className="text-base font-semibold text-gray-800">{title}</h2>
        </div>
        <div className="px-6">{children}</div>
    </div>
);

export default function Settings() {
    const { isDark, toggleTheme } = useTheme();
    const { currentUser, signOut } = useAuth();
    const navigate = useNavigate();

    const [notifications, setNotifications] = React.useState({
        email: true, sms: true, push: false, marketing: false,
    });
    const [privacy, setPrivacy] = React.useState({
        showProfile: true, activityStatus: true,
    });
    const [language, setLanguage] = React.useState('English');

    const handleLogout = async () => {
        await signOut();
        navigate('/');
    };

    if (!currentUser) {
        navigate('/Login');
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20 pb-16 px-4 md:px-12 lg:px-24" style={{ fontFamily: "'Poppins',sans-serif" }}>

            {/* Banner */}
            <div className="w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 rounded-2xl px-8 py-10 mt-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="relative">
                    <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold">Account</p>
                    <h1 className="text-white text-2xl md:text-3xl font-bold mt-1">Settings</h1>
                    <p className="text-gray-400 text-sm mt-1">Manage your preferences and account options.</p>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-6 mb-5 text-sm text-gray-400">
                <Link to="/" className="hover:text-blue-600">Home</Link><span>/</span>
                <span className="text-gray-700 font-medium">Settings</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main settings */}
                <div className="lg:col-span-2 space-y-6">

                    {/* ── Appearance ─────────────────────────────────────────── */}
                    <SectionCard title="Appearance & Language" icon="🎨">
                        <SettingRow
                            icon={isDark ? '🌙' : '☀️'}
                            title="Dark Mode"
                            description={isDark ? 'Dark theme is currently active' : 'Light theme is currently active'}
                            right={<Toggle id="dark-mode-toggle" checked={isDark} onChange={toggleTheme} />}
                        />
                        <SettingRow
                            icon="🌐"
                            title="Global Translation"
                            description="Use Google Translate to change the application language instantly."
                            right={
                                <div id="google_translate_element"></div>
                            }
                        />
                    </SectionCard>

                    {/* ── Notifications ───────────────────────────────────────── */}
                    <SectionCard title="Notifications" icon="🔔">
                        {[
                            { key: 'email',     icon: '📧', title: 'Email Notifications',  desc: 'Shipment updates, receipts and alerts' },
                            { key: 'sms',       icon: '📱', title: 'SMS Alerts',            desc: 'OTP, delivery updates via text' },
                            { key: 'push',      icon: '🔔', title: 'Push Notifications',    desc: 'In-browser notifications (requires permission)' },
                            { key: 'marketing', icon: '📣', title: 'Marketing Emails',      desc: 'Offers, tips and Elivery news' },
                        ].map(item => (
                            <SettingRow
                                key={item.key}
                                icon={item.icon}
                                title={item.title}
                                description={item.desc}
                                right={
                                    <Toggle
                                        id={`notif-${item.key}`}
                                        checked={notifications[item.key]}
                                        onChange={v => setNotifications(p => ({ ...p, [item.key]: v }))}
                                    />
                                }
                            />
                        ))}
                    </SectionCard>

                    {/* ── Privacy ─────────────────────────────────────────────── */}
                    <SectionCard title="Privacy" icon="🔒">
                        <SettingRow
                            icon="👤"
                            title="Public Profile"
                            description="Allow others to view your profile details"
                            right={<Toggle id="privacy-profile" checked={privacy.showProfile} onChange={v => setPrivacy(p => ({ ...p, showProfile: v }))} />}
                        />
                        <SettingRow
                            icon="🟢"
                            title="Activity Status"
                            description="Show when you were last active"
                            right={<Toggle id="privacy-activity" checked={privacy.activityStatus} onChange={v => setPrivacy(p => ({ ...p, activityStatus: v }))} />}
                        />
                    </SectionCard>

                    {/* ── Danger Zone ─────────────────────────────────────────── */}
                    <div className="bg-white rounded-2xl border border-red-100 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-red-50 flex items-center gap-3">
                            <span className="text-xl">⚠️</span>
                            <h2 className="text-base font-semibold text-red-700">Danger Zone</h2>
                        </div>
                        <div className="px-6 py-4 space-y-3">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">Sign Out</p>
                                    <p className="text-xs text-gray-400">Sign out of your Elivery account on this device.</p>
                                </div>
                                <button onClick={handleLogout}
                                    className="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all flex-shrink-0">
                                    🚪 Sign Out
                                </button>
                            </div>
                            <div className="flex items-center justify-between gap-4 pt-3 border-t border-red-50">
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">Delete Account</p>
                                    <p className="text-xs text-gray-400">Permanently remove your account and all data. This cannot be undone.</p>
                                </div>
                                <button className="border border-red-200 text-red-500 hover:bg-red-50 text-xs font-semibold px-4 py-2 rounded-xl transition-all flex-shrink-0">
                                    🗑️ Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-5">
                    {/* Theme preview card */}
                    <div className={`rounded-2xl border shadow-sm p-6 transition-all duration-500 ${isDark ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-100 text-gray-800'}`}>
                        <div className="text-center mb-4">
                            <div className="text-5xl mb-3">{isDark ? '🌙' : '☀️'}</div>
                            <p className="font-semibold text-sm">{isDark ? 'Dark Mode Active' : 'Light Mode Active'}</p>
                            <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
                                {isDark ? 'Easy on your eyes at night' : 'Bright and crisp for daylight use'}
                            </p>
                        </div>
                        <button onClick={toggleTheme}
                            className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${isDark ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                            Switch to {isDark ? '☀️ Light' : '🌙 Dark'}
                        </button>
                    </div>

                    {/* Account card */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                        <h3 className="text-sm font-semibold text-gray-700 mb-4">Your Account</h3>
                        <div className="flex items-center gap-3 mb-4">
                            {currentUser.photoURL
                                ? <img src={currentUser.photoURL} alt="" referrerPolicy="no-referrer" className="w-12 h-12 rounded-full border-2 border-blue-200 object-cover" />
                                : <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                                    {(currentUser.displayName || currentUser.email || 'U')[0].toUpperCase()}
                                  </div>
                            }
                            <div className="min-w-0">
                                <p className="font-semibold text-gray-800 text-sm truncate">{currentUser.displayName || 'User'}</p>
                                <p className="text-xs text-gray-400 truncate">{currentUser.email || currentUser.phoneNumber}</p>
                            </div>
                        </div>
                        <Link to="/profile">
                            <div className="w-full text-center bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs py-2.5 rounded-xl transition-all">
                                ✏️ Edit Profile
                            </div>
                        </Link>
                    </div>

                    {/* Quick links */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                        <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Links</h3>
                        {[
                            { icon: '👤', label: 'My Profile', to: '/profile' },
                            { icon: '🔍', label: 'Track Order', to: '/track-order' },
                            { icon: '📦', label: 'Generate Shipment', to: '/generate-shipment' },
                            { icon: '💰', label: 'Pricing', to: '/Pricing' },
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
        </div>
    );
}
