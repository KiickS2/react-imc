import styles from "./GridItem.module.css";
import { Level } from "../helpers/imc";
import upImage from "../assets/up.png";
import downImage from "../assets/down.png";

type Props = {
    item: Level;
};

export const GridItem = ( { item }: Props) => {

    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                {item.icon === "up" && <img src={upImage} alt="up" width={30}/>}
                {item.icon === "down" && <img src={downImage} alt="down" width={30}/>}
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            {item.yourImc &&
                <div className={styles.gridYourImc}>Seu IMC é de {item.yourImc} kg/m².</div>
            }
            <div className={styles.gridInfo}>IMC entre {item.imc[0]} e {item.imc[1]}.</div>
        </div>
    )
};