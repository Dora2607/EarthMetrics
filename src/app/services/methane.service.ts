import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MethaneService {
  private methaneParagraph = `
  <h5 class="dynamicTitle darkDynamicTitle">Cos'è</h5>
  <p class="innerParagraph">Il metano (CH₄) è un idrocarburo semplice composto da un atomo di carbonio e quattro atomi di idrogeno.
    È un gas incolore e inodore che è il principale componente del gas naturale. 
    Le emissioni di metano provengono principalmente dall’agricoltura,
    dalle discariche e dall’estrazione di combustibili fossili.
  </p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Perché è importante</h5>
  <p class="innerParagraph">Il metano è un gas serra molto potente, 
    con un effetto di riscaldamento molto maggiore rispetto alla CO₂ a breve termine.
    Pur avendo una vita atmosferica più breve rispetto alla CO₂, 
    è molto più efficace nel trattenere il calore mentre è presente nell'atmosfera.
    Monitorare le emissioni di metano è cruciale per comprendere e mitigare il cambiamento climatico.
  </p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Situazione attuale</h5>
  <p class="innerParagraph">Le emissioni di metano sono in aumento, 
    contribuendo significativamente al riscaldamento globale.
    Questo ha impatti negativi sul clima, sugli ecosistemi e sulla salute umana.
    Le principali fonti di emissioni includono la digestione degli animali ruminanti, 
    la decomposizione dei rifiuti organici nelle discariche e le perdite durante l'estrazione e il trasporto di combustibili fossili.
  </p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Cosa possiamo fare</h5>
  <p class="innerParagraph">Migliorare le pratiche agricole,
    ridurre le perdite di metano durante l’estrazione di combustibili fossili e gestire meglio i rifiuti organici sono azioni 
    importanti per ridurre le emissioni di metano. Inoltre, l'adozione di tecnologie più pulite e l'implementazione di politiche
    efficaci possono contribuire significativamente a mitigare l'impatto del metano sul cambiamento climatico.
  </p>
  `;



  private methaneLegend = `
  <p>
    Questo grafico mostra i livelli di metano (CH₄) nell’atmosfera su base mensile dal 1983 fino al presente. I dati esposti riguardano:
  </p>
   <p>
   <strong>Average</strong>:
   La concentrazione media di metano (CH₄) nell’atmosfera per il periodo specificato, espressa in parti per milione (ppm).
  </p>

  <p>
    <strong>Trend</strong>: 
    La concentrazione di metano calcolata come tendenza a lungo termine, eliminando le variazioni stagionali.
  </p>`;

  getMethaneParagraph() {
    return this.methaneParagraph;
  }

  getMethaneLegend() {
    return this.methaneLegend;
  }
}
