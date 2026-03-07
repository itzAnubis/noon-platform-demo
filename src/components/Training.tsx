import CourseCard from './CourseCard';
import { courses } from '../data/coursesData';

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
