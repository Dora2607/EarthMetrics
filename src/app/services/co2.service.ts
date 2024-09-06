import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Co2Service {
  private co2Paragraph = `
  <h5 class="dynamicTitle darkDynamicTitle">Cos'è</h5>
  <p class="innerParagraph">Le emissioni di anidride carbonica (CO2) sono il rilascio di questo gas nell’atmosfera, 
  principalmente derivante dalla combustione di combustibili fossili e dalla deforestazione.</p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Perché è importante</h5>
  <p class="innerParagraph">La CO2 è uno dei principali gas serra responsabili del riscaldamento globale. 
  Monitorare le emissioni di CO2 è essenziale per valutare l’impatto delle attività umane sul clima e per sviluppare strategie di mitigazione.</p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Situazione attuale</h5>
  <p class="innerParagraph">Le emissioni di CO2 continuano a crescere, contribuendo all’aumento delle temperature globali e ai cambiamenti climatici. 
  Questo ha effetti negativi sugli ecosistemi, sulla salute umana e sull’economia.</p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Cosa possiamo fare</h5>
  <p class="innerParagraph">Ridurre l’uso di combustibili fossili, aumentare l’uso di energie rinnovabili, 
  promuovere la riforestazione e migliorare l’efficienza energetica sono azioni chiave per ridurre le emissioni di CO2.</p>
  `;

  private co2Legend = `    
  <p>
      <strong>Cycle</strong>: Il valore del ciclo di CO2, che rappresenta la concentrazione di
      CO2 misurata in parti per milione (ppm) in un determinato giorno. Questo
      valore può variare a causa di fattori stagionali e di breve termine.
    </p>

    <p>
      <strong>Trend</strong>: Il valore della tendenza di CO2, che rappresenta una media mobile
      della concentrazione di CO2 per eliminare le variazioni stagionali e di
      breve termine. Questo valore fornisce una visione più chiara
      dell’andamento a lungo termine delle concentrazioni di CO2.
    </p>`;

  
  getCo2Paragraph(){
    return this.co2Paragraph;
  }

  getCo2Legend(){
    return this.co2Legend;
  }
  
}
