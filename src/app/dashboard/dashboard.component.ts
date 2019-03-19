import { Component, OnInit,Inject } from '@angular/core';

import { Merchant} from '../Model/Merchant';
import {merchantDataJson} from '../../merchantData/merchantDataJson'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  customTag: string;
  reasonTag:string;
  
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  messageInfo: string = '';
  displaymessageInfo: Array<string> = [];
  merchantData:Merchant={};
  customTagValue: string='';
  reasonTagValue: string='';
  updatedValue: any= {};

  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  
    this.merchantData = merchantDataJson.merchantInfo[0];
    
  }

  updateComment(){
  this.displaymessageInfo.push(this.messageInfo);
  }

  searchValueEmit(val:number){
    let count = 0;
   merchantDataJson.merchantInfo.filter(value =>{
     if(value.merchantId === val){
       count= count+1;
       this.merchantData = value; 
     }
   }
     );
     if(count ==0){
       this.merchantData = {};
     }
 }

 openDailog(){

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {customTag: this.customTagValue, reasonTag:this.reasonTagValue}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result.customTag!=undefined){
        this.customTagValue = result.customTag;
      }
      if(result.reasonTag!=undefined){
        this.reasonTagValue = result.reasonTag;
      }
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./dialog-overview-example-dialog.scss']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
