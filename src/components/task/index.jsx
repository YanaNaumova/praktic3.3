import styles from "./styles.module.css";

const { pStyle } = styles;

function Task({ task }) {
  return <p className={pStyle}>{task}</p>;
}

export default Task;
