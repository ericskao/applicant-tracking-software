import { JobInterface } from '@/app/jobs/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterJobs(jobs: JobInterface[]) {
  if (!Array.isArray(jobs)) {
    return [];
  }
  return jobs;
  return jobs.filter((job) => job.name.includes('Sample'));
}
