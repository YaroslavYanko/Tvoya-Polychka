import { LineImages } from "@app/common/components/line-images/line-images";
import styles from "./rules.module.css";

export const Rules = () => {


  return (
    <>
      <LineImages />
      <div className={styles.container}>
        <h3>Політика конфіденційності</h3>
        <ul>
          <li>
            Зважаючи на важливість збору, зберігання та обробки персональних
            даних наших клієнтів, ми зобов'язуємося забезпечувати їх
            конфіденційність та захист у відповідності з вимогами законодавства
            про захист персональних даних.
          </li>
          <li>
            Наш інтернет-магазин збирає інформацію виключно з метою здійснення
            покупок та надання наших послуг. Ми зобов'язуємося не передавати
            ваші персональні дані третім особам, окрім випадків, передбачених
            законодавством.
          </li>
          <li>
            Ми застосовуємо відповідні технічні та організаційні заходи для
            захисту персональних даних від несанкціонованого доступу, втрати або
            зловживання.
          </li>
          <li>
            Також хотів би зазначити, що наш інтернет-магазин не збирає та не
            зберігає конфіденційну інформацію про ваші банківські картки та інші
            реквізити платіжних систем. Оплата за товар можлива лише при
            отриманні його на пошті або шляхом переказу на наші реквізити
            банківської картки. Ми забезпечуємо всі необхідні заходи для захисту
            ваших персональних даних під час обробки платіжних операцій.
          </li>
          <li>
            Клієнти мають право на доступ, виправлення своїх персональних даних,
            які зберігаються в нашому інтернет-магазині.
          </li>
          <li>
            Якщо у вас є будь-які питання щодо нашої політики конфіденційності,
            будь ласка, зв'яжіться з нами за допомогою контактної інформації,
            наведеної на нашому веб-сайті.
          </li>
        </ul>
      </div>
    </>
  );
};
