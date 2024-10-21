export default function OrderProgress() {
  return (
    <div className="mt-6 flex w-full gap-2 md:mt-8 md:gap-6">
      <div className="w-1/4">
        <div className="h-2 w-full rounded-full bg-gray200">
          <div className="h-full w-full rounded-full bg-success600"></div>
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <img src="/assets/icons/done.svg" className="size-3 md:size-auto" />
          <p className="text-xs text-gray500 md:text-base">Preparing</p>
        </div>
      </div>

      <div className="w-1/4">
        <div className="h-2 w-full rounded-full bg-gray200">
          <div className="h-full w-full rounded-full bg-success600"></div>
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <img src="/assets/icons/done.svg" className="size-3 md:size-auto" />
          <p className="text-xs text-gray500 md:text-base">Pickup</p>
        </div>
      </div>
      <div className="w-1/4">
        <div className="h-2 w-full rounded-full bg-gray200">
          <div className="h-full w-1/2 rounded-full bg-success600"></div>
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <img
            src="/assets/icons/progress.svg"
            className="size-3 md:size-auto"
          />
          <p className="text-xs font-bold text-darkPrimary md:text-base">
            On the way
          </p>
        </div>
      </div>
      <div className="w-1/4">
        <div className="h-2 w-full rounded-full bg-gray200">
          <div className="h-full w-0 rounded-full bg-success600"></div>
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <img
            src="/assets/icons/not-started.svg"
            className="size-3 md:size-auto"
          />
          <p className="text-xs text-gray500 md:text-base">preparing</p>
        </div>
      </div>
    </div>
  );
}
