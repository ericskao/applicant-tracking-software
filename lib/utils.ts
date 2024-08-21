import { ApplicationInterface, JobInterface } from '@/app/jobs/types';
import { api, ResponseWithHeadersInterface } from '@/lib/api';
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

export function validateEmail(email: string) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export async function fetchAllApplications() {
  let allApplications = [] as ApplicationInterface[];
  let limit = 500;
  let page = 1;
  let isLastPage = false;

  while (!isLastPage) {
    const response = (await api(
      `/applications?per_page=${limit}?page=${page}`,
      {},
      true
    )) as ResponseWithHeadersInterface;
    allApplications.push(...(response.data as ApplicationInterface[]));

    if (
      !response.headers.get('link') ||
      response.headers.get('link')?.includes('last')
    ) {
      // this prevents infinite loop if headers is malformed
      isLastPage = true;
    } else {
      page++;
    }
  }
  return allApplications;
}
