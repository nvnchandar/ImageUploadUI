import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileService {
    constructor(private http: HttpClient) { }

    getFile() {
        return this.http.get('http://localhost:3000/', { observe: 'response' });
    }

    uploadFile(myFile: FormData) {
        return this.http.post('http://localhost:3000/uploadfile', myFile, { observe: 'response' });
    }

    downlaodFile() {
        return this.http.get('http://localhost:3000/downloadfile', { responseType: 'blob' });
    }

}
