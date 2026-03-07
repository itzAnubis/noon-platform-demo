import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Award } from 'lucide-react';
import { courses } from '../data/coursesData';

export default function CourseDetails() {
    const { courseId } = useParams<{ courseId: string }>();
    const course = courses.find((c) => c.id === Number(courseId));

    if (!course) {
        return (
            <section className="py-20 px-4 min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-[#C2185B] mb-4">
                    الدورة غير موجودة
                </h2>
                <p className="text-gray-600 mb-8">
                    عذراً، لم نتمكن من العثور على الدورة المطلوبة
                </p>
                <Link to="/training" className="btn-primary inline-flex items-center gap-2">
                    <ArrowRight size={20} />
                    <span>العودة للدورات</span>
                </Link>
            </section>
        );
    }

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'مبتدئ':
                return 'bg-green-100 text-green-800';
            case 'متوسط':
                return 'bg-yellow-100 text-yellow-800';
            case 'متقدم':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <section className="py-12 px-4 min-h-screen bg-gradient-to-b from-pink-50 to-white">
            <div className="max-w-5xl mx-auto">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link
                        to="/training"
                        className="inline-flex items-center gap-2 text-[#C2185B] hover:text-[#D4AF37] transition-colors font-medium"
                    >
                        <ArrowRight size={18} />
                        <span>العودة إلى الدورات</span>
                    </Link>
                </div>

                {/* Video Player */}
                <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-10">
                    <video
                        controls
                        className="w-full aspect-video"
                        poster={course.image}
                    >
                        <source src="" type="video/mp4" />
                        متصفحك لا يدعم تشغيل الفيديو
                    </video>
                </div>

                {/* Course Info */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-4xl font-bold text-[#C2185B] mb-3">
                                {course.title}
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {course.description}
                            </p>
                        </div>
                        <span
                            className={`px-4 py-2 rounded-full text-sm font-semibold ${getLevelColor(
                                course.level
                            )}`}
                        >
                            {course.level}
                        </span>
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 bg-pink-50 rounded-xl p-4">
                                <div className="p-2 bg-[#C2185B] bg-opacity-10 rounded-lg">
                                    <Award size={24} className="text-[#C2185B]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">المدرب</p>
                                    <p className="font-semibold text-gray-800">
                                        {course.instructor}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-pink-50 rounded-xl p-4">
                                <div className="p-2 bg-[#D4AF37] bg-opacity-10 rounded-lg">
                                    <Clock size={24} className="text-[#D4AF37]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">المدة</p>
                                    <p className="font-semibold text-gray-800">
                                        {course.duration}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-pink-50 rounded-xl p-4">
                                <div className="p-2 bg-[#C2185B] bg-opacity-10 rounded-lg">
                                    <Users size={24} className="text-[#C2185B]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">المشاركات</p>
                                    <p className="font-semibold text-gray-800">
                                        {course.participants} مشاركة
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button className="btn-primary text-lg px-10 py-3">
                            سجلي في الدورة
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
