import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/http.service';
import { Product } from '../core/model/product';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    productArray: Product[] = [];
    flilterArrays: Product[] = [];

    constructor(private httpservice: HttpService) { }

    ngOnInit(): void {
        // all the create  method 
        this.getProductDetails()
    };
    // get all the data using service
    getProductDetails() {
        this.httpservice.getData('productArray').subscribe(res => {
            console.log(res);
            if (Array.isArray(res) && res.length > 0) {
                this.productArray = res;
                this.flilterArray('all')
            }
        },
            error => {
                console.log("error occures", error)
            })
}
// filter the product as per category
    flilterArray(type: any) {
        if (type == 'all') {
            this.flilterArrays = this.productArray

        } else {
            this.flilterArrays = this.productArray.filter((el: any) => (el.category == type))
        }

    }

}
