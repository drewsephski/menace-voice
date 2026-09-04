import styles from "./statement.module.css";

export function Statement() {
  return (
    <section className={styles.section} aria-labelledby="call-control-heading">
      <h2 id="call-control-heading">
        Decide what your agent can do. And when a person should take over.
      </h2>
      <p>
        Set the questions, connect the tools, and define the transfer conditions
        in your workflow. Review the transcript and recording after the call.
      </p>
    </section>
  );
}
