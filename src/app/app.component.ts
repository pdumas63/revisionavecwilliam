import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'revisionavecwilliam';
  
  public isStarted = false;  
  public isPause = false;
  public time = 0;
  private idInterval : null | number = null;
  
  private startChrono() : void{
    this.idInterval = setInterval(()=>{
    this.time++;
      } , 1);        
    }
  public pauseChrono() : void{
    clearInterval(this.idInterval);
    this.isPause = true;
    
  }
  public startSwitch() : void{
    this.isStarted = true;
    this.startChrono();
    this.isPause = false;
  }
  public effacerChrono() : void{
    this.time = 0;
    this.isStarted = false;
    
  }
}
