type Props = {
  time: string;
};

const ScheduleTime = ({ time }: Props) => {
  return (
    <div className="tw-text-center tw-font-yk tw-text-2xl tablet:tw-text-3xl">
      {time}
    </div>
  );
};

export default ScheduleTime;
