import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  small = false;


  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.small = true;
          console.log(
            'Matches small viewport or handset in portrait mode'
          );
        } else {
          this.small = false;
        }
      });
  }

  ngOnInit() {
  }

}
