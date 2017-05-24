import { Injectable } from '@angular/core';

@Injectable()
export class CalendarService {

 private calendar: any[]=[
     {
       "match": [
         {
           "matchInfo": {
             "description": "Tijuana vs Morelia",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "9od718ztlx8dffe3f1q78bc1t",
               "startDate": "2017-05-11Z",
               "endDate": "2017-05-15Z",
               "name": "Clausura - Quarter-finals"
             },
             "contestant": [
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "36ejluw1sky5hdx7i3cq8l524",
               "shortName": "Estadio Caliente",
               "longName": "Estadio Caliente"
             },
             "id": "8ynmacsckf82pl9ij5a4axnu1",
             "date": "2017-05-15Z",
             "time": "01:00:00Z",
             "lastUpdated": "2017-05-09T08:27:54Z"
           }
         },
         {
           "matchInfo": {
             "description": "Guadalajara vs Atlas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "9od718ztlx8dffe3f1q78bc1t",
               "startDate": "2017-05-11Z",
               "endDate": "2017-05-15Z",
               "name": "Clausura - Quarter-finals"
             },
             "contestant": [
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "94u6u9s3chfdpec5irdvfi7ha",
               "shortName": "Estadio Omnilife",
               "longName": "Estadio Omnilife"
             },
             "id": "8yutddbzacpu7h2tztevhwbu1",
             "date": "2017-05-14Z",
             "time": "23:00:00Z",
             "lastUpdated": "2017-05-09T12:15:38Z"
           }
         },
         {
           "matchInfo": {
             "description": "Toluca vs Santos Laguna",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "9od718ztlx8dffe3f1q78bc1t",
               "startDate": "2017-05-12Z",
               "endDate": "2017-05-16Z",
               "name": "Clausura - Quarter-finals"
             },
             "contestant": [
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1wemyyvpo8d5ilkx5eccg4xcg",
               "shortName": "Estadio Nemesio Díez",
               "longName": "Estadio Nemesio Díez"
             },
             "id": "8yxsl2vmnyqg9jk7s673veind",
             "date": "2017-05-14Z",
             "time": "02:00:00Z",
             "lastUpdated": "2017-05-08T20:41:27Z"
           }
         },
         {
           "matchInfo": {
             "description": "Monterrey vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "9od718ztlx8dffe3f1q78bc1t",
               "startDate": "2017-05-11Z",
               "endDate": "2017-05-15Z",
               "name": "Clausura - Quarter-finals"
             },
             "contestant": [
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "647q7it5oqj8ieeo9hwcpjpih",
               "shortName": "Estadio BBVA Bancomer",
               "longName": "Estadio BBVA Bancomer"
             },
             "id": "8yr45cz30wsnn1din3j20kbu1",
             "date": "2017-05-14Z",
             "time": "00:00:00Z",
             "lastUpdated": "2017-05-09T13:30:26Z"
           }
         },
         {
           "matchInfo": {
             "description": "Atlas vs Guadalajara",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "9od718ztlx8dffe3f1q78bc1t",
               "startDate": "2017-05-11Z",
               "endDate": "2017-05-15Z",
               "name": "Clausura - Quarter-finals"
             },
             "contestant": [
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "aybo2e3p8vy5sxt5z2jbmrvur",
               "shortName": "Estadio Jalisco",
               "longName": "Estadio Jalisco"
             },
             "id": "8yirnis1dqlgf6osqe270op2h",
             "date": "2017-05-12Z",
             "time": "02:30:00Z",
             "lastUpdated": "2017-05-09T22:26:45Z"
           }
         },
         {
           "matchInfo": {
             "description": "Morelia vs Tijuana",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "9od718ztlx8dffe3f1q78bc1t",
               "startDate": "2017-05-11Z",
               "endDate": "2017-05-15Z",
               "name": "Clausura - Quarter-finals"
             },
             "contestant": [
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "ajoo2oadg139mszb0cz19sgus",
               "shortName": "Estadio Generalísimo José María Morelos y Pavón",
               "longName": "Estadio Generalísimo José María Morelos y Pavón"
             },
             "id": "8yce76j5d1p3idxw9ni0jtb6x",
             "date": "2017-05-12Z",
             "time": "00:30:00Z",
             "lastUpdated": "2017-05-09T22:25:23Z"
           }
         },
         {
           "matchInfo": {
             "description": "Santos Laguna vs Toluca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "9od718ztlx8dffe3f1q78bc1t",
               "startDate": "2017-05-11Z",
               "endDate": "2017-05-15Z",
               "name": "Clausura - Quarter-finals"
             },
             "contestant": [
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "2nxpq21sgwfeqe0663pn9t5ge",
               "shortName": "Estadio Nuevo Corona",
               "longName": "Estadio Nuevo Corona"
             },
             "id": "8ykrkpm39q9c83c4uuooxg8o9",
             "date": "2017-05-11Z",
             "time": "02:30:00Z",
             "lastUpdated": "2017-05-09T22:24:39Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs Monterrey",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "9od718ztlx8dffe3f1q78bc1t",
               "startDate": "2017-05-11Z",
               "endDate": "2017-05-15Z",
               "name": "Clausura - Quarter-finals"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "8yg5sx2bt7qlmzss1tzdqdg4p",
             "date": "2017-05-11Z",
             "time": "00:30:00Z",
             "lastUpdated": "2017-05-09T22:23:43Z"
           }
         },
         {
           "matchInfo": {
             "description": "Santos Laguna vs Toluca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "2nxpq21sgwfeqe0663pn9t5ge",
               "shortName": "Estadio Nuevo Corona",
               "longName": "Estadio Nuevo Corona"
             },
             "id": "1ig6fn8gv5kuy1jsj4hfklotl",
             "date": "2017-05-07Z",
             "time": "23:00:00Z",
             "week": "17",
             "lastUpdated": "2017-05-08T00:56:36Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pumas UNAM vs Puebla",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "78113wsj5mbr2k5bjshddlosk",
               "shortName": "Estadio Olímpico de Universitario",
               "longName": "Estadio Olímpico de Universitario"
             },
             "id": "1ic97c5wv9ffdz2sxje8p4iqx",
             "date": "2017-05-07Z",
             "time": "17:00:00Z",
             "week": "17",
             "lastUpdated": "2017-05-07T18:52:02Z"
           }
         },
         {
           "matchInfo": {
             "description": "Necaxa vs Guadalajara",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "5zyw4ved3yttj4d9jvmt56ua6",
               "shortName": "Estadio Victoria de Aguascalientes",
               "longName": "Estadio Victoria de Aguascalientes"
             },
             "id": "1i5r27dcyp1onylcduu48aui1",
             "date": "2017-05-07Z",
             "time": "02:00:00Z",
             "week": "17",
             "lastUpdated": "2017-05-07T03:50:47Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs Pachuca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "1i1f7w71enu7l657vafqmawh5",
             "date": "2017-05-07Z",
             "time": "02:00:00Z",
             "week": "17",
             "lastUpdated": "2017-05-07T03:51:42Z"
           }
         },
         {
           "matchInfo": {
             "description": "Atlas vs Chiapas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "aybo2e3p8vy5sxt5z2jbmrvur",
               "shortName": "Estadio Jalisco",
               "longName": "Estadio Jalisco"
             },
             "id": "1htdcu8w5b97miva78vxifv1l",
             "date": "2017-05-07Z",
             "time": "02:00:00Z",
             "week": "17",
             "lastUpdated": "2017-05-07T03:54:37Z"
           }
         },
         {
           "matchInfo": {
             "description": "Monterrey vs Morelia",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "647q7it5oqj8ieeo9hwcpjpih",
               "shortName": "Estadio BBVA Bancomer",
               "longName": "Estadio BBVA Bancomer"
             },
             "id": "1hp59dv4lcmfrsp1nm4enyfah",
             "date": "2017-05-07Z",
             "time": "02:00:00Z",
             "week": "17",
             "lastUpdated": "2017-05-07T06:42:05Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tijuana vs Veracruz",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "36ejluw1sky5hdx7i3cq8l524",
               "shortName": "Estadio Caliente",
               "longName": "Estadio Caliente"
             },
             "id": "1hf0iis2n2lnn08o2s47frf8p",
             "date": "2017-05-07Z",
             "time": "02:00:00Z",
             "week": "17",
             "lastUpdated": "2017-05-07T03:53:11Z"
           }
         },
         {
           "matchInfo": {
             "description": "León vs Cruz Azul",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "3dpgucez2cp6q9vw962ribee2",
               "shortName": "Estadio León (Nou Camp)",
               "longName": "Estadio León (Nou Camp)"
             },
             "id": "1hxfn1es1bkifj103fovmghyh",
             "date": "2017-05-07Z",
             "time": "00:06:00Z",
             "week": "17",
             "lastUpdated": "2017-05-07T01:58:22Z"
           }
         },
         {
           "matchInfo": {
             "description": "Querétaro vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "kp6304o84ha1jnu4km3023uc",
               "shortName": "Estadio La Corregidora",
               "longName": "Estadio La Corregidora"
             },
             "id": "1hk2r3ogih1dpx9w74w4g746h",
             "date": "2017-05-06Z",
             "time": "22:00:00Z",
             "week": "17",
             "lastUpdated": "2017-05-06T23:46:30Z"
           }
         },
         {
           "matchInfo": {
             "description": "Puebla vs Necaxa",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "8iba6bmlx2vbm7kq9l4l9fekh",
               "shortName": "Estadio Cuauhtémoc",
               "longName": "Estadio Cuauhtémoc"
             },
             "id": "1hb45jsjb0mqj829fkud6rox5",
             "date": "2017-04-30Z",
             "time": "23:00:00Z",
             "week": "16",
             "lastUpdated": "2017-05-01T00:54:22Z"
           }
         },
         {
           "matchInfo": {
             "description": "Toluca vs Querétaro",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1wemyyvpo8d5ilkx5eccg4xcg",
               "shortName": "Estadio Nemesio Díez",
               "longName": "Estadio Nemesio Díez"
             },
             "id": "1h75tc3t1ebudi3ihzwltwnop",
             "date": "2017-04-30Z",
             "time": "17:00:00Z",
             "week": "16",
             "lastUpdated": "2017-04-30T18:54:24Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs Atlas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "1gyz17j83du8sycubbicjv5k9",
             "date": "2017-04-30Z",
             "time": "02:00:00Z",
             "week": "16",
             "lastUpdated": "2017-04-30T08:22:19Z"
           }
         },
         {
           "matchInfo": {
             "description": "Guadalajara vs León",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "94u6u9s3chfdpec5irdvfi7ha",
               "shortName": "Estadio Omnilife",
               "longName": "Estadio Omnilife"
             },
             "id": "1h2tfxo0zcs9rzibwg1km5l9l",
             "date": "2017-04-30Z",
             "time": "00:06:00Z",
             "week": "16",
             "lastUpdated": "2017-04-30T01:57:51Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pachuca vs Cruz Azul",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "7si3duu47j9z8rkvhyp0o64ev",
               "shortName": "Estadio Miguel Hidalgo",
               "longName": "Estadio Miguel Hidalgo"
             },
             "id": "1gv3m92nhmm80gnxvzg160qnd",
             "date": "2017-04-30Z",
             "time": "00:06:00Z",
             "week": "16",
             "lastUpdated": "2017-04-30T02:03:27Z"
           }
         },
         {
           "matchInfo": {
             "description": "Morelia vs Pumas UNAM",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "ajoo2oadg139mszb0cz19sgus",
               "shortName": "Estadio Generalísimo José María Morelos y Pavón",
               "longName": "Estadio Generalísimo José María Morelos y Pavón"
             },
             "id": "1grg7713bx7yjnjmuk88gnvu1",
             "date": "2017-04-30Z",
             "time": "00:00:00Z",
             "week": "16",
             "lastUpdated": "2017-04-30T01:50:46Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs Tijuana",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "1gl2tqwocali4efthdeiaf3e1",
             "date": "2017-04-30Z",
             "time": "00:00:00Z",
             "week": "16",
             "lastUpdated": "2017-04-30T01:53:57Z"
           }
         },
         {
           "matchInfo": {
             "description": "Chiapas vs Santos Laguna",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "eh4s74jblsd0y8k0wu8f0hmux",
               "shortName": "Estadio Zoque VMR",
               "longName": "Estadio Zoque VMR"
             },
             "id": "1ggs6f34euid67vgf8lq44i5l",
             "date": "2017-04-29Z",
             "time": "22:00:00Z",
             "week": "16",
             "lastUpdated": "2017-04-30T00:10:43Z"
           }
         },
         {
           "matchInfo": {
             "description": "Veracruz vs Monterrey",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1q1vif5b5rt0bm0ta007ewib5",
               "shortName": "Estadio Luis de la Fuente",
               "longName": "Estadio Luis de la Fuente"
             },
             "id": "1gd6btta4g3zwfp9l6xi8lv55",
             "date": "2017-04-29Z",
             "time": "01:30:00Z",
             "week": "16",
             "lastUpdated": "2017-04-29T03:25:54Z"
           }
         },
         {
           "matchInfo": {
             "description": "Santos Laguna vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "2nxpq21sgwfeqe0663pn9t5ge",
               "shortName": "Estadio Nuevo Corona",
               "longName": "Estadio Nuevo Corona"
             },
             "id": "1g9d2mrbtkjnam2jqw2b6nisp",
             "date": "2017-04-24Z",
             "time": "00:00:00Z",
             "week": "15",
             "lastUpdated": "2017-04-24T01:59:46Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pumas UNAM vs Veracruz",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "78113wsj5mbr2k5bjshddlosk",
               "shortName": "Estadio Olímpico de Universitario",
               "longName": "Estadio Olímpico de Universitario"
             },
             "id": "1g4ca9uup9cayf5zry9r0zkyx",
             "date": "2017-04-23Z",
             "time": "17:00:00Z",
             "week": "15",
             "lastUpdated": "2017-04-23T18:52:55Z"
           }
         },
         {
           "matchInfo": {
             "description": "Necaxa vs Morelia",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "5zyw4ved3yttj4d9jvmt56ua6",
               "shortName": "Estadio Victoria de Aguascalientes",
               "longName": "Estadio Victoria de Aguascalientes"
             },
             "id": "1fzv0axjq95dq818fr39dp0q1",
             "date": "2017-04-23Z",
             "time": "02:00:00Z",
             "week": "15",
             "lastUpdated": "2017-04-23T06:54:59Z"
           }
         },
         {
           "matchInfo": {
             "description": "León vs Puebla",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "3dpgucez2cp6q9vw962ribee2",
               "shortName": "Estadio León (Nou Camp)",
               "longName": "Estadio León (Nou Camp)"
             },
             "id": "1fus03aydrf5kcd0nz56avlk9",
             "date": "2017-04-23Z",
             "time": "00:06:00Z",
             "week": "15",
             "lastUpdated": "2017-04-23T06:02:37Z"
           }
         },
         {
           "matchInfo": {
             "description": "Atlas vs Pachuca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "aybo2e3p8vy5sxt5z2jbmrvur",
               "shortName": "Estadio Jalisco",
               "longName": "Estadio Jalisco"
             },
             "id": "1fr5jv8dmzzlt8a67o3z074yx",
             "date": "2017-04-23Z",
             "time": "00:00:00Z",
             "week": "15",
             "lastUpdated": "2017-04-23T06:00:53Z"
           }
         },
         {
           "matchInfo": {
             "description": "Monterrey vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "647q7it5oqj8ieeo9hwcpjpih",
               "shortName": "Estadio BBVA Bancomer",
               "longName": "Estadio BBVA Bancomer"
             },
             "id": "1fnelinljph3ba8u0y8jwy9k9",
             "date": "2017-04-23Z",
             "time": "00:00:00Z",
             "week": "15",
             "lastUpdated": "2017-04-23T05:58:46Z"
           }
         },
         {
           "matchInfo": {
             "description": "Cruz Azul vs Guadalajara",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1bdvbj3pjw35peqxagih2wn48",
               "shortName": "Estadio Azul",
               "longName": "Estadio Azul"
             },
             "id": "1fizksdu1swwzaasf0fejku7d",
             "date": "2017-04-22Z",
             "time": "22:00:00Z",
             "week": "15",
             "lastUpdated": "2017-04-22T23:55:01Z"
           }
         },
         {
           "matchInfo": {
             "description": "Querétaro vs Chiapas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "kp6304o84ha1jnu4km3023uc",
               "shortName": "Estadio La Corregidora",
               "longName": "Estadio La Corregidora"
             },
             "id": "1fe2pwlx97v0sj4lguwp4dkh5",
             "date": "2017-04-22Z",
             "time": "22:00:00Z",
             "week": "15",
             "lastUpdated": "2017-04-22T23:53:08Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tijuana vs Toluca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "36ejluw1sky5hdx7i3cq8l524",
               "shortName": "Estadio Caliente",
               "longName": "Estadio Caliente"
             },
             "id": "1faa5jkltqym254yrsiob1sdl",
             "date": "2017-04-22Z",
             "time": "02:00:00Z",
             "week": "15",
             "lastUpdated": "2017-04-22T03:57:43Z"
           }
         },
         {
           "matchInfo": {
             "description": "Puebla vs Cruz Azul",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "8iba6bmlx2vbm7kq9l4l9fekh",
               "shortName": "Estadio Cuauhtémoc",
               "longName": "Estadio Cuauhtémoc"
             },
             "id": "1f5rkfxmjbj6j1y6ik7tpuu3t",
             "date": "2017-04-16Z",
             "time": "23:00:00Z",
             "week": "14",
             "lastUpdated": "2017-04-17T00:59:13Z"
           }
         },
         {
           "matchInfo": {
             "description": "Toluca vs Monterrey",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1wemyyvpo8d5ilkx5eccg4xcg",
               "shortName": "Estadio Nemesio Díez",
               "longName": "Estadio Nemesio Díez"
             },
             "id": "1eyopl7xs5fv1hxobflwtqj8p",
             "date": "2017-04-16Z",
             "time": "17:00:00Z",
             "week": "14",
             "lastUpdated": "2017-04-16T18:56:12Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs Querétaro",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "1ert0pepmzws1q8kyrg06jwfd",
             "date": "2017-04-16Z",
             "time": "02:00:00Z",
             "week": "14",
             "lastUpdated": "2017-04-16T03:53:24Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pachuca vs Guadalajara",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "7si3duu47j9z8rkvhyp0o64ev",
               "shortName": "Estadio Miguel Hidalgo",
               "longName": "Estadio Miguel Hidalgo"
             },
             "id": "1ekwwg478i50xt4x5qlb1ts6h",
             "date": "2017-04-16Z",
             "time": "00:06:00Z",
             "week": "14",
             "lastUpdated": "2017-04-16T02:02:05Z"
           }
         },
         {
           "matchInfo": {
             "description": "Atlas vs Santos Laguna",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "aybo2e3p8vy5sxt5z2jbmrvur",
               "shortName": "Estadio Jalisco",
               "longName": "Estadio Jalisco"
             },
             "id": "1eg8068s2fgda8rg9fqrf7ug9",
             "date": "2017-04-16Z",
             "time": "00:00:00Z",
             "week": "14",
             "lastUpdated": "2017-04-16T01:53:59Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs Pumas UNAM",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "1ecmm5z7hgb9oc7ey40x0dey1",
             "date": "2017-04-16Z",
             "time": "00:00:00Z",
             "week": "14",
             "lastUpdated": "2017-04-16T01:50:40Z"
           }
         },
         {
           "matchInfo": {
             "description": "Morelia vs León",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "ajoo2oadg139mszb0cz19sgus",
               "shortName": "Estadio Generalísimo José María Morelos y Pavón",
               "longName": "Estadio Generalísimo José María Morelos y Pavón"
             },
             "id": "1e8l0nhxatl6t46k5a2m5m8dl",
             "date": "2017-04-16Z",
             "time": "00:00:00Z",
             "week": "14",
             "lastUpdated": "2017-04-16T01:52:56Z"
           }
         },
         {
           "matchInfo": {
             "description": "Veracruz vs Necaxa",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1q1vif5b5rt0bm0ta007ewib5",
               "shortName": "Estadio Luis de la Fuente",
               "longName": "Estadio Luis de la Fuente"
             },
             "id": "1e0e9qgbsw46sanh0yxxupgbt",
             "date": "2017-04-16Z",
             "time": "00:00:00Z",
             "week": "14",
             "lastUpdated": "2017-04-16T01:55:11Z"
           }
         },
         {
           "matchInfo": {
             "description": "Chiapas vs Tijuana",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "eh4s74jblsd0y8k0wu8f0hmux",
               "shortName": "Estadio Zoque VMR",
               "longName": "Estadio Zoque VMR"
             },
             "id": "1e4ji44nipkxo7d2porji959l",
             "date": "2017-04-15Z",
             "time": "22:00:00Z",
             "week": "14",
             "lastUpdated": "2017-04-15T23:56:53Z"
           }
         },
         {
           "matchInfo": {
             "description": "Toluca vs Cruz Azul",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1wemyyvpo8d5ilkx5eccg4xcg",
               "shortName": "Estadio Nemesio Díez",
               "longName": "Estadio Nemesio Díez"
             },
             "id": "19kmw012o5f8b43g32jzw7nxl",
             "date": "2017-04-14Z",
             "time": "02:00:00Z",
             "week": "10",
             "lastUpdated": "2017-04-14T03:54:54Z"
           }
         },
         {
           "matchInfo": {
             "description": "Atlas vs Pumas UNAM",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "aybo2e3p8vy5sxt5z2jbmrvur",
               "shortName": "Estadio Jalisco",
               "longName": "Estadio Jalisco"
             },
             "id": "1953ii2vxw2woe1jv3nob33s9",
             "date": "2017-04-13Z",
             "time": "02:30:00Z",
             "week": "10",
             "lastUpdated": "2017-04-13T04:26:08Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pachuca vs Morelia",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "7si3duu47j9z8rkvhyp0o64ev",
               "shortName": "Estadio Miguel Hidalgo",
               "longName": "Estadio Miguel Hidalgo"
             },
             "id": "198ty4mg6rn9qffo0m3l3yn6x",
             "date": "2017-04-13Z",
             "time": "02:06:00Z",
             "week": "10",
             "lastUpdated": "2017-04-13T03:56:20Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs Necaxa",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "19f5hxgtg76visqy3sndtugo9",
             "date": "2017-04-13Z",
             "time": "02:00:00Z",
             "week": "10",
             "lastUpdated": "2017-04-13T03:52:44Z"
           }
         },
         {
           "matchInfo": {
             "description": "Santos Laguna vs Monterrey",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "2nxpq21sgwfeqe0663pn9t5ge",
               "shortName": "Estadio Nuevo Corona",
               "longName": "Estadio Nuevo Corona"
             },
             "id": "19xi300se64egy1ha2vcsntgp",
             "date": "2017-04-13Z",
             "time": "00:30:00Z",
             "week": "10",
             "lastUpdated": "2017-04-13T02:25:21Z"
           }
         },
         {
           "matchInfo": {
             "description": "Querétaro vs Tijuana",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "kp6304o84ha1jnu4km3023uc",
               "shortName": "Estadio La Corregidora",
               "longName": "Estadio La Corregidora"
             },
             "id": "18wckx3ixlm6azvs7bjtib17t",
             "date": "2017-04-13Z",
             "time": "00:00:00Z",
             "week": "10",
             "lastUpdated": "2017-04-13T01:50:38Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs Guadalajara",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "190q2xr8gpo9lasll32cpzoq1",
             "date": "2017-04-12Z",
             "time": "02:00:00Z",
             "week": "10",
             "lastUpdated": "2017-04-12T03:53:54Z"
           }
         },
         {
           "matchInfo": {
             "description": "Veracruz vs Puebla",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1q1vif5b5rt0bm0ta007ewib5",
               "shortName": "Estadio Luis de la Fuente",
               "longName": "Estadio Luis de la Fuente"
             },
             "id": "18rz3qqk6z6qhlopu59pydbe1",
             "date": "2017-04-12Z",
             "time": "02:00:00Z",
             "week": "10",
             "lastUpdated": "2017-04-12T03:59:25Z"
           }
         },
         {
           "matchInfo": {
             "description": "Chiapas vs León",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "eh4s74jblsd0y8k0wu8f0hmux",
               "shortName": "Estadio Zoque VMR",
               "longName": "Estadio Zoque VMR"
             },
             "id": "19rbl1kat5wzsi3c6til2vr3d",
             "date": "2017-04-12Z",
             "time": "00:00:00Z",
             "week": "10",
             "lastUpdated": "2017-04-12T01:52:19Z"
           }
         },
         {
           "matchInfo": {
             "description": "Santos Laguna vs Pachuca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "2nxpq21sgwfeqe0663pn9t5ge",
               "shortName": "Estadio Nuevo Corona",
               "longName": "Estadio Nuevo Corona"
             },
             "id": "1dv8ag3f3g6heyukzk5p24d0p",
             "date": "2017-04-09Z",
             "time": "23:00:00Z",
             "week": "13",
             "lastUpdated": "2017-04-10T00:57:48Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pumas UNAM vs Toluca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "78113wsj5mbr2k5bjshddlosk",
               "shortName": "Estadio Olímpico de Universitario",
               "longName": "Estadio Olímpico de Universitario"
             },
             "id": "1dnt8qg2ul9umi4t1idnvqwa1",
             "date": "2017-04-09Z",
             "time": "17:00:00Z",
             "week": "13",
             "lastUpdated": "2017-04-09T18:53:22Z"
           }
         },
         {
           "matchInfo": {
             "description": "Guadalajara vs Puebla",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "94u6u9s3chfdpec5irdvfi7ha",
               "shortName": "Estadio Omnilife",
               "longName": "Estadio Omnilife"
             },
             "id": "1dh5hmga2f327n24vxptngmi1",
             "date": "2017-04-09Z",
             "time": "02:06:00Z",
             "week": "13",
             "lastUpdated": "2017-04-09T04:00:30Z"
           }
         },
         {
           "matchInfo": {
             "description": "Necaxa vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "5zyw4ved3yttj4d9jvmt56ua6",
               "shortName": "Estadio Victoria de Aguascalientes",
               "longName": "Estadio Victoria de Aguascalientes"
             },
             "id": "1db9w3luc27t3q1nwy5eij36x",
             "date": "2017-04-09Z",
             "time": "02:00:00Z",
             "week": "13",
             "lastUpdated": "2017-04-09T03:53:14Z"
           }
         },
         {
           "matchInfo": {
             "description": "León vs Veracruz",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "3dpgucez2cp6q9vw962ribee2",
               "shortName": "Estadio León (Nou Camp)",
               "longName": "Estadio León (Nou Camp)"
             },
             "id": "1d54cxevyb5fzyte44ghyzpbd",
             "date": "2017-04-09Z",
             "time": "00:06:00Z",
             "week": "13",
             "lastUpdated": "2017-04-09T01:58:50Z"
           }
         },
         {
           "matchInfo": {
             "description": "Monterrey vs Chiapas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "647q7it5oqj8ieeo9hwcpjpih",
               "shortName": "Estadio BBVA Bancomer",
               "longName": "Estadio BBVA Bancomer"
             },
             "id": "1cuasa0j4upflycdmdtd0d2ax",
             "date": "2017-04-09Z",
             "time": "00:00:00Z",
             "week": "13",
             "lastUpdated": "2017-04-09T03:34:25Z"
           }
         },
         {
           "matchInfo": {
             "description": "Querétaro vs Atlas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "kp6304o84ha1jnu4km3023uc",
               "shortName": "Estadio La Corregidora",
               "longName": "Estadio La Corregidora"
             },
             "id": "1cmxaoc15mm5yy5s5lofwjyeh",
             "date": "2017-04-08Z",
             "time": "22:00:00Z",
             "week": "13",
             "lastUpdated": "2017-04-08T23:50:53Z"
           }
         },
         {
           "matchInfo": {
             "description": "Cruz Azul vs Morelia",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1bdvbj3pjw35peqxagih2wn48",
               "shortName": "Estadio Azul",
               "longName": "Estadio Azul"
             },
             "id": "1ch43pymehhvw40mmny04lhpl",
             "date": "2017-04-08Z",
             "time": "22:00:00Z",
             "week": "13",
             "lastUpdated": "2017-04-08T23:51:22Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tijuana vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "36ejluw1sky5hdx7i3cq8l524",
               "shortName": "Estadio Caliente",
               "longName": "Estadio Caliente"
             },
             "id": "1ccxwxw1pw3627pc6sopgcstl",
             "date": "2017-04-08Z",
             "time": "02:00:00Z",
             "week": "13",
             "lastUpdated": "2017-04-08T07:42:24Z"
           }
         },
         {
           "matchInfo": {
             "description": "Santos Laguna vs Querétaro",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "2nxpq21sgwfeqe0663pn9t5ge",
               "shortName": "Estadio Nuevo Corona",
               "longName": "Estadio Nuevo Corona"
             },
             "id": "1c8epat3e1d3vzy7ij2opnhex",
             "date": "2017-04-02Z",
             "time": "23:00:00Z",
             "week": "12",
             "lastUpdated": "2017-04-03T00:50:56Z"
           }
         },
         {
           "matchInfo": {
             "description": "Toluca vs Necaxa",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1wemyyvpo8d5ilkx5eccg4xcg",
               "shortName": "Estadio Nemesio Díez",
               "longName": "Estadio Nemesio Díez"
             },
             "id": "1c3ie1hyhyx3sbjh8ivc144ix",
             "date": "2017-04-02Z",
             "time": "17:00:00Z",
             "week": "12",
             "lastUpdated": "2017-04-02T18:53:08Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs Monterrey",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "1bz8rr0tx14d0qzl26g15snvt",
             "date": "2017-04-02Z",
             "time": "03:00:00Z",
             "week": "12",
             "lastUpdated": "2017-04-02T04:52:59Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pachuca vs Puebla",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "7si3duu47j9z8rkvhyp0o64ev",
               "shortName": "Estadio Miguel Hidalgo",
               "longName": "Estadio Miguel Hidalgo"
             },
             "id": "1bv280ixv9i665owap13y9xpl",
             "date": "2017-04-02Z",
             "time": "01:06:00Z",
             "week": "12",
             "lastUpdated": "2017-04-02T02:59:34Z"
           }
         },
         {
           "matchInfo": {
             "description": "Morelia vs Guadalajara",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "ajoo2oadg139mszb0cz19sgus",
               "shortName": "Estadio Generalísimo José María Morelos y Pavón",
               "longName": "Estadio Generalísimo José María Morelos y Pavón"
             },
             "id": "1bqosnvtcot1plw3uqs2f58fd",
             "date": "2017-04-02Z",
             "time": "01:00:00Z",
             "week": "12",
             "lastUpdated": "2017-04-02T02:58:19Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs León",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "1bmg9vaup5juuhjztrpsrg3jd",
             "date": "2017-04-02Z",
             "time": "01:00:00Z",
             "week": "12",
             "lastUpdated": "2017-04-02T02:53:10Z"
           }
         },
         {
           "matchInfo": {
             "description": "Atlas vs Tijuana",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "aybo2e3p8vy5sxt5z2jbmrvur",
               "shortName": "Estadio Jalisco",
               "longName": "Estadio Jalisco"
             },
             "id": "1bio0w5b25230vdsi090gxsyx",
             "date": "2017-04-02Z",
             "time": "01:00:00Z",
             "week": "12",
             "lastUpdated": "2017-04-02T02:55:01Z"
           }
         },
         {
           "matchInfo": {
             "description": "Chiapas vs Pumas UNAM",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "eh4s74jblsd0y8k0wu8f0hmux",
               "shortName": "Estadio Zoque VMR",
               "longName": "Estadio Zoque VMR"
             },
             "id": "1beffze4dgiug86elvyz3reg9",
             "date": "2017-04-01Z",
             "time": "23:00:00Z",
             "week": "12",
             "lastUpdated": "2017-04-02T00:57:39Z"
           }
         },
         {
           "matchInfo": {
             "description": "Veracruz vs Cruz Azul",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1q1vif5b5rt0bm0ta007ewib5",
               "shortName": "Estadio Luis de la Fuente",
               "longName": "Estadio Luis de la Fuente"
             },
             "id": "1bapcwc6mgyc71y9fj4tace7d",
             "date": "2017-04-01Z",
             "time": "03:00:00Z",
             "week": "12",
             "lastUpdated": "2017-04-01T04:54:47Z"
           }
         },
         {
           "matchInfo": {
             "description": "Puebla vs Morelia",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "8iba6bmlx2vbm7kq9l4l9fekh",
               "shortName": "Estadio Cuauhtémoc",
               "longName": "Estadio Cuauhtémoc"
             },
             "id": "1b3xoq5idutpukynlmqzveyg9",
             "date": "2017-03-20Z",
             "time": "00:00:00Z",
             "week": "11",
             "lastUpdated": "2017-03-20T01:50:57Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pumas UNAM vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "78113wsj5mbr2k5bjshddlosk",
               "shortName": "Estadio Olímpico de Universitario",
               "longName": "Estadio Olímpico de Universitario"
             },
             "id": "1b06lersx2z7ry73l2dqqfyzt",
             "date": "2017-03-19Z",
             "time": "18:00:00Z",
             "week": "11",
             "lastUpdated": "2017-03-19T19:56:19Z"
           }
         },
         {
           "matchInfo": {
             "description": "Guadalajara vs Veracruz",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "94u6u9s3chfdpec5irdvfi7ha",
               "shortName": "Estadio Omnilife",
               "longName": "Estadio Omnilife"
             },
             "id": "1avzybiara1u2z4b2w5rg1fjd",
             "date": "2017-03-19Z",
             "time": "03:06:00Z",
             "week": "11",
             "lastUpdated": "2017-03-19T04:58:39Z"
           }
         },
         {
           "matchInfo": {
             "description": "Necaxa vs Chiapas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "5zyw4ved3yttj4d9jvmt56ua6",
               "shortName": "Estadio Victoria de Aguascalientes",
               "longName": "Estadio Victoria de Aguascalientes"
             },
             "id": "1aqzntwxmyykoj2bswflcvyll",
             "date": "2017-03-19Z",
             "time": "03:00:00Z",
             "week": "11",
             "lastUpdated": "2017-03-19T05:25:02Z"
           }
         },
         {
           "matchInfo": {
             "description": "León vs Toluca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "3dpgucez2cp6q9vw962ribee2",
               "shortName": "Estadio León (Nou Camp)",
               "longName": "Estadio León (Nou Camp)"
             },
             "id": "1am29hv07qsceusovthfalqsp",
             "date": "2017-03-19Z",
             "time": "01:06:00Z",
             "week": "11",
             "lastUpdated": "2017-03-19T02:54:38Z"
           }
         },
         {
           "matchInfo": {
             "description": "Monterrey vs Atlas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "647q7it5oqj8ieeo9hwcpjpih",
               "shortName": "Estadio BBVA Bancomer",
               "longName": "Estadio BBVA Bancomer"
             },
             "id": "1ai18fxk75p3kzpllw0kk7g15",
             "date": "2017-03-19Z",
             "time": "01:00:00Z",
             "week": "11",
             "lastUpdated": "2017-03-19T02:51:39Z"
           }
         },
         {
           "matchInfo": {
             "description": "Querétaro vs Pachuca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "kp6304o84ha1jnu4km3023uc",
               "shortName": "Estadio La Corregidora",
               "longName": "Estadio La Corregidora"
             },
             "id": "1adm2vrjfvo8kpgnwb7fkd33d",
             "date": "2017-03-18Z",
             "time": "23:00:00Z",
             "week": "11",
             "lastUpdated": "2017-03-19T00:53:14Z"
           }
         },
         {
           "matchInfo": {
             "description": "Cruz Azul vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1bdvbj3pjw35peqxagih2wn48",
               "shortName": "Estadio Azul",
               "longName": "Estadio Azul"
             },
             "id": "1a87h24qtkysyjvngl81gwn3d",
             "date": "2017-03-18Z",
             "time": "23:00:00Z",
             "week": "11",
             "lastUpdated": "2017-03-19T00:51:59Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tijuana vs Santos Laguna",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "36ejluw1sky5hdx7i3cq8l524",
               "shortName": "Estadio Caliente",
               "longName": "Estadio Caliente"
             },
             "id": "1a3apb0k4ib5ydyi3e1fiijft",
             "date": "2017-03-18Z",
             "time": "03:00:00Z",
             "week": "11",
             "lastUpdated": "2017-03-18T04:51:18Z"
           }
         },
         {
           "matchInfo": {
             "description": "Puebla vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "8iba6bmlx2vbm7kq9l4l9fekh",
               "shortName": "Estadio Cuauhtémoc",
               "longName": "Estadio Cuauhtémoc"
             },
             "id": "18n8slikcyrb22cxqu9l5fht5",
             "date": "2017-03-05Z",
             "time": "18:00:00Z",
             "week": "9",
             "lastUpdated": "2017-03-05T19:54:15Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pumas UNAM vs Santos Laguna",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "78113wsj5mbr2k5bjshddlosk",
               "shortName": "Estadio Olímpico de Universitario",
               "longName": "Estadio Olímpico de Universitario"
             },
             "id": "18ixhk053rz70s9c6ba3itlnt",
             "date": "2017-03-05Z",
             "time": "18:00:00Z",
             "week": "9",
             "lastUpdated": "2017-03-05T19:52:25Z"
           }
         },
         {
           "matchInfo": {
             "description": "Guadalajara vs Toluca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "94u6u9s3chfdpec5irdvfi7ha",
               "shortName": "Estadio Omnilife",
               "longName": "Estadio Omnilife"
             },
             "id": "18e12riyau4qjxv1akbgdri09",
             "date": "2017-03-05Z",
             "time": "03:06:00Z",
             "week": "9",
             "lastUpdated": "2017-03-05T04:57:07Z"
           }
         },
         {
           "matchInfo": {
             "description": "Necaxa vs Atlas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "5zyw4ved3yttj4d9jvmt56ua6",
               "shortName": "Estadio Victoria de Aguascalientes",
               "longName": "Estadio Victoria de Aguascalientes"
             },
             "id": "189q1rgn9wvczaxyarhrvl6uh",
             "date": "2017-03-05Z",
             "time": "03:00:00Z",
             "week": "9",
             "lastUpdated": "2017-03-05T04:52:33Z"
           }
         },
         {
           "matchInfo": {
             "description": "León vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "3dpgucez2cp6q9vw962ribee2",
               "shortName": "Estadio León (Nou Camp)",
               "longName": "Estadio León (Nou Camp)"
             },
             "id": "185zk0j6gxf8p45449rr36f3d",
             "date": "2017-03-05Z",
             "time": "01:06:00Z",
             "week": "9",
             "lastUpdated": "2017-03-05T03:09:21Z"
           }
         },
         {
           "matchInfo": {
             "description": "Monterrey vs Querétaro",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "647q7it5oqj8ieeo9hwcpjpih",
               "shortName": "Estadio BBVA Bancomer",
               "longName": "Estadio BBVA Bancomer"
             },
             "id": "181wj32n5xh6gbgn7lohd2msp",
             "date": "2017-03-05Z",
             "time": "01:00:00Z",
             "week": "9",
             "lastUpdated": "2017-03-05T02:53:06Z"
           }
         },
         {
           "matchInfo": {
             "description": "Morelia vs Veracruz",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "ajoo2oadg139mszb0cz19sgus",
               "shortName": "Estadio Generalísimo José María Morelos y Pavón",
               "longName": "Estadio Generalísimo José María Morelos y Pavón"
             },
             "id": "17y7dsfs4pqmun6y3dkvsqaqx",
             "date": "2017-03-05Z",
             "time": "01:00:00Z",
             "week": "9",
             "lastUpdated": "2017-03-05T02:53:40Z"
           }
         },
         {
           "matchInfo": {
             "description": "Cruz Azul vs Chiapas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1bdvbj3pjw35peqxagih2wn48",
               "shortName": "Estadio Azul",
               "longName": "Estadio Azul"
             },
             "id": "17t1jkxqt0ldvwdsyoiycwn3d",
             "date": "2017-03-04Z",
             "time": "23:00:00Z",
             "week": "9",
             "lastUpdated": "2017-03-05T00:51:57Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tijuana vs Pachuca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "36ejluw1sky5hdx7i3cq8l524",
               "shortName": "Estadio Caliente",
               "longName": "Estadio Caliente"
             },
             "id": "17jaswjlmpwhr38znogdsdp7t",
             "date": "2017-03-04Z",
             "time": "03:00:00Z",
             "week": "9",
             "lastUpdated": "2017-03-04T04:56:33Z"
           }
         },
         {
           "matchInfo": {
             "description": "Santos Laguna vs Necaxa",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "2nxpq21sgwfeqe0663pn9t5ge",
               "shortName": "Estadio Nuevo Corona",
               "longName": "Estadio Nuevo Corona"
             },
             "id": "17ffe79boaly7ise796qevr3d",
             "date": "2017-02-27Z",
             "time": "00:00:00Z",
             "week": "8",
             "lastUpdated": "2017-02-27T01:54:06Z"
           }
         },
         {
           "matchInfo": {
             "description": "Chiapas vs Guadalajara",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "eh4s74jblsd0y8k0wu8f0hmux",
               "shortName": "Estadio Zoque VMR",
               "longName": "Estadio Zoque VMR"
             },
             "id": "17a0vbggar037x625rgiuhm95",
             "date": "2017-02-26Z",
             "time": "23:00:00Z",
             "week": "8",
             "lastUpdated": "2017-02-28T11:43:24Z"
           }
         },
         {
           "matchInfo": {
             "description": "Toluca vs Puebla",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1wemyyvpo8d5ilkx5eccg4xcg",
               "shortName": "Estadio Nemesio Díez",
               "longName": "Estadio Nemesio Díez"
             },
             "id": "174h6lgi8xmaee1zvgpe17rop",
             "date": "2017-02-26Z",
             "time": "18:00:00Z",
             "week": "8",
             "lastUpdated": "2017-02-26T19:57:57Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs Cruz Azul",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "16xhp1rxgjlbdlb3452lfvi7d",
             "date": "2017-02-26Z",
             "time": "03:00:00Z",
             "week": "8",
             "lastUpdated": "2017-02-28T11:41:49Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pachuca vs Veracruz",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "7si3duu47j9z8rkvhyp0o64ev",
               "shortName": "Estadio Miguel Hidalgo",
               "longName": "Estadio Miguel Hidalgo"
             },
             "id": "16qpomk0j50kkxmi909qq5sdl",
             "date": "2017-02-26Z",
             "time": "01:06:00Z",
             "week": "8",
             "lastUpdated": "2017-02-28T11:41:58Z"
           }
         },
         {
           "matchInfo": {
             "description": "Atlas vs León",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "aybo2e3p8vy5sxt5z2jbmrvur",
               "shortName": "Estadio Jalisco",
               "longName": "Estadio Jalisco"
             },
             "id": "16jswc9ivyl9yqctcbs9c899l",
             "date": "2017-02-26Z",
             "time": "01:00:00Z",
             "week": "8",
             "lastUpdated": "2017-02-26T03:00:13Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs Morelia",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "16er7i3jgatmbew14tminjrhl",
             "date": "2017-02-26Z",
             "time": "01:00:00Z",
             "week": "8",
             "lastUpdated": "2017-02-28T11:41:50Z"
           }
         },
         {
           "matchInfo": {
             "description": "Querétaro vs Pumas UNAM",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "kp6304o84ha1jnu4km3023uc",
               "shortName": "Estadio La Corregidora",
               "longName": "Estadio La Corregidora"
             },
             "id": "169ur1vl684oz980v8gdb7nc9",
             "date": "2017-02-25Z",
             "time": "23:00:00Z",
             "week": "8",
             "lastUpdated": "2017-02-26T00:58:59Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tijuana vs Monterrey",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "36ejluw1sky5hdx7i3cq8l524",
               "shortName": "Estadio Caliente",
               "longName": "Estadio Caliente"
             },
             "id": "1659wnvm708ueyixl29g7nug9",
             "date": "2017-02-25Z",
             "time": "03:00:00Z",
             "week": "8",
             "lastUpdated": "2017-02-28T11:41:58Z"
           }
         },
         {
           "matchInfo": {
             "description": "Puebla vs Chiapas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "8iba6bmlx2vbm7kq9l4l9fekh",
               "shortName": "Estadio Cuauhtémoc",
               "longName": "Estadio Cuauhtémoc"
             },
             "id": "161izltcx96upi9gqeke0b755",
             "date": "2017-02-19Z",
             "time": "22:00:00Z",
             "week": "7",
             "lastUpdated": "2017-02-19T23:53:16Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pumas UNAM vs Tijuana",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "78113wsj5mbr2k5bjshddlosk",
               "shortName": "Estadio Olímpico de Universitario",
               "longName": "Estadio Olímpico de Universitario"
             },
             "id": "15xbo3988d7fuatk9mcrr1muh",
             "date": "2017-02-19Z",
             "time": "18:00:00Z",
             "week": "7",
             "lastUpdated": "2017-02-19T20:07:44Z"
           }
         },
         {
           "matchInfo": {
             "description": "Guadalajara vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "94u6u9s3chfdpec5irdvfi7ha",
               "shortName": "Estadio Omnilife",
               "longName": "Estadio Omnilife"
             },
             "id": "15t6hhdlzy1mnln71lz5lta09",
             "date": "2017-02-19Z",
             "time": "03:06:00Z",
             "week": "7",
             "lastUpdated": "2017-02-19T04:59:30Z"
           }
         },
         {
           "matchInfo": {
             "description": "Necaxa vs Querétaro",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "5zyw4ved3yttj4d9jvmt56ua6",
               "shortName": "Estadio Victoria de Aguascalientes",
               "longName": "Estadio Victoria de Aguascalientes"
             },
             "id": "15n8623i8kg59gt0ps8l3kuzt",
             "date": "2017-02-19Z",
             "time": "03:00:00Z",
             "week": "7",
             "lastUpdated": "2017-02-28T11:41:58Z"
           }
         },
         {
           "matchInfo": {
             "description": "León vs Santos Laguna",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "3dpgucez2cp6q9vw962ribee2",
               "shortName": "Estadio León (Nou Camp)",
               "longName": "Estadio León (Nou Camp)"
             },
             "id": "15j5x58gn4znqbvpztjnlehgp",
             "date": "2017-02-19Z",
             "time": "01:06:00Z",
             "week": "7",
             "lastUpdated": "2017-02-19T02:56:42Z"
           }
         },
         {
           "matchInfo": {
             "description": "Morelia vs Toluca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "ajoo2oadg139mszb0cz19sgus",
               "shortName": "Estadio Generalísimo José María Morelos y Pavón",
               "longName": "Estadio Generalísimo José María Morelos y Pavón"
             },
             "id": "15emkwktlebk28w7jhgy4cueh",
             "date": "2017-02-19Z",
             "time": "01:00:00Z",
             "week": "7",
             "lastUpdated": "2017-02-19T02:53:56Z"
           }
         },
         {
           "matchInfo": {
             "description": "Monterrey vs Pachuca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "647q7it5oqj8ieeo9hwcpjpih",
               "shortName": "Estadio BBVA Bancomer",
               "longName": "Estadio BBVA Bancomer"
             },
             "id": "15adjj2zqil868vndcjcvlip5",
             "date": "2017-02-19Z",
             "time": "01:00:00Z",
             "week": "7",
             "lastUpdated": "2017-02-19T02:52:01Z"
           }
         },
         {
           "matchInfo": {
             "description": "Cruz Azul vs Atlas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1bdvbj3pjw35peqxagih2wn48",
               "shortName": "Estadio Azul",
               "longName": "Estadio Azul"
             },
             "id": "1565kx0uhumk123790wi7oxyh",
             "date": "2017-02-18Z",
             "time": "23:00:00Z",
             "week": "7",
             "lastUpdated": "2017-02-28T11:41:58Z"
           }
         },
         {
           "matchInfo": {
             "description": "Veracruz vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1q1vif5b5rt0bm0ta007ewib5",
               "shortName": "Estadio Luis de la Fuente",
               "longName": "Estadio Luis de la Fuente"
             },
             "id": "151spsto4snby2p468ny6uh9l",
             "date": "2017-02-18Z",
             "time": "03:00:00Z",
             "week": "7",
             "lastUpdated": "2017-02-28T11:43:31Z"
           }
         },
         {
           "matchInfo": {
             "description": "Santos Laguna vs Cruz Azul",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "2nxpq21sgwfeqe0663pn9t5ge",
               "shortName": "Estadio Nuevo Corona",
               "longName": "Estadio Nuevo Corona"
             },
             "id": "14x94tvh97q55pxayqstbfdgp",
             "date": "2017-02-13Z",
             "time": "00:00:00Z",
             "week": "6",
             "lastUpdated": "2017-02-28T11:41:58Z"
           }
         },
         {
           "matchInfo": {
             "description": "Chiapas vs Morelia",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "eh4s74jblsd0y8k0wu8f0hmux",
               "shortName": "Estadio Zoque VMR",
               "longName": "Estadio Zoque VMR"
             },
             "id": "14sla8lquf2530g8m9exfqodl",
             "date": "2017-02-12Z",
             "time": "23:00:00Z",
             "week": "6",
             "lastUpdated": "2017-02-28T11:43:34Z"
           }
         },
         {
           "matchInfo": {
             "description": "Toluca vs Veracruz",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1wemyyvpo8d5ilkx5eccg4xcg",
               "shortName": "Estadio Nemesio Díez",
               "longName": "Estadio Nemesio Díez"
             },
             "id": "14ono5vjbo34mgzchn9dricx5",
             "date": "2017-02-12Z",
             "time": "18:00:00Z",
             "week": "6",
             "lastUpdated": "2017-02-28T11:41:59Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs Puebla",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "14k01x8r172ujypuivi3epeqx",
             "date": "2017-02-12Z",
             "time": "03:00:00Z",
             "week": "6",
             "lastUpdated": "2017-02-28T11:42:58Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pachuca vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "7si3duu47j9z8rkvhyp0o64ev",
               "shortName": "Estadio Miguel Hidalgo",
               "longName": "Estadio Miguel Hidalgo"
             },
             "id": "14fza1lycjgunbxq5qp90rwfd",
             "date": "2017-02-12Z",
             "time": "01:06:00Z",
             "week": "6",
             "lastUpdated": "2017-02-28T11:41:59Z"
           }
         },
         {
           "matchInfo": {
             "description": "Monterrey vs Pumas UNAM",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "647q7it5oqj8ieeo9hwcpjpih",
               "shortName": "Estadio BBVA Bancomer",
               "longName": "Estadio BBVA Bancomer"
             },
             "id": "14c7mmoyucrr3j6si7tcsruuh",
             "date": "2017-02-12Z",
             "time": "01:00:00Z",
             "week": "6",
             "lastUpdated": "2017-02-28T11:43:34Z"
           }
         },
         {
           "matchInfo": {
             "description": "Atlas vs Guadalajara",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "aybo2e3p8vy5sxt5z2jbmrvur",
               "shortName": "Estadio Jalisco",
               "longName": "Estadio Jalisco"
             },
             "id": "148egt1o8ebpvyyiw3y8nv7xl",
             "date": "2017-02-12Z",
             "time": "01:00:00Z",
             "week": "6",
             "lastUpdated": "2017-02-28T11:41:59Z"
           }
         },
         {
           "matchInfo": {
             "description": "Querétaro vs León",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "kp6304o84ha1jnu4km3023uc",
               "shortName": "Estadio La Corregidora",
               "longName": "Estadio La Corregidora"
             },
             "id": "1422ikncggf590524d1vv48vd",
             "date": "2017-02-11Z",
             "time": "23:00:00Z",
             "week": "6",
             "lastUpdated": "2017-02-28T11:43:08Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tijuana vs Necaxa",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "36ejluw1sky5hdx7i3cq8l524",
               "shortName": "Estadio Caliente",
               "longName": "Estadio Caliente"
             },
             "id": "13y9wqp2elyy7c6386j9s9b6x",
             "date": "2017-02-11Z",
             "time": "03:00:00Z",
             "week": "6",
             "lastUpdated": "2017-02-28T11:41:47Z"
           }
         },
         {
           "matchInfo": {
             "description": "Chiapas vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "eh4s74jblsd0y8k0wu8f0hmux",
               "shortName": "Estadio Zoque VMR",
               "longName": "Estadio Zoque VMR"
             },
             "id": "zjjg15htg2g5q8nwu7z7444p",
             "date": "2017-02-08Z",
             "time": "02:00:00Z",
             "week": "1",
             "lastUpdated": "2017-02-28T11:42:10Z"
           }
         },
         {
           "matchInfo": {
             "description": "Guadalajara vs Santos Laguna",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "94u6u9s3chfdpec5irdvfi7ha",
               "shortName": "Estadio Omnilife",
               "longName": "Estadio Omnilife"
             },
             "id": "13l9uq4brgm4yv83rbxtmkbft",
             "date": "2017-02-05Z",
             "time": "22:00:00Z",
             "week": "5",
             "lastUpdated": "2017-02-05T23:54:13Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pumas UNAM vs Pachuca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "78113wsj5mbr2k5bjshddlosk",
               "shortName": "Estadio Olímpico de Universitario",
               "longName": "Estadio Olímpico de Universitario"
             },
             "id": "13qlg5nk3f8qikqry0nc050bt",
             "date": "2017-02-05Z",
             "time": "18:00:00Z",
             "week": "5",
             "lastUpdated": "2017-02-28T11:41:47Z"
           }
         },
         {
           "matchInfo": {
             "description": "Necaxa vs Monterrey",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "5zyw4ved3yttj4d9jvmt56ua6",
               "shortName": "Estadio Victoria de Aguascalientes",
               "longName": "Estadio Victoria de Aguascalientes"
             },
             "id": "13fj4fbrdvic1i4aqexfisdex",
             "date": "2017-02-05Z",
             "time": "03:00:00Z",
             "week": "5",
             "lastUpdated": "2017-02-28T11:41:59Z"
           }
         },
         {
           "matchInfo": {
             "description": "León vs Tijuana",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "3dpgucez2cp6q9vw962ribee2",
               "shortName": "Estadio León (Nou Camp)",
               "longName": "Estadio León (Nou Camp)"
             },
             "id": "13aeqbzdbyqpi7pqu3opwr3zd",
             "date": "2017-02-05Z",
             "time": "01:06:00Z",
             "week": "5",
             "lastUpdated": "2017-02-28T11:43:34Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs Toluca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "1366rwjcf3h0efo7qo2fwjfft",
             "date": "2017-02-05Z",
             "time": "01:00:00Z",
             "week": "5",
             "lastUpdated": "2017-02-28T11:42:00Z"
           }
         },
         {
           "matchInfo": {
             "description": "Morelia vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "ajoo2oadg139mszb0cz19sgus",
               "shortName": "Estadio Generalísimo José María Morelos y Pavón",
               "longName": "Estadio Generalísimo José María Morelos y Pavón"
             },
             "id": "1323vyy54dvhbgf7h0spmfkrt",
             "date": "2017-02-05Z",
             "time": "01:00:00Z",
             "week": "5",
             "lastUpdated": "2017-02-05T17:05:12Z"
           }
         },
         {
           "matchInfo": {
             "description": "Cruz Azul vs Querétaro",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1bdvbj3pjw35peqxagih2wn48",
               "shortName": "Estadio Azul",
               "longName": "Estadio Azul"
             },
             "id": "12y2hidlpkqw5balk08b4lyax",
             "date": "2017-02-04Z",
             "time": "23:00:00Z",
             "week": "5",
             "lastUpdated": "2017-02-28T11:42:01Z"
           }
         },
         {
           "matchInfo": {
             "description": "Veracruz vs Chiapas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1q1vif5b5rt0bm0ta007ewib5",
               "shortName": "Estadio Luis de la Fuente",
               "longName": "Estadio Luis de la Fuente"
             },
             "id": "12ubgf82a7mwm3nuhgbb05k2x",
             "date": "2017-02-04Z",
             "time": "03:30:00Z",
             "week": "5",
             "lastUpdated": "2017-02-28T11:43:09Z"
           }
         },
         {
           "matchInfo": {
             "description": "Puebla vs Atlas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "8iba6bmlx2vbm7kq9l4l9fekh",
               "shortName": "Estadio Cuauhtémoc",
               "longName": "Estadio Cuauhtémoc"
             },
             "id": "13ue5r3glmm13trtrigjfnap5",
             "date": "2017-02-04Z",
             "time": "01:30:00Z",
             "week": "5",
             "lastUpdated": "2017-02-28T11:43:34Z"
           }
         },
         {
           "matchInfo": {
             "description": "Santos Laguna vs Puebla",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "2nxpq21sgwfeqe0663pn9t5ge",
               "shortName": "Estadio Nuevo Corona",
               "longName": "Estadio Nuevo Corona"
             },
             "id": "12qap0nrqg9m3k3n34pqyl71l",
             "date": "2017-01-30Z",
             "time": "00:00:00Z",
             "week": "4",
             "lastUpdated": "2017-02-28T11:42:03Z"
           }
         },
         {
           "matchInfo": {
             "description": "Chiapas vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "eh4s74jblsd0y8k0wu8f0hmux",
               "shortName": "Estadio Zoque VMR",
               "longName": "Estadio Zoque VMR"
             },
             "id": "12mgwch2p363cb7omk5q5c1rd",
             "date": "2017-01-29Z",
             "time": "23:00:00Z",
             "week": "4",
             "lastUpdated": "2017-02-28T11:42:05Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pumas UNAM vs Necaxa",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "78113wsj5mbr2k5bjshddlosk",
               "shortName": "Estadio Olímpico de Universitario",
               "longName": "Estadio Olímpico de Universitario"
             },
             "id": "12gd14arcv2p54226c6mdny09",
             "date": "2017-01-29Z",
             "time": "18:00:00Z",
             "week": "4",
             "lastUpdated": "2017-01-29T19:51:51Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs Veracruz",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "12cw13e5yji3mdtpanukj8usp",
             "date": "2017-01-29Z",
             "time": "03:00:00Z",
             "week": "4",
             "lastUpdated": "2017-02-28T11:43:35Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pachuca vs Toluca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "7si3duu47j9z8rkvhyp0o64ev",
               "shortName": "Estadio Miguel Hidalgo",
               "longName": "Estadio Miguel Hidalgo"
             },
             "id": "1293t2lb4a3g3kms2cup7itih",
             "date": "2017-01-29Z",
             "time": "01:06:00Z",
             "week": "4",
             "lastUpdated": "2017-02-28T11:42:05Z"
           }
         },
         {
           "matchInfo": {
             "description": "Monterrey vs León",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "647q7it5oqj8ieeo9hwcpjpih",
               "shortName": "Estadio BBVA Bancomer",
               "longName": "Estadio BBVA Bancomer"
             },
             "id": "125jvm9ss7yf7ggjz7rbai57t",
             "date": "2017-01-29Z",
             "time": "01:00:00Z",
             "week": "4",
             "lastUpdated": "2017-02-28T11:43:09Z"
           }
         },
         {
           "matchInfo": {
             "description": "Atlas vs Morelia",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "aybo2e3p8vy5sxt5z2jbmrvur",
               "shortName": "Estadio Jalisco",
               "longName": "Estadio Jalisco"
             },
             "id": "121qaepuv02auhqtl32q3y3ft",
             "date": "2017-01-29Z",
             "time": "01:00:00Z",
             "week": "4",
             "lastUpdated": "2017-02-28T11:42:06Z"
           }
         },
         {
           "matchInfo": {
             "description": "Querétaro vs Guadalajara",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "kp6304o84ha1jnu4km3023uc",
               "shortName": "Estadio La Corregidora",
               "longName": "Estadio La Corregidora"
             },
             "id": "11xtya12bfq17ma5yh1bipasp",
             "date": "2017-01-28Z",
             "time": "23:00:00Z",
             "week": "4",
             "lastUpdated": "2017-02-28T11:43:10Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tijuana vs Cruz Azul",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "36ejluw1sky5hdx7i3cq8l524",
               "shortName": "Estadio Caliente",
               "longName": "Estadio Caliente"
             },
             "id": "11u3ze1hgz3d9qjvje8nfx1ih",
             "date": "2017-01-28Z",
             "time": "03:00:00Z",
             "week": "4",
             "lastUpdated": "2017-02-28T11:42:07Z"
           }
         },
         {
           "matchInfo": {
             "description": "Puebla vs Querétaro",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "8iba6bmlx2vbm7kq9l4l9fekh",
               "shortName": "Estadio Cuauhtémoc",
               "longName": "Estadio Cuauhtémoc"
             },
             "id": "11pnsm4lkcouk2302z3srgmi1",
             "date": "2017-01-23Z",
             "time": "00:00:00Z",
             "week": "3",
             "lastUpdated": "2017-01-23T01:53:01Z"
           }
         },
         {
           "matchInfo": {
             "description": "Toluca vs Chiapas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1wemyyvpo8d5ilkx5eccg4xcg",
               "shortName": "Estadio Nemesio Díez",
               "longName": "Estadio Nemesio Díez"
             },
             "id": "11ln09mz9rfurymewv60b7xm1",
             "date": "2017-01-22Z",
             "time": "18:00:00Z",
             "week": "3",
             "lastUpdated": "2017-02-28T11:42:09Z"
           }
         },
         {
           "matchInfo": {
             "description": "Guadalajara vs Tijuana",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "94u6u9s3chfdpec5irdvfi7ha",
               "shortName": "Estadio Omnilife",
               "longName": "Estadio Omnilife"
             },
             "id": "11gvw7dxo2v3zlf7zwvou24fd",
             "date": "2017-01-22Z",
             "time": "03:06:00Z",
             "week": "3",
             "lastUpdated": "2017-01-22T05:01:39Z"
           }
         },
         {
           "matchInfo": {
             "description": "Necaxa vs Pachuca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "5zyw4ved3yttj4d9jvmt56ua6",
               "shortName": "Estadio Victoria de Aguascalientes",
               "longName": "Estadio Victoria de Aguascalientes"
             },
             "id": "11col34g9la6sc6ee30xag63t",
             "date": "2017-01-22Z",
             "time": "03:00:00Z",
             "week": "3",
             "lastUpdated": "2017-02-28T11:43:24Z"
           }
         },
         {
           "matchInfo": {
             "description": "León vs Pumas UNAM",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "3dpgucez2cp6q9vw962ribee2",
               "shortName": "Estadio León (Nou Camp)",
               "longName": "Estadio León (Nou Camp)"
             },
             "id": "1198sd3exre7c101pxsvyoicp",
             "date": "2017-01-22Z",
             "time": "01:06:00Z",
             "week": "3",
             "lastUpdated": "2017-01-22T03:01:02Z"
           }
         },
         {
           "matchInfo": {
             "description": "Morelia vs Santos Laguna",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "ajoo2oadg139mszb0cz19sgus",
               "shortName": "Estadio Generalísimo José María Morelos y Pavón",
               "longName": "Estadio Generalísimo José María Morelos y Pavón"
             },
             "id": "115ouiwmd823t7pn3ihbw45ih",
             "date": "2017-01-22Z",
             "time": "01:00:00Z",
             "week": "3",
             "lastUpdated": "2017-02-28T11:41:51Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "10zi4xexv8k17pdt2raw6025l",
             "date": "2017-01-22Z",
             "time": "01:00:00Z",
             "week": "3",
             "lastUpdated": "2017-01-22T02:52:37Z"
           }
         },
         {
           "matchInfo": {
             "description": "Cruz Azul vs Monterrey",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1bdvbj3pjw35peqxagih2wn48",
               "shortName": "Estadio Azul",
               "longName": "Estadio Azul"
             },
             "id": "10vedymgrpj52de44bj7i6y95",
             "date": "2017-01-21Z",
             "time": "23:00:00Z",
             "week": "3",
             "lastUpdated": "2017-02-28T11:41:51Z"
           }
         },
         {
           "matchInfo": {
             "description": "Veracruz vs Atlas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1q1vif5b5rt0bm0ta007ewib5",
               "shortName": "Estadio Luis de la Fuente",
               "longName": "Estadio Luis de la Fuente"
             },
             "id": "10rfuwpiovc9u3za4zjtud2p5",
             "date": "2017-01-21Z",
             "time": "03:00:00Z",
             "week": "3",
             "lastUpdated": "2017-01-21T06:42:56Z"
           }
         },
         {
           "matchInfo": {
             "description": "Santos Laguna vs Veracruz",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "2nxpq21sgwfeqe0663pn9t5ge",
               "shortName": "Estadio Nuevo Corona",
               "longName": "Estadio Nuevo Corona"
             },
             "id": "10ncycaf1b7we4x8izblof1ex",
             "date": "2017-01-16Z",
             "time": "00:00:00Z",
             "week": "2",
             "lastUpdated": "2017-02-28T11:43:25Z"
           }
         },
         {
           "matchInfo": {
             "description": "Toluca vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1wemyyvpo8d5ilkx5eccg4xcg",
               "shortName": "Estadio Nemesio Díez",
               "longName": "Estadio Nemesio Díez"
             },
             "id": "10i9tqjzeknfuaxcnd6rn61nt",
             "date": "2017-01-15Z",
             "time": "22:00:00Z",
             "week": "2",
             "lastUpdated": "2017-01-15T23:55:12Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pumas UNAM vs Cruz Azul",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "78113wsj5mbr2k5bjshddlosk",
               "shortName": "Estadio Olímpico de Universitario",
               "longName": "Estadio Olímpico de Universitario"
             },
             "id": "10egnfu6npyp8nh62g4d5w9gp",
             "date": "2017-01-15Z",
             "time": "18:00:00Z",
             "week": "2",
             "lastUpdated": "2017-02-28T11:41:51Z"
           }
         },
         {
           "matchInfo": {
             "description": "Necaxa vs León",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "5zyw4ved3yttj4d9jvmt56ua6",
               "shortName": "Estadio Victoria de Aguascalientes",
               "longName": "Estadio Victoria de Aguascalientes"
             },
             "id": "10ardj79up2p3uw6uhfeb3obt",
             "date": "2017-01-15Z",
             "time": "03:00:00Z",
             "week": "2",
             "lastUpdated": "2017-01-15T04:53:10Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pachuca vs Chiapas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "7si3duu47j9z8rkvhyp0o64ev",
               "shortName": "Estadio Miguel Hidalgo",
               "longName": "Estadio Miguel Hidalgo"
             },
             "id": "105u5urfww3gvbbpy9i9w3end",
             "date": "2017-01-15Z",
             "time": "01:06:00Z",
             "week": "2",
             "lastUpdated": "2017-02-28T11:42:09Z"
           }
         },
         {
           "matchInfo": {
             "description": "Atlas vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "aybo2e3p8vy5sxt5z2jbmrvur",
               "shortName": "Estadio Jalisco",
               "longName": "Estadio Jalisco"
             },
             "id": "zy0kojm28tviqeemibdslv55",
             "date": "2017-01-15Z",
             "time": "01:00:00Z",
             "week": "2",
             "lastUpdated": "2017-02-28T11:42:09Z"
           }
         },
         {
           "matchInfo": {
             "description": "Monterrey vs Guadalajara",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "647q7it5oqj8ieeo9hwcpjpih",
               "shortName": "Estadio BBVA Bancomer",
               "longName": "Estadio BBVA Bancomer"
             },
             "id": "102337a1frscqt2g38f818fe1",
             "date": "2017-01-15Z",
             "time": "01:00:00Z",
             "week": "2",
             "lastUpdated": "2017-01-15T02:52:09Z"
           }
         },
         {
           "matchInfo": {
             "description": "Querétaro vs Morelia",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "kp6304o84ha1jnu4km3023uc",
               "shortName": "Estadio La Corregidora",
               "longName": "Estadio La Corregidora"
             },
             "id": "zts16kkqbtc33rvb5iiwez1l",
             "date": "2017-01-14Z",
             "time": "23:00:00Z",
             "week": "2",
             "lastUpdated": "2017-01-15T00:51:42Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tijuana vs Puebla",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "36ejluw1sky5hdx7i3cq8l524",
               "shortName": "Estadio Caliente",
               "longName": "Estadio Caliente"
             },
             "id": "zoqsonxeokvvzrtz4n6865ex",
             "date": "2017-01-14Z",
             "time": "03:00:00Z",
             "week": "2",
             "lastUpdated": "2017-02-28T11:43:25Z"
           }
         },
         {
           "matchInfo": {
             "description": "Puebla vs Monterrey",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "8iba6bmlx2vbm7kq9l4l9fekh",
               "shortName": "Estadio Cuauhtémoc",
               "longName": "Estadio Cuauhtémoc"
             },
             "id": "z85gyq8kdvko6hqv9jif8u09",
             "date": "2017-01-09Z",
             "time": "00:00:00Z",
             "week": "1",
             "lastUpdated": "2017-01-09T01:51:44Z"
           }
         },
         {
           "matchInfo": {
             "description": "Toluca vs Atlas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "bc2t2al1qds4dyf7iu8hu9fy0",
               "shortName": "Estadio Universitario Alberto \"Chivo\" Córdoba",
               "longName": "Estadio Universitario Alberto \"Chivo\" Córdoba"
             },
             "id": "z2vrm62fo65eot4ktu4aggdl",
             "date": "2017-01-08Z",
             "time": "18:00:00Z",
             "week": "1",
             "lastUpdated": "2017-02-28T11:43:26Z"
           }
         },
         {
           "matchInfo": {
             "description": "Guadalajara vs Pumas UNAM",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "94u6u9s3chfdpec5irdvfi7ha",
               "shortName": "Estadio Omnilife",
               "longName": "Estadio Omnilife"
             },
             "id": "yvxfxihq7ajq5u4n3igciacp",
             "date": "2017-01-08Z",
             "time": "03:06:00Z",
             "week": "1",
             "lastUpdated": "2017-02-28T11:42:10Z"
           }
         },
         {
           "matchInfo": {
             "description": "León vs Pachuca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "3dpgucez2cp6q9vw962ribee2",
               "shortName": "Estadio León (Nou Camp)",
               "longName": "Estadio León (Nou Camp)"
             },
             "id": "ymkk76zq6uy7ug0bnvzjexnt",
             "date": "2017-01-08Z",
             "time": "01:06:00Z",
             "week": "1",
             "lastUpdated": "2017-01-08T03:34:26Z"
           }
         },
         {
           "matchInfo": {
             "description": "Morelia vs Tijuana",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "ajoo2oadg139mszb0cz19sgus",
               "shortName": "Estadio Generalísimo José María Morelos y Pavón",
               "longName": "Estadio Generalísimo José María Morelos y Pavón"
             },
             "id": "y3k9k1bkr0iiopxzw9dudyax",
             "date": "2017-01-08Z",
             "time": "01:05:00Z",
             "week": "1",
             "lastUpdated": "2017-02-28T11:42:10Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs Santos Laguna",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "yd1zeiafsg0ggzry8a3gfkdl",
             "date": "2017-01-08Z",
             "time": "01:00:00Z",
             "week": "1",
             "lastUpdated": "2017-01-08T02:52:42Z"
           }
         },
         {
           "matchInfo": {
             "description": "Cruz Azul vs Necaxa",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1bdvbj3pjw35peqxagih2wn48",
               "shortName": "Estadio Azul",
               "longName": "Estadio Azul"
             },
             "id": "xvj2s9g7f0jb8ucef5102six",
             "date": "2017-01-07Z",
             "time": "23:00:00Z",
             "week": "1",
             "lastUpdated": "2017-02-28T11:42:11Z"
           }
         },
         {
           "matchInfo": {
             "description": "Veracruz vs Querétaro",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "3v2ublolwk9mdj9zzn3ra14t9",
               "startDate": "2017-01-07Z",
               "endDate": "2017-05-08Z",
               "name": "Clausura"
             },
             "contestant": [
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1q1vif5b5rt0bm0ta007ewib5",
               "shortName": "Estadio Luis de la Fuente",
               "longName": "Estadio Luis de la Fuente"
             },
             "id": "xkjsf8mosux9xfa6nfabm0vd",
             "date": "2017-01-07Z",
             "time": "03:00:00Z",
             "week": "1",
             "lastUpdated": "2017-01-07T08:47:00Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "1g6jkgncrrzt93uhu0fusnftj",
               "startDate": "2016-12-23Z",
               "endDate": "2016-12-26Z",
               "name": "Apertura - Finals"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "574cfrzsommb2vfrdtjwu2ne1",
             "date": "2016-12-26Z",
             "time": "00:30:00Z",
             "lastUpdated": "2016-12-26T03:27:20Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "1g6jkgncrrzt93uhu0fusnftj",
               "startDate": "2016-12-23Z",
               "endDate": "2016-12-26Z",
               "name": "Apertura - Finals"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "570uy1bszam22oei0wuc6k5wp",
             "date": "2016-12-23Z",
             "time": "03:00:00Z",
             "lastUpdated": "2017-02-28T11:42:30Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs Necaxa",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "4zaekt50289sfr893qg8tg96f",
               "startDate": "2016-12-01Z",
               "endDate": "2016-12-05Z",
               "name": "Apertura - Semi-finals"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "9raxm6mxl0a85tl08qivvj9bd",
             "date": "2016-12-05Z",
             "time": "02:00:00Z",
             "lastUpdated": "2016-12-05T04:00:26Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs León",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "4zaekt50289sfr893qg8tg96f",
               "startDate": "2016-12-01Z",
               "endDate": "2016-12-05Z",
               "name": "Apertura - Semi-finals"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "9r8m1n2dkmcqsk6vssqsu36cp",
             "date": "2016-12-04Z",
             "time": "01:00:00Z",
             "lastUpdated": "2016-12-04T02:59:34Z"
           }
         },
         {
           "matchInfo": {
             "description": "Necaxa vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "4zaekt50289sfr893qg8tg96f",
               "startDate": "2016-12-01Z",
               "endDate": "2016-12-05Z",
               "name": "Apertura - Semi-finals"
             },
             "contestant": [
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "5zyw4ved3yttj4d9jvmt56ua6",
               "shortName": "Estadio Victoria de Aguascalientes",
               "longName": "Estadio Victoria de Aguascalientes"
             },
             "id": "b2jktonwgw8330qdzh5f5wu09",
             "date": "2016-12-02Z",
             "time": "03:00:00Z",
             "lastUpdated": "2016-12-02T04:53:50Z"
           }
         },
         {
           "matchInfo": {
             "description": "León vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "4zaekt50289sfr893qg8tg96f",
               "startDate": "2016-12-01Z",
               "endDate": "2016-12-05Z",
               "name": "Apertura - Semi-finals"
             },
             "contestant": [
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "3dpgucez2cp6q9vw962ribee2",
               "shortName": "Estadio León (Nou Camp)",
               "longName": "Estadio León (Nou Camp)"
             },
             "id": "b2g26oqeeokrif10c5rickm3t",
             "date": "2016-12-01Z",
             "time": "02:36:00Z",
             "lastUpdated": "2016-12-01T04:43:36Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pachuca vs Necaxa",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "bvhn11gx4vi85z5sf9djeiwrn",
               "startDate": "2016-11-24Z",
               "endDate": "2016-11-28Z",
               "name": "Apertura - Quarter-finals"
             },
             "contestant": [
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "7si3duu47j9z8rkvhyp0o64ev",
               "shortName": "Estadio Miguel Hidalgo",
               "longName": "Estadio Miguel Hidalgo"
             },
             "id": "dposqokp98yd6k3ljm8g7tjvt",
             "date": "2016-11-28Z",
             "time": "02:06:00Z",
             "lastUpdated": "2016-11-28T04:01:16Z"
           }
         },
         {
           "matchInfo": {
             "description": "Guadalajara vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "bvhn11gx4vi85z5sf9djeiwrn",
               "startDate": "2016-11-24Z",
               "endDate": "2016-11-28Z",
               "name": "Apertura - Quarter-finals"
             },
             "contestant": [
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "94u6u9s3chfdpec5irdvfi7ha",
               "shortName": "Estadio Omnilife",
               "longName": "Estadio Omnilife"
             },
             "id": "dpsgch07qvduemxwprbq75w4p",
             "date": "2016-11-28Z",
             "time": "00:06:00Z",
             "lastUpdated": "2016-11-28T02:02:06Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tijuana vs León",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "bvhn11gx4vi85z5sf9djeiwrn",
               "startDate": "2016-11-24Z",
               "endDate": "2016-11-28Z",
               "name": "Apertura - Quarter-finals"
             },
             "contestant": [
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "36ejluw1sky5hdx7i3cq8l524",
               "shortName": "Estadio Caliente",
               "longName": "Estadio Caliente"
             },
             "id": "dpm4ucrc2f3jk324nr8ssry09",
             "date": "2016-11-27Z",
             "time": "03:00:00Z",
             "lastUpdated": "2016-11-27T06:00:22Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs Pumas UNAM",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "bvhn11gx4vi85z5sf9djeiwrn",
               "startDate": "2016-11-24Z",
               "endDate": "2016-11-28Z",
               "name": "Apertura - Quarter-finals"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "dpqrd2n8bn5fnmy1ttdotqpk9",
             "date": "2016-11-27Z",
             "time": "01:00:00Z",
             "lastUpdated": "2016-11-27T02:50:37Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs Guadalajara",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "bvhn11gx4vi85z5sf9djeiwrn",
               "startDate": "2016-11-24Z",
               "endDate": "2016-11-28Z",
               "name": "Apertura - Quarter-finals"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "30zxkzbem9stbazl8okz91wq1",
             "date": "2016-11-25Z",
             "time": "03:30:00Z",
             "lastUpdated": "2016-11-25T05:37:04Z"
           }
         },
         {
           "matchInfo": {
             "description": "Necaxa vs Pachuca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "bvhn11gx4vi85z5sf9djeiwrn",
               "startDate": "2016-11-24Z",
               "endDate": "2016-11-28Z",
               "name": "Apertura - Quarter-finals"
             },
             "contestant": [
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "5zyw4ved3yttj4d9jvmt56ua6",
               "shortName": "Estadio Victoria de Aguascalientes",
               "longName": "Estadio Victoria de Aguascalientes"
             },
             "id": "30wb9mujcknmdhj86p2hta3ft",
             "date": "2016-11-25Z",
             "time": "01:30:00Z",
             "lastUpdated": "2016-11-25T03:25:42Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pumas UNAM vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "bvhn11gx4vi85z5sf9djeiwrn",
               "startDate": "2016-11-24Z",
               "endDate": "2016-11-28Z",
               "name": "Apertura - Quarter-finals"
             },
             "contestant": [
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "78113wsj5mbr2k5bjshddlosk",
               "shortName": "Estadio Olímpico de Universitario",
               "longName": "Estadio Olímpico de Universitario"
             },
             "id": "30y0cxltc9ofkh0hq5syylt61",
             "date": "2016-11-24Z",
             "time": "03:30:00Z",
             "lastUpdated": "2016-11-24T05:27:19Z"
           }
         },
         {
           "matchInfo": {
             "description": "León vs Tijuana",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "Liga MX 2016/2017"
             },
             "stage": {
               "id": "bvhn11gx4vi85z5sf9djeiwrn",
               "startDate": "2016-11-24Z",
               "endDate": "2016-11-28Z",
               "name": "Apertura - Quarter-finals"
             },
             "contestant": [
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "3dpgucez2cp6q9vw962ribee2",
               "shortName": "Estadio León (Nou Camp)",
               "longName": "Estadio León (Nou Camp)"
             },
             "id": "30thrht011vljp148bsogaw2x",
             "date": "2016-11-24Z",
             "time": "01:30:00Z",
             "lastUpdated": "2016-11-24T03:25:16Z"
           }
         },
         {
           "matchInfo": {
             "description": "Puebla vs Pumas UNAM",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "8iba6bmlx2vbm7kq9l4l9fekh",
               "shortName": "Estadio Cuauhtémoc",
               "longName": "Estadio Cuauhtémoc"
             },
             "id": "e3x4xp8087y19x57kef8qqdih",
             "date": "2016-11-21Z",
             "time": "00:00:00Z",
             "week": "17",
             "lastUpdated": "2017-02-28T11:44:18Z"
           }
         },
         {
           "matchInfo": {
             "description": "Toluca vs Santos Laguna",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "bc2t2al1qds4dyf7iu8hu9fy0",
               "shortName": "Estadio Universitario Alberto \"Chivo\" Córdoba",
               "longName": "Estadio Universitario Alberto \"Chivo\" Córdoba"
             },
             "id": "e3plnr6jp2eg9m58esc9wuz1l",
             "date": "2016-11-20Z",
             "time": "18:00:00Z",
             "week": "17",
             "lastUpdated": "2017-02-28T11:44:19Z"
           }
         },
         {
           "matchInfo": {
             "description": "Guadalajara vs Necaxa",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "94u6u9s3chfdpec5irdvfi7ha",
               "shortName": "Estadio Omnilife",
               "longName": "Estadio Omnilife"
             },
             "id": "e3hbysqv0e90kx11dzr4rqa5l",
             "date": "2016-11-20Z",
             "time": "03:00:00Z",
             "week": "17",
             "lastUpdated": "2017-02-28T11:44:19Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pachuca vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "7si3duu47j9z8rkvhyp0o64ev",
               "shortName": "Estadio Miguel Hidalgo",
               "longName": "Estadio Miguel Hidalgo"
             },
             "id": "e3bxey5xs6cm99cixdfbofyll",
             "date": "2016-11-20Z",
             "time": "01:06:00Z",
             "week": "17",
             "lastUpdated": "2017-02-28T11:42:55Z"
           }
         },
         {
           "matchInfo": {
             "description": "Morelia vs Monterrey",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "ajoo2oadg139mszb0cz19sgus",
               "shortName": "Estadio Generalísimo José María Morelos y Pavón",
               "longName": "Estadio Generalísimo José María Morelos y Pavón"
             },
             "id": "e36qhd91l9bp97o11udiw5889",
             "date": "2016-11-20Z",
             "time": "01:00:00Z",
             "week": "17",
             "lastUpdated": "2017-02-28T11:42:55Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs Querétaro",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "e2wxqbekvt4g8vk4hy7vvbso9",
             "date": "2016-11-20Z",
             "time": "01:00:00Z",
             "week": "17",
             "lastUpdated": "2017-02-28T11:42:55Z"
           }
         },
         {
           "matchInfo": {
             "description": "Cruz Azul vs León",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1bdvbj3pjw35peqxagih2wn48",
               "shortName": "Estadio Azul",
               "longName": "Estadio Azul"
             },
             "id": "e2fvv5j1o0clqqr1glwt4lk2x",
             "date": "2016-11-19Z",
             "time": "23:00:00Z",
             "week": "17",
             "lastUpdated": "2017-02-28T11:42:55Z"
           }
         },
         {
           "matchInfo": {
             "description": "Chiapas vs Atlas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "eh4s74jblsd0y8k0wu8f0hmux",
               "shortName": "Estadio Zoque VMR",
               "longName": "Estadio Zoque VMR"
             },
             "id": "e28vyejxw5kily9ky5h45arxl",
             "date": "2016-11-19Z",
             "time": "23:00:00Z",
             "week": "17",
             "lastUpdated": "2017-02-28T11:43:35Z"
           }
         },
         {
           "matchInfo": {
             "description": "Veracruz vs Tijuana",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1q1vif5b5rt0bm0ta007ewib5",
               "shortName": "Estadio Luis de la Fuente",
               "longName": "Estadio Luis de la Fuente"
             },
             "id": "e24q3g5jz56vz5qxvdyanwxk9",
             "date": "2016-11-19Z",
             "time": "03:00:00Z",
             "week": "17",
             "lastUpdated": "2017-02-28T11:42:55Z"
           }
         },
         {
           "matchInfo": {
             "description": "Santos Laguna vs Chiapas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "2nxpq21sgwfeqe0663pn9t5ge",
               "shortName": "Estadio Nuevo Corona",
               "longName": "Estadio Nuevo Corona"
             },
             "id": "e1zorsy4z3r21kvigwjtop1pl",
             "date": "2016-11-07Z",
             "time": "00:00:00Z",
             "week": "16",
             "lastUpdated": "2017-02-28T11:42:56Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pumas UNAM vs Morelia",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "78113wsj5mbr2k5bjshddlosk",
               "shortName": "Estadio Olímpico de Universitario",
               "longName": "Estadio Olímpico de Universitario"
             },
             "id": "e1pjdhzjxarwmhqju3clup3op",
             "date": "2016-11-06Z",
             "time": "18:00:00Z",
             "week": "16",
             "lastUpdated": "2017-02-28T11:42:56Z"
           }
         },
         {
           "matchInfo": {
             "description": "Necaxa vs Puebla",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "5zyw4ved3yttj4d9jvmt56ua6",
               "shortName": "Estadio Victoria de Aguascalientes",
               "longName": "Estadio Victoria de Aguascalientes"
             },
             "id": "e1kl4k3emglcjjmjwcl1in27d",
             "date": "2016-11-06Z",
             "time": "03:00:00Z",
             "week": "16",
             "lastUpdated": "2017-02-28T11:42:56Z"
           }
         },
         {
           "matchInfo": {
             "description": "León vs Guadalajara",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "3dpgucez2cp6q9vw962ribee2",
               "shortName": "Estadio León (Nou Camp)",
               "longName": "Estadio León (Nou Camp)"
             },
             "id": "e1ezuaa2bfuxuep7qudwrjisp",
             "date": "2016-11-06Z",
             "time": "01:06:00Z",
             "week": "16",
             "lastUpdated": "2017-02-28T11:42:56Z"
           }
         },
         {
           "matchInfo": {
             "description": "Atlas vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "aybo2e3p8vy5sxt5z2jbmrvur",
               "shortName": "Estadio Jalisco",
               "longName": "Estadio Jalisco"
             },
             "id": "e1aeputz3ygctgtlvy16jk4x5",
             "date": "2016-11-06Z",
             "time": "01:00:00Z",
             "week": "16",
             "lastUpdated": "2017-02-28T11:42:56Z"
           }
         },
         {
           "matchInfo": {
             "description": "Monterrey vs Veracruz",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "647q7it5oqj8ieeo9hwcpjpih",
               "shortName": "Estadio BBVA Bancomer",
               "longName": "Estadio BBVA Bancomer"
             },
             "id": "e15ianmryozznf5btkl04qhux",
             "date": "2016-11-06Z",
             "time": "01:00:00Z",
             "week": "16",
             "lastUpdated": "2017-02-28T11:43:35Z"
           }
         },
         {
           "matchInfo": {
             "description": "Querétaro vs Toluca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "kp6304o84ha1jnu4km3023uc",
               "shortName": "Estadio La Corregidora",
               "longName": "Estadio La Corregidora"
             },
             "id": "e0xkih6uupx66lrqu4js71muh",
             "date": "2016-11-05Z",
             "time": "23:00:00Z",
             "week": "16",
             "lastUpdated": "2017-02-28T11:43:35Z"
           }
         },
         {
           "matchInfo": {
             "description": "Cruz Azul vs Pachuca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1bdvbj3pjw35peqxagih2wn48",
               "shortName": "Estadio Azul",
               "longName": "Estadio Azul"
             },
             "id": "e0qix08v1f69d8ftqnvluq8rt",
             "date": "2016-11-05Z",
             "time": "23:00:00Z",
             "week": "16",
             "lastUpdated": "2017-02-28T11:43:35Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tijuana vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "36ejluw1sky5hdx7i3cq8l524",
               "shortName": "Estadio Caliente",
               "longName": "Estadio Caliente"
             },
             "id": "e0jtkimf9x4f2x7wf3nns78x5",
             "date": "2016-11-05Z",
             "time": "03:00:00Z",
             "week": "16",
             "lastUpdated": "2017-02-28T11:43:36Z"
           }
         },
         {
           "matchInfo": {
             "description": "Puebla vs León",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "8iba6bmlx2vbm7kq9l4l9fekh",
               "shortName": "Estadio Cuauhtémoc",
               "longName": "Estadio Cuauhtémoc"
             },
             "id": "e00mpfqg0hhvknwg3xu8ih0x5",
             "date": "2016-10-31Z",
             "time": "00:00:00Z",
             "week": "15",
             "lastUpdated": "2017-02-28T11:43:36Z"
           }
         },
         {
           "matchInfo": {
             "description": "Toluca vs Tijuana",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "bc2t2al1qds4dyf7iu8hu9fy0",
               "shortName": "Estadio Universitario Alberto \"Chivo\" Córdoba",
               "longName": "Estadio Universitario Alberto \"Chivo\" Córdoba"
             },
             "id": "dzut4azde5y3w5hevcjwnzvft",
             "date": "2016-10-30Z",
             "time": "18:00:00Z",
             "week": "15",
             "lastUpdated": "2017-02-28T11:43:46Z"
           }
         },
         {
           "matchInfo": {
             "description": "Guadalajara vs Cruz Azul",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "94u6u9s3chfdpec5irdvfi7ha",
               "shortName": "Estadio Omnilife",
               "longName": "Estadio Omnilife"
             },
             "id": "dzp9xnjp916hlnl6se2rf3a3t",
             "date": "2016-10-30Z",
             "time": "02:06:00Z",
             "week": "15",
             "lastUpdated": "2017-02-28T11:43:46Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs Santos Laguna",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "dzkuwqvhyaj1qvfobebdo2x9l",
             "date": "2016-10-30Z",
             "time": "02:00:00Z",
             "week": "15",
             "lastUpdated": "2017-02-28T11:43:46Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pachuca vs Atlas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "7si3duu47j9z8rkvhyp0o64ev",
               "shortName": "Estadio Miguel Hidalgo",
               "longName": "Estadio Miguel Hidalgo"
             },
             "id": "dzbov0vlolramu4zr3wlht7mx",
             "date": "2016-10-30Z",
             "time": "01:06:00Z",
             "week": "15",
             "lastUpdated": "2017-02-28T11:43:47Z"
           }
         },
         {
           "matchInfo": {
             "description": "Morelia vs Necaxa",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "ajoo2oadg139mszb0cz19sgus",
               "shortName": "Estadio Generalísimo José María Morelos y Pavón",
               "longName": "Estadio Generalísimo José María Morelos y Pavón"
             },
             "id": "dz4h1st9w9p589cfjg7j9k99l",
             "date": "2016-10-30Z",
             "time": "01:00:00Z",
             "week": "15",
             "lastUpdated": "2017-02-28T11:43:47Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs Monterrey",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "dyzjt5le3sfdnnps83otbnsvd",
             "date": "2016-10-30Z",
             "time": "01:00:00Z",
             "week": "15",
             "lastUpdated": "2017-02-28T11:43:47Z"
           }
         },
         {
           "matchInfo": {
             "description": "Chiapas vs Querétaro",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "eh4s74jblsd0y8k0wu8f0hmux",
               "shortName": "Estadio Zoque VMR",
               "longName": "Estadio Zoque VMR"
             },
             "id": "dyvetjpdwjfoiekmfe410vbop",
             "date": "2016-10-29Z",
             "time": "22:00:00Z",
             "week": "15",
             "lastUpdated": "2017-02-28T11:43:47Z"
           }
         },
         {
           "matchInfo": {
             "description": "Veracruz vs Pumas UNAM",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1q1vif5b5rt0bm0ta007ewib5",
               "shortName": "Estadio Luis de la Fuente",
               "longName": "Estadio Luis de la Fuente"
             },
             "id": "dyqul7fu8ysmn9lm3xtywaui1",
             "date": "2016-10-29Z",
             "time": "02:00:00Z",
             "week": "15",
             "lastUpdated": "2017-02-28T11:43:47Z"
           }
         },
         {
           "matchInfo": {
             "description": "Guadalajara vs Pachuca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "94u6u9s3chfdpec5irdvfi7ha",
               "shortName": "Estadio Omnilife",
               "longName": "Estadio Omnilife"
             },
             "id": "dxg33d9ol1kcwhztzxs9aylt5",
             "date": "2016-10-24Z",
             "time": "01:00:00Z",
             "week": "14",
             "lastUpdated": "2017-02-28T11:42:57Z"
           }
         },
         {
           "matchInfo": {
             "description": "Santos Laguna vs Atlas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "2nxpq21sgwfeqe0663pn9t5ge",
               "shortName": "Estadio Nuevo Corona",
               "longName": "Estadio Nuevo Corona"
             },
             "id": "dyj22zwux7ssms9oce5eviuax",
             "date": "2016-10-23Z",
             "time": "23:00:00Z",
             "week": "14",
             "lastUpdated": "2017-02-28T11:43:47Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pumas UNAM vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "78113wsj5mbr2k5bjshddlosk",
               "shortName": "Estadio Olímpico de Universitario",
               "longName": "Estadio Olímpico de Universitario"
             },
             "id": "dyaizzqpdtnaytjcikhry8ctl",
             "date": "2016-10-23Z",
             "time": "17:00:00Z",
             "week": "14",
             "lastUpdated": "2017-02-28T11:42:56Z"
           }
         },
         {
           "matchInfo": {
             "description": "Necaxa vs Veracruz",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "5zyw4ved3yttj4d9jvmt56ua6",
               "shortName": "Estadio Victoria de Aguascalientes",
               "longName": "Estadio Victoria de Aguascalientes"
             },
             "id": "dxmoctetg9867g6u3io2dsf6x",
             "date": "2016-10-23Z",
             "time": "02:00:00Z",
             "week": "14",
             "lastUpdated": "2017-02-28T11:42:56Z"
           }
         },
         {
           "matchInfo": {
             "description": "León vs Morelia",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "3dpgucez2cp6q9vw962ribee2",
               "shortName": "Estadio León (Nou Camp)",
               "longName": "Estadio León (Nou Camp)"
             },
             "id": "dxb8fyryu31oxzk0n0bl7h2ax",
             "date": "2016-10-23Z",
             "time": "02:00:00Z",
             "week": "14",
             "lastUpdated": "2017-02-28T11:42:57Z"
           }
         },
         {
           "matchInfo": {
             "description": "Monterrey vs Toluca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "647q7it5oqj8ieeo9hwcpjpih",
               "shortName": "Estadio BBVA Bancomer",
               "longName": "Estadio BBVA Bancomer"
             },
             "id": "dx00gqmiev4sbs1ebpungoyjt",
             "date": "2016-10-23Z",
             "time": "00:00:00Z",
             "week": "14",
             "lastUpdated": "2017-02-28T11:42:57Z"
           }
         },
         {
           "matchInfo": {
             "description": "Querétaro vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "kp6304o84ha1jnu4km3023uc",
               "shortName": "Estadio La Corregidora",
               "longName": "Estadio La Corregidora"
             },
             "id": "dwnwe9l0ab1x7rzas5zv8ek15",
             "date": "2016-10-23Z",
             "time": "00:00:00Z",
             "week": "14",
             "lastUpdated": "2017-02-28T11:42:57Z"
           }
         },
         {
           "matchInfo": {
             "description": "Cruz Azul vs Puebla",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1bdvbj3pjw35peqxagih2wn48",
               "shortName": "Estadio Azul",
               "longName": "Estadio Azul"
             },
             "id": "dwtlzn9wbsw22f7kra1d3gqg9",
             "date": "2016-10-22Z",
             "time": "22:00:00Z",
             "week": "14",
             "lastUpdated": "2017-02-28T11:42:57Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tijuana vs Chiapas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "36ejluw1sky5hdx7i3cq8l524",
               "shortName": "Estadio Caliente",
               "longName": "Estadio Caliente"
             },
             "id": "dwg75tx30gpzavxduoj51vug9",
             "date": "2016-10-22Z",
             "time": "02:00:00Z",
             "week": "14",
             "lastUpdated": "2017-02-28T11:42:30Z"
           }
         },
         {
           "matchInfo": {
             "description": "Puebla vs Guadalajara",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "8iba6bmlx2vbm7kq9l4l9fekh",
               "shortName": "Estadio Cuauhtémoc",
               "longName": "Estadio Cuauhtémoc"
             },
             "id": "dwbxtn0vxeh267yhvex23jlyh",
             "date": "2016-10-16Z",
             "time": "23:00:00Z",
             "week": "13",
             "lastUpdated": "2017-02-28T11:42:30Z"
           }
         },
         {
           "matchInfo": {
             "description": "Toluca vs Pumas UNAM",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "bc2t2al1qds4dyf7iu8hu9fy0",
               "shortName": "Estadio Universitario Alberto \"Chivo\" Córdoba",
               "longName": "Estadio Universitario Alberto \"Chivo\" Córdoba"
             },
             "id": "dw7giro0wameauphw9upzygvd",
             "date": "2016-10-16Z",
             "time": "17:00:00Z",
             "week": "13",
             "lastUpdated": "2017-02-28T11:42:30Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs Tijuana",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "dvz9tf5yz2y8dycdq9yfpi8kp",
             "date": "2016-10-16Z",
             "time": "02:00:00Z",
             "week": "13",
             "lastUpdated": "2017-02-28T11:42:31Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pachuca vs Santos Laguna",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "7si3duu47j9z8rkvhyp0o64ev",
               "shortName": "Estadio Miguel Hidalgo",
               "longName": "Estadio Miguel Hidalgo"
             },
             "id": "dvddgqvxjr2a7o3qg4tqhj089",
             "date": "2016-10-16Z",
             "time": "00:06:00Z",
             "week": "13",
             "lastUpdated": "2017-02-28T11:42:31Z"
           }
         },
         {
           "matchInfo": {
             "description": "Morelia vs Cruz Azul",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "ajoo2oadg139mszb0cz19sgus",
               "shortName": "Estadio Generalísimo José María Morelos y Pavón",
               "longName": "Estadio Generalísimo José María Morelos y Pavón"
             },
             "id": "dv8icyn401sg6kf12vmaf81k9",
             "date": "2016-10-16Z",
             "time": "00:00:00Z",
             "week": "13",
             "lastUpdated": "2017-02-28T11:42:31Z"
           }
         },
         {
           "matchInfo": {
             "description": "Atlas vs Querétaro",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "aybo2e3p8vy5sxt5z2jbmrvur",
               "shortName": "Estadio Jalisco",
               "longName": "Estadio Jalisco"
             },
             "id": "dv1wgwa58wzsicmugekvk6bqh",
             "date": "2016-10-16Z",
             "time": "00:00:00Z",
             "week": "13",
             "lastUpdated": "2017-02-28T11:42:31Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs Necaxa",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "duxn6iw3uxvh7wis8ixicl52h",
             "date": "2016-10-16Z",
             "time": "00:00:00Z",
             "week": "13",
             "lastUpdated": "2017-02-28T11:42:31Z"
           }
         },
         {
           "matchInfo": {
             "description": "Chiapas vs Monterrey",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "eh4s74jblsd0y8k0wu8f0hmux",
               "shortName": "Estadio Zoque VMR",
               "longName": "Estadio Zoque VMR"
             },
             "id": "dusr74bkd9h3wgly4ssc96ga1",
             "date": "2016-10-15Z",
             "time": "22:00:00Z",
             "week": "13",
             "lastUpdated": "2017-02-28T11:42:31Z"
           }
         },
         {
           "matchInfo": {
             "description": "Veracruz vs León",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1q1vif5b5rt0bm0ta007ewib5",
               "shortName": "Estadio Luis de la Fuente",
               "longName": "Estadio Luis de la Fuente"
             },
             "id": "dumxahugh6nxzwnelvemuwgdl",
             "date": "2016-10-15Z",
             "time": "02:00:00Z",
             "week": "13",
             "lastUpdated": "2017-02-28T11:42:31Z"
           }
         },
         {
           "matchInfo": {
             "description": "Puebla vs Pachuca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "8iba6bmlx2vbm7kq9l4l9fekh",
               "shortName": "Estadio Cuauhtémoc",
               "longName": "Estadio Cuauhtémoc"
             },
             "id": "dueaj5kas87zzz8zp1r3vaay1",
             "date": "2016-10-02Z",
             "time": "23:00:00Z",
             "week": "12",
             "lastUpdated": "2017-02-28T11:42:32Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pumas UNAM vs Chiapas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "78113wsj5mbr2k5bjshddlosk",
               "shortName": "Estadio Olímpico de Universitario",
               "longName": "Estadio Olímpico de Universitario"
             },
             "id": "du6rk2mnoy0odcixn8vczfizt",
             "date": "2016-10-02Z",
             "time": "17:00:00Z",
             "week": "12",
             "lastUpdated": "2017-02-28T11:42:32Z"
           }
         },
         {
           "matchInfo": {
             "description": "Guadalajara vs Morelia",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "94u6u9s3chfdpec5irdvfi7ha",
               "shortName": "Estadio Omnilife",
               "longName": "Estadio Omnilife"
             },
             "id": "dt22926prph930ek5k2ovousp",
             "date": "2016-10-02Z",
             "time": "02:06:00Z",
             "week": "12",
             "lastUpdated": "2017-02-28T11:42:33Z"
           }
         },
         {
           "matchInfo": {
             "description": "Necaxa vs Toluca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "5zyw4ved3yttj4d9jvmt56ua6",
               "shortName": "Estadio Victoria de Aguascalientes",
               "longName": "Estadio Victoria de Aguascalientes"
             },
             "id": "dtwgudbxx9mpt154q9n9xdbl5",
             "date": "2016-10-02Z",
             "time": "02:00:00Z",
             "week": "12",
             "lastUpdated": "2017-02-28T11:42:33Z"
           }
         },
         {
           "matchInfo": {
             "description": "León vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "3dpgucez2cp6q9vw962ribee2",
               "shortName": "Estadio León (Nou Camp)",
               "longName": "Estadio León (Nou Camp)"
             },
             "id": "dstjwatcghiefhw61qdeo0fzd",
             "date": "2016-10-02Z",
             "time": "00:06:00Z",
             "week": "12",
             "lastUpdated": "2017-02-28T11:42:33Z"
           }
         },
         {
           "matchInfo": {
             "description": "Monterrey vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "647q7it5oqj8ieeo9hwcpjpih",
               "shortName": "Estadio BBVA Bancomer",
               "longName": "Estadio BBVA Bancomer"
             },
             "id": "dsn2x4odl6j2ued92u87li9d5",
             "date": "2016-10-02Z",
             "time": "00:00:00Z",
             "week": "12",
             "lastUpdated": "2017-02-28T11:42:33Z"
           }
         },
         {
           "matchInfo": {
             "description": "Cruz Azul vs Veracruz",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1bdvbj3pjw35peqxagih2wn48",
               "shortName": "Estadio Azul",
               "longName": "Estadio Azul"
             },
             "id": "dshvacxyx6noxcmqbysrtb3s9",
             "date": "2016-10-01Z",
             "time": "22:00:00Z",
             "week": "12",
             "lastUpdated": "2017-02-28T11:42:35Z"
           }
         },
         {
           "matchInfo": {
             "description": "Querétaro vs Santos Laguna",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "kp6304o84ha1jnu4km3023uc",
               "shortName": "Estadio La Corregidora",
               "longName": "Estadio La Corregidora"
             },
             "id": "dsc8gi5f82s04h964iqvui19l",
             "date": "2016-10-01Z",
             "time": "22:00:00Z",
             "week": "12",
             "lastUpdated": "2017-02-28T11:42:35Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tijuana vs Atlas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "36ejluw1sky5hdx7i3cq8l524",
               "shortName": "Estadio Caliente",
               "longName": "Estadio Caliente"
             },
             "id": "ds4eagnqv29o1c4438l0cw2jt",
             "date": "2016-10-01Z",
             "time": "02:00:00Z",
             "week": "12",
             "lastUpdated": "2017-02-28T11:42:35Z"
           }
         },
         {
           "matchInfo": {
             "description": "Santos Laguna vs Tijuana",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "2nxpq21sgwfeqe0663pn9t5ge",
               "shortName": "Estadio Nuevo Corona",
               "longName": "Estadio Nuevo Corona"
             },
             "id": "drwmsw6jlf5qjilkcix2xfkyx",
             "date": "2016-09-25Z",
             "time": "23:00:00Z",
             "week": "11",
             "lastUpdated": "2017-02-28T11:42:35Z"
           }
         },
         {
           "matchInfo": {
             "description": "Toluca vs León",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "bc2t2al1qds4dyf7iu8hu9fy0",
               "shortName": "Estadio Universitario Alberto \"Chivo\" Córdoba",
               "longName": "Estadio Universitario Alberto \"Chivo\" Córdoba"
             },
             "id": "drq0rc10l9d08w07gvlh5sxd5",
             "date": "2016-09-25Z",
             "time": "17:00:00Z",
             "week": "11",
             "lastUpdated": "2017-02-28T11:42:35Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs Pumas UNAM",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "drl4gwsxypxy3hrs1mk7uyjft",
             "date": "2016-09-25Z",
             "time": "02:00:00Z",
             "week": "11",
             "lastUpdated": "2017-02-28T11:42:36Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pachuca vs Querétaro",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "7si3duu47j9z8rkvhyp0o64ev",
               "shortName": "Estadio Miguel Hidalgo",
               "longName": "Estadio Miguel Hidalgo"
             },
             "id": "drb43fbdh1zda0jad9b0pmind",
             "date": "2016-09-25Z",
             "time": "00:06:00Z",
             "week": "11",
             "lastUpdated": "2017-02-28T11:42:36Z"
           }
         },
         {
           "matchInfo": {
             "description": "Atlas vs Monterrey",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "aybo2e3p8vy5sxt5z2jbmrvur",
               "shortName": "Estadio Jalisco",
               "longName": "Estadio Jalisco"
             },
             "id": "dqofa8fnrgstq80l0j5xdobft",
             "date": "2016-09-25Z",
             "time": "00:00:00Z",
             "week": "11",
             "lastUpdated": "2017-02-28T11:44:21Z"
           }
         },
         {
           "matchInfo": {
             "description": "Morelia vs Puebla",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "ajoo2oadg139mszb0cz19sgus",
               "shortName": "Estadio Generalísimo José María Morelos y Pavón",
               "longName": "Estadio Generalísimo José María Morelos y Pavón"
             },
             "id": "dqjnrvr0acc4ia9zb238iyhux",
             "date": "2016-09-25Z",
             "time": "00:00:00Z",
             "week": "11",
             "lastUpdated": "2017-02-28T11:44:21Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs Cruz Azul",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "dqewugwdn4co8f8i94rmf0o2x",
             "date": "2016-09-25Z",
             "time": "00:00:00Z",
             "week": "11",
             "lastUpdated": "2017-02-28T11:44:21Z"
           }
         },
         {
           "matchInfo": {
             "description": "Chiapas vs Necaxa",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "eh4s74jblsd0y8k0wu8f0hmux",
               "shortName": "Estadio Zoque VMR",
               "longName": "Estadio Zoque VMR"
             },
             "id": "dq9tf6o8wb4xcbpmalg53fy09",
             "date": "2016-09-24Z",
             "time": "22:00:00Z",
             "week": "11",
             "lastUpdated": "2017-02-28T11:42:36Z"
           }
         },
         {
           "matchInfo": {
             "description": "Veracruz vs Guadalajara",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1q1vif5b5rt0bm0ta007ewib5",
               "shortName": "Estadio Luis de la Fuente",
               "longName": "Estadio Luis de la Fuente"
             },
             "id": "dpztqhpjlbmbrwc2mm7q8cqg9",
             "date": "2016-09-24Z",
             "time": "02:00:00Z",
             "week": "11",
             "lastUpdated": "2017-02-28T11:42:36Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tijuana vs Querétaro",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "36ejluw1sky5hdx7i3cq8l524",
               "shortName": "Estadio Caliente",
               "longName": "Estadio Caliente"
             },
             "id": "dpcecerr8pmsalrsm923j0mi1",
             "date": "2016-09-22Z",
             "time": "03:00:00Z",
             "week": "10",
             "lastUpdated": "2017-02-28T11:42:37Z"
           }
         },
         {
           "matchInfo": {
             "description": "Monterrey vs Santos Laguna",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "647q7it5oqj8ieeo9hwcpjpih",
               "shortName": "Estadio BBVA Bancomer",
               "longName": "Estadio BBVA Bancomer"
             },
             "id": "dpidr373c31rdiocg7hpsmtwp",
             "date": "2016-09-22Z",
             "time": "02:30:00Z",
             "week": "10",
             "lastUpdated": "2017-02-28T11:42:36Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pumas UNAM vs Atlas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "78113wsj5mbr2k5bjshddlosk",
               "shortName": "Estadio Olímpico de Universitario",
               "longName": "Estadio Olímpico de Universitario"
             },
             "id": "dpolg6rqrmnn5h3ddg7ahlaeh",
             "date": "2016-09-22Z",
             "time": "02:00:00Z",
             "week": "10",
             "lastUpdated": "2017-02-28T11:42:36Z"
           }
         },
         {
           "matchInfo": {
             "description": "León vs Chiapas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "3dpgucez2cp6q9vw962ribee2",
               "shortName": "Estadio León (Nou Camp)",
               "longName": "Estadio León (Nou Camp)"
             },
             "id": "dpu14eeatl52wzv7nddxkgq95",
             "date": "2016-09-22Z",
             "time": "00:30:00Z",
             "week": "10",
             "lastUpdated": "2017-02-28T11:42:36Z"
           }
         },
         {
           "matchInfo": {
             "description": "Necaxa vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "5zyw4ved3yttj4d9jvmt56ua6",
               "shortName": "Estadio Victoria de Aguascalientes",
               "longName": "Estadio Victoria de Aguascalientes"
             },
             "id": "do5ms6roxkzanift95rm8zzzd",
             "date": "2016-09-21Z",
             "time": "02:00:00Z",
             "week": "10",
             "lastUpdated": "2017-02-28T11:42:37Z"
           }
         },
         {
           "matchInfo": {
             "description": "Puebla vs Veracruz",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "8iba6bmlx2vbm7kq9l4l9fekh",
               "shortName": "Estadio Cuauhtémoc",
               "longName": "Estadio Cuauhtémoc"
             },
             "id": "doycyta2hagnwtclfqoa1ymsp",
             "date": "2016-09-21Z",
             "time": "01:00:00Z",
             "week": "10",
             "lastUpdated": "2017-02-28T11:42:37Z"
           }
         },
         {
           "matchInfo": {
             "description": "Guadalajara vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "94u6u9s3chfdpec5irdvfi7ha",
               "shortName": "Estadio Omnilife",
               "longName": "Estadio Omnilife"
             },
             "id": "dp3tydxve5p95n8yy9ikyv2ll",
             "date": "2016-09-21Z",
             "time": "00:00:00Z",
             "week": "10",
             "lastUpdated": "2017-02-28T11:42:37Z"
           }
         },
         {
           "matchInfo": {
             "description": "Cruz Azul vs Toluca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1bdvbj3pjw35peqxagih2wn48",
               "shortName": "Estadio Azul",
               "longName": "Estadio Azul"
             },
             "id": "doa0soxd8nv6oodw6q40kveuh",
             "date": "2016-09-21Z",
             "time": "00:00:00Z",
             "week": "10",
             "lastUpdated": "2017-02-28T11:42:37Z"
           }
         },
         {
           "matchInfo": {
             "description": "Morelia vs Pachuca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "ajoo2oadg139mszb0cz19sgus",
               "shortName": "Estadio Generalísimo José María Morelos y Pavón",
               "longName": "Estadio Generalísimo José María Morelos y Pavón"
             },
             "id": "do1au90f1aq0xjcxjhkhplvqh",
             "date": "2016-09-21Z",
             "time": "00:00:00Z",
             "week": "10",
             "lastUpdated": "2017-02-28T11:42:49Z"
           }
         },
         {
           "matchInfo": {
             "description": "Santos Laguna vs Pumas UNAM",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "2nxpq21sgwfeqe0663pn9t5ge",
               "shortName": "Estadio Nuevo Corona",
               "longName": "Estadio Nuevo Corona"
             },
             "id": "dnwo2qp5omdyjga7zwzrhq0a1",
             "date": "2016-09-18Z",
             "time": "23:00:00Z",
             "week": "9",
             "lastUpdated": "2017-02-28T11:42:49Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs León",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "dnfu8vdqor5fy508fqtd2ay21",
             "date": "2016-09-18Z",
             "time": "02:00:00Z",
             "week": "9",
             "lastUpdated": "2017-02-28T11:42:50Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pachuca vs Tijuana",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "7si3duu47j9z8rkvhyp0o64ev",
               "shortName": "Estadio Miguel Hidalgo",
               "longName": "Estadio Miguel Hidalgo"
             },
             "id": "dnbz2x8qo0itlchqdtli7ebjd",
             "date": "2016-09-18Z",
             "time": "00:06:00Z",
             "week": "9",
             "lastUpdated": "2017-02-28T11:43:48Z"
           }
         },
         {
           "matchInfo": {
             "description": "Chiapas vs Cruz Azul",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "eh4s74jblsd0y8k0wu8f0hmux",
               "shortName": "Estadio Zoque VMR",
               "longName": "Estadio Zoque VMR"
             },
             "id": "dnq8063bnw14m04iiaikjbnxl",
             "date": "2016-09-18Z",
             "time": "00:00:00Z",
             "week": "9",
             "lastUpdated": "2017-02-28T11:42:49Z"
           }
         },
         {
           "matchInfo": {
             "description": "Atlas vs Necaxa",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "aybo2e3p8vy5sxt5z2jbmrvur",
               "shortName": "Estadio Jalisco",
               "longName": "Estadio Jalisco"
             },
             "id": "dn50xxwpnnnw2yjhrmtm55td5",
             "date": "2016-09-18Z",
             "time": "00:00:00Z",
             "week": "9",
             "lastUpdated": "2017-02-28T11:43:48Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs Puebla",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "dmzys6kmhs9ka2nyst022p59l",
             "date": "2016-09-18Z",
             "time": "00:00:00Z",
             "week": "9",
             "lastUpdated": "2017-02-28T11:43:48Z"
           }
         },
         {
           "matchInfo": {
             "description": "Querétaro vs Monterrey",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "kp6304o84ha1jnu4km3023uc",
               "shortName": "Estadio La Corregidora",
               "longName": "Estadio La Corregidora"
             },
             "id": "dmvjs5oxo9gqil0ch8xhxth49",
             "date": "2016-09-17Z",
             "time": "22:00:00Z",
             "week": "9",
             "lastUpdated": "2017-02-28T11:43:48Z"
           }
         },
         {
           "matchInfo": {
             "description": "Toluca vs Guadalajara",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "bc2t2al1qds4dyf7iu8hu9fy0",
               "shortName": "Estadio Universitario Alberto \"Chivo\" Córdoba",
               "longName": "Estadio Universitario Alberto \"Chivo\" Córdoba"
             },
             "id": "dnk3pmcusz4fyafd28fqslr6x",
             "date": "2016-09-17Z",
             "time": "21:00:00Z",
             "week": "9",
             "lastUpdated": "2017-02-28T11:42:49Z"
           }
         },
         {
           "matchInfo": {
             "description": "Veracruz vs Morelia",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1q1vif5b5rt0bm0ta007ewib5",
               "shortName": "Estadio Luis de la Fuente",
               "longName": "Estadio Luis de la Fuente"
             },
             "id": "dmmuw9yi6fl4wyu8dfh45jwmh",
             "date": "2016-09-17Z",
             "time": "02:00:00Z",
             "week": "9",
             "lastUpdated": "2017-02-28T11:43:49Z"
           }
         },
         {
           "matchInfo": {
             "description": "Puebla vs Toluca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "8iba6bmlx2vbm7kq9l4l9fekh",
               "shortName": "Estadio Cuauhtémoc",
               "longName": "Estadio Cuauhtémoc"
             },
             "id": "dmif6c86mkdd437ten3ay45wp",
             "date": "2016-09-11Z",
             "time": "23:00:00Z",
             "week": "8",
             "lastUpdated": "2017-02-28T11:43:49Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pumas UNAM vs Querétaro",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "78113wsj5mbr2k5bjshddlosk",
               "shortName": "Estadio Olímpico de Universitario",
               "longName": "Estadio Olímpico de Universitario"
             },
             "id": "dmdls8img0r6kzwavonlho161",
             "date": "2016-09-11Z",
             "time": "17:00:00Z",
             "week": "8",
             "lastUpdated": "2017-02-28T11:43:49Z"
           }
         },
         {
           "matchInfo": {
             "description": "Guadalajara vs Chiapas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "94u6u9s3chfdpec5irdvfi7ha",
               "shortName": "Estadio Omnilife",
               "longName": "Estadio Omnilife"
             },
             "id": "dm1x9947qct69a7w1nj606wa1",
             "date": "2016-09-11Z",
             "time": "02:06:00Z",
             "week": "8",
             "lastUpdated": "2017-02-28T11:43:53Z"
           }
         },
         {
           "matchInfo": {
             "description": "Necaxa vs Santos Laguna",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "5zyw4ved3yttj4d9jvmt56ua6",
               "shortName": "Estadio Victoria de Aguascalientes",
               "longName": "Estadio Victoria de Aguascalientes"
             },
             "id": "dm76ofblip4k5qao15kwlaig9",
             "date": "2016-09-11Z",
             "time": "02:00:00Z",
             "week": "8",
             "lastUpdated": "2017-02-28T11:43:51Z"
           }
         },
         {
           "matchInfo": {
             "description": "León vs Atlas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "3dpgucez2cp6q9vw962ribee2",
               "shortName": "Estadio León (Nou Camp)",
               "longName": "Estadio León (Nou Camp)"
             },
             "id": "dlxc08b4by2993nckis3bx5gp",
             "date": "2016-09-11Z",
             "time": "00:06:00Z",
             "week": "8",
             "lastUpdated": "2017-02-28T11:43:54Z"
           }
         },
         {
           "matchInfo": {
             "description": "Monterrey vs Tijuana",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "647q7it5oqj8ieeo9hwcpjpih",
               "shortName": "Estadio BBVA Bancomer",
               "longName": "Estadio BBVA Bancomer"
             },
             "id": "dlskra1079zqm6qrxkudfqrjd",
             "date": "2016-09-11Z",
             "time": "00:00:00Z",
             "week": "8",
             "lastUpdated": "2017-02-28T11:43:54Z"
           }
         },
         {
           "matchInfo": {
             "description": "Morelia vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "ajoo2oadg139mszb0cz19sgus",
               "shortName": "Estadio Generalísimo José María Morelos y Pavón",
               "longName": "Estadio Generalísimo José María Morelos y Pavón"
             },
             "id": "dlnoxi5p2qgqtk2ft8h8o66zt",
             "date": "2016-09-11Z",
             "time": "00:00:00Z",
             "week": "8",
             "lastUpdated": "2017-02-28T11:43:55Z"
           }
         },
         {
           "matchInfo": {
             "description": "Cruz Azul vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1bdvbj3pjw35peqxagih2wn48",
               "shortName": "Estadio Azul",
               "longName": "Estadio Azul"
             },
             "id": "dljcr86u41r64muw1is76099l",
             "date": "2016-09-10Z",
             "time": "22:00:00Z",
             "week": "8",
             "lastUpdated": "2017-02-28T11:43:55Z"
           }
         },
         {
           "matchInfo": {
             "description": "Veracruz vs Pachuca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1q1vif5b5rt0bm0ta007ewib5",
               "shortName": "Estadio Luis de la Fuente",
               "longName": "Estadio Luis de la Fuente"
             },
             "id": "dlf585ddcobb2i24r3lcj47ah",
             "date": "2016-09-10Z",
             "time": "02:00:00Z",
             "week": "8",
             "lastUpdated": "2017-02-28T11:43:56Z"
           }
         },
         {
           "matchInfo": {
             "description": "Santos Laguna vs León",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "2nxpq21sgwfeqe0663pn9t5ge",
               "shortName": "Estadio Nuevo Corona",
               "longName": "Estadio Nuevo Corona"
             },
             "id": "dlberbq6pmxrhzjbuw0jb7v8p",
             "date": "2016-08-28Z",
             "time": "23:00:00Z",
             "week": "7",
             "lastUpdated": "2017-02-28T11:43:56Z"
           }
         },
         {
           "matchInfo": {
             "description": "Chiapas vs Puebla",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "eh4s74jblsd0y8k0wu8f0hmux",
               "shortName": "Estadio Zoque VMR",
               "longName": "Estadio Zoque VMR"
             },
             "id": "dl70mak007cc6gu939zjlnpbd",
             "date": "2016-08-28Z",
             "time": "22:00:00Z",
             "week": "7",
             "lastUpdated": "2017-02-28T11:43:56Z"
           }
         },
         {
           "matchInfo": {
             "description": "Toluca vs Morelia",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "bc2t2al1qds4dyf7iu8hu9fy0",
               "shortName": "Estadio Universitario Alberto \"Chivo\" Córdoba",
               "longName": "Estadio Universitario Alberto \"Chivo\" Córdoba"
             },
             "id": "dl2m13qlijwog5fch2oqjcrft",
             "date": "2016-08-28Z",
             "time": "17:00:00Z",
             "week": "7",
             "lastUpdated": "2017-02-28T11:43:56Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs Guadalajara",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "dkw3kr1ckg05aw913h0xd8lpl",
             "date": "2016-08-28Z",
             "time": "02:00:00Z",
             "week": "7",
             "lastUpdated": "2017-02-28T11:43:56Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pachuca vs Monterrey",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "7si3duu47j9z8rkvhyp0o64ev",
               "shortName": "Estadio Miguel Hidalgo",
               "longName": "Estadio Miguel Hidalgo"
             },
             "id": "dkrtfnjgrmtbunhmm89casb1l",
             "date": "2016-08-28Z",
             "time": "00:06:00Z",
             "week": "7",
             "lastUpdated": "2017-02-28T11:43:57Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs Veracruz",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "dklg90sjhdo0ffo3ng7vbai21",
             "date": "2016-08-28Z",
             "time": "00:00:00Z",
             "week": "7",
             "lastUpdated": "2017-02-28T11:42:50Z"
           }
         },
         {
           "matchInfo": {
             "description": "Atlas vs Cruz Azul",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "aybo2e3p8vy5sxt5z2jbmrvur",
               "shortName": "Estadio Jalisco",
               "longName": "Estadio Jalisco"
             },
             "id": "dke6n5amgbu3b5ufe366jul0p",
             "date": "2016-08-28Z",
             "time": "00:00:00Z",
             "week": "7",
             "lastUpdated": "2017-02-28T11:42:50Z"
           }
         },
         {
           "matchInfo": {
             "description": "Querétaro vs Necaxa",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "kp6304o84ha1jnu4km3023uc",
               "shortName": "Estadio La Corregidora",
               "longName": "Estadio La Corregidora"
             },
             "id": "dk7esss1e5cvu9x0nz0y42b55",
             "date": "2016-08-27Z",
             "time": "22:00:00Z",
             "week": "7",
             "lastUpdated": "2017-02-28T11:42:50Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tijuana vs Pumas UNAM",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "36ejluw1sky5hdx7i3cq8l524",
               "shortName": "Estadio Caliente",
               "longName": "Estadio Caliente"
             },
             "id": "dk0al68yfazpqe74nha6wxhwp",
             "date": "2016-08-27Z",
             "time": "02:00:00Z",
             "week": "7",
             "lastUpdated": "2017-02-28T11:42:50Z"
           }
         },
         {
           "matchInfo": {
             "description": "Puebla vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "8iba6bmlx2vbm7kq9l4l9fekh",
               "shortName": "Estadio Cuauhtémoc",
               "longName": "Estadio Cuauhtémoc"
             },
             "id": "djtd76lk08aqfcje6inmr6kmh",
             "date": "2016-08-21Z",
             "time": "23:00:00Z",
             "week": "6",
             "lastUpdated": "2017-02-28T11:42:51Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pumas UNAM vs Monterrey",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "78113wsj5mbr2k5bjshddlosk",
               "shortName": "Estadio Olímpico de Universitario",
               "longName": "Estadio Olímpico de Universitario"
             },
             "id": "djn6vdtxnwmsbfwphyv983g89",
             "date": "2016-08-21Z",
             "time": "17:00:00Z",
             "week": "6",
             "lastUpdated": "2017-02-28T11:42:51Z"
           }
         },
         {
           "matchInfo": {
             "description": "Guadalajara vs Atlas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "94u6u9s3chfdpec5irdvfi7ha",
               "shortName": "Estadio Omnilife",
               "longName": "Estadio Omnilife"
             },
             "id": "dj719zrk1pyaygge5djkgy8rt",
             "date": "2016-08-21Z",
             "time": "02:06:00Z",
             "week": "6",
             "lastUpdated": "2017-02-28T11:42:51Z"
           }
         },
         {
           "matchInfo": {
             "description": "Necaxa vs Tijuana",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "5zyw4ved3yttj4d9jvmt56ua6",
               "shortName": "Estadio Victoria de Aguascalientes",
               "longName": "Estadio Victoria de Aguascalientes"
             },
             "id": "djf4960ejeea5ao8zha845v55",
             "date": "2016-08-21Z",
             "time": "02:00:00Z",
             "week": "6",
             "lastUpdated": "2017-02-28T11:42:51Z"
           }
         },
         {
           "matchInfo": {
             "description": "León vs Querétaro",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "3dpgucez2cp6q9vw962ribee2",
               "shortName": "Estadio León (Nou Camp)",
               "longName": "Estadio León (Nou Camp)"
             },
             "id": "dj0mtqabp84t4r9f9uu17d0x5",
             "date": "2016-08-21Z",
             "time": "00:06:00Z",
             "week": "6",
             "lastUpdated": "2017-02-28T11:42:52Z"
           }
         },
         {
           "matchInfo": {
             "description": "Morelia vs Chiapas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "ajoo2oadg139mszb0cz19sgus",
               "shortName": "Estadio Generalísimo José María Morelos y Pavón",
               "longName": "Estadio Generalísimo José María Morelos y Pavón"
             },
             "id": "disbxz3zprk0cv0dtinva7vft",
             "date": "2016-08-21Z",
             "time": "00:00:00Z",
             "week": "6",
             "lastUpdated": "2017-02-28T11:42:52Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs Pachuca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "dind3tcstujw0et5lz372tii1",
             "date": "2016-08-21Z",
             "time": "00:00:00Z",
             "week": "6",
             "lastUpdated": "2017-02-28T11:42:53Z"
           }
         },
         {
           "matchInfo": {
             "description": "Cruz Azul vs Santos Laguna",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1bdvbj3pjw35peqxagih2wn48",
               "shortName": "Estadio Azul",
               "longName": "Estadio Azul"
             },
             "id": "dih9rump9ia5c3glxygn0hhwp",
             "date": "2016-08-20Z",
             "time": "22:00:00Z",
             "week": "6",
             "lastUpdated": "2017-02-28T11:42:53Z"
           }
         },
         {
           "matchInfo": {
             "description": "Veracruz vs Toluca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1q1vif5b5rt0bm0ta007ewib5",
               "shortName": "Estadio Luis de la Fuente",
               "longName": "Estadio Luis de la Fuente"
             },
             "id": "di9hjeiteugqgtx34vvuzkr1l",
             "date": "2016-08-20Z",
             "time": "02:00:00Z",
             "week": "6",
             "lastUpdated": "2017-02-28T11:42:53Z"
           }
         },
         {
           "matchInfo": {
             "description": "Santos Laguna vs Guadalajara",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "2nxpq21sgwfeqe0663pn9t5ge",
               "shortName": "Estadio Nuevo Corona",
               "longName": "Estadio Nuevo Corona"
             },
             "id": "di37eox8awz4lljq8lw9s1hwp",
             "date": "2016-08-14Z",
             "time": "23:00:00Z",
             "week": "5",
             "lastUpdated": "2017-02-28T11:42:53Z"
           }
         },
         {
           "matchInfo": {
             "description": "Chiapas vs Veracruz",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "eh4s74jblsd0y8k0wu8f0hmux",
               "shortName": "Estadio Zoque VMR",
               "longName": "Estadio Zoque VMR"
             },
             "id": "dhyp9zw2x2pp7lrmn1lk9vtnt",
             "date": "2016-08-14Z",
             "time": "22:00:00Z",
             "week": "5",
             "lastUpdated": "2017-02-28T11:42:54Z"
           }
         },
         {
           "matchInfo": {
             "description": "Toluca vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "bc2t2al1qds4dyf7iu8hu9fy0",
               "shortName": "Estadio Universitario Alberto \"Chivo\" Córdoba",
               "longName": "Estadio Universitario Alberto \"Chivo\" Córdoba"
             },
             "id": "dhucht3gqummpx9bmthi7zqp5",
             "date": "2016-08-14Z",
             "time": "17:00:00Z",
             "week": "5",
             "lastUpdated": "2017-02-28T11:42:54Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs Morelia",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "dhqpuci0wgwm8bjb9t1twott5",
             "date": "2016-08-14Z",
             "time": "02:00:00Z",
             "week": "5",
             "lastUpdated": "2017-02-28T11:42:54Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pachuca vs Pumas UNAM",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "7si3duu47j9z8rkvhyp0o64ev",
               "shortName": "Estadio Miguel Hidalgo",
               "longName": "Estadio Miguel Hidalgo"
             },
             "id": "dhmw639w9725xj4tkexx633zd",
             "date": "2016-08-14Z",
             "time": "00:06:00Z",
             "week": "5",
             "lastUpdated": "2017-02-28T11:42:54Z"
           }
         },
         {
           "matchInfo": {
             "description": "Atlas vs Puebla",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "aybo2e3p8vy5sxt5z2jbmrvur",
               "shortName": "Estadio Jalisco",
               "longName": "Estadio Jalisco"
             },
             "id": "dhj4f14wtvi56o4s8a296j015",
             "date": "2016-08-14Z",
             "time": "00:00:00Z",
             "week": "5",
             "lastUpdated": "2017-02-28T11:42:54Z"
           }
         },
         {
           "matchInfo": {
             "description": "Monterrey vs Necaxa",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "647q7it5oqj8ieeo9hwcpjpih",
               "shortName": "Estadio BBVA Bancomer",
               "longName": "Estadio BBVA Bancomer"
             },
             "id": "dhffbuo9tt1naiqcz76fbnxm1",
             "date": "2016-08-14Z",
             "time": "00:00:00Z",
             "week": "5",
             "lastUpdated": "2017-02-28T11:42:54Z"
           }
         },
         {
           "matchInfo": {
             "description": "Querétaro vs Cruz Azul",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "kp6304o84ha1jnu4km3023uc",
               "shortName": "Estadio La Corregidora",
               "longName": "Estadio La Corregidora"
             },
             "id": "dhc1s2mpn0myv3q9xk2ob36y1",
             "date": "2016-08-13Z",
             "time": "22:00:00Z",
             "week": "5",
             "lastUpdated": "2017-02-28T11:42:54Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tijuana vs León",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "36ejluw1sky5hdx7i3cq8l524",
               "shortName": "Estadio Caliente",
               "longName": "Estadio Caliente"
             },
             "id": "dh8ppr6ga7htb9rowvjkior1l",
             "date": "2016-08-13Z",
             "time": "02:00:00Z",
             "week": "5",
             "lastUpdated": "2017-02-28T11:43:57Z"
           }
         },
         {
           "matchInfo": {
             "description": "Puebla vs Santos Laguna",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "8iba6bmlx2vbm7kq9l4l9fekh",
               "shortName": "Estadio Cuauhtémoc",
               "longName": "Estadio Cuauhtémoc"
             },
             "id": "dh52nk5b2anol4zllpfxvqi21",
             "date": "2016-08-07Z",
             "time": "23:00:00Z",
             "week": "4",
             "lastUpdated": "2017-02-28T11:43:57Z"
           }
         },
         {
           "matchInfo": {
             "description": "Toluca vs Pachuca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "bc2t2al1qds4dyf7iu8hu9fy0",
               "shortName": "Estadio Universitario Alberto \"Chivo\" Córdoba",
               "longName": "Estadio Universitario Alberto \"Chivo\" Córdoba"
             },
             "id": "dgzq7uxovie5puf5mymh5hyax",
             "date": "2016-08-07Z",
             "time": "17:45:00Z",
             "week": "4",
             "lastUpdated": "2017-02-28T11:43:57Z"
           }
         },
         {
           "matchInfo": {
             "description": "Guadalajara vs Querétaro",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "94u6u9s3chfdpec5irdvfi7ha",
               "shortName": "Estadio Omnilife",
               "longName": "Estadio Omnilife"
             },
             "id": "dgtunehvy62hqmnhuargadzvt",
             "date": "2016-08-07Z",
             "time": "02:00:00Z",
             "week": "4",
             "lastUpdated": "2017-02-28T11:43:57Z"
           }
         },
         {
           "matchInfo": {
             "description": "Necaxa vs Pumas UNAM",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "5zyw4ved3yttj4d9jvmt56ua6",
               "shortName": "Estadio Victoria de Aguascalientes",
               "longName": "Estadio Victoria de Aguascalientes"
             },
             "id": "dgq10gn08a3eau6o4b39jwd0p",
             "date": "2016-08-07Z",
             "time": "02:00:00Z",
             "week": "4",
             "lastUpdated": "2017-02-28T11:43:57Z"
           }
         },
         {
           "matchInfo": {
             "description": "Veracruz vs América",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1q1vif5b5rt0bm0ta007ewib5",
               "shortName": "Estadio Luis de la Fuente",
               "longName": "Estadio Luis de la Fuente"
             },
             "id": "dg6odwjjb920yoxds8tlc2mzt",
             "date": "2016-08-07Z",
             "time": "02:00:00Z",
             "week": "4",
             "lastUpdated": "2017-02-28T11:44:00Z"
           }
         },
         {
           "matchInfo": {
             "description": "León vs Monterrey",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "3dpgucez2cp6q9vw962ribee2",
               "shortName": "Estadio León (Nou Camp)",
               "longName": "Estadio León (Nou Camp)"
             },
             "id": "dgkrr9aotv0sew4zcsj07qtwp",
             "date": "2016-08-07Z",
             "time": "00:06:00Z",
             "week": "4",
             "lastUpdated": "2017-02-28T11:43:58Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs Chiapas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "dghpsk9p1bx8e0yqjro7cyacp",
             "date": "2016-08-07Z",
             "time": "00:00:00Z",
             "week": "4",
             "lastUpdated": "2017-02-28T11:43:58Z"
           }
         },
         {
           "matchInfo": {
             "description": "Morelia vs Atlas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "ajoo2oadg139mszb0cz19sgus",
               "shortName": "Estadio Generalísimo José María Morelos y Pavón",
               "longName": "Estadio Generalísimo José María Morelos y Pavón"
             },
             "id": "dge17gl0gwomjjblnv4pcifvt",
             "date": "2016-08-07Z",
             "time": "00:00:00Z",
             "week": "4",
             "lastUpdated": "2017-02-28T11:43:59Z"
           }
         },
         {
           "matchInfo": {
             "description": "Cruz Azul vs Tijuana",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1bdvbj3pjw35peqxagih2wn48",
               "shortName": "Estadio Azul",
               "longName": "Estadio Azul"
             },
             "id": "dgarvc8hh6f558763s0sw53hl",
             "date": "2016-08-06Z",
             "time": "22:00:00Z",
             "week": "4",
             "lastUpdated": "2017-02-28T11:44:00Z"
           }
         },
         {
           "matchInfo": {
             "description": "Santos Laguna vs Morelia",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "2nxpq21sgwfeqe0663pn9t5ge",
               "shortName": "Estadio Nuevo Corona",
               "longName": "Estadio Nuevo Corona"
             },
             "id": "dg0dyueel2otq9a5vtagh9nmx",
             "date": "2016-07-31Z",
             "time": "23:00:00Z",
             "week": "3",
             "lastUpdated": "2017-02-28T11:44:01Z"
           }
         },
         {
           "matchInfo": {
             "description": "Chiapas vs Toluca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "eh4s74jblsd0y8k0wu8f0hmux",
               "shortName": "Estadio Zoque VMR",
               "longName": "Estadio Zoque VMR"
             },
             "id": "dfwchngsd5kh1h3l8sqt8ah2h",
             "date": "2016-07-31Z",
             "time": "22:00:00Z",
             "week": "3",
             "lastUpdated": "2017-02-28T11:44:01Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pumas UNAM vs León",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "78113wsj5mbr2k5bjshddlosk",
               "shortName": "Estadio Olímpico de Universitario",
               "longName": "Estadio Olímpico de Universitario"
             },
             "id": "dfsz4gwie6bpgxe6lo0p2g1d5",
             "date": "2016-07-31Z",
             "time": "17:00:00Z",
             "week": "3",
             "lastUpdated": "2017-02-28T11:44:01Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "dfp25qum2j9fjai53i31t7755",
             "date": "2016-07-31Z",
             "time": "02:00:00Z",
             "week": "3",
             "lastUpdated": "2017-02-28T11:44:02Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pachuca vs Necaxa",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "7si3duu47j9z8rkvhyp0o64ev",
               "shortName": "Estadio Miguel Hidalgo",
               "longName": "Estadio Miguel Hidalgo"
             },
             "id": "dfki24uqpzu0jsne4hp6k69d5",
             "date": "2016-07-31Z",
             "time": "00:06:00Z",
             "week": "3",
             "lastUpdated": "2017-02-28T11:44:02Z"
           }
         },
         {
           "matchInfo": {
             "description": "Atlas vs Veracruz",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "aybo2e3p8vy5sxt5z2jbmrvur",
               "shortName": "Estadio Jalisco",
               "longName": "Estadio Jalisco"
             },
             "id": "dfgnk8crito295x9nqb4smxux",
             "date": "2016-07-31Z",
             "time": "00:00:00Z",
             "week": "3",
             "lastUpdated": "2017-02-28T11:42:30Z"
           }
         },
         {
           "matchInfo": {
             "description": "Monterrey vs Cruz Azul",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "647q7it5oqj8ieeo9hwcpjpih",
               "shortName": "Estadio BBVA Bancomer",
               "longName": "Estadio BBVA Bancomer"
             },
             "id": "df9i3401lui0n799gpe5qnw89",
             "date": "2016-07-31Z",
             "time": "00:00:00Z",
             "week": "3",
             "lastUpdated": "2017-02-28T11:44:02Z"
           }
         },
         {
           "matchInfo": {
             "description": "Querétaro vs Puebla",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "kp6304o84ha1jnu4km3023uc",
               "shortName": "Estadio La Corregidora",
               "longName": "Estadio La Corregidora"
             },
             "id": "df5hhmld8bju05ejzorcplwix",
             "date": "2016-07-30Z",
             "time": "22:00:00Z",
             "week": "3",
             "lastUpdated": "2017-02-28T11:44:02Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tijuana vs Guadalajara",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "36ejluw1sky5hdx7i3cq8l524",
               "shortName": "Estadio Caliente",
               "longName": "Estadio Caliente"
             },
             "id": "df1dnpyyw1fd89g6n0qhiqhgp",
             "date": "2016-07-30Z",
             "time": "02:00:00Z",
             "week": "3",
             "lastUpdated": "2017-02-28T11:44:02Z"
           }
         },
         {
           "matchInfo": {
             "description": "Puebla vs Tijuana",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "8iba6bmlx2vbm7kq9l4l9fekh",
               "shortName": "Estadio Cuauhtémoc",
               "longName": "Estadio Cuauhtémoc"
             },
             "id": "dev2k24rtxwvat8dwx9hbfjs9",
             "date": "2016-07-24Z",
             "time": "23:00:00Z",
             "week": "2",
             "lastUpdated": "2017-02-28T11:44:03Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs Toluca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "dep8df29tfzt0494glzbwxtrd",
             "date": "2016-07-24Z",
             "time": "02:00:00Z",
             "week": "2",
             "lastUpdated": "2017-02-28T11:44:03Z"
           }
         },
         {
           "matchInfo": {
             "description": "Guadalajara vs Monterrey",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "94u6u9s3chfdpec5irdvfi7ha",
               "shortName": "Estadio Omnilife",
               "longName": "Estadio Omnilife"
             },
             "id": "dekzf1quzvzufk56gw0o9uf3d",
             "date": "2016-07-24Z",
             "time": "02:00:00Z",
             "week": "2",
             "lastUpdated": "2017-02-28T11:44:03Z"
           }
         },
         {
           "matchInfo": {
             "description": "León vs Necaxa",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "3dpgucez2cp6q9vw962ribee2",
               "shortName": "Estadio León (Nou Camp)",
               "longName": "Estadio León (Nou Camp)"
             },
             "id": "degtfxk7c4aml8ddluueq5m21",
             "date": "2016-07-24Z",
             "time": "00:06:00Z",
             "week": "2",
             "lastUpdated": "2017-02-28T11:44:03Z"
           }
         },
         {
           "matchInfo": {
             "description": "Morelia vs Querétaro",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "ajoo2oadg139mszb0cz19sgus",
               "shortName": "Estadio Generalísimo José María Morelos y Pavón",
               "longName": "Estadio Generalísimo José María Morelos y Pavón"
             },
             "id": "dece7yc7oo8khhp9rji3s1syx",
             "date": "2016-07-24Z",
             "time": "00:00:00Z",
             "week": "2",
             "lastUpdated": "2017-02-28T11:44:10Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tigres UANL vs Atlas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "crqwf0rfcjff0jbi4w0axe95p",
               "shortName": "Estadio Universitario de Nuevo León",
               "longName": "Estadio Universitario de Nuevo León"
             },
             "id": "de8kkvscdmzvnxckh6eewcycp",
             "date": "2016-07-24Z",
             "time": "00:00:00Z",
             "week": "2",
             "lastUpdated": "2017-02-28T11:44:10Z"
           }
         },
         {
           "matchInfo": {
             "description": "Cruz Azul vs Pumas UNAM",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1bdvbj3pjw35peqxagih2wn48",
               "shortName": "Estadio Azul",
               "longName": "Estadio Azul"
             },
             "id": "de41qzamxu2ut1w3irj1k4yqx",
             "date": "2016-07-23Z",
             "time": "22:00:00Z",
             "week": "2",
             "lastUpdated": "2017-02-28T11:44:11Z"
           }
         },
         {
           "matchInfo": {
             "description": "Chiapas vs Pachuca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "eh4s74jblsd0y8k0wu8f0hmux",
               "shortName": "Estadio Zoque VMR",
               "longName": "Estadio Zoque VMR"
             },
             "id": "ddzj3iy6jt90ve82wzes3a67d",
             "date": "2016-07-23Z",
             "time": "22:00:00Z",
             "week": "2",
             "lastUpdated": "2017-02-28T11:44:11Z"
           }
         },
         {
           "matchInfo": {
             "description": "Veracruz vs Santos Laguna",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1q1vif5b5rt0bm0ta007ewib5",
               "shortName": "Estadio Luis de la Fuente",
               "longName": "Estadio Luis de la Fuente"
             },
             "id": "ddurr1abzb6ccoshignfgj2sp",
             "date": "2016-07-23Z",
             "time": "02:00:00Z",
             "week": "2",
             "lastUpdated": "2017-02-28T11:44:11Z"
           }
         },
         {
           "matchInfo": {
             "description": "Santos Laguna vs Tigres UANL",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "8yn3l36qkq1fxbw4ufmwyfyt9",
                 "name": "Santos Laguna",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                 "name": "Tigres UANL",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "2nxpq21sgwfeqe0663pn9t5ge",
               "shortName": "Estadio Nuevo Corona",
               "longName": "Estadio Nuevo Corona"
             },
             "id": "ddqvzun8slx16ikep8ffw48o9",
             "date": "2016-07-17Z",
             "time": "23:00:00Z",
             "week": "1",
             "lastUpdated": "2017-02-28T11:44:11Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pumas UNAM vs Guadalajara",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "ayabrorjqa1bj7jk1fdqu1t57",
                 "name": "Pumas UNAM",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "e603sojy77s4u0ypqds2v2a1g",
                 "name": "Guadalajara",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "78113wsj5mbr2k5bjshddlosk",
               "shortName": "Estadio Olímpico de Universitario",
               "longName": "Estadio Olímpico de Universitario"
             },
             "id": "ddlf2zhsl09ddtk79db0m5i3t",
             "date": "2016-07-17Z",
             "time": "17:00:00Z",
             "week": "1",
             "lastUpdated": "2017-02-28T11:44:12Z"
           }
         },
         {
           "matchInfo": {
             "description": "América vs Chiapas",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "eu8c408f59yx7egaqossbv25e",
                 "name": "América",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "6zp1ol7q30a7dx98ce9ajnm9e",
                 "name": "Chiapas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "1z26ptjg3kg7fpitq54sj7z44",
               "shortName": "Estadio Azteca",
               "longName": "Estadio Azteca"
             },
             "id": "ddgvgh2grijw2obnwqj74jo4p",
             "date": "2016-07-17Z",
             "time": "02:00:00Z",
             "week": "1",
             "lastUpdated": "2017-02-28T11:44:13Z"
           }
         },
         {
           "matchInfo": {
             "description": "Necaxa vs Cruz Azul",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "b7hn6knkuxbpj1i8rmzapns7b",
                 "name": "Necaxa",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "1aw67co8uut64yckd3wbhy9t2",
                 "name": "Cruz Azul",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "5zyw4ved3yttj4d9jvmt56ua6",
               "shortName": "Estadio Victoria de Aguascalientes",
               "longName": "Estadio Victoria de Aguascalientes"
             },
             "id": "ddbxqvtr4z8ma04h6q3aon6jt",
             "date": "2016-07-17Z",
             "time": "02:00:00Z",
             "week": "1",
             "lastUpdated": "2017-02-28T11:44:15Z"
           }
         },
         {
           "matchInfo": {
             "description": "Pachuca vs León",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "cynfvfb31rml7xrlsnejf8r6j",
                 "name": "Pachuca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "2ei66pjfsrr6uxqp1bywq31lo",
                 "name": "León",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "7si3duu47j9z8rkvhyp0o64ev",
               "shortName": "Estadio Miguel Hidalgo",
               "longName": "Estadio Miguel Hidalgo"
             },
             "id": "dd55758hp1euatrs2vctr3p49",
             "date": "2016-07-17Z",
             "time": "00:06:00Z",
             "week": "1",
             "lastUpdated": "2017-02-28T11:44:17Z"
           }
         },
         {
           "matchInfo": {
             "description": "Atlas vs Toluca",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "8jjxbd5vr23vhu1v5r21rzkrn",
                 "name": "Atlas",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "3390h9hdgoxzzofnrpyktanuz",
                 "name": "Toluca",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "aybo2e3p8vy5sxt5z2jbmrvur",
               "shortName": "Estadio Jalisco",
               "longName": "Estadio Jalisco"
             },
             "id": "dcyo27wzeew9brnxq22fhm57t",
             "date": "2016-07-17Z",
             "time": "00:00:00Z",
             "week": "1",
             "lastUpdated": "2017-02-28T11:44:17Z"
           }
         },
         {
           "matchInfo": {
             "description": "Monterrey vs Puebla",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "233335xtoe3e3phg3hp91xguq",
                 "name": "Monterrey",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "4kw25nmgmacpbvo24ttr994k5",
                 "name": "Puebla",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "647q7it5oqj8ieeo9hwcpjpih",
               "shortName": "Estadio BBVA Bancomer",
               "longName": "Estadio BBVA Bancomer"
             },
             "id": "dcrafttzujk9muylahdwppuqx",
             "date": "2016-07-17Z",
             "time": "00:00:00Z",
             "week": "1",
             "lastUpdated": "2017-02-28T11:44:17Z"
           }
         },
         {
           "matchInfo": {
             "description": "Querétaro vs Veracruz",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "ccye1b5fvtq8tzlz0gosyw10b",
                 "name": "Querétaro",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "cpont9f3vrdasvnxgmcamkfh7",
                 "name": "Veracruz",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "kp6304o84ha1jnu4km3023uc",
               "shortName": "Estadio La Corregidora",
               "longName": "Estadio La Corregidora"
             },
             "id": "dcjdd5ip4lahi89trn6ektiw9",
             "date": "2016-07-16Z",
             "time": "22:00:00Z",
             "week": "1",
             "lastUpdated": "2017-02-28T11:44:18Z"
           }
         },
         {
           "matchInfo": {
             "description": "Tijuana vs Morelia",
             "sport": {
               "id": "289u5typ3vp4ifwh5thalohmq",
               "name": "Soccer"
             },
             "ruleset": {
               "id": "79plas4983031idr6vw83nuel",
               "name": "Men"
             },
             "competition": {
               "id": "2hsidwomhjsaaytdy9u5niyi4",
               "name": "Liga MX",
               "country": {
                 "id": "5trdr3jf42i20zj1hnkvcytr6",
                 "name": "Mexico"
               }
             },
             "tournamentCalendar": {
               "id": "9vc300fnxeng9to0wtax0c6p5",
               "startDate": "2016-07-16Z",
               "endDate": "2017-05-30Z",
               "name": "2016/2017"
             },
             "stage": {
               "id": "3jt0lvxyb0sy6ieunhx87v8nh",
               "startDate": "2016-07-16Z",
               "endDate": "2016-11-21Z",
               "name": "Apertura"
             },
             "contestant": [
               {
                 "id": "c1wcescnsnfuyv06enhwaoqr6",
                 "name": "Tijuana",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "home"
               },
               {
                 "id": "9rxhvtj7237l0p30ocyms8rwo",
                 "name": "Morelia",
                 "country": {
                   "id": "5trdr3jf42i20zj1hnkvcytr6",
                   "name": "Mexico"
                 },
                 "position": "away"
               }
             ],
             "venue": {
               "id": "36ejluw1sky5hdx7i3cq8l524",
               "shortName": "Estadio Caliente",
               "longName": "Estadio Caliente"
             },
             "id": "dcd70ygfhv81qdg28516c2six",
             "date": "2016-07-16Z",
             "time": "02:00:00Z",
             "week": "1",
             "lastUpdated": "2017-02-28T11:44:18Z"
           }
         }
       ]
     }

   ];
   constructor() {

    }
    getcalendar(){
      return this.calendar["0"].match;

    }
 }
