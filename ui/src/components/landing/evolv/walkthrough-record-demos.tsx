"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownUp, ArrowUpRight, Check, FileText, Wrench } from "lucide-react";
import { useState } from "react";

import styles from "./walkthrough.module.css";
import fx from "./walkthrough-demo.module.css";
import { DemoButton, type DemoDetail, DemoMetric, InspectButton, useDemoInspector, WindowFrame } from "./walkthrough-demo-ui";

const calls = [
  { id: "CALL-2401", initials: "MB", name: "Maya Brooks", phone: "+1 312 555 0142", outcome: "Completed", duration: "2m 34s", intent: "Schedule a service visit", result: "Tuesday, 10:00 AM · appointment confirmed" },
  { id: "CALL-2402", initials: "AR", name: "Alex Rivera", phone: "+1 312 555 0168", outcome: "Completed", duration: "1m 52s", intent: "Reschedule an appointment", result: "Moved to Wednesday, 2:00 PM" },
  { id: "CALL-2403", initials: "SK", name: "Sam Kim", phone: "+1 312 555 0119", outcome: "Transfer", duration: "3m 08s", intent: "Ask a technical question", result: "Specialist handoff with conversation summary" },
  { id: "CALL-2404", initials: "JT", name: "Jordan Taylor", phone: "+1 312 555 0174", outcome: "Completed", duration: "2m 11s", intent: "Check appointment status", result: "Existing booking details read back" },
  { id: "CALL-2405", initials: "RP", name: "Riley Patel", phone: "+1 312 555 0128", outcome: "Completed", duration: "1m 46s", intent: "Request opening hours", result: "Hours and service area confirmed" },
  { id: "CALL-2406", initials: "CM", name: "Casey Morgan", phone: "+1 312 555 0186", outcome: "Completed", duration: "2m 58s", intent: "Book a follow-up", result: "Friday, 11:30 AM · appointment confirmed" },
];

function callDetail(call: typeof calls[number]): DemoDetail {
  return {
    title: `${call.name} · ${call.id}`,
    description: call.intent,
    fields: [["Caller", call.phone], ["Duration", call.duration], ["Disposition", call.outcome], ["Result", call.result], ["Review", "Transcript, tool responses, and disposition linked"]],
    note: "Illustrative call record. No real call is placed from this preview.",
  };
}

export function GovernanceDemo() {
  const [filter, setFilter] = useState("All");
  const [ascending, setAscending] = useState(true);
  const records = calls.filter((call) => filter === "All" || call.outcome === filter);
  if (!ascending) records.reverse();

  return (
    <div className={`${styles.demoCanvas} ${styles.governanceCanvas}`}>
      <WindowFrame title="Recent Voice Agent Calls" status={<><span className={styles.statusDot} />Live</>}>
        <div className={styles.tableToolbar}>
          <div className={fx.segmented} role="group" aria-label="Filter call outcomes">
            {["All", "Completed", "Transfer"].map((label) => <DemoButton key={label} className={fx.segment} aria-pressed={filter === label} onClick={() => setFilter(label)}>{label}</DemoButton>)}
          </div>
          <span className={fx.recordCount} aria-live="polite">{records.length} calls</span>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.profileTable}>
            <thead><tr>
              <th scope="col" aria-sort={ascending ? "ascending" : "descending"}><DemoButton onClick={() => setAscending((value) => !value)} aria-label="Reverse call order">Call ID <ArrowDownUp size={10} style={{ display: "inline" }} /></DemoButton></th>
              <th scope="col">Caller</th><th scope="col">Phone</th><th scope="col">Outcome</th>
            </tr></thead>
            <tbody>
              {records.map((call) => (
                <tr key={call.id} className={fx.row}>
                  <td><InspectButton className={fx.rowButton} detail={callDetail(call)} aria-label={`Inspect call from ${call.name}`}>{call.id}</InspectButton></td>
                  <td><span className={styles.person}><span className={styles.avatar}>{call.initials}</span><strong>{call.name}</strong></span></td>
                  <td>{call.phone}</td>
                  <td><span className={call.outcome === "Transfer" ? styles.riskReview : styles.riskLow}>{call.outcome}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </WindowFrame>
      <aside className={`${styles.requestCard} ${styles.requestOne}`}>
        <InspectButton className={fx.cardButton} detail={callDetail(calls[2])} aria-label="Inspect human handoff">
          <span className={styles.requestHeading}><span>Human handoff</span><span className={styles.pendingPill}>Requested</span></span>
          <strong>Technical question</strong><p>Priority support · Account verified</p>
          <span className={styles.approvalRoute}><span className={styles.approvedStep}>Voice agent</span><i /><span>Support queue</span><i /><span>Specialist</span></span>
          <span className={fx.cardHint}>Inspect handoff <ArrowUpRight size={13} /></span>
        </InspectButton>
      </aside>
      <aside className={`${styles.requestCard} ${styles.requestTwo}`}>
        <InspectButton className={fx.cardButton} detail={callDetail(calls[0])} aria-label="Inspect booked appointment">
          <span className={styles.requestHeading}><span>Call outcome</span><span className={styles.approvedPill}>Completed</span></span>
          <strong>Appointment booked</strong><p>CRM updated and confirmation sent during the sample call.</p>
          <span className={fx.cardHint}>View booking <ArrowUpRight size={13} /></span>
        </InspectButton>
      </aside>
    </div>
  );
}

const supportMessages = [
  { agent: false, text: "I'm calling about order 4521. It was supposed to arrive today.", detail: "The caller provides an order number and asks about a delayed delivery.", fields: [["Intent", "Order delivery status"], ["Extracted order", "4521"], ["Next action", "Look up the order"]] },
  { agent: true, text: "I found it. The carrier moved delivery to tomorrow before 5 PM.", detail: "The response is grounded in the shipping tool result.", fields: [["Source", "lookup_order"], ["Delivery estimate", "Tomorrow, before 5 PM"], ["Response latency", "642ms"]] },
  { agent: false, text: "Can you text me the tracking link?", detail: "The caller requests a text message with tracking information.", fields: [["Intent", "Send tracking link"], ["Channel", "SMS"], ["Recipient", "Verified mobile number on order"]] },
  { agent: true, text: "Yes. I've sent it to the mobile number on the order. Is there anything else I can help with?", detail: "The agent confirms only after the sample messaging tool reports success.", fields: [["Tool", "send_tracking_sms"], ["Result", "Sent in this sample conversation"], ["Disposition", "Resolved"]] },
] satisfies Array<{ agent: boolean; text: string; detail: string; fields: [string, string][] }>;

const orderDetail: DemoDetail = {
  title: "lookup_order · tool result", description: "The agent looks up the order before answering the delivery question.",
  fields: [["Input", "order_id: 4521"], ["Status", "In transit"], ["Estimated delivery", "Tomorrow, before 5 PM"], ["Tool duration", "240ms"], ["Tracking", "Available from the carrier"]],
  note: "This is a sample tool response; no external request is made.",
};

export function SupportDemo() {
  return (
    <div className={`${styles.demoCanvas} ${styles.supportCanvas}`}>
      <WindowFrame title="Inbound Support Agent" status={<><span className={styles.statusDot} />On a call</>}>
        <div className={styles.supportTopline}>
          <InspectButton detail={orderDetail}><span>Order support</span><strong>Live call · 08:42</strong></InspectButton>
          <InspectButton className={styles.routePill} detail={{ title: "Support routing", description: "The order-support route is selected from the caller's intent.", fields: [["Matched intent", "Order status"], ["Agent", "Inbound support"], ["Handoff rule", "Transfer if order lookup fails"]] }}>↗ Auto-routed</InspectButton>
        </div>
        <div className={styles.chatBody}>
          {supportMessages.map((message, index) => (
            <div key={message.text}>
              <InspectButton
                className={`${message.agent ? styles.agentMessage : styles.userMessage} ${fx.message}`}
                aria-label={`Inspect ${message.agent ? "agent" : "caller"} message ${index + 1}`}
                detail={{ title: message.agent ? "Agent response" : "Caller intent", description: message.detail, fields: message.fields }}
              ><span className={styles.chatAvatar}>{message.agent ? "AI" : "U"}</span><p>{message.text}</p></InspectButton>
              {index === 1 && <InspectButton className={`${styles.toolEvent} ${fx.tool}`} detail={orderDetail}><Wrench size={14} /><code>lookup_order</code><span>240ms</span><Check size={13} /></InspectButton>}
            </div>
          ))}
        </div>
        <div className={styles.knowledgeSources}>
          <FileText size={14} />
          <InspectButton className={fx.source} detail={orderDetail}>Order status</InspectButton>
          <InspectButton className={fx.source} detail={{ title: "Delivery policy", description: "The knowledge excerpt available to this sample agent.", fields: [["Delivery windows", "Carrier estimates may change while an order is in transit."], ["Tracking requests", "Send the carrier tracking link to the verified mobile number."], ["Escalation", "Transfer missing or damaged deliveries to a specialist."]] }}>Delivery policy</InspectButton>
        </div>
        <div className={fx.metrics}>
          <DemoMetric label="Avg. latency" value="642ms" detail={{ title: "Response latency", description: "Time from the caller finishing a turn to the start of the agent response.", fields: [["Speech recognition", "142ms"], ["Reasoning", "310ms"], ["Voice generation", "190ms"]] }} />
          <DemoMetric label="Outcome" value="Resolved" detail={{ title: "Conversation outcome", description: "The caller received an updated delivery estimate and a tracking link.", fields: [["Intent", "Order status + tracking"], ["Tool calls", "lookup_order, send_tracking_sms"], ["Handoff", "Not needed"]] }} />
          <DemoMetric label="Knowledge" value="3 sources" detail={{ title: "Grounding sources", description: "The sample agent combines live order information with approved guidance.", fields: [["Live source", "Order 4521"], ["Knowledge", "Delivery policy"], ["Customer context", "Verified contact record"]] }} />
        </div>
      </WindowFrame>
    </div>
  );
}

const alerts = [
  { level: "HIGH", title: "Transfer rate above target", time: "2m ago", summary: "Transfers reached 8.4% against a 7% target.", trace: "L-879", fields: [["Observed", "8.4% of calls"], ["Target", "Below 7%"], ["Common reason", "Requests outside the configured service area"]] },
  { level: "MEDIUM", title: "Speech provider latency elevated", time: "8m ago", summary: "One provider is 38% above its normal response range.", trace: "L-882", fields: [["Observed", "Voice generation: 262ms"], ["Baseline", "Voice generation: 190ms"], ["Region", "us-east-1"]] },
  { level: "LOW", title: "Campaign batch completed", time: "1h ago", summary: "The sample outreach batch has finished processing.", trace: "B-204", fields: [["Contacts", "120"], ["Connected", "84"], ["Follow-ups", "36 queued for review"]] },
] satisfies Array<{ level: string; title: string; time: string; summary: string; trace: string; fields: [string, string][] }>;

export function MonitorDemo() {
  const [period, setPeriod] = useState("24h");
  const [selected, setSelected] = useState(1);
  const [acknowledged, setAcknowledged] = useState<string[]>([]);
  const inspect = useDemoInspector();
  const reduced = useReducedMotion();
  const alert = alerts[selected];
  const metrics = period === "24h" ? ["1,248", "8.4%", "642ms"] : ["8,736", "7.2%", "618ms"];

  return (
    <div className={`${styles.demoCanvas} ${styles.monitorCanvas}`}>
      <WindowFrame title="Voice Operations" status={<><span className={styles.statusDot} />Production</>}>
        <div className={styles.monitorTopline}>
          <span className={styles.monitorOverview}>Call operations overview <b>Demo</b></span>
          <div className={fx.segmented} role="group" aria-label="Metric time range">
            {["24h", "7d"].map((range) => <DemoButton key={range} aria-pressed={period === range} className={fx.segment} onClick={() => setPeriod(range)}>{range}</DemoButton>)}
          </div>
        </div>
        <div className={`${fx.metrics} ${fx.largeMetrics}`}>
          {["Calls", "Transfers", "Latency"].map((label, index) => <DemoMetric key={label} label={label} value={metrics[index]} change={["↑ 8.2% volume", "Target: below 7%", "↓ 4% response time"][index]} detail={{ title: `${label} · ${period}`, description: "Sample operations metrics for the selected reporting window.", fields: [["Period", period === "24h" ? "Last 24 hours" : "Last 7 days"], [label, metrics[index]], ["Comparison", ["Call volume is up 8.2% over the preceding period.", "Review handoff reasons to identify gaps in the call flow.", "Speech recognition, reasoning, and voice generation combined."][index]]] }} />)}
        </div>
        <div className={styles.monitorGrid}>
          <section className={styles.alertList} aria-labelledby="recent-alerts-title">
            <div className={styles.alertHeading}><strong id="recent-alerts-title">Recent alerts</strong><InspectButton detail={{ title: "Alert history", description: "All alerts in this sample workspace.", fields: alerts.map((item) => [item.level, `${item.title} · ${acknowledged.includes(item.trace) ? "Reviewed" : "Open"}`]) }}>View all <ArrowUpRight size={11} style={{ display: "inline" }} /></InspectButton></div>
            {alerts.map((item, index) => <DemoButton className={`${styles.alertRow} ${fx.alertButton} ${acknowledged.includes(item.trace) ? fx.acknowledged : ""}`} key={item.trace} aria-pressed={selected === index} onClick={() => setSelected(index)}><span className={styles[`level${item.level}`]}>{item.level}</span><strong>{item.title}</strong><time>{acknowledged.includes(item.trace) ? "Reviewed" : item.time}</time></DemoButton>)}
          </section>
          <motion.aside key={alert.trace} className={styles.latencyAlert} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : 0.15 }} aria-live="polite">
            <span>{acknowledged.includes(alert.trace) ? "REVIEWED" : alert.level}</span><strong>{alert.title}</strong><p>{alert.summary}</p><small>Trace {alert.trace} · sample</small>
            <div className={fx.alertActions}>
              <DemoButton className={fx.textAction} onClick={() => inspect({ title: `Trace ${alert.trace}`, description: alert.summary, fields: alert.fields })}>Inspect trace <ArrowUpRight size={12} /></DemoButton>
              <DemoButton className={fx.textAction} disabled={acknowledged.includes(alert.trace)} onClick={() => setAcknowledged((current) => [...current, alert.trace])}>{acknowledged.includes(alert.trace) ? "Reviewed" : "Mark reviewed"}<Check size={12} /></DemoButton>
            </div>
          </motion.aside>
        </div>
      </WindowFrame>
    </div>
  );
}
