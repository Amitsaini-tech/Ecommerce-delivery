import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';

// ── Tab constants ─────────────────────────────────────────────────
const TAB_EMAIL  = 'email';
const TAB_PHONE  = 'phone';
const TAB_SIGNUP = 'signup';

// ── Social button style ────────────────────────────────────────────
const SocialBtn = ({ onClick, icon, label, id }) => (
    <button
        id={id}
        type="button"
        onClick={onClick}
        className="w-full flex items-center justify-center gap-3 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm py-3 px-4 rounded-xl transition-all shadow-sm hover:shadow-md"
    >
        {icon}
        <span>{label}</span>
    </button>
);

// ── Google SVG ────────────────────────────────────────────────────
const GoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 48 48">
        <path fill="#EA4335" d="M24 9.5c3.2 0 5.9 1.1 8.1 2.9l6-6C34.5 3.1 29.6 1 24 1 14.8 1 7 6.7 3.7 14.6l7 5.4C12.5 13.5 17.8 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.4 5.5-5 7.2l7.7 6c4.5-4.2 7.1-10.4 7.1-17.2z"/>
        <path fill="#FBBC05" d="M10.7 28.6A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.1.7-4.6l-7-5.4A23.9 23.9 0 0 0 .5 24c0 3.9.9 7.5 2.7 10.7l7.5-6.1z"/>
        <path fill="#34A853" d="M24 47c5.7 0 10.4-1.9 13.9-5.1l-7.7-6c-2 1.4-4.5 2.1-6.2 2.1-6.2 0-11.5-4-13.4-9.4l-7.5 6.1C7 41.3 14.8 47 24 47z"/>
    </svg>
);

// ── Microsoft SVG ─────────────────────────────────────────────────
const MicrosoftIcon = () => (
    <svg width="20" height="20" viewBox="0 0 21 21">
        <rect x="1"  y="1"  width="9" height="9" fill="#F25022"/>
        <rect x="11" y="1"  width="9" height="9" fill="#7FBA00"/>
        <rect x="1"  y="11" width="9" height="9" fill="#00A4EF"/>
        <rect x="11" y="11" width="9" height="9" fill="#FFB900"/>
    </svg>
);

export default function Login() {
    const navigate = useNavigate();
    const { signInWithGoogle, signInWithMicrosoft, signInWithEmail, signUpWithEmail, sendPhoneOtp, verifyPhoneOtp } = useAuth();

    const [tab, setTab] = useState(TAB_EMAIL);
    const [email, setEmail]         = useState('');
    const [password, setPassword]   = useState('');
    const [name, setName]           = useState('');
    const [phone, setPhone]         = useState('');
    const [otp, setOtp]             = useState('');
    const [otpSent, setOtpSent]     = useState(false);
    const [showPass, setShowPass]   = useState(false);
    const [error, setError]         = useState('');
    const [info, setInfo]           = useState('');
    const [busy, setBusy]           = useState(false);
    const recaptchaRef              = useRef(null);

    const clear = () => { setError(''); setInfo(''); };

    // ── Helpers ──────────────────────────────────────────────────
    const handleGoogle = async () => {
        clear(); setBusy(true);
        try { await signInWithGoogle(); navigate('/'); }
        catch(e) { setError(e.message); }
        finally { setBusy(false); }
    };

    const handleMicrosoft = async () => {
        clear(); setBusy(true);
        try { await signInWithMicrosoft(); navigate('/'); }
        catch(e) { setError(e.message); }
        finally { setBusy(false); }
    };

    const handleEmailLogin = async (e) => {
        e.preventDefault(); clear(); setBusy(true);
        try { await signInWithEmail(email, password); navigate('/'); }
        catch(e) { setError('Invalid email or password.'); }
        finally { setBusy(false); }
    };

    const handleSignup = async (e) => {
        e.preventDefault(); clear(); setBusy(true);
        try { await signUpWithEmail(email, password, name); navigate('/'); }
        catch(e) { setError(e.message); }
        finally { setBusy(false); }
    };

    const handleSendOtp = async (e) => {
        e.preventDefault(); clear(); setBusy(true);
        try {
            const formatted = phone.startsWith('+') ? phone : `+91${phone}`;
            await sendPhoneOtp(formatted, 'recaptcha-container');
            setOtpSent(true);
            setInfo('OTP sent! Check your messages.');
        } catch(e) { setError(e.message); }
        finally { setBusy(false); }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault(); clear(); setBusy(true);
        try { await verifyPhoneOtp(otp); navigate('/'); }
        catch(e) { setError('Invalid OTP. Please try again.'); }
        finally { setBusy(false); }
    };

    // ── Tab config ───────────────────────────────────────────────
    const tabs = [
        { id: TAB_EMAIL,  label: 'Sign In' },
        { id: TAB_PHONE,  label: 'Phone' },
        { id: TAB_SIGNUP, label: 'Sign Up' },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 px-4 py-12"
            style={{ fontFamily: "'Poppins', sans-serif" }}>

            {/* Invisible reCAPTCHA anchor */}
            <div id="recaptcha-container" ref={recaptchaRef} />

            {/* Decorative blobs */}
            <div className="fixed top-0 left-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="fixed bottom-0 right-0 w-80 h-80 bg-indigo-400 opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-blue-700 font-black text-xl">E</span>
                        </div>
                        <span className="text-white text-2xl font-bold">Elivery</span>
                    </div>
                    <p className="text-blue-300 text-sm">Your smart delivery companion</p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    {/* Tabs */}
                    <div className="flex border-b border-gray-100">
                        {tabs.map(t => (
                            <button
                                key={t.id}
                                id={`tab-${t.id}`}
                                onClick={() => { setTab(t.id); clear(); setOtpSent(false); }}
                                className={`flex-1 py-4 text-sm font-semibold transition-all ${tab === t.id ? 'text-blue-700 border-b-2 border-blue-700 bg-blue-50/50' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                {t.label}
                            </button>
                        ))}
                    </div>

                    <div className="p-7">
                        {/* Alerts */}
                        {error && (
                            <div className="mb-4 bg-red-50 border border-red-100 text-red-700 text-xs rounded-xl px-4 py-3 flex items-start gap-2">
                                <span className="text-base mt-0.5">⚠️</span> {error}
                            </div>
                        )}
                        {info && (
                            <div className="mb-4 bg-green-50 border border-green-100 text-green-700 text-xs rounded-xl px-4 py-3 flex items-start gap-2">
                                <span className="text-base mt-0.5">✅</span> {info}
                            </div>
                        )}

                        {/* ── SIGN IN TAB ─────────────────────────────────────── */}
                        {tab === TAB_EMAIL && (
                            <>
                                {/* Social buttons */}
                                <div className="space-y-3 mb-5">
                                    <SocialBtn id="google-btn" onClick={handleGoogle} icon={<GoogleIcon />} label="Continue with Google" />
                                    <SocialBtn id="microsoft-btn" onClick={handleMicrosoft} icon={<MicrosoftIcon />} label="Continue with Microsoft" />
                                </div>

                                <div className="flex items-center gap-3 mb-5">
                                    <div className="flex-1 h-px bg-gray-100" />
                                    <span className="text-xs text-gray-400 font-medium">or email</span>
                                    <div className="flex-1 h-px bg-gray-100" />
                                </div>

                                <form onSubmit={handleEmailLogin} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Email address</label>
                                        <input id="email-input" type="email" value={email} onChange={e => setEmail(e.target.value)} required
                                            placeholder="you@example.com"
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Password</label>
                                        <div className="relative">
                                            <input id="password-input" type={showPass ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required
                                                placeholder="••••••••"
                                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all pr-10" />
                                            <button type="button" onClick={() => setShowPass(!showPass)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm">
                                                {showPass ? '🙈' : '👁️'}
                                            </button>
                                        </div>
                                    </div>
                                    <button id="signin-btn" type="submit" disabled={busy}
                                        className="w-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white font-semibold py-3.5 rounded-xl hover:from-blue-800 hover:to-indigo-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-60 text-sm">
                                        {busy ? 'Signing in…' : 'Sign In'}
                                    </button>
                                </form>

                                <p className="text-center text-xs text-gray-400 mt-4">
                                    No account?{' '}
                                    <button onClick={() => setTab(TAB_SIGNUP)} className="text-blue-600 font-semibold hover:underline">Create one</button>
                                </p>
                            </>
                        )}

                        {/* ── PHONE TAB ────────────────────────────────────────── */}
                        {tab === TAB_PHONE && (
                            <>
                                {!otpSent ? (
                                    <form onSubmit={handleSendOtp} className="space-y-4">
                                        <div className="text-center mb-4">
                                            <div className="text-4xl mb-2">📱</div>
                                            <p className="text-gray-500 text-sm">Enter your mobile number to receive a one-time password.</p>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1.5">Phone Number</label>
                                            <div className="flex gap-2">
                                                <div className="flex items-center border border-gray-200 rounded-xl px-3 py-3 text-sm text-gray-500 bg-gray-50 flex-shrink-0">
                                                    🇮🇳 +91
                                                </div>
                                                <input id="phone-input" type="tel" value={phone} onChange={e => setPhone(e.target.value)} required
                                                    placeholder="9876543210" maxLength={10}
                                                    className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all" />
                                            </div>
                                        </div>
                                        <button id="send-otp-btn" type="submit" disabled={busy}
                                            className="w-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white font-semibold py-3.5 rounded-xl hover:from-blue-800 transition-all shadow-lg shadow-blue-200 disabled:opacity-60 text-sm">
                                            {busy ? 'Sending OTP…' : '📨 Send OTP'}
                                        </button>
                                    </form>
                                ) : (
                                    <form onSubmit={handleVerifyOtp} className="space-y-4">
                                        <div className="text-center mb-4">
                                            <div className="text-4xl mb-2">🔐</div>
                                            <p className="text-gray-700 font-semibold text-sm">OTP Sent!</p>
                                            <p className="text-gray-400 text-xs mt-1">We sent a code to +91 {phone}</p>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1.5">6-digit OTP</label>
                                            <input id="otp-input" type="text" value={otp} onChange={e => setOtp(e.target.value)} required
                                                placeholder="• • • • • •"
                                                maxLength={6}
                                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-center tracking-[0.5em] font-mono font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all" />
                                        </div>
                                        <button id="verify-otp-btn" type="submit" disabled={busy}
                                            className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold py-3.5 rounded-xl hover:from-green-700 transition-all shadow-lg shadow-green-200 disabled:opacity-60 text-sm">
                                            {busy ? 'Verifying…' : '✓ Verify & Sign In'}
                                        </button>
                                        <button type="button" onClick={() => { setOtpSent(false); setOtp(''); clear(); }}
                                            className="w-full text-gray-400 text-xs hover:underline">
                                            ← Change number
                                        </button>
                                    </form>
                                )}
                            </>
                        )}

                        {/* ── SIGN UP TAB ──────────────────────────────────────── */}
                        {tab === TAB_SIGNUP && (
                            <>
                                <div className="space-y-3 mb-5">
                                    <SocialBtn id="google-signup-btn" onClick={handleGoogle} icon={<GoogleIcon />} label="Sign up with Google" />
                                    <SocialBtn id="microsoft-signup-btn" onClick={handleMicrosoft} icon={<MicrosoftIcon />} label="Sign up with Microsoft" />
                                </div>

                                <div className="flex items-center gap-3 mb-5">
                                    <div className="flex-1 h-px bg-gray-100" />
                                    <span className="text-xs text-gray-400 font-medium">or email</span>
                                    <div className="flex-1 h-px bg-gray-100" />
                                </div>

                                <form onSubmit={handleSignup} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Full Name</label>
                                        <input id="signup-name" type="text" value={name} onChange={e => setName(e.target.value)} required
                                            placeholder="Amit Saini"
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Email address</label>
                                        <input id="signup-email" type="email" value={email} onChange={e => setEmail(e.target.value)} required
                                            placeholder="you@example.com"
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Password</label>
                                        <div className="relative">
                                            <input id="signup-password" type={showPass ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required
                                                placeholder="Min 6 characters"
                                                minLength={6}
                                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all pr-10" />
                                            <button type="button" onClick={() => setShowPass(!showPass)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm">
                                                {showPass ? '🙈' : '👁️'}
                                            </button>
                                        </div>
                                    </div>
                                    <button id="create-account-btn" type="submit" disabled={busy}
                                        className="w-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white font-semibold py-3.5 rounded-xl hover:from-blue-800 transition-all shadow-lg shadow-blue-200 disabled:opacity-60 text-sm">
                                        {busy ? 'Creating account…' : 'Create Account'}
                                    </button>
                                </form>

                                <p className="text-center text-xs text-gray-400 mt-4">
                                    Already have an account?{' '}
                                    <button onClick={() => setTab(TAB_EMAIL)} className="text-blue-600 font-semibold hover:underline">Sign in</button>
                                </p>
                            </>
                        )}

                        {/* Footer note */}
                        <p className="text-center text-xs text-gray-300 mt-6">
                            By continuing, you agree to Elivery's{' '}
                            <span className="text-blue-400 cursor-pointer hover:underline">Terms</span> &{' '}
                            <span className="text-blue-400 cursor-pointer hover:underline">Privacy Policy</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}