"use client";

import {
  Background,
  type Edge,
  Handle,
  type Node,
  type NodeProps,
  Position,
  ReactFlow,
  type ReactFlowInstance,
  useNodesState,
} from "@xyflow/react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Maximize2, MessageSquare, Phone, Play, RotateCcw, Wrench } from "lucide-react";
import {
  type CSSProperties,
  type KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import { SectionLabel } from "./primitives";
import styles from "./walkthrough.module.css";
import { WalkthroughCursor } from "./walkthrough-cursor";
import fx from "./walkthrough-demo.module.css";
import { DemoButton, DemoInspector, DemoMetric, InspectButton, WindowFrame } from "./walkthrough-demo-ui";
import { GovernanceDemo, MonitorDemo, SupportDemo } from "./walkthrough-record-demos";
import { TemplateDemo } from "./walkthrough-template-demo";

const CYCLE_DURATION = 14_000;

type AgentFlowTone = "violet" | "accent" | "blue" | "amber";

type AgentFlowNode = Node<
  {
    number: string;
    title: string;
    detail: string;
    tone: AgentFlowTone;
    kind: string;
    prompt: string;
    tool: string;
    input: Position;
    output: Position;
  },
  "agent"
>;

const automationNodes: AgentFlowNode[] = [
  {
    id: "answer",
    position: { x: 24, y: 24 },
    data: {
      number: "01",
      title: "Answer",
      detail: "Greet caller + capture intent",
      tone: "violet",
      kind: "Start Node",
      prompt: "Welcome the caller and ask which service they need. Confirm the reason for their call.",
      tool: "Opening message", input: Position.Left, output: Position.Right,
    },
    type: "agent",
  },
  {
    id: "qualify",
    position: { x: 404, y: 24 },
    data: {
      number: "02",
      title: "Qualify",
      detail: "Ask service + timing",
      tone: "accent",
      kind: "Agent Node",
      prompt: "Collect the service, preferred day, and callback number. Ask one question at a time.",
      tool: "3 fields to collect", input: Position.Left, output: Position.Bottom,
    },
    type: "agent",
  },
  {
    id: "act",
    position: { x: 404, y: 238 },
    data: {
      number: "03",
      title: "Act",
      detail: "Check calendar + reserve",
      tone: "blue",
      kind: "Agent Node",
      prompt: "Check availability. Only confirm an appointment after the scheduling tool succeeds.",
      tool: "check_availability", input: Position.Top, output: Position.Left,
    },
    type: "agent",
  },
  {
    id: "complete",
    position: { x: 24, y: 238 },
    data: {
      number: "04",
      title: "Complete",
      detail: "Confirm booking + update CRM",
      tone: "amber",
      kind: "End Node",
      prompt: "Read back the confirmed details, explain the next step, and thank the caller.",
      tool: "end_call", input: Position.Right, output: Position.Bottom,
    },
    type: "agent",
  },
];

const automationEdges: Edge[] = [
  { id: "answer-qualify", source: "answer", target: "qualify" },
  { id: "qualify-act", source: "qualify", target: "act" },
  { id: "act-complete", source: "act", target: "complete" },
];

function AgentFlowNode({ data, selected }: NodeProps<AgentFlowNode>) {
  return (
    <div
      className={`${styles.flowNode} ${styles[data.tone]} ${selected ? styles.flowNodeSelected : ""}`}
    >
      <Handle position={data.input} type="target" />
      <header className={styles.flowNodeHeader}>
        <span className={styles.nodeIcon}>{data.number === "01" ? <Phone size={18} /> : data.number === "04" ? <Check size={18} /> : <MessageSquare size={18} />}</span>
        <strong>{data.title}</strong><span className={styles.nodeKind}>{data.kind}</span>
      </header>
      <p className={styles.nodePrompt}>{data.prompt}</p>
      <InspectButton
        className={`${styles.nodeTools} ${fx.nodeTool} nodrag nopan`}
        aria-label={`Inspect ${data.title} tool`}
        detail={{ title: data.tool, description: data.detail, fields: [["Node", data.title], ["Instruction", data.prompt], ["Role", data.kind], ["Execution", "Configured for this sample workflow"]] }}
      ><Wrench size={13} /><span>{data.tool}</span><span className={styles.nodeNumber}>{data.number}</span></InspectButton>
      <Handle position={data.output} type="source" />
    </div>
  );
}

const automationNodeTypes = { agent: AgentFlowNode };

function AutomationDemo() {
  const flowRef = useRef<ReactFlowInstance<AgentFlowNode> | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState("qualify");
  const [step, setStep] = useState(-1);
  const [nodes, setNodes, onNodesChange] = useNodesState(automationNodes);
  const reduced = useReducedMotion();
  const selectedNode = nodes.find(
    (node) => node.id === selectedNodeId,
  );
  const fitFlow = () => void flowRef.current?.fitView({ padding: 0.12, maxZoom: 0.9, duration: reduced ? 0 : 300 });
  const advanceFlow = () => {
    const next = (step + 1) % automationNodes.length;
    setStep(next);
    setSelectedNodeId(automationNodes[next].id);
  };

  return (
    <div className={`${styles.demoCanvas} ${styles.automationCanvas}`}>
      <WindowFrame
        title="Lead Qualification Agent"
        status={
          <>
            <span className={styles.runningDot} />
            Draft workflow
          </>
        }
      >
        <div className={styles.workflowBody}>
          <div className={styles.flowCanvas} aria-label="Interactive call flow">
            <div className={fx.flowToolbar}>
              <span className={fx.flowProgress} aria-live="polite">{step < 0 ? "SAMPLE CALL" : `${step + 1} / 4 · ${automationNodes[step].data.title}`}</span>
              <DemoButton className={`${fx.textAction} ${fx.primaryAction}`} onClick={advanceFlow}><Play size={11} />{step < 0 ? "Step through" : step === 3 ? "Replay" : "Next step"}</DemoButton>
              <DemoButton className={fx.textAction} aria-label="Reset call flow" onClick={() => { setNodes(automationNodes); setStep(-1); setSelectedNodeId("qualify"); }}><RotateCcw size={12} /></DemoButton>
            </div>
            <ReactFlow<AgentFlowNode>
              edges={automationEdges.map((edge, index) => ({ ...edge, style: { stroke: step > index ? "#f58b82" : "#71717a", strokeWidth: 1.5 } }))}
              fitView
              fitViewOptions={{ padding: 0.12, minZoom: 0.65, maxZoom: 0.9 }}
              minZoom={0.5}
              maxZoom={1.3}
              colorMode="dark"
              defaultEdgeOptions={{ type: "smoothstep", style: { stroke: "#71717a", strokeWidth: 1.5 } }}
              onInit={(instance) => { flowRef.current = instance; }}
              nodes={nodes.map((node) => ({
                ...node,
                selected: node.id === selectedNodeId,
              }))}
              nodeTypes={automationNodeTypes}
              nodesConnectable={false}
              nodesDraggable
              onNodeClick={(_, node) => { setSelectedNodeId(node.id); setStep(-1); }}
              onNodeDragStart={() => setStep(-1)}
              onEdgeClick={(_, edge) => setSelectedNodeId(edge.target)}
              onNodesChange={onNodesChange}
              panOnDrag
              proOptions={{ hideAttribution: true }}
              zoomOnDoubleClick={false}
              zoomOnPinch={false}
              zoomOnScroll={false}
            >
              <Background color="rgba(240, 68, 56, 0.2)" gap={18} size={1} />
            </ReactFlow>
            <DemoButton className={styles.fitFlow} aria-label="Fit call flow to view" onClick={fitFlow}><Maximize2 size={15} /></DemoButton>
            <span className={styles.flowHint}>Drag to explore · select a node to inspect</span>
          </div>
          <aside aria-live="polite">
            <InspectButton className={`${styles.runSummary} ${fx.inspector}`} aria-label="Inspect selected node" detail={{ title: selectedNode?.data.title ?? "Qualify", description: selectedNode?.data.prompt ?? "", fields: [["Type", selectedNode?.data.kind ?? "Agent Node"], ["Tool", selectedNode?.data.tool ?? ""], ["Step", selectedNode?.data.number ?? "02"]] }}>
              <div><span className={styles.inspectorLabel}>{step < 0 ? "SELECTED NODE" : "SAMPLE CALL STEP"}</span><strong>{selectedNode?.data.title ?? "Qualify"}</strong></div>
              <p>{selectedNode?.data.prompt}</p>
              <span className={styles.inspectorTool}><Wrench size={14} />{selectedNode?.data.tool}<ArrowUpRight size={12} /></span>
            </InspectButton>
          </aside>
        </div>
        <div className={fx.metrics}>
          <DemoMetric label="Calls today" value="84" detail={{ title: "Calls today", description: "Sample activity for this qualification workflow.", fields: [["Inbound calls", "62"], ["Outbound calls", "22"], ["Total", "84"]] }} />
          <DemoMetric label="Completed" value="91%" detail={{ title: "Workflow completion", description: "Calls reaching a terminal outcome in the sample period.", fields: [["Completed", "76 calls"], ["Transferred", "5 calls"], ["Ended early", "3 calls"]] }} />
          <DemoMetric label="Avg. latency" value="642ms" detail={{ title: "Workflow latency", description: "Average response time across sample calls.", fields: [["Speech recognition", "142ms"], ["Reasoning", "310ms"], ["Voice generation", "190ms"]] }} />
        </div>
      </WindowFrame>
    </div>
  );
}

const walkthroughs = [
  {
    label: "Start with a template",
    caption: "Your first agent starts with a simple choice.",
    body: "Choose a role to get a starting script. Then customize how your agent greets callers, asks questions, and handles the next step.",
    demo: null,
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
    label: "Review every outcome",
    caption: "Know what happened after every conversation.",
    body: "Keep transcripts, recordings, extracted data, dispositions, costs, and QA results together for fast review.",
    demo: <GovernanceDemo />,
  },
  {
    label: "Improve in production",
    caption: "See where conversations succeed or break down.",
    body: "Track latency, outcomes, transfers, and provider health so your next iteration starts with evidence.",
    demo: <MonitorDemo />,
  },
] as const;

export function Walkthrough() {
  const reduced = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const inView = useInView(viewportRef, { amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [templateReplay, setTemplateReplay] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const elapsedRef = useRef(0);
  const activeIndexRef = useRef(0);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame: number | undefined;
    let lastTime = performance.now();

    const cancelFrame = () => {
      if (frame !== undefined) {
        window.cancelAnimationFrame(frame);
        frame = undefined;
      }
    };

    const renderProgress = () => {
      const progress = reducedMotion.matches ? 1 : elapsedRef.current / CYCLE_DURATION;
      tabRefs.current[activeIndexRef.current]?.style.setProperty("--walkthrough-progress", String(progress));
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
    };

    const tick = (now: number) => {
      elapsedRef.current += now - lastTime;
      lastTime = now;
      if (elapsedRef.current >= CYCLE_DURATION) {
        const steps = Math.floor(elapsedRef.current / CYCLE_DURATION);
        elapsedRef.current %= CYCLE_DURATION;
        activeIndexRef.current = (activeIndexRef.current + steps) % walkthroughs.length;
        setActiveIndex(activeIndexRef.current);
      }
      renderProgress();
      frame = window.requestAnimationFrame(tick);
    };

    const syncPlayback = () => {
      cancelFrame();
      renderProgress();
      if (document.hidden || reducedMotion.matches || paused || !inView) return;
      lastTime = performance.now();
      frame = window.requestAnimationFrame(tick);
    };

    syncPlayback();
    document.addEventListener("visibilitychange", syncPlayback);
    reducedMotion.addEventListener("change", syncPlayback);

    return () => {
      cancelFrame();
      document.removeEventListener("visibilitychange", syncPlayback);
      reducedMotion.removeEventListener("change", syncPlayback);
    };
  }, [paused, inView]);

  const selectTab = (index: number, focus = false) => {
    if (index === 0) setTemplateReplay((value) => value + 1);
    elapsedRef.current = 0;
    activeIndexRef.current = index;
    if (progressRef.current) progressRef.current.style.transform = "scaleX(0)";
    tabRefs.current[index]?.style.setProperty("--walkthrough-progress", "0");
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
        <h2>From your first agent to a better call.</h2>
        <p>
          Start with a template, shape the conversation, and learn from every call.
          This interactive preview uses sample data.
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
          <div className={styles.tabIndicator} aria-hidden="true" style={{ "--tab-index": activeIndex, "--tab-column": activeIndex % 2, "--tab-row": Math.floor(activeIndex / 2) } as CSSProperties}><span ref={progressRef} /></div>
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
        <div ref={viewportRef} className={`${styles.viewport} ${activeIndex === 0 ? styles.templateViewport : ""}`} onPointerDownCapture={() => setPaused(true)} onFocusCapture={() => setPaused(true)}>
          <DemoInspector key={activeIndex}>
          <motion.div className={fx.demoStage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : 0.15 }}>
            {activeIndex === 0 ? <TemplateDemo key={templateReplay} paused={paused || !inView} playOnSelect={templateReplay > 0} onContinue={() => selectTab(1, true)} /> : active.demo}
          </motion.div>
          <WalkthroughCursor />
          </DemoInspector>
        </div>
        <div className={styles.copy}>
          <h3>{active.caption}</h3>
          <p>{active.body}</p>
        </div>
      </div>
    </section>
  );
}
