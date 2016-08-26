import { Component,OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit{
	price;
	weight;
	pp2kg;
	sendFee;
	yenResult;
	kipResult;
	totalPrice;
	clicked;
	yenkip;

	constructor(){}

	ngOnInit() {
		this.pp2kg = 3300;
		this.yenkip = 81;
		this.clicked = false;
	}

	calcula(){
		this.clicked = true;
		this.sendFee = (this.weight * this.pp2kg) / 2000;
		this.totalPrice = this.price + this.sendFee;
		this.yenResult = this.totalPrice;
		this.kipResult = this.yenResult * this.yenkip;
	}
}
