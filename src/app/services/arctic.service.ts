import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArcticService {
  arcticParagraph = `
  <h5>Cos'è</h5>
  <p>La riduzione del ghiaccio polare si riferisce 
  alla diminuzione della copertura di ghiaccio nelle
   regioni polari, sia nell’Artico che nell’Antartico.</p>
  
  <h5>Perché è importante</h5>
  <p>Il ghiaccio polare riflette la luce solare,
   aiutando a mantenere il pianeta fresco. La sua
    riduzione contribuisce all’aumento delle 
    temperature globali e all’innalzamento del 
    livello del mare, con conseguenze devastanti
     per gli ecosistemi polari e le comunità costiere.</p>
  
  <h5>Situazione attuale</h5>
  <p>Il ghiaccio polare sta diminuendo rapidamente
   a causa del riscaldamento globale, con conseguenze 
   significative per gli ecosistemi polari e il clima 
   globale. Questo fenomeno accelera ulteriormente il 
   riscaldamento globale.</p>
  
  <h5>Cosa possiamo fare</h5>
  <p>Ridurre le emissioni di gas serra, 
  proteggere gli ecosistemi polari e promuovere 
  la ricerca scientifica sono azioni fondamentali
   per mitigare la riduzione del ghiaccio polare.</p>
  `;
}
