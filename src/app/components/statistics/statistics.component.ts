import {Component, OnInit} from '@angular/core';
import {GetLocationsService} from '../../services/get-locations.service';
import {StatisticsResolver} from '../../services/resolver/statistics-resolver.service';
import { ActivatedRoute } from '@angular/router';
import {Http, Headers} from '@angular/http';
import {Observable} from "rxjs/Observable";

let dataForChart = [];

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit {
  accidents: any;
  public lineChartData: Array<any>;
  public lineChartLabels: Array<any> = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';


  constructor( private http: Http, private locationService: GetLocationsService, private route: ActivatedRoute) {
    this.accidents = this.route.snapshot.data['accidents'];
    this.lineChartData = [{data: this.accidents, label: 'Accidente'}];
  }

  ngOnInit() {}

}
