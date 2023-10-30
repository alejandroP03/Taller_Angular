import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SeriesService } from './series.service';

@Component({
	selector: 'app-series',
	templateUrl: './series.component.html',
	styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
	series: Array<Serie> = [];
	seasonsAverage: number = 0;
	constructor(private seriesService: SeriesService) {}

	getSeries(): void {
		this.seriesService.getSeries().subscribe((series) => {
			this.series = series;
			this.seasonsAverage =
				this.series.reduce((acc, serie) => acc + serie.seasons, 0) /
				this.series.length;
		});
	}

	ngOnInit() {
		this.getSeries();
	}
}
