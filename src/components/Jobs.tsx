import JobCard from './JobCard';

const jobs = [
  {
    id: 1,
    title: 'ممثلة خدمة عملاء',
    company: 'شركة تقنية عالمية',
    type: 'دوام كامل',
    salary: '6,000 - 8,000 ج.م',
    location: 'مصر',
    requirements: [
      'التحدث باللغة العربية والإنجليزية',
      'خبرة سابقة في خدمة العملاء',
      'مهارات اتصال ممتازة',
    ],
  },
  {
    id: 2,
    title: 'كاتبة محتوى إبداعي',
    company: 'منصة نشر رقمية',
    type: 'عمل حر',
    salary: 'من 2,000 ج.م شهرياً',
    location: 'مصر',
    requirements: [
      'كتابة محتوى جذاب وملهم',
      'معرفة بوسائل التواصل الاجتماعي',
      'القدرة على العمل بمرونة',
    ],
  },
  {
    id: 3,
    title: 'مديرة وسائط اجتماعية',
    company: 'وكالة تسويق ديجيتال',
    type: 'دوام جزئي',
    salary: '4,500 - 6,000 ج.م',
    location: 'مصر',
    requirements: [
      'إدارة حسابات وسائل التواصل',
      'تصميم وإنشاء محتوى جذاب',
      'تحليل البيانات والإحصائيات',
    ],
  },
  {
    id: 4,
    title: 'مصممة جرافيكس',
    company: 'استوديو تصميم عصري',
    type: 'عمل حر',
    salary: 'من 3,000 ج.م شهرياً',
    location: 'مصر',
    requirements: [
      'إتقان برامج التصميم الحديثة',
      'إبداع وذوق فني عالي',
      'القدرة على تحقيق رؤية العميل',
    ],
  },
  {
    id: 5,
    title: 'مدخلة بيانات',
    company: 'شركة استشارات مالية',
    type: 'دوام كامل',
    salary: '5,000 - 7,000 ج.م',
    location: 'مصر',
    requirements: [
      'سرعة ودقة في إدخال البيانات',
      'معرفة بأنظمة إدارة الجودة',
      'اهتمام بالتفاصيل',
    ],
  },
  {
    id: 6,
    title: 'مدرسة أونلاين',
    company: 'منصة تعليمية عربية',
    type: 'عمل حر',
    salary: 'من 1,500 ج.م شهرياً',
    location: 'مصر',
    requirements: [
      'درجة جامعية في التخصص المطلوب',
      'مهارات تدريس متقدمة',
      'صبر والتزام برسالة التعليم',
    ],
  },
];

export default function Jobs() {
  return (
    <section id="jobs" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">فرص عمل عن بُعد</h2>
          <p className="section-subtitle">
            ابدئي من منزلك واستقلي مالياً - فرص عمل مرنة تناسب احتياجاتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-primary">عرض جميع الفرص الوظيفية</button>
        </div>
      </div>
    </section>
  );
}
