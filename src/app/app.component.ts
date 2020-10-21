import { Component, OnInit } from '@angular/core';
let a = 'not installed';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'installed-app';
  async ngOnInit(){    
    await callGetInstalledRelatedApps();
    
  }
}

const callGetInstalledRelatedApps = async () => {
  let listOfInstalledApps = null;
    try {
       const fun = navigator['getInstalledRelatedApps'];
      //  const fun2 = fun.call(navigator)
       listOfInstalledApps = await fun.call(navigator);
       alert(JSON.stringify(listOfInstalledApps))
  } catch (e) {
    alert('Error: '+e);
    return;
  }  
  //listOfInstalledApps must have been resolved by this line
  for (const app of listOfInstalledApps) {
    if(app.id ==='dataon.myapplication'){
      a = 'installed';
    }
  // These fields are specified by the Web App Manifest spec.
  alert(app.platform);
  alert(app.url);
  alert(app.id);
  alert(a);
  }

}