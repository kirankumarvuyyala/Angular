import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent {
  public Test:string='initialValue';
  public LifeCyclename:string;

  ngOnChanges(){
          // Called before ngOnInit() (if the component has bound inputs) and whenever one or more data-bound input properties change.
      this.LifeCyclename='ngOnChanges';
      this.Test='second value';
      console.log(this.Test);
      console.log(this.LifeCyclename);
  }
  ngOnInit(){
    // Called once, after the first ngOnChanges(). ngOnInit() is still called even when ngOnChanges() is not (which is the case when there are no template-bound inputs).
    this.LifeCyclename='ngOnInit';
    console.log(this.LifeCyclename);
  }
  ngDoCheck(){
    // Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.
    this.LifeCyclename='ngDoCheck';
    console.log(this.Test);
    this.Test='second value';

    console.log(this.LifeCyclename);
  }
  ngAfterContentInit(){
    //Called once after the first ngDoCheck().
    this.LifeCyclename='ngAfterContentInit';
    console.log(this.LifeCyclename);
  }
  ngAfterContentChecked(){
    // Called after ngAfterContentInit() and every subsequent ngDoCheck()
    this.LifeCyclename='ngAfterContentChecked';
    console.log(this.LifeCyclename);
  }
  ngAfterViewInit(){
    // Called once after the first ngAfterContentChecked().
    this.LifeCyclename='ngAfterViewInit';
    console.log(this.LifeCyclename);
  }
  ngAfterViewChecked(){
    // Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().
    this.LifeCyclename='ngAfterViewChecked';
    console.log(this.LifeCyclename);
  }
  ngOnDestroy(){
    // Called immediately before Angular destroys the directive or component.
    this.LifeCyclename='ngOnDestroy';
    console.log(this.LifeCyclename);
  }
}
