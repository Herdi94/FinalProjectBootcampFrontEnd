import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {LoanStatusService} from '../loan-status.service';
import {LoanStatus} from '../../../../entity/loan-status.model';


@Component({
  selector: 'app-update-loan-status',
  templateUrl: './update-loan-status.component.html',
  styleUrls: ['./update-loan-status.component.scss']
})
export class UpdateLoanStatusComponent implements OnInit, OnDestroy {

  private subcribeTopic: Subscription;
  form: FormGroup;
  submitted = false;

  constructor(
    private _router: Router,
    private _service: LoanStatusService,
    private _activeRoute: ActivatedRoute,
    private _toastr: ToastrService,
    private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      id: this._formBuilder.control('', Validators.required),
      name: this._formBuilder.control('', Validators.required)
    });

    this.subcribeTopic = this._activeRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      this._service.getChangeTypes(id).subscribe((response: any) => {
        if (response.status === 204) {
          this._router.navigate(['master', 'loan-status']);
        } else {
          const value: LoanStatus = response.body;
          console.log(value);
          this.form.setValue({
              'id': value.id,
              'name': value.name}
          );
        }
      });
    });
  }

  send(data): void {
    this.submitted = true;
    if (this.form.invalid) {
      this._toastr.warning('Field Not Allowed Empty', 'Can\'t Update Change Type',
        {
          timeOut: 5000
        });
      return;
    }
    const value: LoanStatus = this.form.value;
    this._service.update(value).subscribe(resp => {
      this._toastr.info('Change a Loan status', 'Update Success');
      this._router.navigate(['master', 'loan-status']);
    }, error => {
      this._toastr.warning('Cant Update a Loan status', 'Oppss...');
      console.error('Can\'t be saved');
    });
  }

  get f() {
    return this.form.controls;
  }

  ngOnDestroy(): void {
    this.subcribeTopic.unsubscribe();
  }

}
