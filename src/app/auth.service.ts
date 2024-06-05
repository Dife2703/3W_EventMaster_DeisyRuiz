import { Injectable, inject, signal } from "@angular/core";
import { 
    Auth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    updateProfile, 
    user,
    User,
} from "@angular/fire/auth";
//import { AngularFireAuth } from '@angular/fire/auth';
//import { createUserWithEmailAndPassword } from "@firebase/auth";
import { Observable, from } from "rxjs";
import { UserInterface } from "./user.interface";
import { map } from 'rxjs/operators';

@Injectable({
        providedIn: 'root'
})

export class AuthService {
    //constructor(private authService: AuthService) {}
    firebaseAuth = inject(Auth)
    user$ = user(this.firebaseAuth)
    currentUserSig = signal <UserInterface | null | undefined>(undefined);
    
    

    /*getAuthState() {
        return , console.log("esto va aqui");
      }
      */

    

    /*
    constructor() {
        this.user$.subscribe((user: User | null) => {
            if (user) {
                const userInterface: UserInterface = {
                    email: user.email!,
                    username: user.displayName!,
                };
                this.currentUserSig.set(userInterface);
            } else {
                this.currentUserSig.set(null);
            }
        });
    }*/


    /*
    isAuthenticated(): Observable<boolean> {
        return new Observable(observer => {
            const unsubscribe = this.currentUserSig.subscribe(user => {
                observer.next(!!user);
                observer.complete();
            });

            return () => unsubscribe();
        });
    }*/
    /*isAuthenticated(): Observable<boolean> {
        return this.user$.pipe(
          map(user => !!user)
        );
      }*/

      /*
      constructor() {
        this.user$.subscribe((user: User | null) => {
            if (user) {
                const userInterface: UserInterface = {
                    // Suponiendo que UserInterface tiene las mismas propiedades que User
                    // Si no es así, necesitas adaptar esta asignación
                    username: user.displayName || ''
                };
                this.currentUserSig.set(userInterface);
            } else {
                this.currentUserSig(null);
            }
        });
    }*/

   /* isAuthenticated(): Observable<boolean> {
        return new Observable(observer => {
            const unsubscribe = this.currentUserSig.subscribe(user => {
                observer.next(!!user);
                observer.complete();
            });

            return () => unsubscribe();
        });
    }*/

    register(
        username: string,
        email: string,
        password: string
    ): Observable<void> {
        const promise = createUserWithEmailAndPassword(
            this.firebaseAuth,
            email,
            password,
        ).then(response => updateProfile(response.user, {displayName: username}));

        return from(promise)
    }



    login(email: string, password: string): Observable<void> {
        const promise = signInWithEmailAndPassword(
            this.firebaseAuth,
            email,
            password
        ).then(() => {})
        return from(promise);
    }


}