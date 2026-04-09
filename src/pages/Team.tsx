import { useRef } from 'react';
import { Users, CheckCircle, ChevronRight, ChevronLeft, Award } from 'lucide-react';


interface TeamMember {
    id: number;
    name: string;
    role: string;
    responsibilities: string[];
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

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'سهيلة كمال',
        role: 'عضو فريق نون',
        responsibilities: [
            'العمل على تحقيق أهداف المنصة',
            'تقديم الدعم اللازم لنجاح المبادرات',
            'المشاركة في تطوير وتنمية المجتمع',
        ],
        avatar: '/images/noon_team/سهيلة كمال.jpeg',
    },
    {
        id: 2,
        name: 'سلمى أشرف',
        role: 'عضو فريق نون',
        responsibilities: [
            'العمل على تحقيق أهداف المنصة',
            'تقديم الدعم اللازم لنجاح المبادرات',
            'المشاركة في تطوير وتنمية المجتمع',
        ],
        avatar: '/images/noon_team/سلمى اشرف.jpeg',
    },
    {
        id: 3,
        name: 'شهاب سلامة',
        role: 'عضو فريق نون',
        responsibilities: [
            'العمل على تحقيق أهداف المنصة',
            'تقديم الدعم اللازم لنجاح المبادرات',
            'المشاركة في تطوير وتنمية المجتمع',
        ],
        avatar: '/images/noon_team/شهاب سلامه.jpeg',
    },
    {
        id: 4,
        name: 'عبدالله ياسر',
        role: 'عضو فريق نون',
        responsibilities: [
            'العمل على تحقيق أهداف المنصة',
            'تقديم الدعم اللازم لنجاح المبادرات',
            'المشاركة في تطوير وتنمية المجتمع',
        ],
        avatar: '/images/noon_team/عبدالله ياسر.jpeg',
    },
    {
        id: 5,
        name: 'مريم حسن',
        role: 'عضو فريق نون',
        responsibilities: [
            'العمل على تحقيق أهداف المنصة',
            'تقديم الدعم اللازم لنجاح المبادرات',
            'المشاركة في تطوير وتنمية المجتمع',
        ],
        avatar: '/images/noon_team/مريم حسن.jpeg',
    },
    {
        id: 6,
        name: 'آية عبد الرؤوف',
        role: 'عضو فريق نون',
        responsibilities: [
            'العمل على تحقيق أهداف المنصة',
            'تقديم الدعم اللازم لنجاح المبادرات',
            'المشاركة في تطوير وتنمية المجتمع',
        ],
        avatar: '/images/noon_team/اية عبد الرؤوف.jpeg',
    },
    {
        id: 7,
        name: 'حنان أحمد',
        role: 'عضو فريق نون',
        responsibilities: [
            'العمل على تحقيق أهداف المنصة',
            'تقديم الدعم اللازم لنجاح المبادرات',
            'المشاركة في تطوير وتنمية المجتمع',
        ],
        avatar: '/images/noon_team/حنان احمد.jpeg',
    },
    {
        id: 8,
        name: 'شهد الشناوي',
        role: 'عضو فريق نون',
        responsibilities: [
            'العمل على تحقيق أهداف المنصة',
            'تقديم الدعم اللازم لنجاح المبادرات',
            'المشاركة في تطوير وتنمية المجتمع',
        ],
        avatar: '/images/noon_team/شهد الشناوى.jpeg',
    },
    {
        id: 9,
        name: 'يحيي عادل',
        role: 'عضو فريق نون',
        responsibilities: [
            'العمل على تحقيق أهداف المنصة',
            'تقديم الدعم اللازم لنجاح المبادرات',
            'المشاركة في تطوير وتنمية المجتمع',
        ],
        avatar: '/images/noon_team/يحيي عادل.jpeg',
    },
    {
        id: 10,
        name: 'عبدالرحمن مجدي',
        role: 'عضو فريق نون',
        responsibilities: [
            'العمل على تحقيق أهداف المنصة',
            'تقديم الدعم اللازم لنجاح المبادرات',
            'المشاركة في تطوير وتنمية المجتمع',
        ],
        avatar: '/images/noon_team/عبدالرحمن مجدى.jpeg',
    },
    {
        id: 11,
        name: 'نورسين محمد',
        role: 'عضو فريق نون',
        responsibilities: [
            'العمل على تحقيق أهداف المنصة',
            'تقديم الدعم اللازم لنجاح المبادرات',
            'المشاركة في تطوير وتنمية المجتمع',
        ],
        avatar: '/images/noon_team/نورسين محمد.jpeg',
    },
    {
        id: 12,
        name: 'منة أحمد',
        role: 'عضو فريق نون',
        responsibilities: [
            'العمل على تحقيق أهداف المنصة',
            'تقديم الدعم اللازم لنجاح المبادرات',
            'المشاركة في تطوير وتنمية المجتمع',
        ],
        avatar: '/images/noon_team/منه احمد.jpeg',
    },
    {
        id: 13,
        name: 'كنزى',
        role: 'عضو فريق نون',
        responsibilities: [
            'العمل على تحقيق أهداف المنصة',
            'تقديم الدعم اللازم لنجاح المبادرات',
            'المشاركة في تطوير وتنمية المجتمع',
        ],
        avatar: 'https://ui-avatars.com/api/?name=كنزى&background=random&color=fff&size=200',
    },
];
export default function Team() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Fixed Scroll Logic for RTL: In Arabic layout, 'Next' usually scrolls Left
    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 350;
            const multiplier = direction === 'left' ? -1 : 1;
            scrollContainerRef.current.scrollBy({ 
                left: scrollAmount * multiplier, 
                behavior: 'smooth' 
            });
        }
    };

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white min-h-screen overflow-hidden dir-rtl" dir="rtl">
    <h1 className="sr-only">فريق العمل</h1>
            <style>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
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

                {/* Doctor Section */}
                <div className="mb-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative group bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-yellow-200/40 transition-all duration-500 flex flex-col sm:flex-row border border-amber-100 overflow-hidden">
                            {/* Avatar Section */}
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

                            {/* Content */}
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
                <div className="flex items-center gap-4 mb-8 px-4">
                    <h3 className="text-2xl font-bold text-gray-800 font-tajawal">أعضاء الفريق</h3>
                    <div className="h-px bg-gray-200 flex-1"></div>
                    {/* Navigation Buttons */}
                    <div className="flex justify-end gap-3">
                        <button 
                            onClick={() => scroll('right')}
                            className="p-3 rounded-xl bg-white shadow-sm border border-pink-100 text-[#7b2145] hover:bg-[#7b2145] hover:text-white transition-all active:scale-95"
                        >
                            <ChevronRight size={24} />
                        </button>
                        <button 
                            onClick={() => scroll('left')}
                            className="p-3 rounded-xl bg-white shadow-sm border border-pink-100 text-[#7b2145] hover:bg-[#7b2145] hover:text-white transition-all active:scale-95"
                        >
                            <ChevronLeft size={24} />
                        </button>
                    </div>
                </div>

                {/* Slider */}
                <div 
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 pb-12 pt-4 px-4 snap-x snap-mandatory hide-scrollbar"
                >
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="relative group bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-pink-200/40 transition-all duration-500 w-[300px] sm:w-[320px] shrink-0 snap-center flex flex-col border border-white overflow-hidden"
                        >
                            {/* Card Header with Glassmorphism overlay */}
                            <div className="h-32 bg-gradient-to-br from-[#7b2145] to-pink-500 relative">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                            </div>

                            {/* Avatar Section */}
                            <div className="relative -mt-16 flex justify-center z-20">
                                <div className="p-1 bg-white rounded-full shadow-xl">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white aspect-square bg-gray-100">
                                        <img
                                            src={member.avatar}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute bottom-2 right-6 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-sm"></div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 pt-4 flex flex-col flex-1">
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-gray-800 font-tajawal group-hover:text-[#7b2145] transition-colors">
                                        {member.name}
                                    </h3>
                                    <span className="text-sm font-medium text-pink-500 bg-pink-50 px-3 py-1 rounded-lg mt-2 inline-block">
                                        {member.role}
                                    </span>
                                </div>

                                <div className="space-y-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">المسؤوليات</p>
                                    {member.responsibilities.map((resp, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <CheckCircle size={14} className="text-[#c3a248] shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-600 leading-tight">{resp}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}