import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Co2Service {
  private co2Paragraph = `
  <h5 class="dynamicTitle darkDynamicTitle">Cos'è</h5>
  <p class="innerParagraph">L’anidride carbonica (CO₂) è un gas incolore e inodore presente nell’atmosfera terrestre.
   È composto da un atomo di carbonio e due atomi di ossigeno. La CO₂ è un componente naturale del ciclo del carbonio, 
   essenziale per la fotosintesi delle piante, che utilizzano l'anidride carbonica per produrre ossigeno. 
  Tuttavia, la CO₂ è anche un gas serra, il che significa che contribuisce al riscaldamento globale intrappolando il calore nell’atmosfera.
  Le emissioni di CO₂ si riferiscono alla quantità di anidride carbonica rilasciata nell’atmosfera a causa delle attività umane.
  </p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Perché è importante</h5>
  <p class="innerParagraph">La CO₂ è uno dei principali gas serra responsabili del riscaldamento globale. 
  Monitorare le emissioni di CO₂ è essenziale per valutare l’impatto delle attività umane sul clima e per sviluppare strategie di mitigazione.</p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Situazione attuale</h5>
  <p class="innerParagraph">Le emissioni di CO₂ continuano a crescere, contribuendo all’aumento delle temperature globali e ai cambiamenti climatici.
   Storicamente, prima della rivoluzione industriale, i livelli di CO₂ erano intorno a 280 ppm. 
   Nel 2014, i livelli di CO₂ erano intorno a 398 ppm. Nel 2024, i livelli hanno raggiunto circa 420 ppm. 
   Questo rappresenta un aumento di circa 22 ppm nell’ultimo decennio, con conseguenti effetti negativi sugli ecosistemi, 
   sulla salute umana e sull’economia.</p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Cosa possiamo fare</h5>
  <p class="innerParagraph">Ridurre l’uso di combustibili fossili, aumentare l’uso di energie rinnovabili, 
  promuovere la riforestazione e migliorare l’efficienza energetica sono azioni chiave per ridurre le emissioni.</p>
  `;

  private co2Legend = ` 
  <p>Questo grafico mostra i livelli di anidride carbonica (CO₂) nell’atmosfera a partire dal 2014 in poi. 
  I dati sono rappresentati in due serie: il ciclo e la tendenza:</p>   
    <p>
      <strong>Cycle</strong>: Il valore del ciclo di CO₂, che rappresenta la concentrazione di
      CO₂ misurata in parti per milione (ppm) in un determinato giorno. Questo
      valore può variare a causa di fattori stagionali e di breve termine.
    </p>

    <p>
      <strong>Trend</strong>: Il valore della tendenza di CO₂, che rappresenta una media mobile
      della concentrazione di anidride carbonica per eliminare le variazioni stagionali e di
      breve termine. Questo valore fornisce una visione più chiara
      dell’andamento a lungo termine delle concentrazioni di CO₂.
    </p>`;

  getCo2Paragraph() {
    return this.co2Paragraph;
  }

  getCo2Legend() {
    return this.co2Legend;
  }
}
