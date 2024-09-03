import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class No2Service {
  no2Paragraph = `
  <h5>Cos'è</h5>
  <p>Le emissioni di ossido di azoto (NO2) 
  provengono principalmente dai veicoli a motore, 
  dalle centrali elettriche e dalle attività industriali.</p>
  
  <h5>Perché è importante</h5>
  <p>Il NO2 contribuisce alla formazione di smog 
  e piogge acide, oltre ad essere un gas serra. 
  Monitorare le emissioni di NO2 è essenziale
   per proteggere la salute umana e l’ambiente.</p>
  
  <h5>Situazione attuale</h5>
  <p>Le emissioni di NO2 sono ancora elevate 
  in molte aree urbane, contribuendo all’inquinamento
   atmosferico e ai problemi di salute pubblica, 
   come malattie respiratorie e cardiovascolari.</p>
  
  <h5>Cosa possiamo fare</h5>
  <p>Promuovere l’uso di veicoli elettrici, 
  migliorare le tecnologie di controllo delle emissioni
   industriali e adottare politiche di trasporto
    sostenibile sono azioni chiave per ridurre 
    le emissioni di NO2.</p>
  `;
}
