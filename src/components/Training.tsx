import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
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
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    title: 'ريادة الأعمال والعمل الحر',
    instructor: 'م. فاطمة أحمد',
    duration: '10 أسابيع',
    level: 'متوسط',
    description:
      'كيفية بدء مشروعك الخاص وإدارته بنجاح من البداية إلى الاحتراف',
    participants: 287,
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=300&fit=crop',
    title: 'الحرف اليدويّة والفنون',
    instructor: 'الفنانة سامية حسن',
    duration: '12 أسبوع',
    level: 'مبتدئ',
    description: 'تعلمي فنون اليدويات الجميلة وحول أعمالك إلى مشروع مربح',
    participants: 156,
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1523707622537-b85faf00c69b?w=500&h=300&fit=crop',
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
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop',
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
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    title: 'إدارة المشاريع الصغيرة',
    instructor: 'د. محمود عبدالله',
    duration: '10 أسابيع',
    level: 'متقدم',
    description:
      'تعرفي على أفضل الممارسات في إدارة المشاريع والعمليات التجارية',
    participants: 221,
  },
];

export default function Training() {
  return (
    <section id="training" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">ورش ودورات تدريبية</h2>
          <p className="section-subtitle">
            طوّري مهاراتك مع متخصصين وافتحي أبواباً جديدة للنجاح
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-secondary">استكشفي جميع الدورات</button>
        </div>
      </div>
    </section>
  );
}
