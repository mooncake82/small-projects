import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../../services/seeds.service';
import { IBookmark } from './interfaces';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

    public all: IBookmark[] = [];
    public selectedItem: IBookmark;
    public foundIndex: number;


    constructor(private service: BookmarksService) { }

    public bookmarksIndex(): void {
        const response = this.service.getBookmarks();
        const reMapped = this.addId(response);
        const isData: IBookmark[] = JSON.parse(localStorage.getItem('bookmarksIndex'));
        this.all = !isData ? reMapped : isData;
    }

    public addId(arr): IBookmark[] {
        return arr.map((item) => {
            const id = Math.floor(Math.random() * 1000000 + 1);
            return {
                ...item,
                id
            }
        });
    }

    // save data to local storage
    public saveData(arg): void {
        const str: string = JSON.stringify(arg);
        localStorage.setItem('bookmarksIndex', str);
    }

    public currentItem(data) {
        this.selectedItem = data;
        let foundIndex = this.all.findIndex((item) => {
            return item.id == data.id;
        });
        this.foundIndex = foundIndex;
        // delete item...
        if (data.method === 'delete') {
            let index = this.all.indexOf(data.obj);
            this.all.splice(index, 1);
        }
    }

    public onFormSubmitted(obj: IBookmark): void {
        const isAlreadyHere = this.all.find((item) => {
            return item.id === obj.id;
        });

        if (!isAlreadyHere) {
            this.all.unshift(obj);
            this.saveData(this.all);
        } else {
            // update item...
            this.all[this.foundIndex] = obj;
            this.saveData(this.all);
        }
    }

    public ngOnInit(): void {
        this.bookmarksIndex();
    }

}