import styles from './App.module.scss';

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src="/images/Ellement_logo.png" alt="logo" />

        <nav>
          <ul>
            <li>
              <a className={styles.link} href="/">
                Welcome
              </a>
            </li>
            <li>
              <a className={styles.link} href="/">
                Shop
              </a>
            </li>
            <li>
              <a className={styles.link} href="/">
                Build Your Box
              </a>
            </li>
            <li>
              <a className={styles.link} href="/">
                By Condition
              </a>
            </li>
            <li>
              <a className={styles.link} href="/">
                Our Quality
              </a>
            </li>
            <li>
              <a className={styles.link} href="/">
                Journal
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h1>Prenatals made just for you.</h1>
          <p>
            {' '}
            Welcome to Ellement, the world’s first personalized prenatal
            supplement. Packed fresh each month for your unique needs during
            every stage of your journey—from preconception to postpartum.
          </p>
          <div className={styles.buttons}>
              <Button Box>Build Your Box</Button>
        </section>

        <section>
          <p>AS FEATURED BY</p>
// ADD LOGOS
        </section>

        <section>
// ADD IMG
          <h1>Every body is unique. Your supplements should be, too.
          </h1>
          <p>Ellement takes all the guesswork out of prenatal vitamins. Every month, you receive custom-made daily packets that are personalized for your specific nutritional needs and context, simplifying your prenatal supplement routine.
        </p>
        <div className={styles.button}>
              <Button Box>Build Your Box</Button>
        </section>

        <section>
// RUNNING BANNER
        </section>

        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </main>

      <footer></footer>
    </div>
  );
}
