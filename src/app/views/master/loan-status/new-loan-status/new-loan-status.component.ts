import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {ToastrService} from 'ngx-toastr';
import {LoanStatusService} from '../loan-status.service';
import {LoanStatus} from '../../../../entity/loan-status.model';


@Component({
  selector: 'app-new-loan-status',
  templateUrl: './new-loan-status.component.html',
  styleUrls: ['./new-loan-status.component.scss']
})
export class NewLoanStatusComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private _router: Router,
    private _service: LoanStatusService,
    private _toastr: ToastrService,
    private _formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      'name': this._formBuilder.control('')
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

    const value: LoanStatus = this.form.value;
    this._service.save(value).subscribe(resp => {
      this._toastr.info('New Loan Status Saved', 'Save Success');
      this._router.navigate(['master', 'loan-status']);
    }, error => {
      this._toastr.warning('There is something error', 'Oopss....');
    });
  }

  get f() {
    return this.form.controls;
  }
}
