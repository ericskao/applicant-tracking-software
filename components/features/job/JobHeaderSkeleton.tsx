import { Skeleton } from '@/components/ui/skeleton';

const JobHeaderSkeleton = () => {
  return (
    <div className="mx-auto flex flex-col gap-y-2">
      <Skeleton className="mx-auto w-[128px] h-[128px] rounded-full" />
      <Skeleton className="mx-auto w-48 h-[28px]" />
      <div>
        <div className="flex flex-col gap-x-3 justify-center items-center">
          <ul className="flex gap-x-4">
            <Skeleton className="w-24 h-[28px]" />
            <Skeleton className="w-24 h-[28px]" />
            <Skeleton className="w-24 h-[28px]" />
          </ul>
        </div>
      </div>
      <Skeleton className="mx-auto w-[640px] h-[300px] mt-12 rounded-sm" />
    </div>
  );
};
export default JobHeaderSkeleton;
