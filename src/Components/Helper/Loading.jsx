import React from "react";
import styles from "./Loading.module.css";
import { Carregando } from "../../Assets/carregando";

export function Loading() {
  const [step, setStep] = React.useState(1);

  React.useEffect(() => {
    function updateStep() {
      setStep((step) => {
        if (step < 3) return step + 1;
        else return 0;
      });
    }

    const interval = setInterval(updateStep, 300);

    return () => clearInterval(interval);
  }, []);

  function displayStep(i) {
    return {
      display: step === i ? "block" : "none",
    };
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <Carregando displayStep={displayStep} />
      </div>
    </div>
  );
}

export default Loading;
