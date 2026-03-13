import JobCard from './JobCard';
import { Job } from '../data/jobsData';

interface JobsGridProps {
  jobs: Job[];
}

export default function Jobs({ jobs }: JobsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}
