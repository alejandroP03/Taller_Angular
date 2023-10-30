import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeriesComponent } from './series.component';
import { SeriesService } from './series.service';

describe('SeriesComponent', () => {
	let component: SeriesComponent;
	let fixture: ComponentFixture<SeriesComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			declarations: [SeriesComponent],
			providers: [SeriesService],
		});
		fixture = TestBed.createComponent(SeriesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
