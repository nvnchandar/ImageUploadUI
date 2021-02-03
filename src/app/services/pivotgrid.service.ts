import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Sale {
    id: number;
    region: string;
    country: string;
    city: string;
    amount: number;
    date: Date;
}

const sales: Sale[] =  [{
    id: 10253,
    region: 'South America',
    country: 'Brazil',
    city: 'Rio de Janeiro',
    amount: 5260,
    date: new Date('2013-01-17')
}, {
    id: 10254,
    region: 'South America',
    country: 'Argentina',
    city: 'Buenos Aires',
    amount: 2790,
    date: new Date('2013-01-21')
}, {
    id: 10255,
    region: 'South America',
    country: 'Paraguay',
    city: 'Asuncion',
    amount: 3140,
    date: new Date('2013-01-01')
}, {
    id: 10265,
    region: 'Africa',
    country: 'South Africa',
    city: 'Pretoria',
    amount: 940,
    date: new Date('2013-01-01')
}, {
    id: 10266,
    region: 'Africa',
    country: 'Egypt',
    city: 'Cairo',
    amount: 1630,
    date: new Date('2013-01-10')
}, {
    id: 10278,
    region: 'South America',
    country: 'Brazil',
    city: 'Rio de Janeiro',
    amount: 1240,
    date: new Date('2013-02-03')
}, {
    id: 10279,
    region: 'South America',
    country: 'Argentina',
    city: 'Buenos Aires',
    amount: 315,
    date: new Date('2013-02-04')
}, {
    id: 10280,
    region: 'South America',
    country: 'Paraguay',
    city: 'Asuncion',
    amount: 2870,
    date: new Date('2013-02-18')
}, {
    id: 10290,
    region: 'Africa',
    country: 'South Africa',
    city: 'Pretoria',
    amount: 990,
    date: new Date('2013-02-20')
}, {
    id: 10291,
    region: 'Africa',
    country: 'Egypt',
    city: 'Cairo',
    amount: 700,
    date: new Date('2013-02-11')
}, {
    id: 10293,
    region: 'South America',
    country: 'Argentina',
    city: 'Buenos Aires',
    amount: 930,
    date: new Date('2013-02-21')
}, {
    id: 10300,
    region: 'South America',
    country: 'Brazil',
    city: 'Rio de Janeiro',
    amount: 640,
    date: new Date('2013-03-08')
}, {
    id: 10301,
    region: 'South America',
    country: 'Argentina',
    city: 'Buenos Aires',
    amount: 735,
    date: new Date('2013-03-19')
}, {
    id: 10302,
    region: 'South America',
    country: 'Paraguay',
    city: 'Asuncion',
    amount: 2520,
    date: new Date('2013-03-20')
}, {
    id: 10312,
    region: 'Africa',
    country: 'South Africa',
    city: 'Pretoria',
    amount: 1110,
    date: new Date('2013-03-08')
}, {
    id: 10313,
    region: 'Africa',
    country: 'Egypt',
    city: 'Cairo',
    amount: 980,
    date: new Date('2013-03-21')
}, {
    id: 10325,
    region: 'South America',
    country: 'Brazil',
    city: 'Rio de Janeiro',
    amount: 4420,
    date: new Date('2013-04-08')
}, {
    id: 10326,
    region: 'South America',
    country: 'Argentina',
    city: 'Buenos Aires',
    amount: 1755,
    date: new Date('2013-04-13')
}, {
    id: 10327,
    region: 'South America',
    country: 'Paraguay',
    city: 'Asuncion',
    amount: 2580,
    date: new Date('2013-04-15')
},  {
    id: 10337,
    region: 'Africa',
    country: 'South Africa',
    city: 'Pretoria',
    amount: 3090,
    date: new Date('2013-04-03')
}, {
    id: 10338,
    region: 'Africa',
    country: 'Egypt',
    city: 'Cairo',
    amount: 1640,
    date: new Date('2013-04-24')
}, {
    id: 10349,
    region: 'South America',
    country: 'Brazil',
    city: 'Rio de Janeiro',
    amount: 2260,
    date: new Date('2013-05-19')
}, {
    id: 10350,
    region: 'South America',
    country: 'Argentina',
    city: 'Buenos Aires',
    amount: 1215,
    date: new Date('2013-05-23')
}, {
    id: 10351,
    region: 'South America',
    country: 'Paraguay',
    city: 'Asuncion',
    amount: 1210,
    date: new Date('2013-05-08')
}, {
    id: 10361,
    region: 'Africa',
    country: 'South Africa',
    city: 'Pretoria',
    amount: 3190,
    date: new Date('2013-05-03')
}, {
    id: 10362,
    region: 'Africa',
    country: 'Egypt',
    city: 'Cairo',
    amount: 2430,
    date: new Date('2013-05-11')
}, {
    id: 10368,
    region: 'South America',
    country: 'Brazil',
    city: 'Rio de Janeiro',
    amount: 5480,
    date: new Date('2013-06-24')
}, {
    id: 10369,
    region: 'South America',
    country: 'Argentina',
    city: 'Buenos Aires',
    amount: 2355,
    date: new Date('2013-06-10')
}, {
    id: 10370,
    region: 'South America',
    country: 'Paraguay',
    city: 'Asuncion',
    amount: 1960,
    date: new Date('2013-06-23')
}, {
    id: 10380,
    region: 'Africa',
    country: 'South Africa',
    city: 'Pretoria',
    amount: 550,
    date: new Date('2013-06-02')
}, {
    id: 10381,
    region: 'Africa',
    country: 'Egypt',
    city: 'Cairo',
    amount: 2850,
    date: new Date('2013-06-26')
}, {
    id: 10385,
    region: 'Africa',
    country: 'Egypt',
    city: 'Cairo',
    amount: 1520,
    date: new Date('2013-06-03')
}, {
    id: 10392,
    region: 'South America',
    country: 'Brazil',
    city: 'Rio de Janeiro',
    amount: 4500,
    date: new Date('2013-07-03')
}, {
    id: 10393,
    region: 'South America',
    country: 'Argentina',
    city: 'Buenos Aires',
    amount: 4575,
    date: new Date('2013-07-21')
}, {
    id: 10394,
    region: 'South America',
    country: 'Paraguay',
    city: 'Asuncion',
    amount: 2310,
    date: new Date('2013-07-18')
}, {
    id: 10404,
    region: 'Africa',
    country: 'South Africa',
    city: 'Pretoria',
    amount: 2650,
    date: new Date('2013-07-16')
}, {
    id: 10405,
    region: 'Africa',
    country: 'Egypt',
    city: 'Cairo',
    amount: 1190,
    date: new Date('2013-07-02')
}, {
    id: 10412,
    region: 'South America',
    country: 'Brazil',
    city: 'Rio de Janeiro',
    amount: 2300,
    date: new Date('2013-08-09')
}, {
    id: 10413,
    region: 'South America',
    country: 'Argentina',
    city: 'Buenos Aires',
    amount: 2895,
    date: new Date('2013-08-15')
}, {
    id: 10414,
    region: 'South America',
    country: 'Paraguay',
    city: 'Asuncion',
    amount: 350,
    date: new Date('2013-08-20')
}, {
    id: 10424,
    region: 'Africa',
    country: 'South Africa',
    city: 'Pretoria',
    amount: 1880,
    date: new Date('2013-08-12')
}, {
    id: 10425,
    region: 'Africa',
    country: 'Egypt',
    city: 'Cairo',
    amount: 710,
    date: new Date('2013-08-25')
}, {
    id: 10429,
    region: 'South America',
    country: 'Brazil',
    city: 'Rio de Janeiro',
    amount: 6020,
    date: new Date('2013-08-02')
}, {
    id: 10437,
    region: 'South America',
    country: 'Brazil',
    city: 'Rio de Janeiro',
    amount: 780,
    date: new Date('2013-09-08')
}, {
    id: 10438,
    region: 'South America',
    country: 'Argentina',
    city: 'Buenos Aires',
    amount: 2370,
    date: new Date('2013-09-19')
}, {
    id: 10439,
    region: 'South America',
    country: 'Paraguay',
    city: 'Asuncion',
    amount: 1410,
    date: new Date('2013-09-09')
}, {
    id: 10449,
    region: 'Africa',
    country: 'South Africa',
    city: 'Pretoria',
    amount: 850,
    date: new Date('2013-09-24')
}, {
    id: 10450,
    region: 'Africa',
    country: 'Egypt',
    city: 'Cairo',
    amount: 1440,
    date: new Date('2013-09-19')
}, {
    id: 10457,
    region: 'South America',
    country: 'Brazil',
    city: 'Rio de Janeiro',
    amount: 2320,
    date: new Date('2013-10-18')
}, {
    id: 10458,
    region: 'South America',
    country: 'Argentina',
    city: 'Buenos Aires',
    amount: 4260,
    date: new Date('2013-10-24')
}, {
    id: 10459,
    region: 'South America',
    country: 'Paraguay',
    city: 'Asuncion',
    amount: 840,
    date: new Date('2013-10-18')
}, {
    id: 10469,
    region: 'Africa',
    country: 'South Africa',
    city: 'Pretoria',
    amount: 1470,
    date: new Date('2013-10-01')
}, {
    id: 10470,
    region: 'Africa',
    country: 'Egypt',
    city: 'Cairo',
    amount: 1810,
    date: new Date('2013-10-02')
}, {
    id: 10477,
    region: 'South America',
    country: 'Brazil',
    city: 'Rio de Janeiro',
    amount: 4180,
    date: new Date('2013-11-15')
}, {
    id: 10478,
    region: 'South America',
    country: 'Argentina',
    city: 'Buenos Aires',
    amount: 3720,
    date: new Date('2013-11-25')
}, {
    id: 10479,
    region: 'South America',
    country: 'Paraguay',
    city: 'Asuncion',
    amount: 2730,
    date: new Date('2013-11-08')
}, {
    id: 10489,
    region: 'Africa',
    country: 'South Africa',
    city: 'Pretoria',
    amount: 590,
    date: new Date('2013-11-11')
}, {
    id: 10490,
    region: 'Africa',
    country: 'Egypt',
    city: 'Cairo',
    amount: 810,
    date: new Date('2013-11-12')
}, {
    id: 10497,
    region: 'South America',
    country: 'Brazil',
    city: 'Rio de Janeiro',
    amount: 4080,
    date: new Date('2013-12-21')
}, {
    id: 10498,
    region: 'South America',
    country: 'Argentina',
    city: 'Buenos Aires',
    amount: 4140,
    date: new Date('2013-12-22')
}, {
    id: 10499,
    region: 'South America',
    country: 'Paraguay',
    city: 'Asuncion',
    amount: 390,
    date: new Date('2013-12-04')
}, {
    id: 10509,
    region: 'Africa',
    country: 'South Africa',
    city: 'Pretoria',
    amount: 2850,
    date: new Date('2013-12-17')
}, {
    id: 10510,
    region: 'Africa',
    country: 'Egypt',
    city: 'Cairo',
    amount: 2780,
    date: new Date('2013-12-07')
}, {
    id: 10512,
    region: 'Africa',
    country: 'South Africa',
    city: 'Pretoria',
    amount: 2970,
    date: new Date('2013-12-23')
}];
@Injectable()
export class PivotGridService {
    constructor(private http: HttpClient) { }

    getSales() {
        return sales;
    }
}
