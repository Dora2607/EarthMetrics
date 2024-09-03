import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MethaneService {
  methaneParagraph = `
  <h5>Cos'è</h5>
  <p>Le emissioni di metano (CH4) 
  provengono principalmente dall’agricoltura, 
  dalle discariche e dall’estrazione di combustibili 
  fossili.</p>
  
  <h5>Perché è importante</h5>
  <p>Il metano è un gas serra molto potente, 
  con un effetto di riscaldamento molto maggiore 
  rispetto alla CO2 a breve termine. 
  Monitorare le emissioni di metano è cruciale per 
  comprendere e mitigare il cambiamento climatico.</p>
  
  <h5>Situazione attuale</h5>
  <p> Le emissioni di metano sono in aumento, 
  contribuendo significativamente al riscaldamento 
  globale. Questo ha impatti negativi sul clima, 
  sugli ecosistemi e sulla salute umana.</p>
  
  <h5>Cosa possiamo fare</h5>
  <p>Migliorare le pratiche agricole, 
  ridurre le perdite di metano durante 
  l’estrazione di combustibili fossili e 
  gestire meglio i rifiuti organici sono azioni
   importanti per ridurre le emissioni di metano.</p>
  `;
}