import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import Formato from '../interfaces/formato.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormatoService {
  
  constructor(private firestore: Firestore) { }

  addFormato(formato: Formato){
    const formatoRef = collection(this.firestore, 'cards');
    return addDoc(formatoRef, formato);
  }

  getFormato(): Observable<Formato[]> {
    const formatoRef = collection(this.firestore, 'cards');
    return collectionData(formatoRef, {idField: 'id'}) as Observable<Formato[]>;
  }
  
  deleteFormato(id: String) {
    const formatoDocRef = doc(this.firestore, `cards/${id}`);
    return deleteDoc(formatoDocRef);
  }

}
