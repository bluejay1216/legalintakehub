import { Component } from '@angular/core';

export interface Section {
  icon: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intake-hub';
  appName = 'Intake Hub'
  workspaces: Section[] = [
    {
      icon: 'perm_contact_calendar',
      name: 'Clients',
    },
    {
      icon: 'supervised_user_circle',
      name: 'Client Users',
    },
    {
      icon: 'folder',
      name: 'Matters',
    }
  ];
  settings: Section[] = [
    {
      icon: 'store',
      name: 'Firm',
    },
    {
      icon: 'pie_chart',
      name: 'Customization',
    },
    {
      icon: 'compare_arrows',
      name: 'Integration',
    },
    {
      icon: 'attach_money',
      name: 'Billing',
    }
  ];
}
