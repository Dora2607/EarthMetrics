import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class N2oService {

  private n2oParagraph = `
  <h5 class="dynamicTitle darkDynamicTitle">Cos'è</h5>
  <p class="innerParagraph">
    Il protossido di azoto (N₂O) è un gas incolore e non infiammabile, noto anche come gas esilarante. 
    È un potente gas serra con un potenziale di riscaldamento globale circa 300 volte superiore a quello della CO₂ su un periodo di 100 anni. 
    Le emissioni di N₂O si riferiscono alla quantità di protossido di azoto rilasciata nell’atmosfera a causa delle attività umane. 
    Queste attività includono l'uso di fertilizzanti azotati in agricoltura, la combustione di combustibili fossili, il trattamento delle acque reflue e alcuni processi industriali.
  </p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Perché è importante</h5>
  <p class="innerParagraph">
    Il N₂O è il terzo gas serra più grande nell'atmosfera e il principale composto distruttore dell'ozono emesso dalle attività umane. 
    Contribuisce significativamente al riscaldamento globale e alla distruzione dello strato di ozono. 
    Monitorare le emissioni di N₂O è essenziale per proteggere il clima e l'ambiente.
  </p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Situazione attuale</h5>
  <p class="innerParagraph">
    Le concentrazioni di N₂O nell'atmosfera sono aumentate costantemente negli ultimi decenni a causa delle attività umane. 
    Attualmente, i livelli di N₂O sono circa 20% superiori rispetto ai livelli preindustriali. 
    Questo aumento è principalmente dovuto all'uso intensivo di fertilizzanti azotati in agricoltura e alle emissioni industriali.
  </p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Cosa possiamo fare</h5>
  <p class="innerParagraph">
    Promuovere pratiche agricole sostenibili, ridurre l'uso di fertilizzanti azotati, migliorare le tecnologie di controllo delle emissioni industriali 
    e adottare politiche di gestione dei rifiuti più efficienti sono azioni chiave per ridurre le emissioni di N₂O.
  </p>
  `;

  private n2oLegend = `
  
  <p>
    Questo grafico mostra i livelli di protossido di azoto (N₂O)
    nell’atmosfera su base mensile dal 2001 fino al presente. I dati esposti riguardano:</p>
  <p>
  <strong>Average</strong>: La concentrazione media di protossido di azoto nell’atmosfera 
  per il periodo specificato, espressa in parti per miliardo (ppb).
  </p>

  <p>
  <strong>Trend</strong>: La concentrazione di protossido di azoto calcolata come tendenza
  a lungo termine, eliminando le variazioni stagionali.
  </p>`;

  getN2oParagraph() {
    return this.n2oParagraph;
  }
  getN2oLegend(): string {
    return this.n2oLegend;
  }
}
