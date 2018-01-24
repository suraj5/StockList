import { Component, OnInit } from '@angular/core';
import { Stock} from './stock';
import { StockListService} from './stock-list.service';
@Component({
  selector: 'stock-list',
  template: `
  
    <div>
      <h2>My Portfolio</h2>
    </div>
    
    <div *ngFor="let stock of stockList">
      {{stock.symbol|uppercase}} | {{stock.price| currency}} | {{stock.change}}
      <br>
    </div>

    <form (ngSubmit)="newStock(f.value)" #f="ngForm">
    <input type="text" name="symbol" ngModel/>
    <input type="text" name="price" ngModel/>
      <input type="text" name="change" ngModel/>
     <input type="submit"> 
    </form>
  `,
})

export class StockListComponent {

  stockList: Stock[];
  constructor(private stockListService:StockListService) {
    
    this.stockList = [];
    
  }
  
  ngOnInit() {
    
   this.stockListService.getStockList().subscribe((response) => {
       this.stockList = response['securities'];
       console.log(this.stockList);
   })
  }
   newStock(newStock){
     let exist:boolean = false;

     if(!this.CheckStock(newStock)){
       console.log("check stock checked")
      this.stockList.push({
        symbol:''+newStock.symbol,
        price: newStock.price,
        change:newStock.change
      })
     }
    
  }

  CheckStock(newStock):boolean {
    var i;
    for (i = 0; i < this.stockList.length; i++) {
      console.log(this.stockList[i].symbol.toLowerCase());
      console.log(newStock.symbol);
        if (this.stockList[i].symbol.toLowerCase() ===newStock.symbol.toString()) {
          console.log("checked");
            return true;
        }
    }
    return false;
  }
  
      
      
    
   
    /*
    this.stockList.push({
      symbol: 'googl',
      price: 10,
      change: 1
    });
    this.stockList.push({
      symbol: 'appl',
      price: 21,
      change: -3.5
    }); 
    this.stockList.push({
      symbol: 'msft',
      price: 91,
      change: .47
    });
   */
  
  
}