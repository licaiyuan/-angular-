import { Component, Input } from '@angular/core';

@Component({
  selector: 'tcnrmk-root',
  templateUrl: './tcnrmk.component.html',
  styleUrls: ['./tcnrmk.component.scss'],
})
export class tcnrmkComponent {
  @Input() gs: any;
  @Input() form: any;
  value: string;
  radioValue: any;
  // selectedValue;
  // date;
}
