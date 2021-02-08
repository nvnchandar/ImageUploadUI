import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import { async } from '@angular/core/testing';
import { FileService } from './services/file.service';
import * as JSZip from 'jszip';
import * as FileSaver from 'file-saver'; 
import { resolve } from 'url';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // fileInput: File;
  @ViewChild('fileInput', { static: true }) inputEl: ElementRef;
  fileSelected: any;
  fileToSend: File;
  downloadeFile: any;

  btobFile: any = "";
  files: any = [];
  zipFileGenerated: File;

  fileSelectedMultiple: any[] = [];
  fileToSendMultiple: File[] = [];

  retrievedFilesMultiple: File[] = [];

  fileNameOfSelected: string = "";
  // title = 'multiselect';
  // dropdownList = [];
  // selectedItems = [];
  // dropdownSettings = {};
  // //search
  // protected searchStr: string;
  // protected captain: string;
  // protected dataService: CompleterData;
  // protected searchData = [
  //   { color: 'red', value: '#f00' },
  //   { color: 'green', value: '#0f0' },
  //   { color: 'blue', value: '#00f' },
  //   { color: 'cyan', value: '#0ff' },
  //   { color: 'magenta', value: '#f0f' },
  //   { color: 'yellow', value: '#ff0' },
  //   { color: 'black', value: '#000' }
  // ];
  // protected captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett' ];
  // partNumber: any;

  constructor(private completerService: CompleterService, private fileService: FileService) {
    // this.dataService = completerService.local(this.searchData, 'color', 'color');
  }
  ngOnInit() {
    // this.dropdownList = [
    //   { item_id: 1, item_text: 'aaa@gmail.com', item_alter: 'Ahsdsd GGdsd' },
    //   { item_id: 2, item_text: 'sdjsdgs@gmail.com', item_alter: 'AFfddyy Hjdh'  },
    //   { item_id: 3, item_text: 'dsgdsgdadha@gmail.com', item_alter: 'Ghkdd HHHKsds'  },
    //   { item_id: 4, item_text: 'askasjaks@gmail.com', item_alter: 'Egsddsd TTsdgsds'  },
    //   { item_id: 5, item_text: 'teyqetw@gmail.com', item_alter: 'Ysdshg Uusdsds'  }
    // ];
    // this.selectedItems = [
    //   // { item_id: 3, item_text: 'Naveen', item_alter: 'aaa' },
    //   // { item_id: 4, item_text: 'Naveen1', item_alter: 'bbb'  }
    // ];
    // this.dropdownSettings = {
    //   singleSelection: false,
    //   idField: 'item_id',
    //   textField: 'item_text',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: true
    // };
  }

  onChange(event: any) {
    // console.log(event.srcElement.value)
    // this.fileSelected = event.srcElement.value;
    this.fileToSend = event.target.files[0];
    this.fileSelected = event.target.files[0];

    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.fileSelected = e.target.result;
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  onChangeMultiple(event: any) {
    // console.log(event.srcElement.value)
    // this.fileSelected = event.srcElement.value;
    let files = event.target.files;
    for (let file of files) {
      this.fileToSendMultiple.push(file);
    }
    // this.fileSelectedMultiple = event.target.files[0];
    this.makeDisplayImage(event.target.files);

  }

  makeDisplayImage(files: File[]){
    // console.log("files",files)
    for (let file of files) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.fileSelectedMultiple.push(e.target.result);
      }
      reader.readAsDataURL(file);
    }
    // files.forEach((x,index) =>{
    //   var reader = new FileReader();

    //   reader.onload = (e: any) => {
    //   this.fileSelectedMultiple[index] = e.target.result;
    //   };

    //   reader.readAsDataURL(x[index]);

    // });

  }

  async downloadImage1() {
    await this.fileService.downlaodFile().toPromise().then(async (data) => {
      console.log("data",data);
      const blob = new Blob([data], {
        type: 'application/zip'
      });
      // const url = window.URL.createObjectURL(blob);
      // window.open(url);
      const jsZip = new JSZip();  
      jsZip.loadAsync(blob).then(async (zip) => { // <----- HERE
        // console.log("home",zip.files["nav.png"])
        // // this.btobFile = zip.files["Home.png"];
        // zip.files["nav.png"].async("base64")
        // .then((content)=> {
        //   console.log("content", content)
        
        //   // let imgType = 
        //   // working
        //   // this.addToImage('data:image/png;base64,' + content);
        //   this.addToImage(content);
        // })
        await Object.keys(zip.files).forEach((filename) => { 
          console.log("filename",zip.files[filename])
          this.fileNameOfSelected = filename;
          console.log("this.fileNameOfSelected",this.fileNameOfSelected)
          zip.files[filename].async("base64").then(async (fileData) => { 
            let base64File = fileData;
            let fileTypeSplit = this.fileNameOfSelected.toLowerCase().split(".")[1];
            var fileType = "";
            if(fileTypeSplit === 'png') {
              fileType = "image/png";
            } else if(fileTypeSplit === 'jpg' || fileTypeSplit === 'jpeg'){
              fileType = "image/jpg";
            } else if(fileTypeSplit === ""){
              fileType = "image/png";
            }
            this.dataURItoBlob(base64File,fileType).toPromise().then((blob: Blob) => {
              let imageBlob: Blob = blob;
              let imageName: string = this.fileNameOfSelected;
              let imageFile: File = new File([imageBlob], imageName, {
                type: fileType
              });
              this.retrievedFilesMultiple.push(imageFile);
              console.log("retrievedFilesMultiple", this.retrievedFilesMultiple);
            });
          });
        });
      });
      console.log("retrievedFilesMultiple", this.retrievedFilesMultiple);
    }, error => {
      console.log(error);
    });
  }

  async downloadImage2() {
    await this.fileService.downlaodFile().toPromise().then(async (data) => {
      console.log("data",data);
      const blob = new Blob([data], {
        type: 'application/zip'
      });
      const jsZip = new JSZip();  
      jsZip.loadAsync(blob).then(async (zip) => { 

        await this.asyncForEach(Object.keys(zip.files), async(filename) =>{
          console.log("filename",zip.files[filename])
          this.fileNameOfSelected = filename;
          console.log("this.fileNameOfSelected",this.fileNameOfSelected)
          await zip.files[filename].async("base64").then(async (fileData) => { 
            let base64File = fileData;
            let fileTypeSplit = this.fileNameOfSelected.toLowerCase().split(".")[1];
            var fileType = "";
            if(fileTypeSplit === 'png') {
              fileType = "image/png";
            } else if(fileTypeSplit === 'jpg' || fileTypeSplit === 'jpeg'){
              fileType = "image/jpg";
            } else if(fileTypeSplit === ""){
              fileType = "image/png";
            }
            await this.dataURItoBlob(base64File,fileType).toPromise().then((blob: Blob) => {
              let imageBlob: Blob = blob;
              let imageName: string = this.fileNameOfSelected;
              let imageFile: File = new File([imageBlob], imageName, {
                type: fileType
              });
              this.retrievedFilesMultiple.push(imageFile);
              console.log("retrievedFilesMultiple", this.retrievedFilesMultiple);
            });
          });
        })
        this.makeDisplayImage(this.retrievedFilesMultiple);
      });
    }, error => {
      console.log(error);
    });
  }

  async asyncForEach(array,callback){
    for(let index = 0; index< array.length; index++)
    await callback(array[index]);
  }

  addToImage(file:any){
    this.btobFile = file;
    this.createBlobImageFileAndShow();
  }

  createBlobImageFileAndShow(): void {
    this.dataURItoBlob(this.btobFile,"image/png").subscribe((blob: Blob) => {
      const imageBlob: Blob = blob;
      const imageName: string = this.generateName();
      const imageFile: File = new File([imageBlob], imageName, {
        type: "image/png"
      });
      // let file = window.URL.createObjectURL(imageFile);
      console.log("imageFile",imageFile)

      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.downloadeFile = e.target.result;
      };

      reader.readAsDataURL(imageFile);
      // this.downloadeFile = 
      // window.open(this.generatedImage);
    });
  }
  
    /* Method to convert Base64Data Url as Image Blob */
  dataURItoBlob(dataURI: string,fileType:string): Observable<Blob> {
    return new Observable((observer: Observer<Blob>) => {
      const byteString: string = window.atob(dataURI);
      const arrayBuffer: ArrayBuffer = new ArrayBuffer(byteString.length);
      const int8Array: Uint8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < byteString.length; i++) {
        int8Array[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([int8Array], { type: fileType });
      observer.next(blob);
      observer.complete();
    });
  }

  /**Method to Generate a Name for the Image */
  generateName(): string {
    const date: number = new Date().valueOf();
    let text: string = "";
    const possibleText: string =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
      text += possibleText.charAt(
        Math.floor(Math.random() * possibleText.length)
      );
    }
    // Replace extension according to your media type like this
    return date + "." + text + ".jpeg";
  }

  downloadImage() {
    this.fileService.downlaodFile().subscribe((data) => {
      // console.log(data.body);
      this.createImageFromBlob(data);
      this.btobFile = this.blobToFile(data, 'image1');
    }, error => {
      console.log(error);
    });
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.downloadeFile = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  blobToFile(theBlob, fileName) {
    // A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
  }

  async createZip(files: any[], zipName: string){  
    const zip = new JSZip();  
    const name = zipName + '.zip';  
    await zip.file(this.fileToSend.name, this.fileToSend);
    await zip.generateAsync({ type: 'blob' }).then((content) => {  
      if (content) {  
        // this.zipFileGenerated = FileSaver.saveAs(content, name);  
        this.zipFileGenerated = this.blobToFile(content,name);
        console.log("zip1",this.zipFileGenerated)
        // return new Promise();
      }  
    }); 
    // tslint:disable-next-line:prefer-for-of  
    // for (let counter = 0; counter < files.length; counter++) {  
    //   const element = files[counter];  
    //   const fileData: any = await this.getFile(element);  
    //   const b: any = new Blob([fileData], { type: '' + fileData.type + '' });  
    //   zip.file(element.substring(element.lastIndexOf('/') + 1), b);  
    // }  
    // zip.generateAsync({ type: 'blob' }).then((content) => {  
    //   if (content) {  
    //     FileSaver.saveAs(content, name);  
    //   }  
    // });  
  }  

  async createZipMultiple(files: any[], zipName: string){  
    const zip = new JSZip();  
    const name = zipName + '.zip';  
    for(let file of files){
      zip.file(file.name, file, { base64: true });
    }
    
    await zip.generateAsync({ type: 'blob' }).then((content) => {  
      if (content) {  
        // this.zipFileGenerated = FileSaver.saveAs(content, name);  
        this.zipFileGenerated = this.blobToFile(content,name);
        console.log("zip1",this.zipFileGenerated)
        // return new Promise();
      }  
    }); 
  } 

  async uploadImage() {
    // this.fileToSendMultiple = this.retrievedFilesMultiple;
    const inputEl: HTMLInputElement = this.inputEl.nativeElement;
    //single
    // const fileCount: number = inputEl.files.length;

    //multiple
    const fileCount: number = this.fileToSendMultiple.length;
    const formData = new FormData();
    console.log(fileCount);
    // console.log(inputEl.files);
    console.log(this.fileToSendMultiple);
    class  ONE {
      id: number;
      text: string;
    }
    const one: ONE = new ONE();
    one.id = 1;
    one.text = 'Hello';
    if (fileCount > 0) { // a file was selected
      // for (let i = 0; i < fileCount; i++) {
      //   // formData.append('myFile', inputEl.files.item(i));
      //   formData.append('myFile', this.fileToSend);
      // }

      // single file
      // await this.createZip([],"new");

      // multiple file
      await this.createZipMultiple(this.fileToSendMultiple,"new");

      console.log("zipfile",this.zipFileGenerated);
      formData.append('myFile', this.zipFileGenerated);
      formData.append('fileSelected', '{"manualAlertPublishedV":{"partNum":"SDWDSD","partDescription":"sdsd","region":"APJ","demandRegion":"APJ","site":"APCC","commodity":"XLOB","cfg":"dsdsd","platform":"sdsd","lob":"sdsd","recoveryFromStbl":"09/20/2019","recoveryToGreenDsi":"09/20/2019","dsi1WeekPrior":"11","dsiBeginningOfTheMonth":"11","revenueImpact":"11","pps":"11","directPps":"11","scheduledPps":"11","currentStbl":"11","directStbl":"11","scheduledStbl":"11","rootCause":"11","rootCauseClassify":"SUP - Quality Issues (SQE)","ruleTypeSet":["High PPS","Long Term Gap Out","Severe STBL"],"distributionList":"swapna_barma@dellteam.com","adhocList":"","attainment":null,"execSummary":null,"optionalPart":null,"currentSupplyInfo":null,"subcomponentSupplyInformation":null,"lessonLearned":null,"odmFeedback":null,"longTermMitigation":null,"lessonLearnedDueDate":null,"longTermMitigationDueDate":null,"nextUpdate":null},"executiveSummaryV":[],"supplierFeedbackV":[]}');
      console.log('formdata', formData);
      this.fileService.uploadFile(formData).subscribe((data) => {
        console.log(data.body);
      }, error => {
        console.log(error);
      });
      // console.log(formData)
      // console.log(formData)
      // this.http
      //     .post('http://your.upload.url', formData)
      // do whatever you do...
      // subscribe to observable to listen for response
    }
    // console.log(this.fileInput.length)
    // this.fileService.uploadFile(this.fileInput).subscribe((data)=>{
    //   console.log(data.body);
    // }, error =>{
    //   console.log(error);
    // })
    // this.fileService.getFile().subscribe((data)=>{
    //   console.log(data.body);
    // }, error =>{
    //   console.log(error);
    // })
  }
  // onItemSelect(item: any) {
  //   let tempArray = JSON.parse(JSON.stringify(this.selectedItems));
  //   this.selectedItems = [];
  //   let ele: any;
  //   tempArray.forEach((element) => {
  //      ele = this.dropdownList.filter(x => {
  //       return x.item_id === element.item_id})
  //       let text = ele[0].item_alter;
  //     this.selectedItems.push({item_id:element.item_id, item_text:ele[0].item_alter})
  //   });
  //   console.log(this.selectedItems)
  // }
  // onSelectAll(items: any) {
  //   console.log(items);
  // }

  // numberOnly(event): boolean {
  //   const charCode = (event.which) ? event.which : event.keyCode;
  //   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  //     return false;
  //   }
  //   return true;

  // }
  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name);
    }
  }
  deleteAttachment(index) {
    this.files.splice(index, 1);
  }
}
