"use client";

import {
  Background,
  type Edge,
  Handle,
  type Node,
  type NodeProps,
  Position,
  ReactFlow,
  useNodesState,
} from "@xyflow/react";
import {
  type KeyboardEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import { SectionLabel } from "./primitives";
import styles from "./walkthrough.module.css";

const CYCLE_DURATION = 6_000;

const profiles = [
  ["CALL-2401", "MB", "Maya Brooks", "+1 312 555 0142"],
  ["CALL-2402", "AR", "Alex Rivera", "+1 312 555 0168"],
  ["CALL-2403", "SK", "Sam Kim", "+1 312 555 0119"],
  ["CALL-2404", "JT", "Jordan Taylor", "+1 312 555 0174"],
  ["CALL-2405", "RP", "Riley Patel", "+1 312 555 0128"],
  ["CALL-2406", "CM", "Casey Morgan", "+1 312 555 0186"],
] as const;

type AgentFlowTone = "violet" | "accent" | "blue" | "amber";

type AgentFlowNode = Node<
  {
    number: string;
    title: string;
    detail: string;
    tone: AgentFlowTone;
  },
  "agent"
>;

const automationNodes: AgentFlowNode[] = [
  {
    id: "answer",
    position: { x: 12, y: 124 },
    data: {
      number: "01",
      title: "Answer",
      detail: "Greet caller + capture intent",
      tone: "violet",
    },
    type: "agent",
  },
  {
    id: "qualify",
    position: { x: 250, y: 26 },
    data: {
      number: "02",
      title: "Qualify",
      detail: "Ask service + timing",
      tone: "accent",
    },
    type: "agent",
  },
  {
    id: "act",
    position: { x: 250, y: 222 },
    data: {
      number: "03",
      title: "Act",
      detail: "Check calendar + reserve",
      tone: "blue",
    },
    type: "agent",
  },
  {
    id: "complete",
    position: { x: 488, y: 124 },
    data: {
      number: "04",
      title: "Complete",
      detail: "Confirm booking + update CRM",
      tone: "amber",
    },
    type: "agent",
  },
];

const automationEdges: Edge[] = [
  { id: "answer-qualify", source: "answer", target: "qualify" },
  { id: "answer-act", source: "answer", target: "act" },
  { id: "qualify-complete", source: "qualify", target: "complete" },
  { id: "act-complete", source: "act", target: "complete" },
];

const alerts = [
  ["HIGH", "Transfer rate above target", "2m ago"],
  ["MEDIUM", "Speech provider latency elevated", "8m ago"],
  ["LOW", "Campaign batch completed", "1h ago"],
] as const;

function WindowFrame({
  title,
  status,
  children,
}: {
  title: string;
  status: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className={styles.window}>
      <header className={styles.windowHeader}>
        <span aria-hidden="true" className={styles.windowMark} />
        <strong>{title}</strong>
        <span className={styles.windowStatus}>{status}</span>
      </header>
      {children}
    </div>
  );
}

function GovernanceDemo() {
  return (
    <div className={`${styles.demoCanvas} ${styles.governanceCanvas}`}>
      <WindowFrame
        title="Recent Voice Agent Calls"
        status={
          <>
            <span className={styles.statusDot} />
            Live
          </>
        }
      >
        <div className={styles.tableToolbar}>
          <span>Production call records</span>
          <span className={styles.demoAction}>Open dashboard</span>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.profileTable}>
            <thead>
              <tr>
                <th scope="col">Call ID</th>
                <th scope="col">Caller</th>
                <th scope="col">Phone</th>
                <th scope="col">Outcome</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map(([id, initials, name, email], index) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    <span className={styles.person}>
                      <span className={styles.avatar}>{initials}</span>
                      <strong>{name}</strong>
                    </span>
                  </td>
                  <td>{email}</td>
                  <td>
                    <span
                      className={
                        index === 2 ? styles.riskReview : styles.riskLow
                      }
                    >
                      {index === 2 ? "Transfer" : "Completed"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </WindowFrame>

      <aside className={`${styles.requestCard} ${styles.requestOne}`}>
        <div className={styles.requestHeading}>
          <span>Human handoff</span>
          <span className={styles.pendingPill}>Requested</span>
        </div>
        <strong>Technical question</strong>
        <p>Priority support · Account verified</p>
        <div className={styles.approvalRoute}>
          <span className={styles.approvedStep}>Voice agent</span>
          <i />
          <span>Support queue</span>
          <i />
          <span>Specialist</span>
        </div>
      </aside>

      <aside className={`${styles.requestCard} ${styles.requestTwo}`}>
        <div className={styles.requestHeading}>
          <span>Call outcome</span>
          <span className={styles.approvedPill}>Completed</span>
        </div>
        <strong>Appointment booked</strong>
        <p>CRM updated and confirmation sent during the call.</p>
      </aside>
    </div>
  );
}

function AgentFlowNode({ data, selected }: NodeProps<AgentFlowNode>) {
  return (
    <div
      className={`${styles.flowNode} ${styles[data.tone]} ${selected ? styles.flowNodeSelected : ""}`}
    >
      <Handle position={Position.Left} type="target" />
      <span className={styles.flowNodeNumber}>{data.number}</span>
      <div>
        <span>{data.title}</span>
        <strong>{data.detail}</strong>
      </div>
      <span className={styles.flowNodeCheck}>✓</span>
      <Handle position={Position.Right} type="source" />
    </div>
  );
}

const automationNodeTypes = { agent: AgentFlowNode };

function AutomationDemo() {
  const [selectedNodeId, setSelectedNodeId] = useState("qualify");
  const [nodes, , onNodesChange] = useNodesState(automationNodes);
  const selectedNode = nodes.find(
    (node) => node.id === selectedNodeId,
  );

  return (
    <div className={`${styles.demoCanvas} ${styles.automationCanvas}`}>
      <WindowFrame
        title="Lead Qualification Agent"
        status={
          <>
            <span className={styles.runningDot} />
            On a call
          </>
        }
      >
        <div className={styles.workflowBody}>
          <div className={styles.flowCanvas} aria-label="Interactive call flow">
            <ReactFlow
              edges={automationEdges}
              defaultViewport={{ x: 6, y: 92, zoom: 0.56 }}
              nodes={nodes.map((node) => ({
                ...node,
                selected: node.id === selectedNodeId,
              }))}
              nodeTypes={automationNodeTypes}
              nodesConnectable={false}
              nodesDraggable
              onNodeClick={(_, node) => setSelectedNodeId(node.id)}
              onNodesChange={onNodesChange}
              panOnDrag={false}
              proOptions={{ hideAttribution: true }}
              zoomOnDoubleClick={false}
              zoomOnPinch={false}
              zoomOnScroll={false}
            >
              <Background color="rgba(240, 68, 56, 0.2)" gap={18} size={1} />
            </ReactFlow>
            <span className={styles.flowHint}>
              Drag nodes · click to inspect
            </span>
          </div>
          <aside className={styles.runSummary}>
            <span className={styles.autoPill}>
              <span />
              Live workflow
            </span>
            <p>Current call</p>
            <strong>
              {selectedNode?.data.title ?? "Answer"} · Connected
            </strong>
            <div className={styles.summaryLog}>
              <span>
                <b>✓</b> Intent qualified
              </span>
              <span>
                <b>✓</b> Calendar checked
              </span>
              <span>
                <b>✓</b> CRM update ready
              </span>
            </div>
          </aside>
        </div>
        <dl className={styles.workflowMetrics}>
          <div>
            <dt>Calls today</dt>
            <dd>84</dd>
          </div>
          <div>
            <dt>Completed</dt>
            <dd>91%</dd>
          </div>
          <div>
            <dt>Avg. latency</dt>
            <dd>642ms</dd>
          </div>
        </dl>
      </WindowFrame>
    </div>
  );
}

function ChatMessage({
  agent,
  children,
}: {
  agent?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={agent ? styles.agentMessage : styles.userMessage}>
      <span className={styles.chatAvatar}>{agent ? "AI" : "U"}</span>
      <p>{children}</p>
    </div>
  );
}

function SupportDemo() {
  return (
    <div className={`${styles.demoCanvas} ${styles.supportCanvas}`}>
      <WindowFrame
        title="Inbound Support Agent"
        status={
          <>
            <span className={styles.statusDot} />
            On a call
          </>
        }
      >
        <div className={styles.supportTopline}>
          <div>
            <span>Order support</span>
            <strong>Live call · 08:42</strong>
          </div>
          <span className={styles.routePill}>↗ Auto-routed</span>
        </div>
        <div className={styles.chatBody}>
          <ChatMessage>
            I&apos;m calling about order 4521. It was supposed to arrive today.
          </ChatMessage>
          <ChatMessage agent>
            I found it. The carrier moved delivery to tomorrow before 5 PM.
          </ChatMessage>
          <ChatMessage>Can you text me the tracking link?</ChatMessage>
          <ChatMessage agent>
            Yes. I&apos;ve sent it to the mobile number on the order. Is there
            anything else I can help with?
          </ChatMessage>
        </div>
        <dl className={styles.chatMetrics}>
          <div>
            <dt>Avg. latency</dt>
            <dd>642ms</dd>
          </div>
          <div>
            <dt>Outcome</dt>
            <dd>Resolved</dd>
          </div>
          <div>
            <dt>Knowledge</dt>
            <dd>3 sources</dd>
          </div>
        </dl>
      </WindowFrame>
    </div>
  );
}

function MonitorDemo() {
  return (
    <div className={`${styles.demoCanvas} ${styles.monitorCanvas}`}>
      <WindowFrame
        title="Voice Operations"
        status={
          <>
            <span className={styles.statusDot} />
            Production
          </>
        }
      >
        <div className={styles.monitorTopline}>
          <span className={styles.monitorOverview}>
            Call operations overview <b>Live</b>
          </span>
          <span>
            <i className={styles.syncDot} />
            Last updated 2s ago
          </span>
        </div>
        <dl className={styles.monitorMetrics}>
          <div>
            <dt>Calls</dt>
            <dd>1,248</dd>
            <span className={styles.metricUp}>↑ 8.2%</span>
            <svg
              aria-hidden="true"
              className={styles.metricSpark}
              viewBox="0 0 96 24"
            >
              <polyline points="0,19 14,16 27,17 40,10 52,13 66,7 80,9 96,3" />
            </svg>
          </div>
          <div>
            <dt>Transfers</dt>
            <dd>8.4%</dd>
            <span className={styles.metricWarn}>↑ 12%</span>
            <svg
              aria-hidden="true"
              className={`${styles.metricSpark} ${styles.metricSparkWarn}`}
              viewBox="0 0 96 24"
            >
              <polyline points="0,18 14,17 27,15 40,16 52,10 66,12 80,7 96,9" />
            </svg>
          </div>
          <div>
            <dt>Latency</dt>
            <dd>642ms</dd>
            <span className={styles.metricDown}>↓ 4%</span>
            <svg
              aria-hidden="true"
              className={`${styles.metricSpark} ${styles.metricSparkDown}`}
              viewBox="0 0 96 24"
            >
              <polyline points="0,5 14,8 27,7 40,13 52,11 66,15 80,14 96,20" />
            </svg>
          </div>
        </dl>
        <div className={styles.monitorGrid}>
          <section
            className={styles.alertList}
            aria-labelledby="recent-alerts-title"
          >
            <div className={styles.alertHeading}>
              <strong id="recent-alerts-title">Recent alerts</strong>
              <span>View all</span>
            </div>
            {alerts.map(([level, message, time]) => (
              <div className={styles.alertRow} key={message}>
                <span className={styles[`level${level}`]}>{level}</span>
                <strong>{message}</strong>
                <time>{time}</time>
              </div>
            ))}
          </section>
          <aside className={styles.latencyAlert}>
            <span>ALERT</span>
            <strong>Speech latency elevated</strong>
            <p>One provider is 38% above its normal response range.</p>
            <small>Trace L-882 · us-east-1</small>
            <span className={styles.demoAction}>Inspect call traces ↗</span>
          </aside>
        </div>
      </WindowFrame>
    </div>
  );
}

const walkthroughs = [
  {
    label: "Review every outcome",
    caption: "Know what happened after every conversation.",
    body: "Keep transcripts, recordings, extracted data, dispositions, costs, and QA results together for fast review.",
    demo: <GovernanceDemo />,
  },
  {
    label: "Design the call flow",
    caption: "Turn your best call script into a working agent.",
    body: "Compose greetings, instructions, questions, tools, branches, and end-call outcomes in one visual workflow.",
    demo: <AutomationDemo />,
  },
  {
    label: "Ground every answer",
    caption: "Give the agent context while the caller is still speaking.",
    body: "Use knowledge sources and live tool calls to answer accurately, take action, and pass complete context into a handoff.",
    demo: <SupportDemo />,
  },
  {
    label: "Improve in production",
    caption: "See where conversations succeed or break down.",
    body: "Track latency, outcomes, transfers, and provider health so your next iteration starts with evidence.",
    demo: <MonitorDemo />,
  },
] as const;

export function Walkthrough() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: number | undefined;

    const clearTimer = () => {
      if (timer !== undefined) {
        window.clearTimeout(timer);
        timer = undefined;
      }
    };

    const schedule = () => {
      clearTimer();
      if (document.hidden || reducedMotion.matches || paused) return;
      timer = window.setTimeout(
        () => setActiveIndex((activeIndex + 1) % walkthroughs.length),
        CYCLE_DURATION,
      );
    };

    const handleVisibilityChange = () => schedule();
    const handleMotionChange = () => schedule();

    schedule();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    reducedMotion.addEventListener("change", handleMotionChange);

    return () => {
      clearTimer();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      reducedMotion.removeEventListener("change", handleMotionChange);
    };
  }, [activeIndex, paused]);

  const selectTab = (index: number, focus = false) => {
    setActiveIndex(index);
    if (focus) tabRefs.current[index]?.focus();
  };

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight")
      nextIndex = (index + 1) % walkthroughs.length;
    if (event.key === "ArrowLeft")
      nextIndex = (index - 1 + walkthroughs.length) % walkthroughs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = walkthroughs.length - 1;

    if (nextIndex !== undefined) {
      event.preventDefault();
      selectTab(nextIndex, true);
    }
  };

  const active = walkthroughs[activeIndex];

  return (
    <section className={styles.section} id="product-walkthrough" tabIndex={-1}>
      <div className={styles.heading}>
        <SectionLabel>Product walkthrough</SectionLabel>
        <h2>See the full conversation, not a black box</h2>
        <p>
          From the first word to the final action, every step stays visible,
          testable, and under your control.
        </p>
      </div>

      <div className={styles.tabFrame}>
        <div
          aria-label="Product walkthrough"
          className={styles.tabs}
          role="tablist"
        >
          {walkthroughs.map((walkthrough, index) => (
            <button
              aria-controls="evolv-ai-walkthrough-panel"
              aria-selected={activeIndex === index}
              className={styles.tab}
              id={`evolv-ai-walkthrough-tab-${index}`}
              key={walkthrough.label}
              onClick={() => selectTab(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              role="tab"
              tabIndex={activeIndex === index ? 0 : -1}
              type="button"
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {walkthrough.label}
            </button>
          ))}
        </div>
        <button
          aria-label={paused ? "Resume walkthrough" : "Pause walkthrough"}
          aria-pressed={paused}
          className={styles.pauseButton}
          onClick={() => setPaused((value) => !value)}
          type="button"
        >
          {paused ? "Play" : "Pause"}
        </button>
      </div>

      <div
        aria-labelledby={`evolv-ai-walkthrough-tab-${activeIndex}`}
        className={styles.panel}
        id="evolv-ai-walkthrough-panel"
        role="tabpanel"
      >
        <div className={styles.viewport}>{active.demo}</div>
        <div className={styles.copy}>
          <h3>{active.caption}</h3>
          <p>{active.body}</p>
        </div>
      </div>
    </section>
  );
}
