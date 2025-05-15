import clsx from "clsx";

type SpeakerType = {
  name: string;
  website?: string;
};

type SimpleTalkType = {
  title: string;
  description: string;
  room?: string;
  speakers?: SpeakerType[];
  start: string;
  end: string;
};

type Props = {
  className?: string;
  variant: "general" | "room1" | "room2";
  talk: SimpleTalkType;
};

const TalkInfoCard = ({ className, variant, talk, ...props }: Props) => {
  return (
    <div
      className={clsx(
        "tw-rounded-3xl tw-bg-gradient-to-b tw-p-8 tablet:tw-rounded-2xl",
        variant === "general" && "tw-from-amber-100 tw-to-amber-50",
        variant === "room1" && "tw-from-teal-100 tw-to-teal-50",
        variant === "room2" && "tw-from-sky-100 tw-to-sky-50",
        className,
      )}
      {...props}
    >
      <div className="tw-mb-1 tw-flex tw-flex-wrap tw-items-center tw-gap-2">
        <div
          className={clsx(
            "tw-font-yk tw-text-2xl tw-font-medium tw-leading-none",
            variant === "general" && "tw-text-amber-800",
            variant === "room1" && "tw-text-teal-800",
            variant === "room2" && "tw-text-sky-800",
          )}
        >
          {talk.title}
        </div>
        {talk.room && (
          <div
            className={clsx(
              "-tw-mt-1 tw-rounded-lg tw-border tw-px-1.5 tw-py-1 tw-text-xs tw-uppercase",
              variant === "general" &&
                "tw-border-yellow-400 tw-bg-yellow-400 tw-text-white",
              variant === "room1" &&
                "tw-border-cyan-400 tw-bg-cyan-400 tw-text-white",
              variant === "room2" &&
                "tw-border-blue-400 tw-bg-blue-400 tw-text-white",
            )}
          >
            {talk.room}
          </div>
        )}
      </div>
      <div
        className={clsx(
          "tw-text-sm",
          variant === "general" && "tw-text-amber-600",
          variant === "room1" && "tw-text-teal-600",
          variant === "room2" && "tw-text-sky-600",
        )}
      >
        {talk?.speakers?.map((speaker, index) => (
          <span key={index}>
            {index > 0 && ", "}
            {speaker.website ? (
              <a
                href={speaker.website}
                className="tw-underline"
                target="_blank"
              >
                {speaker.name}
              </a>
            ) : (
              speaker.name
            )}
          </span>
        ))}
      </div>
      <div
        className={clsx(
          "tw-text-sm",
          variant === "general" && "tw-text-slate-600",
          variant === "room1" && "tw-text-slate-600",
          variant === "room2" && "tw-text-slate-600",
        )}
      >
        {talk.start} - {talk.end}
      </div>
      {talk.description && (
        <div
          className={clsx(
            "tw-mt-2 tablet:tw-mt-4",
            variant === "general" && "tw-text-amber-700",
            variant === "room1" && "tw-text-teal-700",
            variant === "room2" && "tw-text-sky-700",
          )}
        >
          {talk.description}
        </div>
      )}
    </div>
  );
};

export default TalkInfoCard;
