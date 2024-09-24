# EarthMetrics

## Descrizione
EarthMetrics è un'applicazione web che fornisce una panoramica sui parametri che incidono sul cambiamento climatico attraverso l'uso di grafici. L'app permette di visualizzare dati su temperatura, emissioni di CO2, N2O, metano e l'estensione del ghiaccio polare. I grafici coprono archi temporali ampi, permettendo di osservare l'evoluzione di questi parametri nel tempo. L'applicazione è basata sulle API fornite da (https://global-warming.org/).  

## Link

Link per provare l'applicazione: [EarthMetrics](https://earthmetrics-370b2.web.app/)

## Demo
Ecco un'illustrazione del sito realizzato:
![Homepage](/img-readme/homepage.png)

Gli utenti possono decidere di selezionare il grafico da vedere in due modi: 
1. Attraverso il menu laterale.
![Sidenav](/img-readme/sidenav.png)
Dalla toolbar, cliccando l'icona in alto a destra, è possibile selezionare la modalità 'light' o 'dark' a seconda delle proprie preferenze.
![Dark Theme](/img-readme/sidenav-dark.png)

2. Attraverso lo slider posto infondo alla pagina.
![Page Selector](/img-readme/pageSelector.png)
Cliccando su una delle card a disposizione si viene reindirizzati al grafico che si preferisce.
![Page Selector 2](/img-readme/pageSelector2.png)

I grafici sono interattivi, è possibile decidere di ingradire l'arco temporale di interesse, passare da un grafico a linea ad uno a barre, oppure resettare le impostazioni iniziali. 
![Chart 1](/img-readme/chart1.png)
![Chart 2](/img-readme/chart2.png)
![Chart 3](/img-readme/chart3.png)

## Prerequisiti
- Node.js: v.20.16.0
- Npm: v.10.8.3
- Angular CLI: v.18.1.3

## Tecnologie Utilizzate
- **Angular**: ^18.1.0
- **Angular Material**: ^18.2.1
- **ECharts**: ^5.5.1
- **Firebase**: ^10.13.2
- **ngx-echarts**: ^18.0.0
- **ngx-owl-carousel-o**: ^18.0.0
- **Express**: ^4.18.2
- **RxJS**: ~7.8.0
- **TypeScript**: ~5.5.2
- **eslint**: ^9.9.0
- **prettier**: ^3.3.3


## Installazione
1. Clona il repository:
   ```bash
        git clone https://github.com/Dora2607/EarthMetrics-Progetto-Angular.git
   ```
2. Naviga nella directory del progetto:
    ```bash
        cd EarthMetrics
    ```

3. Installa le dipendenze:
    ```bash
        npm install
    ```

## Utilizzo
Per eseguire EarthMetrics in locale:

1. Avvia l'applicazione:
    ```bash
       ng serve
    ```

2. Apri il tuo browser e naviga a 
    ```bash
      http://localhost:4200/.
    ```


## Funzionalità
EarthMetrics include le seguenti funzionalità:

- **Home**: Seleziona il grafico da visualizzare.
- **Temperature**: Visualizza i dati sulla temperatura globale.
- **CO2**: Visualizza i dati sulle emissioni di CO2.
- **Metano**: Visualizza i dati sulle emissioni di metano.
- **N2O**: Visualizza i dati sulle emissioni di N2O.
- **Ghiaccio Polare**: Visualizza i dati sull’estensione del ghiaccio polare.
- **Design Responsive**: L’app è ottimizzata per dispositivi mobili, tablet e desktop.
- **Modalità Light/Dark**: Passa dalla modalità chiara a quella scura tramite la toolbar.

## Struttura del Progetto
Il progetto è strutturato cercando di seguire le best practice Angular. Ecco una panoramica:
    
### Home
La componente `HomeComponent` funge da layout principale per la pagina iniziale dell'applicazione. Include diverse sottocomponenti per visualizzare informazioni e interagire con l'utente. Fa utilizzo di due sottocomponenti: 

- **hero-banner**: Componente che visualizza il banner principale della home page.
- **page-selector**: Componente che permette di selezionare la pagina da visualizzare tramite un carosello di immagini.
  La componente utilizza `OwlCarousel` per creare uno slider interattivo.
  Le opzioni dello slider (`customOptions`) sono configurate per gestire il comportamento del carosello in base alle dimensioni dello schermo, come il numero di elementi visibili, la possibilità di trascinare con il mouse o il tocco, e la visualizzazione dei pulsanti di navigazione e dei punti. Nel metodo `ngOnInit`, la componente recupera un array di oggetti che rappresentano le immagini (images) utilizzando il servizio ImageDataService. Queste immagini vengono utilizzate per popolare lo slider.

### Pages

La componente `PagesComponent` funge da layout per le sue sottocomponenti, gestendo la visualizzazione dei titoli, dei contenuti e delle leggende dei grafici. Utilizza il servizio `DataService` per aggiornare dinamicamente il titolo, il contenuto e la leggenda in base ai dati ricevuti. La struttura HTML della componente include un `router-outlet` per caricare le sottocomponenti specifiche (come `TemperatureComponent`, `Co2Component`, ecc.) e visualizzare i relativi grafici.  

Ogni sottocomponente viene caricata in lazy loading e utilizza `ngx-echarts` e `apache-echarts` per creare grafici interattivi basati sui dati ricevuti dall’API. Le sottocomponenti sono: 

- **TemperatureComponent**: Componente per la visualizzazione dei dati sulla temperatura globale.
- **Co2Component**: Componente per la visualizzazione dei dati sulle emissioni di CO2.
- **MethaneComponent**: Componente per la visualizzazione dei dati sulle emissioni di metano.
- **N2oComponent**: Componente per la visualizzazione dei dati sulle emissioni di N2O.
- **ArcticComponent**: Componente per la visualizzazione dei dati sull’estensione del ghiaccio polare.

#### Come funzionano?

In linea generale, il metodo `ngOnInit` viene eseguito al momento dell’inizializzazione della componente e svolge le seguenti operazioni:

1. Recupera i contenuti HTML relativi alla specifica componente utilizzando `HtmlContentService`.
2. Aggiorna il titolo, il paragrafo e la leggenda della sezione relativa alla componente specifica utilizzando `DataService`.
3. Effettua una chiamata API per recuperare i dati della componente utilizzando `ClientAPIService`.
4. Se i dati vengono recuperati con successo e l’applicazione è in esecuzione nel browser, chiama il metodo `create[nomeComponente]Chart` per creare il grafico.

#### Perché si è reso necessario creare più sottocomponenti?

Anche se le operazioni eseguite sono le medesime, ogni componente lavora con dati completamente differenti e, di conseguenza, anche i grafici realizzati a partire da essi sono specifici per quella componente. Inoltre, prevedendo un numero elevato di dati, ogni componente viene trattata con un modulo a sé e caricata in lazy loading, in modo da rendere l'applicazione più veloce e manutenibile.


### Models
La cartella `models` contiene le interface che rappresentano i dati recuperati dall'API e i vari contenuti che popoleranno il sito.  
Essi sono: 
- **arcticData**: Modello per i dati relativi all’estensione del ghiaccio polare.
- **co2Data**: Modello per i dati relativi alle emissioni di CO2.
- **methaneData**: Modello per i dati relativi alle emissioni di metano.
- **n2oData**: Modello per i dati relativi alle emissioni di N2O.
- **temperatureData**: Modello per i dati relativi alla temperatura globale.
- **homeImages**: Modello per le immagini utilizzate nella home page.
- **htmlContent**: Modello per i contenuti HTML utilizzati nell’applicazione.

### Services
I servizi realizzati sono: 

- **ClientAPIService**: Il servizio `ClientAPIService` gestisce le chiamate API per recuperare i dati. Utilizza `HttpClient` per effettuare richieste GET a un endpoint specifico, basato sul tipo di API (`apiType`). Il metodo `getData` restituisce un `Observable` dei dati recuperati. In caso di errore, il metodo `handleError` gestisce l'errore e restituisce un messaggio di errore appropriato.

- **DataService**: Il servizio `DataService` gestisce la comunicazione e l'aggiornamento dei dati tra le componenti. Utilizza `BehaviorSubject` per mantenere e aggiornare il titolo, il contenuto e la leggenda delle sezioni. I metodi `changeTitle`, `changeContent` e `changeLegend` aggiornano i rispettivi `BehaviorSubject`, permettendo alle componenti di osservare e reagire ai cambiamenti.

- **HtmlContentService**: Il servizio `HtmlContentService` fornisce contenuti HTML specifici per le diverse componenti. Il metodo `getHtmlContent` restituisce il contenuto HTML corrispondente a una chiave specifica (ad esempio, 'temperature', 'nitrous-oxide', ecc.). Inoltre, il servizio include metodi per convertire il tempo in un formato leggibile e per estrarre dati da una risposta API.

- **ThemeManagerService**: Il servizio `ThemeManagerService` gestisce il tema dell'applicazione (chiaro o scuro). Utilizza un segnale (`signal`) per mantenere lo stato del tema corrente. Il costruttore applica il tema appropriato al documento HTML. Il metodo `toggleTheme` consente di alternare tra il tema chiaro e quello scuro.

- **ImageDataService**: Il servizio `ImageDataService` fornisce i dati delle immagini utilizzate nella componente `PageSelectorComponent`. Contiene un array di oggetti che rappresentano le immagini, ciascuno con il percorso dell'immagine, il testo alternativo, il titolo, la descrizione e il link di navigazione. Il metodo `getImages` restituisce questo array di immagini, permettendo alla componente `PageSelectorComponent` di accedere ai dati e visualizzarli nello slider.


### Shared

- Il modulo `angular-material` importa e configura i componenti di Angular Material, fornendo un set di strumenti UI moderni e reattivi per l'applicazione. 
- La cartella `animations` contiene file ts per gestire le animazioni dell'applicazione.
- La componente `footer` visualizza il footer dell'applicazione, fornendo informazioni e link utili. 
- La componente `sidenav` visualizza la barra laterale di navigazione e permette agli utenti di navigare tra le diverse sezioni dell'applicazione. Inoltre, la `SidenavComponent` integra il servizio `ThemeManagerService` per gestire il tema dell'applicazione (chiaro o scuro) e include un metodo `toggleTheme` per alternare tra i temi.
- La cartella `theme` gestisce i temi dell'applicazione, includendo due file CSS per delineare i temi chiaro e scuro, permettendo agli utenti di scegliere il tema che preferiscono.

## Unit tests

Digita `ng test` per eseguire gli unit tests via Karma. Per generare un report sulla coverage del codice, puoi utilizzare il comando `ng test --code-coverage`.

### Ringraziamenti

Desidero esprimere la mia sincera gratitudine a **start2impact**, che mi ha fornito le competenze e il supporto necessari per realizzare questa applicazione.