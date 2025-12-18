import StatusText from "./components/StatusText.jsx"
import { Subtitle } from "./components/Subtitle.jsx"
import Title from "./components/Title.jsx"
import styles from "./App.module.css"

// PascalCase camelCase
export default function App() {

  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  )
}