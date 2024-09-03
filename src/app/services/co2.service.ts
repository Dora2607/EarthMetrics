import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Co2Service {
  co2Paragraph = `
  <h5>Cos'è</h5>
  <p>Le emissioni di anidride carbonica (CO2) sono il rilascio di questo gas nell’atmosfera, 
  principalmente derivante dalla combustione di combustibili fossili e dalla deforestazione.</p>
  
  <h5>Perché è importante</h5>
  <p>La CO2 è uno dei principali gas serra responsabili del riscaldamento globale. 
  Monitorare le emissioni di CO2 è essenziale per valutare l’impatto delle attività umane sul clima e per sviluppare strategie di mitigazione.</p>
  
  <h5>Situazione attuale</h5>
  <p>Le emissioni di CO2 continuano a crescere, contribuendo all’aumento delle temperature globali e ai cambiamenti climatici. 
  Questo ha effetti negativi sugli ecosistemi, sulla salute umana e sull’economia.</p>
  
  <h5>Cosa possiamo fare</h5>
  <p>Ridurre l’uso di combustibili fossili, aumentare l’uso di energie rinnovabili, 
  promuovere la riforestazione e migliorare l’efficienza energetica sono azioni chiave per ridurre le emissioni di CO2.</p>
  `;
}