import poweredImage from "./assets/powered.png";
import leftArrowImage from "./assets/leftarrow.png";
import styles from "./App.module.css";
import { useState } from "react";
import { Level, levels, calculateImc } from "./helpers/imc"
import { GridItem } from "./components/GridItem";

function App() {

  const [heightField, setHeightField] = useState(0);
  const [weightField, setWeightField] = useState(0);
  const [showItem, setShowItem] = useState<Level | null>(null);

  const handleCalculateImc = () => {
    if(heightField && weightField){
      setShowItem(calculateImc(heightField, weightField))
    } else {
      alert("Preencha todos os campos.")
    }
  }

  const handleBackButton = () => {
    setShowItem(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="logo" width={250}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>
          IMC é a sigla para Índice de Massa Corpórea,
          parâmetro adotado pela Organização Mundial da Saúde
          para calcular o peso ideal de cada pessoa.
          </p>
          <input
            type="number"
            placeholder="Digite a sua altura em metros. Ex: 1.75."
            value={heightField > 0 ? heightField : ""}
            onChange={event => {setHeightField(parseFloat(event.target.value))}}
            disabled={showItem ? true : false}
          />
          <input
            type="number"
            placeholder="Digite o seu peso em quilogramas. Ex: 74.2."
            value={weightField > 0 ? weightField : ""}
            onChange={event => {setWeightField(parseFloat(event.target.value))}}
            disabled={showItem ? true : false}
          />
          <button onClick={handleCalculateImc} disabled={!!showItem}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!showItem &&
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item}/>
            ))}
          </div>
          }
          {showItem &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="left-arrow" width={25}/>
              </div>
              <GridItem item={showItem}/>
            </div>
          }
        </div>
      </div>
      <footer>
        <p>Challenge by <a href="https://b7web.com.br/">b7Web</a>. Coded by <a href="https://github.com/KiickS2">José Vitor</a>.</p>
      </footer>
    </div>
  )
}

export default App;