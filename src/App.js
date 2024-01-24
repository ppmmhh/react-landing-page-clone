import styles from './App.module.scss';

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/images/Ellement_logo.png" alt="logo" />
        </div>
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
          <img src="/images/Ellement_background_header.jpg" alt="header" />
        </section>
        <section>
          <h1>Prenatals made just for you.</h1>
          <p>
            {' '}
            Welcome to Ellement, the world’s first personalized prenatal
            supplement. Packed fresh each month for your unique needs during
            every stage of your journey—from preconception to postpartum.
          </p>
          <div className={styles.button}>
            <Button>Build Your Box</Button>
          </div>
        </section>

        <section>
          <p>AS FEATURED BY</p>
        </section>

        <section>
          <h1>Every body is unique. Your supplements should be, too.</h1>
          <p>
            Ellement takes all the guesswork out of prenatal vitamins. Every
            month, you receive custom-made daily packets that are personalized
            for your specific nutritional needs and context, simplifying your
            prenatal supplement routine.
          </p>
          <div className={styles.button}>
            <Button>Build Your Box</Button>
          </div>
        </section>

        <section></section>

        <section>
          <p>Practitioner Testimonials</p>
        </section>

        <section>
          <h1>The purest prenatals ever made.</h1>
          <p>The nutrients you need and nothing else</p>
          <p>No fillers or additives</p>
          <p>Designed by doctors</p>
          <p>Optimized for bioavailability</p>
          <p>Committed to quality</p>
          <div className={styles.button}>
            <Button>Learn More</Button>
          </div>
        </section>

        <section>
          <h1>What if I have a unique condition?</h1>
        </section>
        <section></section>
      </main>

      <footer></footer>
    </div>
  );
}
