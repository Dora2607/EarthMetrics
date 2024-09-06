import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class No2Service {
  private no2Paragraph = `
  <h5 class="dynamicTitle darkDynamicTitle">Cos'è</h5>
  <p class="innerParagraph">Le emissioni di ossido di azoto (NO2) 
  provengono principalmente dai veicoli a motore, 
  dalle centrali elettriche e dalle attività industriali.</p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Perché è importante</h5>
  <p class="innerParagraph">Il NO2 contribuisce alla formazione di smog 
  e piogge acide, oltre ad essere un gas serra. 
  Monitorare le emissioni di NO2 è essenziale
  per proteggere la salute umana e l’ambiente.</p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Situazione attuale</h5>
  <p class="innerParagraph">Le emissioni di NO2 sono ancora elevate 
  in molte aree urbane, contribuendo all’inquinamento
   atmosferico e ai problemi di salute pubblica, 
   come malattie respiratorie e cardiovascolari.</p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Cosa possiamo fare</h5>
  <p class="innerParagraph">Promuovere l’uso di veicoli elettrici, 
  migliorare le tecnologie di controllo delle emissioni
  industriali e adottare politiche di trasporto
  sostenibile sono azioni chiave per ridurre 
  le emissioni di NO2.</p>
  `;

  private no2Legend = ` 
    <p>
    <strong>Average</strong>: La concentrazione media di protossido di azoto nell’atmosfera 
    per il periodo specificato, espressa in parti per miliardo (ppb).
    </p>

    <p>
    <strong>Trend</strong>: La concentrazione di protossido di azoto calcolata come tendenza
    a lungo termine, eliminando le variazioni stagionali.
    </p>`;

  getNo2Paragraph() {
    return this.no2Paragraph;
  }
  getNo2Legend(): string {
    return this.no2Legend;
  }
}
