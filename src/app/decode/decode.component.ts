import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.css'],
})
export class DecodeComponent implements OnInit {
  result="";
  vin: string = '';
  monthsLookup = {
    A: 'Jan',
    B: 'Feb',
    C: 'Mar',
    D: 'Apr',
    E: 'May',
    F: 'Jun',
    G: 'Jul',
    H: 'Aug',
    J: 'Sep',
    K: 'Oct',
    N: 'Nov',
    P: 'Dec',
  };

  yearLookup = {
    A: '2010',
    B: '2011',
    C: '2012',
    D: '2013',
    E: '2014',
    F: '2015',
    G: '2016',
    H: '2017',
    J: '2018',
    K: '2019',
    L: '2020',
    M: '2021',
    N: '2022',
    P: '2023',
    R: '2024',
    S: '2025',
    T: '2026',
    V: '2027',
    W: '2028',
    X: '2029',
    Y: '2030',
  };

  constructor() {}

  ngOnInit(): void {}

  decodeVin() {
    
   const monthPos = 11;
   const yearPos = 9;

   let vinSplit =this.vin.split(""); 

    if (vinSplit.length == 17) {
      
      let monthChar = vinSplit[monthPos];
      let yearChar = vinSplit[yearPos];

      console.log(monthChar,yearChar)

      this.result = `Year : ${this.yearLookup[yearChar]} and Month : ${this.monthsLookup[monthChar]}`;

    }else{

      this.result ="Enter valid 17 digit vin"
    }
  }

  valuechange(e){
    this.result =""
  }
}
