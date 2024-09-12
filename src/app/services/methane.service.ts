import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MethaneService {
  private methaneParagraph = `
  <h5 class="dynamicTitle darkDynamicTitle">Cos'è</h5>
  <p class="innerParagraph">Le emissioni di metano (CH4) 
  provengono principalmente dall’agricoltura, 
  dalle discariche e dall’estrazione di combustibili 
  fossili.</p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Perché è importante</h5>
  <p class="innerParagraph">Il metano è un gas serra molto potente, 
  con un effetto di riscaldamento molto maggiore 
  rispetto alla CO2 a breve termine. 
  Monitorare le emissioni di metano è cruciale per 
  comprendere e mitigare il cambiamento climatico.</p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Situazione attuale</h5>
  <p class="innerParagraph"> Le emissioni di metano sono in aumento, 
  contribuendo significativamente al riscaldamento 
  globale. Questo ha impatti negativi sul clima, 
  sugli ecosistemi e sulla salute umana.</p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Cosa possiamo fare</h5>
  <p class="innerParagraph">Migliorare le pratiche agricole, 
  ridurre le perdite di metano durante 
  l’estrazione di combustibili fossili e 
  gestire meglio i rifiuti organici sono azioni
   importanti per ridurre le emissioni di metano.</p>
  `;

  private methaneLegend = ` <p>
  <strong>Average</strong>: La concentrazione media di metano (CH₄) nell’atmosfera per il periodo specificato, espressa in parti per miliardo (ppb).
</p>

<p>
  <strong>Trend</strong>: La concentrazione di metano calcolata come tendenza a lungo termine, eliminando le variazioni stagionali.
</p>`;

  getMethaneParagraph() {
    return this.methaneParagraph;
  }

  getMethaneLegend() {
    return this.methaneLegend;
  }
}
