import { Injectable } from '@angular/core';
import { HtmlContent } from '../models/htmlContent.model';
import { ArcticData, ArcticDataArr } from '../models/arcticData.model';

@Injectable({
  providedIn: 'root',
})
export class HtmlContentService {
  private apiType!: string;

  private htmlContent: Record<string, HtmlContent> = {
    temperature: {
      title: `Temperature Globali`,
      paragraph: `
        <h5 class="dynamicTitle darkDynamicTitle">Cos'è</h5>
        <p class="innerParagraph">Le temperature globali rappresentano la media delle temperature registrate sulla superficie terrestre.
        Questo parametro è un indicatore chiave del cambiamento climatico.</p>
        
        <h5 class="dynamicTitle darkDynamicTitle">Perché è importante</h5>
        <p class="innerParagraph">Monitorare le temperature globali è cruciale per comprendere l'entità del riscaldamento globale e i suoi effetti sul clima, 
        sugli ecosistemi e sulla vita umana. Un aumento delle temperature può portare a eventi meteorologici estremi, scioglimento dei ghiacci 
        e innalzamento del livello del mare.</p>
        
        <h5 class="dynamicTitle darkDynamicTitle">Situazione attuale</h5>
        <p class="innerParagraph">Le temperature globali sono in aumento, 
        con gli ultimi anni che hanno registrato temperature record. Questo aumento è principalmente dovuto alle attività umane, come la combustione di combustibili fossili e la deforestazione.</p>
        
        <h5 class="dynamicTitle darkDynamicTitle">Cosa possiamo fare</h5>
        <p class="innerParagraph">Ridurre le emissioni di gas serra, 
        adottare energie rinnovabili, migliorare l'efficienza energetica e promuovere pratiche sostenibili
        sono azioni fondamentali per mitigare l'aumento delle temperature globali.</p>`,
      legend: ` 
        <p>Questo grafico permette di visualizzare le variazioni delle anomalie della temperatura nel tempo.
          Le anomalie della temperatura rappresentano la differenza tra la temperatura media di un mese 
          specifico e una temperatura di riferimento (solitamente una media a lungo termine).
        </p>
        <p>
        <strong>Station</strong>: Rappresenta l’anomalia della temperatura misurata dalle stazioni meteorologiche, in gradi Celsius.
        </p>
        <p>
        <strong>Land</strong>: Rappresenta l’anomalia della temperatura misurata sulla terraferma, in gradi Celsius.
        </p>`,
    },
    'nitrous-oxide': {
      title: `Emissioni di NO2`,
      paragraph: `
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
        </p>`,
      legend: ` 
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
        </p>`,
    },
    methane: {
      title: `Emissioni di Metano`,
      paragraph: `
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
        </p>`,
      legend: ` 
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
        </p>`,
    },
    co2: {
      title: `Emissioni di CO2`,
      paragraph: `
        <h5 class="dynamicTitle darkDynamicTitle">Cos'è</h5>
        <p class="innerParagraph">L’anidride carbonica (CO₂) è un gas incolore e inodore presente nell’atmosfera terrestre.
        È composto da un atomo di carbonio e due atomi di ossigeno. La CO₂ è un componente naturale del ciclo del carbonio, 
        essenziale per la fotosintesi delle piante, che utilizzano l'anidride carbonica per produrre ossigeno. 
        Tuttavia, la CO₂ è anche un gas serra, il che significa che contribuisce al riscaldamento globale intrappolando il calore nell’atmosfera.
        Le emissioni di CO₂ si riferiscono alla quantità di anidride carbonica rilasciata nell’atmosfera a causa delle attività umane.
        </p>

        <h5 class="dynamicTitle darkDynamicTitle">Perché è importante</h5>
        <p class="innerParagraph">La CO₂ è uno dei principali gas serra responsabili del riscaldamento globale. 
        Monitorare le emissioni di CO₂ è essenziale per valutare l’impatto delle attività umane sul clima e per sviluppare strategie di mitigazione.</p>

        <h5 class="dynamicTitle darkDynamicTitle">Situazione attuale</h5>
        <p class="innerParagraph">Le emissioni di CO₂ continuano a crescere, contribuendo all’aumento delle temperature globali e ai cambiamenti climatici.
        Storicamente, prima della rivoluzione industriale, i livelli di CO₂ erano intorno a 280 ppm. 
        Nel 2014, i livelli di CO₂ erano intorno a 398 ppm. Nel 2024, i livelli hanno raggiunto circa 420 ppm. 
        Questo rappresenta un aumento di circa 22 ppm nell’ultimo decennio, con conseguenti effetti negativi sugli ecosistemi, 
        sulla salute umana e sull’economia.</p>

        <h5 class="dynamicTitle darkDynamicTitle">Cosa possiamo fare</h5>
        <p class="innerParagraph">Ridurre l’uso di combustibili fossili, aumentare l’uso di energie rinnovabili, 
        promuovere la riforestazione e migliorare l’efficienza energetica sono azioni chiave per ridurre le emissioni.</p>`,
      legend: ` 
        <p>Questo grafico mostra i livelli di anidride carbonica (CO₂) nell’atmosfera a partire dal 2014 in poi. 
        I dati sono rappresentati in due serie: il ciclo e la tendenza:</p>   
        <p>
        <strong>Cycle</strong>: Il valore del ciclo di CO₂, che rappresenta la concentrazione di
        CO₂ misurata in parti per milione (ppm) in un determinato giorno. Questo
        valore può variare a causa di fattori stagionali e di breve termine.
        </p>

        <p>
        <strong>Trend</strong>: Il valore della tendenza di CO₂, che rappresenta una media mobile
        della concentrazione di anidride carbonica per eliminare le variazioni stagionali e di
        breve termine. Questo valore fornisce una visione più chiara
        dell’andamento a lungo termine delle concentrazioni di CO₂.
        </p>`,
    },
    arctic: {
      title: `Riduzione del Ghiaccio Polare`,
      paragraph: `
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
        </p>`,
      legend: ` 
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
        </p>`,
    },
  };

  getHtmlContent(key: string): HtmlContent | undefined {
    switch (key) {
      case 'temperature':
        return this.htmlContent['temperature'];
      case 'nitrous-oxide':
        return this.htmlContent['nitrous-oxide'];
      case 'methane':
        return this.htmlContent['methane'];
      case 'co2':
        return this.htmlContent['co2'];
      case 'arctic':
        return this.htmlContent['arctic'];
      default:
        return undefined;
    }
  }

  convertTime(time: string) {
    const timeNumber = parseFloat(time);
    const year = Math.floor(timeNumber);
    const decimalPart = timeNumber - year;
    let month = Math.round(decimalPart * 12);
    if (month === 0) {
      month = 1;
    }
    const formattedMonth = ('0' + month).slice(-2);
    return `${formattedMonth}-${year}`;
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
