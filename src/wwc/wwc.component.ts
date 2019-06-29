import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WwcScore } from './wwc.model';
import { WwcService } from './wwc.service';

@Component({
  selector: 'app-wwc',
  templateUrl: './wwc.component.html',
  styleUrls: ['./wwc.component.scss']
})
export class WwcComponent implements OnInit {
  wwcScores: WwcScore[] = [];

  constructor(private service: WwcService, private router: Router) {}

  ngOnInit() {
    this.getScores(new Date());
  }

  handleBoxClick(gameId: number) {
    this.router.navigateByUrl('/wwc/' + gameId);
  }

  handleDateChanged(date: Date) {
    this.getScores(date);
  }

  private getScores(date: Date) {
    this.service.getScores(date).subscribe(
      scores => {
        this.wwcScores = scores;
      },
      err => console.log(err)
    );
  }
}
