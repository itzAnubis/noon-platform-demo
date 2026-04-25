import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'الاسم مطلوب';
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
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'كلمات المرور غير متطابقة';
    }
    if (!acceptTerms) {
      newErrors.terms = 'يجب الموافقة على الشروط والأحكام';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('تم إنشاء الحساب بنجاح! (عرض توضيحي)');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-4 bg-gradient-to-br from-pink-50 via-white to-yellow-50">
      <div className="auth-card">
        {/* Logo */}
        <div className="text-center mb-8">
          <img
            src="/NooN-LoGo3.png"
            alt="NooN Logo"
            className="h-20 mx-auto mb-2 object-contain"
          />
          <p className="text-gray-500">انضمي إلى مجتمع نون!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              الاسم الكامل
            </label>
            <div className="relative">
              <User
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="أدخلي اسمك الكامل"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`form-input pr-12 ${errors.name ? 'border-red-400' : ''}`}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

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

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              تأكيد كلمة المرور
            </label>
            <div className="relative">
              <Lock
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type={showConfirm ? 'text' : 'password'}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`form-input pr-12 pl-12 ${errors.confirmPassword ? 'border-red-400' : ''}`}
                dir="ltr"
                style={{ textAlign: 'left' }}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Terms */}
          <div>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-4 h-4 accent-[#7b2145] rounded mt-1"
              />
              <span className="text-sm text-gray-600">
                أوافق على{' '}
                <button type="button" className="text-[#7b2145] hover:underline font-medium">
                  الشروط والأحكام
                </button>{' '}
                و{' '}
                <button type="button" className="text-[#7b2145] hover:underline font-medium">
                  سياسة الخصوصية
                </button>
              </span>
            </label>
            {errors.terms && (
              <p className="text-red-500 text-xs mt-1">{errors.terms}</p>
            )}
          </div>

          {/* Submit */}
          <button type="submit" className="btn-primary w-full text-lg">
            إنشاء حساب
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm text-gray-400">أو</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Login link */}
        <p className="text-center text-gray-600">
          لديكِ حساب بالفعل؟{' '}
          <Link
            to="/login"
            className="text-[#7b2145] font-semibold hover:underline"
          >
            سجلي الدخول
          </Link>
        </p>
      </div>
    </section>
  );
}
