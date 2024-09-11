import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemperatureService {
  temperatureParagraph = `
  <h5 class="dynamicTitle darkDynamicTitle">Cos'è</h5>
  <p class="innerParagraph">Le temperature globali rappresentano la media delle temperature registrate sulla superficie terrestre.
   Questo parametro è un indicatore chiave del cambiamento climatico.</p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Perché è importante</h5>
  <p class="innerParagraph">Monitorare le temperature globali è cruciale per comprendere l'entità del riscaldamento globale e i suoi effetti sul clima, 
  sugli ecosistemi e sulla vita umana. Un aumento delle temperature può portare a eventi meteorologici estremi, scioglimento dei ghiacci 
  e innalzamento del livello del mare.</p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Situazione attuale</h5>
  <p class="innerParagraph">Le temperature globali sono in aumento, 
  con gli ultimi anni che hanno registrato temperature record. Questo aumento è principalmente dovuto alle attività umane, come la combustione di combustibili fossili e la deforestazione.</p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Cosa possiamo fare</h5>
  <p class="innerParagraph">Ridurre le emissioni di gas serra, 
  adottare energie rinnovabili, migliorare l'efficienza energetica e promuovere pratiche sostenibili
   sono azioni fondamentali per mitigare l'aumento delle temperature globali.</p>
  `;


  private temperatureLegend = ` 
  <p>
  <strong>Average</strong>: La concentrazione media di protossido di azoto nell’atmosfera 
  per il periodo specificato, espressa in parti per miliardo (ppb).
  </p>

  <p>
  <strong>Trend</strong>: La concentrazione di protossido di azoto calcolata come tendenza
  a lungo termine, eliminando le variazioni stagionali.
  </p>`;


  getTemperatureParagraph(){
    return this.temperatureParagraph;
  }

  getTemperatureLegend(){
    return this.temperatureLegend;
  }
}
