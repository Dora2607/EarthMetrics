import { Injectable } from '@angular/core';
import { ArcticData, ArcticDataArr } from '../models/arcticData.model';

@Injectable({
  providedIn: 'root',
})
export class ArcticService {
  private arcticParagraph = `
  <h5 class="dynamicTitle darkDynamicTitle">Cos'è</h5>
  <p class="innerParagraph">La riduzione del ghiaccio polare si riferisce alla diminuzione della copertura di ghiaccio nelle regioni polari, 
    sia nell’Artico che nell’Antartico. Questo fenomeno è causato principalmente dal riscaldamento globale, che porta a temperature più elevate
    e a una maggiore fusione del ghiaccio.
  </p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Perché è importante</h5>
  <p class="innerParagraph">Il ghiaccio polare riflette la luce solare, aiutando a mantenere il pianeta fresco.
    La sua riduzione contribuisce all’aumento delle temperature globali e all’innalzamento del livello del mare, 
    con conseguenze devastanti per gli ecosistemi polari e le comunità costiere. Inoltre, la perdita di ghiaccio marino può alterare le 
    correnti oceaniche e influenzare i modelli climatici globali.
  </p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Situazione attuale</h5>
  <p class="innerParagraph">Il ghiaccio polare sta diminuendo rapidamente a causa del riscaldamento globale, 
    con conseguenze significative per gli ecosistemi polari e il clima globale. Questo fenomeno accelera ulteriormente il riscaldamento globale,
    poiché la perdita di ghiaccio riduce la capacità della Terra di riflettere la luce solare (effetto albedo), aumentando così l'assorbimento 
    di calore.
   </p>
    
  <h5 class="dynamicTitle darkDynamicTitle">Cosa possiamo fare</h5>
  <p class="innerParagraph">Ridurre le emissioni di gas serra, 
    proteggere gli ecosistemi polari e promuovere la ricerca scientifica sono azioni fondamentali 
    per mitigare la riduzione del ghiaccio polare. Inoltre, l'adozione di energie rinnovabili e 
    l'implementazione di politiche climatiche efficaci possono contribuire a rallentare questo processo.
  </p>
`;

private arcticLegend = `    
  <p>
    Questo grafico mostra l'estensione del ghiaccio marino nelle regioni polari su base mensile. I dati esposti riguardano:
  </p>
  <p>
    L' <strong>Estensione</strong> del ghiaccio marino di uno specifico mese, espressa in milioni di chilometri quadrati.
  </p>
  <p>
    In <strong>Rosso</strong>: Estensione inferiore alla media mensile minima.
  </p>
  <p>
    In <strong>Blu</strong>: Estensione superiore alla media mensile massima.
  </p>
`;


  getArcticParagraph() {
    return this.arcticParagraph;
  }

  getArcticLegend() {
    return this.arcticLegend;
  }

  extractData(response: ArcticData): ArcticDataArr[] {
    return Object.entries(response).map(([key, entry]) => {
      const formattedKey = `${key.slice(4)}-${key.slice(0, 4)}`;
      return {
        key: formattedKey,
        value: entry.value,
        anom: entry.anom,
        monthlyMean: entry.monthlyMean,
      };
    });
  }
}
