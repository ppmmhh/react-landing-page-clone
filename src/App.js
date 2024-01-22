import './App.css';

export default function App() {
  return (
  <div>
    <header>

      <div className='Logo'/>

      <nav>
        <ul>
          <li>
            <a className={styles.link} href="/">Welcome</a>
          </li>
          <li>
            <a className={styles.link} href="/">Shop</a>
          </li>
          <li>
            <a className={styles.link} href="/">Build Your Box</a>
          </li>
          <li>
            <a className={styles.link} href="/">By Condition</a>
          </li>
          <li>
            <a className={styles.link} href="/">Our Quality</a>
          </li>
          <li>
            <a className={styles.link} href="/">Journal</a>
          </li>
        </ul>
      </nav>

    </header>
  </div>

}
