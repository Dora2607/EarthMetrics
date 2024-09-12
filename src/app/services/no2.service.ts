import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class No2Service {
  private no2Paragraph = `
  <h5 class="dynamicTitle darkDynamicTitle">Cos'è</h5>
  <p class="innerParagraph">
   Il protossido di azoto (N₂O) è un gas di colore bruno-rossastro, dall’odore pungente e tossico.
    È un inquinante atmosferico che si forma principalmente come prodotto dell’ossidazione del monossido di azoto (NO) in atmosfera.
  Le emissioni di N₂O si riferiscono alla quantità di biossido di azoto rilasciata nell’atmosfera a causa delle attività umane.
  Queste attività includono la combustione di combustibili fossili nei trasporti, nelle industrie e negli impianti di riscaldamento.
  </p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Perché è importante</h5>
  <p class="innerParagraph">
    Il N₂O contribuisce alla formazione di smog 
    e piogge acide, possono avere effetti negativi sulla salute umana, 
    come irritazioni delle vie respiratorie e aumento del rischio di malattie respiratorie. 
    Monitorare le emissioni di N₂O è essenziale
    per proteggere la salute umana e l’ambiente.
  </p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Situazione attuale</h5>
  <p class="innerParagraph">
    I valori limite del biossido di azoto nell’aria sono definiti dalla normativa e dai valori di riferimento dell’OMS. 
    Il valore limite orario è di 200 μg/m³,
    da non superare più di 18 volte per anno civile, mentre il valore limite annuale è di 40 μg/m³. Negli ultimi dieci anni, 
    le concentrazioni di N₂O hanno mostrato una tendenza al miglioramento in molte aree, tuttavia le emissioni di NO2 sono ancora elevate 
    in molte aree urbane, soprattutto a causa del traffico veicolare e delle attività industriali.
  </p>
  
  <h5 class="dynamicTitle darkDynamicTitle">Cosa possiamo fare</h5>
  <p class="innerParagraph">Promuovere l’uso di veicoli elettrici, 
  migliorare le tecnologie di controllo delle emissioni
  industriali e adottare politiche di trasporto
  sostenibile sono azioni chiave per ridurre 
  le emissioni di N₂O v.</p>
  `;

  private no2Legend = `
  
    <p>
      Questo grafico mostra i livelli di protossido di azoto (N₂O)
      nell’atmosfera su base mensile dal 2001 fino al presente. I dati esposti riguardano la concentrazione media e la tendenza:</p>
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
