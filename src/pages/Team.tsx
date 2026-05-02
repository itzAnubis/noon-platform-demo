import { Users, CheckCircle, Award } from 'lucide-react';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    avatar: string;
}

const doctor = {
    name: 'د. حسين علي أبوعمر',
    role: 'مشرف المشروع',
    responsibilities: [
        'الإشراف الأكاديمي على المشروع',
        'توجيه وإرشاد الفريق',
        'متابعة تطور العمل وتقييم النتائج',
    ],
    avatar: '/images/noon_team/دكتور حسين على ابوعمر.jpeg',
};

// الترتيب الجديد بناءً على طلب العميلة:
// 1. هي (صاحبة الرسالة - نفترض أنها مريم أو سيتم استبدال الاسم)
// 2. مريم حسن
// 3. الشباب
// 4. سلمى أشرف في النهاية
const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'سهيلة كمال',
        role: 'عضو فريق نون',
        avatar: '/images/noon_team/سهيلة كمال.jpeg',
    },
    {
        id: 5,
        name: 'مريم حسن',
        role: 'عضو فريق نون',
        avatar: '/images/noon_team/مريم حسن.jpeg',
    },
    {
        id: 3,
        name: 'شهاب سلامة',
        role: 'عضو فريق نون',
        avatar: '/images/noon_team/شهاب سلامه.jpeg',
    },
    {
        id: 4,
        name: 'عبدالله ياسر',
        role: 'عضو فريق نون',
        avatar: '/images/noon_team/عبدالله ياسر.jpeg',
    },
    {
        id: 9,
        name: 'يحيي عادل',
        role: 'عضو فريق نون',
        avatar: '/images/noon_team/يحيي عادل.jpeg',
    },
    {
        id: 10,
        name: 'عبدالرحمن مجدي',
        role: 'عضو فريق نون',
        avatar: '/images/noon_team/عبدالرحمن مجدى.jpeg',
    },
    {
        id: 6,
        name: 'آية عبد الرؤوف',
        role: 'عضو فريق نون',
        avatar: '/images/noon_team/اية عبد الرؤوف.jpeg',
    },
    {
        id: 7,
        name: 'حنان أحمد',
        role: 'عضو فريق نون',
        avatar: '/images/noon_team/حنان احمد.jpeg',
    },
    {
        id: 8,
        name: 'شهد الشناوي',
        role: 'عضو فريق نون',
        avatar: '/images/noon_team/شهد الشناوى.jpeg',
    },
    {
        id: 11,
        name: 'نورسين محمد',
        role: 'عضو فريق نون',
        avatar: '/images/noon_team/نورسين محمد.jpeg',
    },
    {
        id: 12,
        name: 'منة أحمد',
        role: 'عضو فريق نون',
        avatar: '/images/noon_team/منه احمد.jpeg',
    },
    {
        id: 13,
        name: 'كنزى',
        role: 'عضو فريق نون',
        avatar: '/images/noon_team/كنزي.jpeg',
    },
    {
        id: 2, // تم نقل سلمى للنهاية
        name: 'سلمى أشرف',
        role: 'عضو فريق نون',
        avatar: '/images/noon_team/سلمى اشرف.jpeg',
    },
];

export default function Team() {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white min-h-screen overflow-hidden dir-rtl" dir="rtl">
            <h1 className="sr-only">فريق العمل</h1>
            <style>{`
                .font-tajawal { font-family: 'Tajawal', sans-serif; }
            `}</style>
            
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-4 bg-[#7b2145] rounded-2xl mb-6 shadow-lg shadow-pink-200">
                        <Users size={32} className="text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight font-tajawal">
                        فريق العمل
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-tajawal">
                        نخبة من الكفاءات المبدعة تعمل معاً لتحقيق رؤية منصة نون
                    </p>
                </div>

                {/* Doctor Section (يبقى كما هو للتفخيم) */}
                <div className="mb-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative group bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-yellow-200/40 transition-all duration-500 flex flex-col sm:flex-row border border-amber-100 overflow-hidden">
                            <div className="relative flex justify-center items-center sm:w-1/3 bg-gradient-to-br from-[#c3a248] to-[#B8860B] p-6">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                                <div className="relative p-1 bg-white rounded-full shadow-xl z-20">
                                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white aspect-square bg-white">
                                        <img
                                            src={doctor.avatar}
                                            alt={doctor.name}
                                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute bottom-3 right-8 w-5 h-5 bg-green-500 border-2 border-white rounded-full shadow-sm"></div>
                                </div>
                            </div>

                            <div className="p-8 sm:p-10 flex flex-col flex-1 justify-center relative bg-gradient-to-l from-white to-amber-50/30">
                                <Award className="hidden sm:block absolute top-6 left-6 text-amber-100 w-24 h-24 z-0 opacity-50" />
                                <div className="text-center sm:text-right mb-6 z-10">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-tajawal mb-3">
                                        {doctor.name}
                                    </h3>
                                    <span className="text-sm sm:text-base font-bold text-[#B8860B] bg-amber-100 px-5 py-2 rounded-xl inline-block border border-amber-200 shadow-sm">
                                        {doctor.role}
                                    </span>
                                </div>

                                <div className="space-y-4 bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-amber-100 shadow-sm z-10">
                                    {doctor.responsibilities.map((resp, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="bg-amber-100 p-1.5 rounded-full shrink-0">
                                                <CheckCircle size={16} className="text-[#c3a248]" />
                                            </div>
                                            <span className="text-base font-medium text-gray-700 leading-relaxed font-tajawal">{resp}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Members Title */}
                <div className="flex items-center gap-4 mb-12 px-4">
                    <h3 className="text-2xl font-bold text-gray-800 font-tajawal">أعضاء الفريق</h3>
                    <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                {/* Grid Layout instead of Slider */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="relative group bg-white rounded-[2rem] shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-pink-200/40 transition-all duration-500 flex flex-col border border-white overflow-hidden"
                        >
                            {/* Card Header */}
                            <div className="h-24 bg-gradient-to-br from-[#7b2145] to-pink-500 relative">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                            </div>

                            {/* Avatar Section */}
                            <div className="relative -mt-12 flex justify-center z-20">
                                <div className="p-1 bg-white rounded-full shadow-xl">
                                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white aspect-square bg-gray-100">
                                        <img
                                            src={member.avatar}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute bottom-2 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-sm"></div>
                                </div>
                            </div>

                            {/* Content (Responsibilities Removed) */}
                            <div className="p-6 pt-4 flex flex-col items-center flex-1">
                                <div className="text-center pb-4">
                                    <h3 className="text-lg font-bold text-gray-800 font-tajawal group-hover:text-[#7b2145] transition-colors">
                                        {member.name}
                                    </h3>
                                    <span className="text-xs font-medium text-pink-500 bg-pink-50 px-3 py-1 rounded-lg mt-2 inline-block">
                                        {member.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}