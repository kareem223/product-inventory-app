import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }
  title = 'Inventory Management';
  // search="";
  searchProduct(searchText: string) {
    if (searchText){
      this.router.navigate(['/search'], { queryParams: { category: searchText } });
    }
    else{
      this.router.navigate(['/products']);
    }
  }

}
