import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {DeviceConditionService} from '../device-condition.service';
import {DeviceCondition} from '../../../../entity/device-condition.model';


@Component({
  selector: 'app-new-device-condition',
  templateUrl: './new-device-condition.component.html',
  styleUrls: ['./new-device-condition.component.scss']
})
export class NewDeviceConditionComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private _router: Router,
    private _service: DeviceConditionService,
    private _toastr: ToastrService,
    private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'name': this._formBuilder.control(''),
      'description': this._formBuilder.control('')
    });
  }

  send(data): void {
    this.submitted = true;
    if (this.form.invalid) {
      this._toastr.warning('Field Not Allowed Empty', 'Can\'t Save Change Type',
        {
          timeOut: 5000
        });
      return;
    }

    const value: DeviceCondition = this.form.value;
    this._service.save(value).subscribe(resp => {
      this._toastr.info('New Device of Condition Saved', 'Save Success');
      this._router.navigate(['master', 'device-condition']);
    }, error => {
      this._toastr.warning('There is something error', 'Oopss....');
    });
  }

  get f() {
    return this.form.controls;
  }

}
