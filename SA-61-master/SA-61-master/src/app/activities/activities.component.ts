import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  acts: Act[] = [                                         
    {value: 'a-0', viewValue: 'ออกกำลัง'},
    {value: 'aaa-1', viewValue: 'ให้ความรู้'},
    {value: 'aaaa-2', viewValue: 'ผ่อนคลาย'}
  ];

  sexs: Sex[] = [                                         
    {value: 's-0', viewValue: 'ชาย'},
    {value: 'ss-1', viewValue: 'หญิง'},
    {value: 'sss-2', viewValue: 'ทั้งหมด'}
  ];

  rooms: Room[] = [                                         
    {value: 'r-0', viewValue: '112'},
    {value: 'rr-1', viewValue: '113'},
    {value: 'rrr-2', viewValue: '114'}
  ];

  times: Time[] = [                                         
    {value: 't-0', viewValue: '06.00 - 07.00'},
    {value: 'tt-1', viewValue: '06.00 - 08.00'},
    {value: 'ttt-2', viewValue: '07.00 - 08.00'}
    {value: 't-0', viewValue: '07.00 - 09.00'},
    {value: 'tt-1', viewValue: '08.00 - 09.00'},
    {value: 'ttt-2', viewValue: '08.00 - 10.00'}
  ];
  
  ages: Age[] = [                                         
    {value: 'a-0', viewValue: '50-60'},
    {value: 'aa-1', viewValue: '60-70'},
    {value: 'aaa-2', viewValue: '70-90'}
  ];
}


export interface Act {
  value: string;
  viewValue: string;
}
export interface sex {
  value: string;
  viewValue: string;
}
export interface room {
  value: string;
  viewValue: string;
}
export interface time {
  value: string;
  viewValue: string;
}
export interface age {
  value: string;
  viewValue: string;
}