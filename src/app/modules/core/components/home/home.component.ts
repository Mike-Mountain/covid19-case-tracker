import { Component, OnInit } from '@angular/core';
import {InitialDataService} from '../../services/initial-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;
  totalCases: number;
  totalDeaths: number;
  totalRecovered: number;
  newCases: number;
  currentDate: Date;

  constructor(private initialDataService: InitialDataService) { }

  ngOnInit(): void {
    this.initialDataService.getData().subscribe(data => {
      this.totalCases = data.data.latest_data.confirmed;
      this.totalDeaths = data.data.latest_data.deaths;
      this.totalRecovered = data.data.latest_data.recovered;
      if (!data.data.timeline[0].is_in_progress) {
        this.newCases = data.data.timeline[0].new_confirmed;
        this.currentDate = data.data.timeline[0].date;
      } else {
        this.newCases = data.data.timeline[1].new_confirmed;
        this.currentDate = data.data.timeline[1].date;
      }
    });
  }

}
