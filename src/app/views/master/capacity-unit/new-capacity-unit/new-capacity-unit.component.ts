import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {CapacityUnitService} from '../capacity-unit.service';
import {CapacityUnit} from '../../../../entity/capacity-unit.model';



@Component({
  selector: 'app-new-capacity-unit',
  templateUrl: './new-capacity-unit.component.html',
  styleUrls: ['./new-capacity-unit.component.scss']
})
export class NewCapacityUnitComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private _router: Router,
    private _service: CapacityUnitService,
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

    const value: CapacityUnit = this.form.value;
    this._service.save(value).subscribe(resp => {
      this._toastr.info('New Unit of Capacity Saved', 'Save Success');
      this._router.navigate(['master', 'capacity-unit']);
    }, error => {
      this._toastr.warning('There is something error', 'Oopss....');
    });
  }

  get f() {
    return this.form.controls;
  }

}
