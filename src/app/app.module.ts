import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



// dashboard components
import { LayoutComponent } from './dashboard/layout/layout.component';
import { TopBarComponent } from './dashboard/top-bar/top-bar.component';
import { OverlayComponent } from './dashboard/overlay/overlay.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar/sidebar.component';
import { SidebarItemComponent } from './dashboard/sidebar/sidebar-item/sidebar-item.component';
import { SidebarItemsComponent } from './dashboard/sidebar/sidebar-items/sidebar-items.component';
import { SidebarHeaderComponent } from './dashboard/sidebar/sidebar-header/sidebar-header.component';

// pages
import { HomeComponent } from './pages/home/home.component';
import { CreditComponent } from './pages/credit/credit.component';
import { StatusComponent } from './pages/status/status.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { DocIconComponent } from './dashboard/icons/doc-icon/doc-icon.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';

// icons
import { HomeIconComponent } from './dashboard/icons/home-icon/home-icon.component';
import { CreditIconComponent } from './dashboard/icons/credit-icon/credit-icon.component';
import { StatusIconComponent } from './dashboard/icons/status-icon/status-icon.component';
import { ArchiveIconComponent } from './dashboard/icons/archive-icon/archive-icon.component';
import { SettingsIconComponent } from './dashboard/icons/settings-icon/settings-icon.component';

// others
import { DocComponent } from './components/docs/doc/doc.component';
import { ContentComponent } from './components/content/content.component';
import { SnippetComponent } from './components/docs/snippet/snippet.component';
import { FolderIconComponent } from './components/docs/icons/folder-icon/folder-icon.component';
import { AngularIconComponent } from './components/docs/icons/angular-icon/angular-icon.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

//Login and registre components
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    // dashboard
    LayoutComponent,
    TopBarComponent,
    OverlayComponent,
    SidebarComponent,
    SidebarItemComponent,
    SidebarItemsComponent,
    SidebarHeaderComponent,

    // pages
    HomeComponent,
    CreditComponent,
    StatusComponent,
    ArchiveComponent,
    SettingsComponent,
    DocumentationComponent,

    // icons
    DocIconComponent,
    HomeIconComponent,
    ArchiveIconComponent,
    CreditIconComponent,
    StatusIconComponent,
    SettingsIconComponent,

    // others
    DocComponent,
    SnippetComponent,
    ContentComponent,
    FolderIconComponent,
    AngularIconComponent,

    //Login and registre
    LoginComponent,
    RegistroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule, FormsModule, provideFirebaseApp(() => initializeApp({"projectId":"eventmaster-51051","appId":"1:212462294196:web:56baaad6d9fb7f230cb3e1","storageBucket":"eventmaster-51051.appspot.com","apiKey":"AIzaSyDZ3h9zsJadPhQoHzJ1zmo7R5TzKkdN6t8","authDomain":"eventmaster-51051.firebaseapp.com","messagingSenderId":"212462294196","measurementId":"G-HXMSQ5T7H3"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
