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
      <TaskInfoList>
        <ScheduleTime time="09:30" />
        <TalkInfoCard
          talk={{
            title: "Check-in",
            description: "",
            room: "All",
            start: "9:30",
            end: "10:00",
          }}
          variant="general"
        />
        <ScheduleTime time="10:00" />
        <TalkInfoCard
          talk={{
            title: "Opening",
            description: "",
            room: "All",
            persons: ["Chun-Hsu Lai"],
            start: "10:00",
            end: "10:10",
          }}
          variant="general"
        />
        <ScheduleTime time="10:20" />
        <div className="tw-grid tw-grid-cols-1 tw-gap-6 tablet:tw-grid-cols-2">
          <TaskInfoList className="tw-order-1 tablet:tw-order-1">
            <TalkInfoCard
              className="tw-h-full"
              talk={{
                title: "C++ template meta-programming: crafting a SIMD library",
                description: "To accelerate element-wise calculation in arrays, we applied SIMD to parallelize array manipulation while developing numeric analysis program. However, SIMD intrinsic library contains lots of similar functions for different data types. We applied meta-programming to reduce duplicated codes cause by those similar functions in order to keep the maintainability. In this talk we will share our journey on meta-programming for SIMD from function-like C-style macro to C++ template programming and some template tips such as type matching, SFINAE.",
                room: "R122",
                persons: ["Kuan-Hsien Lee"],
                start: "10:20",
                end: "10:50",
              }}
              variant="room1"
            />
          </TaskInfoList>
          <TaskInfoList className="tw-order-2 tablet:tw-order-1">
            <TalkInfoCard
			 className="tw-h-full"
              talk={{
                title: "Understanding Kubernetes Networking: A Dive into Network Namespaces and iptables",
                description: "In this talk, we’ll take a journey through the foundations of how Kubernetes handles networking. We'll focus on two critical building blocks: Linux network namespaces and iptables. By exploring how Kubernetes configures these tools under the hood, we’ll demystify how traffic flows from the outside world to your Pods.",
                room: "R115",
                persons: ["Steve Chan"],
                start: "10:20",
                end: "10:50",
              }}
              variant="room2"
            />
          </TaskInfoList>
        </div>
        <ScheduleTime time="11:00" />
        <div className="tw-grid tw-grid-cols-1 tw-gap-6 tablet:tw-grid-cols-2">
          <TaskInfoList className="tw-order-1 tablet:tw-order-1">
            <TalkInfoCard
			  className="tw-h-full"
              talk={{
                title: "A deep dive into BEVFormer",
                description: "BEVFormer is a transformer-based architecture for 3D object detection and multi-view perception. It projects multi-camera images into a bird’s-eye view (BEV) space and applies spatial and temporal attention to model the scene across time and viewpoints. This enables accurate and efficient object detection without relying on LiDAR data. In this talk, we will explore the core ideas behind BEVFormer, including its BEV representation, attention mechanisms, and how it integrates multi-camera inputs over time. ",
                room: "R122",
                persons: ["Alex Chiang"],
                start: "11:00",
                end: "11:30",
              }}
              variant="room1"
            />
          </TaskInfoList>
          <TaskInfoList className="tw-order-2 tablet:tw-order-1">
            <TalkInfoCard
			  className="tw-h-full"
              talk={{
                title:
                  "在系上管理運算資源的那檔事",
                description: "隨著運算需求的快速增長，如何有效管理並最大化運算資源的利用率成為一大挑戰。當節點數量增加，資源調度變得更加複雜，如何確保不同使用者的工作能夠順利執行，並讓整體運算效能發揮到極致？本次分享將介紹講者在交大資工建置運算服務時所遇到的實際問題，包括資源分配、使用者管理，以及服務可靠度等挑戰。講者也將分享解決這些問題的經驗，並帶領聽眾了解 Slurm 在高效能運算 (HPC) 環境中的角色，從基本概念到實際應用。無論你是對建置 HPC 叢集有興趣，或是想知道 Slurm 是怎麼運作的，本議程都將帶你掌握建置運算服務的概念與了解實務經驗",
                room: "R115",
                persons: ["Bo-Jun Huang"],
                start: "11:00",
                end: "11:30",
              }}
              variant="room2"
            />
          </TaskInfoList>
        </div>
        <ScheduleTime time="11:40" />
        <div className="tw-grid tw-grid-cols-1 tw-gap-6 tablet:tw-grid-cols-2">
          <TaskInfoList className="tw-order-1 tablet:tw-order-1">
            <TalkInfoCard
			  className="tw-h-full"
              talk={{
                title: "建構一套 LLM 輔助之符號代數運算系統",
                description:"儘管大型語言模型(LLM)的持續進步，數學能力逐漸加強，在碰到新穎且需要邏輯推演的問題，LLM 仍表現的不可靠。在本計畫中，我們嘗試一個新的途徑，讓 LLM 以「操作外部工具」的方式來使用代數運算系統(computer algebra system, CAS)。",
                room: "R122",
                persons: ["Sean Shih"],
                start: "11:40",
                end: "12:10",
              }}
              variant="room1"
            />
          </TaskInfoList>
          <TaskInfoList className="tw-order-2 tablet:tw-order-1">
            <TalkInfoCard
			  className="tw-h-full"
              talk={{
                title:
                  "測資保護戰：探討專案型 Online Judge 之資安問題",
                description: "為解決大量學生作業評測及讓學生能多次提交直到通過的需求，設計了自動化評測系統。系統架構採用 Jenkins 平台串連 Gitea，學生透過 git 提交作業觸發 Jenkins 自動評測並可查看 Terminal 輸出以診斷問題。此架構成功支援兩年課程評測，但隨之產生資安挑戰。學生曾利用程式執行權限探索 workspace 資料夾，將暗測測資輸出到 Terminal。面對此威脅，團隊實施 SSH remote worker 隔離服務，並開發「Sylinteri」工具將測試結果轉為 JSON 格式呈現，取代直接顯示 stdout 內容。最終引入 sandbox 機制，徹底解決測資被篡改或透過網路外洩的風險。",
                room: "R115",
                persons: ["Han-Xuan Huang"],
                start: "11:40",
                end: "12:10",
              }}
              variant="room2"
            />
          </TaskInfoList>
        </div>
        <ScheduleTime time="12:10" />
        <TalkInfoCard
          talk={{
            title: "Group photo",
            description: "",
            room: "All",
            start: "12:10",
            end: "12:20",
          }}
          variant="general"
        />
        <ScheduleTime time="12:20" />
        <TalkInfoCard
          talk={{
            title: "Lunch",
            description: "",
            room: "All",
            start: "12:20",
            end: "13:30",
          }}
          variant="general"
        />
        <ScheduleTime time="13:30" />
        <div className="tw-grid tw-grid-cols-1 tw-gap-6 tablet:tw-grid-cols-2">
          <TaskInfoList className="tw-order-1 tablet:tw-order-1">
			<TalkInfoCard
          	  talk={{
          	    title: "Coding sprint: modmesh, swportal",
          	    description: "",
          	    room: "R122",
          	    persons: [""],
          	    start: "13:30",
          	    end: "14:40",
          	  }}
          	  variant="room1"
          	/>
          </TaskInfoList>
          <TaskInfoList className="tw-order-2 tablet:tw-order-1">
			<TalkInfoCard
          	  talk={{
          	    title: "Coding sprint: pydoc-tw, utensor",
          	    description: "",
          	    room: "R115",
          	    persons: [""],
          	    start: "13:30",
          	    end: "14:40",
          	  }}
          	  variant="room2"
          	/>
          </TaskInfoList>
        </div>
        <ScheduleTime time="14:40" />
        <TalkInfoCard
          talk={{
            title: "Tea break",
            description: "",
            room: "All",
            start: "14:40",
            end: "15:40",
          }}
          variant="general"
        />
        <ScheduleTime time="15:40" />
        <div className="tw-grid tw-grid-cols-1 tw-gap-6 tablet:tw-grid-cols-2">
          <TaskInfoList className="tw-order-1 tablet:tw-order-1">
			<TalkInfoCard
          	  talk={{
          	    title: "Coding sprint: modmesh, swportal",
          	    description: "",
          	    room: "R122",
          	    persons: [""],
          	    start: "15:40",
          	    end: "16:50",
          	  }}
          	  variant="room1"
          	/>
          </TaskInfoList>
          <TaskInfoList className="tw-order-2 tablet:tw-order-1">
			<TalkInfoCard
          	  talk={{
          	    title: "Coding sprint: pydoc-tw, utensor",
          	    description: "",
          	    room: "R115",
          	    persons: [""],
          	    start: "15:40",
          	    end: "16:50",
          	  }}
          	  variant="room2"
          	/>
          </TaskInfoList>
        </div>
        <ScheduleTime time="16:50" />
        <TalkInfoCard
          talk={{
            title: "Closing",
            description: "",
            room: "All",
            start: "16:50",
            end: "17:00",
          }}
          variant="general"
        />
      </TaskInfoList>
    </Article>
  );
};

export default Page;
