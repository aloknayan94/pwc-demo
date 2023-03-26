import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  doubledigit = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
  hundreads = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  numToWord: any = '';

  constructor() { }

  ngOnInit(): void {
  }

  getValue(event: any) {
    this.numToWord = '';
    let num = event.target.value;
    if (!isNaN(num)) this.numToWord = this.inWords(num);
    else alert('Not a number');
  }

  inWords(num: string | number) {
    if ((num = num.toString()).length > 9) return 'overflow';
    let n: any = ('000000000' + num);
    n = n.substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; 
    let str = '';
    str += (n[1] != 0) ? (this.doubledigit[Number(n[1])] || this.hundreads[n[1][0]] + ' ' + this.doubledigit[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (this.doubledigit[Number(n[2])] || this.hundreads[n[2][0]] + ' ' + this.doubledigit[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (this.doubledigit[Number(n[3])] || this.hundreads[n[3][0]] + ' ' + this.doubledigit[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (this.doubledigit[Number(n[4])] || this.hundreads[n[4][0]] + ' ' + this.doubledigit[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (this.doubledigit[Number(n[5])] || this.hundreads[n[5][0]] + ' ' + this.doubledigit[n[5][1]]) + 'only ' : '';
    return str;
  }

}
