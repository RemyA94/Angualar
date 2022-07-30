import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly inspectionAPIUrl = "http://localhost:5078/api";

  constructor(private http: HttpClient) { }

//Inspection
  getInspectionList():Observable<any[]>{
    return this.http.get<any>(this.inspectionAPIUrl + '/Inspections/GetInspections');
  }

  addInspection(data:any){
    return this.http.post(this.inspectionAPIUrl + 'Inspections/SaveInspections', data);
  }

  updateInspection(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl	+ '/Inspections/EditInspections/${id}',data);
  }

  deleteInspection(id:number|string, data:any){
    return this.http.delete(this.inspectionAPIUrl + '/Inspections/DeleteInspections/${id}')
  }
  
//InspectonType
  getInspectionTypeList():Observable<any[]>{
    return this.http.get<any>(this.inspectionAPIUrl + '/InspectionTypes/GetInspectionTypes');
  }

  addInspectionType(data:any){
    return this.http.post(this.inspectionAPIUrl + 'InspectionTypes/SaveInspectionTypes', data);
  }

  updateInspectionType(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl	+ '/InspectionTypes/EditInspectionTypes/${id}',data);
  }

  deleteInspectionType(id:number|string, data:any){
    return this.http.delete(this.inspectionAPIUrl + '/InspectionTypes/DeleteInspectionTypes/${id}')
  }
  
  //Status
  getStatusList():Observable<any[]>{
    return this.http.get<any>(this.inspectionAPIUrl + '/Status/GetStatuses');
  }
  
  addStatus(data:any){
    return this.http.post(this.inspectionAPIUrl + 'Status/SaveStatuses', data);
  }
  
  updateStatus(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl	+ '/Status/EditStatuses/${id}',data);
  }
  
  deleteStatus(id:number|string, data:any){
    return this.http.delete(this.inspectionAPIUrl + '/Status/DeleteStatuses/${id}')
  }
}
