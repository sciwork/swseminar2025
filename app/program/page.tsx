import { Metadata } from "next";
import Article from "@/components/Article";
import ScheduleTime from "@/components/ScheduleTime";
import TalkInfoCard from "@/components/TalkInfoCard";
import TaskInfoList from "@/components/TaskInfoList";

export const metadata: Metadata = {
  title: "Page",
};

const Page = () => {
  return (
    <Article>
      <h1>Program</h1>
      {/*
      <TaskInfoList>
        <ScheduleTime time="09:00" />
        <TalkInfoCard
          talk={{
            title: "Check-in",
            description: "",
            room: "All",
            start: "9:00",
            end: "9:30",
          }}
          variant="general"
        />
        <ScheduleTime time="09:30" />
        <TalkInfoCard
          talk={{
            title: "Opening",
            description: "",
            room: "All",
            persons: ["Yung-Yu Chen"],
            start: "9:30",
            end: "9:50",
          }}
          variant="general"
        />
        <ScheduleTime time="10:00" />
        <div className="tw-grid tw-grid-cols-1 tw-gap-6 tablet:tw-grid-cols-2">
          <TaskInfoList className="tw-order-1 tablet:tw-order-1">
            <TalkInfoCard
              className="tw-h-full"
              talk={{
                title: "NASA TOPS Training",
                description: "Morning Session: Improving Shared Code with Findable, Accessible, Interoperable, and Reusable (FAIR) Principles: Master FAIR principles and best practices for sharing research code through hands-on exercises and practical examples.",
                room: "R833",
                persons: ["James Powell"],
                start: "10:00",
                end: "12:00",
              }}
              variant="room1"
            />
          </TaskInfoList>

          <TaskInfoList className="tw-order-2 tablet:tw-order-1">
            <TalkInfoCard
              talk={{
                title: "Introduction - Cytnx",
                description: "Cytnx: An Introduction to the Tensor Network Library for Quantum Physics",
                room: "R716",
                persons: ["Ying-Jer Kao"],
                start: "10:00",
                end: "10:10",
              }}
              variant="room2"
            />
            <TalkInfoCard
              talk={{
                title: "Introduction - modmesh",
                description:
                  "Introduce modmesh: a system to solve problems that can be meshed",
                room: "R716",
                persons: ["Yung-Yu Chen"],
                start: "10:15",
                end: "10:25",
              }}
              variant="room2"
            />

            <ScheduleTime time="10:30" />
            <TalkInfoCard
              talk={{
                title: "Introduction - swprotal",
                description: "Building the sciwork infrastructure",
                room: "R716",
                persons: ["Chester Cheng"],
                start: "10:30",
                end: "10:40",
              }}
              variant="room2"
            />
            <TalkInfoCard
              talk={{
                title: "Introduction - Altlas",
                description:
                  "Language, Knowledge and Computation: the Quest to Divide and Conquer to Strong AI",
                room: "R716",
                persons: ["Peter Wolf"],
                start: "10:50",
                end: "11:00",
              }}
              variant="room2"
            />
            <ScheduleTime time="11:00" />
            <TalkInfoCard
              talk={{
                title: "Introduction - utensor",
                description:
                  "Deep Learning on Tiny Devices: Review and Outlook for uTensor",
                room: "R716",
                persons: ["Dboy Liao"],
                start: "11:05",
                end: "11:15",
              }}
              variant="room2"
            />
            <TalkInfoCard
              talk={{
                title: "Introduction - Pydoc-zhtw",
                description: "Introduce the project: Python Documentation Traditional- Chinese Translation",
                room: "R716",
                start: "11:20",
                end: "11:30",
              }}
              variant="room2"
            />
            <ScheduleTime time="11:30" />
            <TalkInfoCard
              talk={{
                title:
                  "Talk: Training-Free Scanning Robustness Guided Diffusion Model for Aesthetic QR Code Generation",
                description: "",
                room: "R716",
                persons: ["Jia-Wei"],
                start: "11:40",
                end: "12:00",
              }}
              variant="room2"
            />
          </TaskInfoList>
        </div>
        <ScheduleTime time="12:00" />
        <TalkInfoCard
          talk={{
            title: "Lunch",
            description: "Lunch time.",
            room: "All",
            start: "12:00",
            end: "13:30",
          }}
          variant="general"
        />
        <ScheduleTime time="13:30" />
        <div className="tw-grid tw-grid-cols-1 tw-gap-6 tablet:tw-grid-cols-2">
          <TalkInfoCard
            talk={{
              title: "NASA TOPS Training",
              description: "Group Activity: Practical exercises to enhance the openness and reproducibility of research.",
              room: "R833",
              persons: ["James Powell"],
              start: "13:30",
              end: "15:00",
            }}
            variant="room1"
          />
          <TalkInfoCard
            talk={{
              title: "Sprint Booths",
              description: "Discussion some topics with project leader",
              room: "R815",
              start: "13:30",
              end: "15:00",
            }}
            variant="room2"
          />
        </div>
        <TalkInfoCard
          talk={{
            title: "Tea break",
            description: "Take a break!",
            room: "All",
            start: "15:00",
            end: "16:00",
          }}
          variant="general"
        />
        <ScheduleTime time="16:00" />
        <div className="tw-grid tw-grid-cols-1 tw-gap-6 tablet:tw-grid-cols-2">
          <TalkInfoCard
            talk={{
              title: "NASA TOPS Training",
              description: "Group Presentations & Discussion: Share your findings and learn from others' approaches.",
              room: "R833",
              persons: ["James Powell"],
              start: "16:00",
              end: "17:00",
            }}
            variant="room1"
          />
          <TalkInfoCard
            talk={{
              title: "Sprint Booths",
              description: "Discussion some topics with project leader",
              room: "R815",
              start: "16:00",
              end: "17:00",
            }}
            variant="room2"
          />
        </div>
        <ScheduleTime time="17:00" />
      </TaskInfoList>
      */}
    </Article>
  );
};

export default Page;
