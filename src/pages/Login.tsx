import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'صيغة البريد الإلكتروني غير صحيحة';
    }
    if (!password.trim()) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (password.length < 6) {
      newErrors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Visual only — no backend
      alert('تم تسجيل الدخول بنجاح! (عرض توضيحي)');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-4 bg-gradient-to-br from-pink-50 via-white to-yellow-50">
      <div className="auth-card">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-[#C2185B]">نُ</span>
            <span className="text-gray-800 mr-2">نون</span>
          </h1>
          <p className="text-gray-500">مرحباً بك مجدداً!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              البريد الإلكتروني
            </label>
            <div className="relative">
              <Mail
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`form-input pr-12 ${errors.email ? 'border-red-400' : ''}`}
                dir="ltr"
                style={{ textAlign: 'left' }}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              كلمة المرور
            </label>
            <div className="relative">
              <Lock
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`form-input pr-12 pl-12 ${errors.password ? 'border-red-400' : ''}`}
                dir="ltr"
                style={{ textAlign: 'left' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Remember me + Forgot password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 accent-[#C2185B] rounded"
              />
              <span className="text-sm text-gray-600">تذكرني</span>
            </label>
            <button type="button" className="text-sm text-[#C2185B] hover:underline font-medium">
              نسيت كلمة المرور؟
            </button>
          </div>

          {/* Submit */}
          <button type="submit" className="btn-primary w-full text-lg">
            تسجيل الدخول
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm text-gray-400">أو</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Sign up link */}
        <p className="text-center text-gray-600">
          ليس لديكِ حساب؟{' '}
          <Link
            to="/signup"
            className="text-[#C2185B] font-semibold hover:underline"
          >
            سجلي الآن
          </Link>
        </p>
      </div>
    </section>
  );
}
