import { Users, Briefcase, CheckCircle } from 'lucide-react';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    responsibilities: string[];
    avatar: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'د. مريم عبدالرحمن',
        role: 'المؤسِّسة والمديرة التنفيذية',
        responsibilities: [
            'وضع الرؤية والاستراتيجية العامة للمنصة',
            'إدارة الشراكات مع المؤسسات الداعمة',
            'الإشراف على جميع الأقسام والفرق',
        ],
        avatar: 'https://ui-avatars.com/api/?name=مريم&background=C2185B&color=fff&size=128&font-size=0.4',
    },
    {
        id: 2,
        name: 'م. أحمد السيد',
        role: 'مدير التقنية',
        responsibilities: [
            'تطوير وصيانة المنصة الإلكترونية',
            'ضمان أمن البيانات وحماية الخصوصية',
            'تحسين تجربة المستخدم والأداء التقني',
        ],
        avatar: 'https://ui-avatars.com/api/?name=أحمد&background=D4AF37&color=fff&size=128&font-size=0.4',
    },
    {
        id: 3,
        name: 'أ. نورا حسين',
        role: 'مديرة التدريب والتطوير',
        responsibilities: [
            'تصميم المناهج والبرامج التدريبية',
            'التنسيق مع المدربين والخبراء',
            'متابعة تقدم المتدربات وقياس الأثر',
        ],
        avatar: 'https://ui-avatars.com/api/?name=نورا&background=E91E63&color=fff&size=128&font-size=0.4',
    },
    {
        id: 4,
        name: 'أ. سارة محمود',
        role: 'مسؤولة الدعم المجتمعي',
        responsibilities: [
            'إدارة برامج الدعم النفسي والاجتماعي',
            'بناء شبكة من المتطوعين والداعمين',
            'تنظيم الفعاليات المجتمعية والتوعوية',
        ],
        avatar: 'https://ui-avatars.com/api/?name=سارة&background=FF5722&color=fff&size=128&font-size=0.4',
    },
];

export default function Team() {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-[#C2185B] bg-opacity-10 rounded-full mb-6">
                        <Users size={36} className="text-[#C2185B]" />
                    </div>
                    <h2 className="section-title">فريق العمل</h2>
                    <p className="section-subtitle">
                        فريق متميز يعمل بشغف لتمكين المرأة المصرية وتحقيق رؤيتنا
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="card-base p-6 text-center group hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="relative mb-6">
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mx-auto border-4 border-[#D4AF37] shadow-lg group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-[#C2185B] mb-2">
                                {member.name}
                            </h3>

                            <div className="inline-flex items-center gap-2 bg-[#D4AF37] bg-opacity-15 text-[#C2185B] px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                                <Briefcase size={14} />
                                <span>{member.role}</span>
                            </div>

                            <div className="text-right space-y-3">
                                <p className="text-sm font-semibold text-gray-700 mb-2">المسؤوليات:</p>
                                {member.responsibilities.map((resp, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                        <CheckCircle size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                                        <span>{resp}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
