import { parseHostBindings } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute,ParamMap} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learn-details',
  templateUrl: './learn-details.component.html',
  styleUrls: ['./learn-details.component.css']
})
export class LearnDetailsComponent {
 public  selectedid;
  constructor(private route:ActivatedRoute,private router:Router){
  
  }

  ngOnInit()
  {
  // let id=parseInt(this.route.snapshot.paramMap.get('id'));
  // this.selectedid=id;
  this.route.paramMap.subscribe((param:ParamMap)=>{
    let id=parseInt(param.get('id'));
    this.selectedid=id;
  });
  }
  BackClick(){
    this.router.navigate(['/Learn']);
  }
  NextClick(){
    let NextID=this.selectedid+1
    this.selectedid=NextID;
this.router.navigate(['/Learn',NextID]);
  }
  PreClick(){
    let PreID=this.selectedid-1;
    this.selectedid=PreID;
this.router.navigate(['/Learn',PreID]);
  }
  OverviewClick(){
    this.router.navigate(['OverView'],{relativeTo:this.route})
  }
  LifeCyclesClick(){
    this.router.navigate(['LifeCycles'],{relativeTo:this.route})
  }
}
