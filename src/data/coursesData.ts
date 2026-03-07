export interface Course {
    id: number;
    image: string;
    title: string;
    instructor: string;
    duration: string;
    level: string;
    description: string;
    participants: number;
}

export const courses: Course[] = [
    {
        id: 1,
        image: '/images/digital_marketing.png',
        title: 'التسويق الرقمي والإعلانات',
        instructor: 'أ. د. أحمد السيد',
        duration: '8 أسابيع',
        level: 'مبتدئ',
        description:
            'تعلمي استراتيجيات التسويق الحديثة وكيفية الوصول لعملاء جدد عبر الإنترنت',
        participants: 342,
    },
    {
        id: 2,
        image: '/images/entrepreneur.png',
        title: 'ريادة الأعمال والعمل الحر',
        instructor: 'م. أحمد محمد',
        duration: '10 أسابيع',
        level: 'متوسط',
        description:
            'كيفية بدء مشروعك الخاص وإدارته بنجاح من البداية إلى الاحتراف',
        participants: 287,
    },
    {
        id: 3,
        image: '/images/startup.png',
        title: 'الحرف اليدويّة والفنون',
        instructor: 'الفنانة سامية حسن',
        duration: '12 أسبوع',
        level: 'مبتدئ',
        description: 'تعلمي فنون اليدويات الجميلة وحول أعمالك إلى مشروع مربح',
        participants: 156,
    },
    {
        id: 4,
        image: '/images/photography.png',
        title: 'التصوير الفوتوغرافي الاحترافي',
        instructor: 'محمود علي - مصور محترف',
        duration: '6 أسابيع',
        level: 'متوسط',
        description:
            'احترفي التصوير واستخدمي مهاراتك في كسب دخل إضافي عبر الإنترنت',
        participants: 198,
    },
    {
        id: 5,
        image: '/images/saw.png',
        title: 'الخياطة والتفصيل الحديث',
        instructor: 'أستاذة ليلى إبراهيم',
        duration: '9 أسابيع',
        level: 'مبتدئ',
        description:
            'تعلمي الخياطة من الصفر وأنشئي تصاميمك الخاصة وتوسعي سوقك',
        participants: 312,
    },
    {
        id: 6,
        image: '/images/startup2.png',
        title: 'إدارة المشاريع الصغيرة',
        instructor: 'د. فاطمه محمد',
        duration: '10 أسابيع',
        level: 'متقدم',
        description:
            'تعرفي على أفضل الممارسات في إدارة المشاريع والعمليات التجارية',
        participants: 221,
    },
];
