import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import {TestBed, async, inject} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './api.service';
import {of} from 'rxjs';

describe('API Service', () => {
    let apiService: ApiService;
    const params = {
        key: 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk',
        maxResults: '50',
        type: 'video',
        part: 'snippet',
        q: 'john'
    };
    const videoExpected = {
        description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
        publishedAt: '2011-05-12T20:01:31.000Z',
        thumbnails: {
            height: 90,
            url: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
            width: 120,
        },
        title: {
            title: 'Lil Wayne - John (Explicit) ft. Rick Ross',
            videoId: '3fumBcKC6RE',
        },
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ],
            providers: [
                ApiService
            ]
        }).compileComponents();

        apiService = TestBed.get(ApiService);
    }))

    it('should init service',  () => {
        expect(apiService).toBeTruthy();
    })

    it('should ', async(() => {
        let response;
        spyOn(apiService, 'get').and.returnValue(of(videoExpected))
        expect(apiService.get(params).subscribe(
            res => response = res
        ));
        expect(response).toEqual(videoExpected);
    }));
})
