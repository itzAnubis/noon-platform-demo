export interface Course {
    id: number;
    image: string;
    title: string;
    instructor: string;
    duration: string;
    level: string;
    description: string;
    participants: number;
    tags: string[];
}

export const courseLevels = ['الكل', 'مبتدئ', 'متوسط', 'متقدم'];

export const allCourseTags = [
    'تسويق',
    'ريادة',
    'حرف يدوية',
    'تصوير',
    'خياطة',
    'إدارة',
];

export const courses: Course[] = [
    {
        id: 1,
        image: '/images/digital_marketing.webp',
        title: 'التسويق الرقمي والإعلانات',
        instructor: 'أ. د. أحمد السيد',
        duration: '8 أسابيع',
        level: 'مبتدئ',
        description:
            'تعلمي استراتيجيات التسويق الحديثة وكيفية الوصول لعملاء جدد عبر الإنترنت',
        participants: 342,
        tags: ['تسويق'],
    },
    {
        id: 2,
        image: '/images/entrepreneur.webp',
        title: 'ريادة الأعمال والعمل الحر',
        instructor: 'م. أحمد محمد',
        duration: '10 أسابيع',
        level: 'متوسط',
        description:
            'كيفية بدء مشروعك الخاص وإدارته بنجاح من البداية إلى الاحتراف',
        participants: 287,
        tags: ['ريادة', 'إدارة'],
    },
    {
        id: 3,
        image: '/images/startup.webp',
        title: 'الحرف اليدويّة والفنون',
        instructor: 'الفنانة سامية حسن',
        duration: '12 أسبوع',
        level: 'مبتدئ',
        description: 'تعلمي فنون اليدويات الجميلة وحول أعمالك إلى مشروع مربح',
        participants: 156,
        tags: ['حرف يدوية'],
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
        tags: ['تصوير'],
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
        tags: ['خياطة', 'حرف يدوية'],
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
        tags: ['إدارة', 'ريادة'],
    },
    {
        id: 7,
        image: '/images/اداره مشروعات الصغيره.jpeg',
        title: 'إدارة المشروعات الصغيرة',
        instructor: 'د. منى زكي',
        duration: '5 أسابيع',
        level: 'مبتدئ',
        description: 'تعلمي أساسيات إدارة المشاريع الصغيرة وبناء خطة عمل ناجحة',
        participants: 120,
        tags: ['إدارة', 'ريادة'],
    },
    {
        id: 8,
        image: '/images/استخدام الموبايل في التسويق.jpeg',
        title: 'استخدام الموبايل في التسويق',
        instructor: 'أ. خالد سعيد',
        duration: '4 أسابيع',
        level: 'مبتدئ',
        description: 'اكتشفي كيفية استخدام هاتفك المحمول لتسويق منتجاتك باحترافية',
        participants: 185,
        tags: ['تسويق'],
    },
    {
        id: 9,
        image: '/images/الخياطة والتفصيل.jpeg',
        title: 'أساسيات الخياطة والتفصيل',
        instructor: 'أستاذة سناء أحمد',
        duration: '8 أسابيع',
        level: 'مبتدئ',
        description: 'دورة شاملة لتعلم مبادئ الخياطة وتفصيل الملابس خطوة بخطوة',
        participants: 250,
        tags: ['خياطة', 'حرف يدوية'],
    },
    {
        id: 10,
        image: '/images/الصناعات الغذائية المنزلية.jpeg',
        title: 'الصناعات الغذائية المنزلية',
        instructor: 'الشيف حسن مصطفى',
        duration: '6 أسابيع',
        level: 'متوسط',
        description: 'تعلمي طرق إعداد وتغليف الأطعمة المنزلية لتأسيس مشروعك الغذائي',
        participants: 210,
        tags: ['حرف يدوية'],
    },
    {
        id: 11,
        image: '/images/مهارات البيع.jpeg',
        title: 'مهارات البيع الفعالة',
        instructor: 'أ. طارق عبد الحميد',
        duration: '3 أسابيع',
        level: 'متوسط',
        description: 'تقنيات واستراتيجيات لزيادة مبيعاتك والتعامل مع العملاء بثقة',
        participants: 175,
        tags: ['تسويق', 'إدارة'],
    },
];
