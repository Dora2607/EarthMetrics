import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';


describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit updated title', ()=>{
    const newTitle = 'Temperature Globali';
    service.changeTitle(newTitle);
    service.currentTitle.subscribe((title)=>{
      expect(title).toBe(newTitle);
    })
  })

  it('should emit updated content', ()=>{
    const newN2oContent = `
    <h5 class="dynamicTitle darkDynamicTitle">Cos'è</h5>
    <p class="innerParagraph">
      Il protossido di azoto (N₂O) è un gas incolore e non infiammabile, noto anche come gas esilarante. 
      È un potente gas serra con un potenziale di riscaldamento globale circa 300 volte superiore a quello della CO₂ su un periodo di 100 anni. 
      Le emissioni di N₂O si riferiscono alla quantità di protossido di azoto rilasciata nell’atmosfera a causa delle attività umane. 
      Queste attività includono l'uso di fertilizzanti azotati in agricoltura, la combustione di combustibili fossili, il trattamento delle acque reflue e alcuni processi industriali.
    </p>
    `;
    service.changeContent(newN2oContent);
    service.currentContent.subscribe((content)=>{
      expect(content).toBe(newN2oContent);
    })
  })

  it('should emit updated legend', ()=>{
    const newCo2Legend = ` 
    <p>Questo grafico mostra i livelli di anidride carbonica (CO₂) nell’atmosfera a partire dal 2014 in poi. 
    I dati sono rappresentati in due serie: il ciclo e la tendenza:</p> `;

    service.changeLegend(newCo2Legend);
    service.currentLegend.subscribe((legend)=>{
      expect(legend).toBe(newCo2Legend);
    })
  })


});
