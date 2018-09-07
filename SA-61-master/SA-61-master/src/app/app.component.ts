import { Component, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import{ActivitiesComponent} from './activities/activities.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents : [ActivitiesComponent]
})
export class AppComponent {
  title = 'System Analysis and Design 61 / 1';
}
