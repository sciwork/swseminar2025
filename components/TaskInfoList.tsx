import clsx from "clsx";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const TaskInfoList = ({ className, children }: Props) => {
  return (
    <div
      className={clsx(
        "tw-flex tw-flex-col tw-gap-6 tablet:tw-gap-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default TaskInfoList;
