import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {DatatablesModelResponse} from '../../../_model/datatables';
import {CapacityUnit} from '../../../entity/capacity-unit.model';


@Injectable()
export class CapacityUnitService {

  constructor(private _http: HttpClient) {
  }

  public datatables(value: CapacityUnit, datatablesParameters: any) {
    let params = new HttpParams();
    params = params.append('start', datatablesParameters.start);
    params = params.append('length', datatablesParameters.length);
    params = params.append('draw', datatablesParameters.draw);
    params = params.append('order[0][column]', datatablesParameters.order[0]['column']);
    params = params.append('order[0][dir]', datatablesParameters.order[0]['dir']);

    return this._http
      .post<DatatablesModelResponse>(
        `${environment.supportDeviceApi}/master/capacity-unit/datatables`,
        value, {params: params}
      );
  }

  public save(value: CapacityUnit) {
    return this._http.post(`${environment.supportDeviceApi}/master/capacity-unit/`, value);
  }

  public update(value: CapacityUnit) {
    return this._http.put(`${environment.supportDeviceApi}/master/capacity-unit/`, value);
  }


  public getChangeTypes(id: number) {
    return this._http.get(`${environment.supportDeviceApi}/master/capacity-unit/${id}`, {observe: 'response'});
  }

  public remove(id: number) {
    return this._http.delete(`${environment.supportDeviceApi}/master/capacity-unit/${id}`, {observe: 'response'});
  }
}
