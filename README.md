# EarthMetrics

## Descrizione
EarthMetrics è un'applicazione web che fornisce una panoramica sui parametri che incidono sul cambiamento climatico attraverso l'uso di grafici. L'app permette di visualizzare dati su temperatura, emissioni di CO2, N2O, metano e l'estensione del ghiaccio polare. I grafici coprono archi temporali ampi, permettendo di osservare l'evoluzione di questi parametri nel tempo.

## Demo
Ecco un'illustrazione del nostro sito nelle versioni mobile, tablet e PC:

!Responsive Design

## Link

Link per provare l'applicazione: [EarthMetrics](https://earthmetrics-370b2.web.app/)

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

2. Apri il tuo browser e naviga a http://localhost:4200/.


## Funzionalità
EarthMetrics include le seguenti funzionalità:

- **Home**: Seleziona il grafico da visualizzare.
- **Temperature**: Visualizza i dati sulla temperatura globale.
- **CO2**: Visualizza i dati sulle emissioni di CO2.
- **Metano**: Visualizza i dati sulle emissioni di metano.
- **NO2**: Visualizza i dati sulle emissioni di N2O.
- **Ghiaccio Polare**: Visualizza i dati sull’estensione del ghiaccio polare.
- **Design Responsive**: L’app è ottimizzata per dispositivi mobili, tablet e desktop.
- **Modalità Light/Dark**: Passa dalla modalità chiara a quella scura tramite la toolbar.

## Struttura del Progetto
Il progetto è strutturato in base cercando di seguire le best practice Angular. Ecco una panoramica:

```plaintext
src/
  assets
  app/
    home/
      components/
        hero-banner
        page-selector
    pages/
      temperature
      co2
      methane
      n2o
      arctic
    models/
      arcticData.model
      co2Data.model
      methaneData.model
      n2oData.model
      temperatureData.model
      homeImages.model
      htmlContent.model
    services/
      client-api
      data-service
      html-content
      image-data
      theme-manager
    shared/
      angular-material.module.ts
      animations
      footer
      sidenav
      theme
```
    
### Home
#### Components
hero-banner: Componente che visualizza il banner principale della home page.
page-selector: Componente che permette di selezionare la pagina da visualizzare tramite un carosello di immagini.

### Pages
La componente PagesComponent funge da layout per le sue sottocomponenti, gestendo la visualizzazione dei titoli, dei contenuti e delle leggende dei grafici. Utilizza il servizio DataService per aggiornare dinamicamente il titolo, il contenuto e la leggenda in base ai dati ricevuti. La struttura HTML della componente include un router-outlet per caricare le sottocomponenti specifiche (come TemperatureComponent, Co2Component, ecc.) e visualizzare i relativi grafici e leggende.

temperature: Componente per la visualizzazione dei dati sulla temperatura globale. Utilizza ngx-echarts per creare grafici interattivi basati sui dati ricevuti dall’API.
co2: Componente per la visualizzazione dei dati sulle emissioni di CO2.
methane: Componente per la visualizzazione dei dati sulle emissioni di metano.
n2o: Componente per la visualizzazione dei dati sulle emissioni di N2O.
arctic: Componente per la visualizzazione dei dati sull’estensione del ghiaccio polare.
pages.component.ts: Componente che funge da layout per le sottocomponenti, gestendo la visualizzazione dei titoli, dei contenuti e delle leggende dei grafici.
pages.module.ts: Modulo che raggruppa tutte le componenti di pages.

<!-- Il metodo ngOnInit viene eseguito al momento dell’inizializzazione della componente e svolge le seguenti operazioni:

Recupera i contenuti HTML relativi alla temperatura utilizzando HtmlContentService.
Aggiorna il titolo, il paragrafo e la legenda della sezione relativa alla temperatura utilizzando DataService.
Effettua una chiamata API per recuperare i dati della temperatura utilizzando ClientAPIService.
Se i dati vengono recuperati con successo e l’applicazione è in esecuzione nel browser, chiama il metodo createTemperatureChart per creare il grafico. -->

### Models
arcticData.model.ts: Modello per i dati relativi all’estensione del ghiaccio polare.
co2Data.model.ts: Modello per i dati relativi alle emissioni di CO2.
methaneData.model.ts: Modello per i dati relativi alle emissioni di metano.
n2oData.model.ts: Modello per i dati relativi alle emissioni di N2O.
temperatureData.model.ts: Modello per i dati relativi alla temperatura globale.
homeImages.model.ts: Modello per le immagini utilizzate nella home page.
htmlContent.model.ts: Modello per i contenuti HTML utilizzati nell’applicazione.

### Services
client-api: Servizio che gestisce le chiamate API per recuperare i dati.
data-service: Servizio che gestisce i dati dell’applicazione.
html-content: Servizio che fornisce contenuti HTML per le varie sezioni dell’app.
image-data: Servizio che gestisce i dati delle immagini.
theme-manager: Servizio che gestisce i temi (light e dark) dell’applicazione.

### Shared
angular-material.module.ts: Modulo che importa e configura i componenti di Angular Material.
animations: Modulo che gestisce le animazioni dell’applicazione.
footer: Componente che visualizza il footer dell’applicazione.
sidenav: Componente che visualizza la barra laterale di navigazione.
theme: Modulo che gestisce i temi dell’applicazione.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


link deploy: https://earthmetrics-370b2.web.app