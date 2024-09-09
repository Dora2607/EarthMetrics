import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArcticService {
  private arcticParagraph = `
  <h5 class="dynamicTitle darkDynamicTitle">Cos'è</h5>
  <p class="innerParagraph">La riduzione del ghiaccio polare si riferisce 
  alla diminuzione della copertura di ghiaccio nelle
   regioni polari, sia nell’Artico che nell’Antartico.</p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Perché è importante</h5>
  <p class="innerParagraph">Il ghiaccio polare riflette la luce solare,
   aiutando a mantenere il pianeta fresco. La sua
    riduzione contribuisce all’aumento delle 
    temperature globali e all’innalzamento del 
    livello del mare, con conseguenze devastanti
     per gli ecosistemi polari e le comunità costiere.</p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Situazione attuale</h5>
  <p class="innerParagraph">Il ghiaccio polare sta diminuendo rapidamente
   a causa del riscaldamento globale, con conseguenze 
   significative per gli ecosistemi polari e il clima 
   globale. Questo fenomeno accelera ulteriormente il 
   riscaldamento globale.</p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Cosa possiamo fare</h5>
  <p class="innerParagraph">Ridurre le emissioni di gas serra, 
  proteggere gli ecosistemi polari e promuovere 
  la ricerca scientifica sono azioni fondamentali
   per mitigare la riduzione del ghiaccio polare.</p>
  `;

  private arcticLegend = `    
  <p>
    <strong>Value</strong>: L’estensione del ghiaccio marino di uno specifico mese, 
    in milioni di chilometri quadrati.
  </p>

  <p>
    <strong>Anom</strong>: L’anomalia rispetto al periodo di riferimento (1991-2020), 
    in milioni di chilometri quadrati.
  </p>
  
  <p>
    <strong>Monthly Mean</strong>: La media mensile dell’estensione del ghiaccio marino, 
    in milioni di chilometri quadrati.
  </p>
    
    `;

  getArcticParagraph() {
    return this.arcticParagraph;
  }

  getArcticLegend(){
    return this.arcticLegend;
  } 
}
