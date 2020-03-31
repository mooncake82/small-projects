import { Injectable } from '@angular/core';

@Injectable()
export class ChartService {

    getSeries() {
        return [
            {
                name: 'Low',
                lowerStart: 4000.0,
                lowerTop1: 4000.0,
                lowerTop2: 33600.0,
                lowerEnd: 43800.0,
                upperStart: 4000.0,
                upperTop1: 4000.0,
                upperTop2: 33600.0,
                upperEnd: 54000.0
            }, 
            {
                name: 'Medium',
                lowerStart: 43800.0,
                lowerTop1: 54000.0,
                lowerTop2: 65000.0,
                lowerEnd: 79000.0,
                upperStart: 33600.0,
                upperTop1: 54000.0,
                upperTop2: 65000.0,
                upperEnd: 100997.14285714287
            }, 
            {
                name: 'High',
                lowerStart: 79000.0,
                lowerTop1: 100997.14285714287,
                lowerTop2: 200000.0,
                lowerEnd: 200000.0,
                upperStart: 65000.0,
                upperTop1: 100997.14285714287,
                upperTop2: 200000.0,
                upperEnd: 200000.0
            }
        ];
    }

    constructor() { }

}