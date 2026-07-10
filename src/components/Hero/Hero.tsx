import styles from "./Hero.module.css";
import { heroContent } from "./HeroData";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className={styles.base}>
      <h2 className={styles.text}>{heroContent.titulo}</h2>
      <h4 className={styles.text}>{heroContent.subtitulo}</h4>
      <p className={styles.text}>{heroContent.descripcion}</p>
    </div>
  );
};

export default Hero;
