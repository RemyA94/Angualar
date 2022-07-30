import { Component, OnInit } from '@angular/core';

import { map, Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';


@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit {

  inspectionList$!:Observable<any[]>;
  inspectionTypesList$!:Observable<any[]>;
  inspectionTypesList:any=[];

  //mapear a la pantalla data relacionada con la FK
  inspectionTypesMap:Map<number, string> = new Map();

  //Creamos la instancia de InspectionApiService
  constructor(private service: InspectionApiService) { }

  ngOnInit(): void {
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionTypesList$ = this.service.getInspectionTypeList();
    this.refreshInspectionTypeMap();
  }

  //Variables (properties)
  modalTitle:string = '';
  activateAddInspectionComponent:boolean = false;
  inspection:any;

  modalAdd(){
    this.inspection ={
      id:0,
      status:null,
      comments:null,
      inspectionTypeId:null
    }
    this.modalTitle = "Add Inspection";
    this.activateAddInspectionComponent = true;
  }

  //Con esto mostramos el obtenemos el instpectionName
  refreshInspectionTypeMap(){
    this.service.getInspectionTypeList().subscribe(data  =>{
      this.inspectionTypesList = data;

      for(let i = 0; i < data.length; i++){
        this.inspectionTypesMap.set(this.inspectionTypesList[i].id, 
          this.inspectionTypesList[i].inspectionName);
      }
    })
  }


}
