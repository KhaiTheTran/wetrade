import { Injectable } from "@angular/core";

@Injectable()
export class FinancialDataService {

    public getData(): any[] {
        return [
            { time: new Date(2013, 1, 1), open: 268.93, high: 268.93, low: 262.80, close: 265.00, volume: 6118146 },
            { time: new Date(2013, 1, 4), open: 262.78, high: 264.68, low: 259.07, close: 259.98, volume: 3723793 },
            { time: new Date(2013, 1, 5), open: 262.00, high: 268.03, low: 261.46, close: 266.89, volume: 4013780 },
            { time: new Date(2013, 1, 6), open: 265.16, high: 266.89, low: 261.11, close: 262.22, volume: 2772204 },
            { time: new Date(2013, 1, 7), open: 264.10, high: 264.10, low: 255.11, close: 260.23, volume: 3977065 },
            { time: new Date(2013, 1, 8), open: 261.40, high: 265.25, low: 260.56, close: 261.95, volume: 3879628 },
            { time: new Date(2013, 1, 11), open: 263.20, high: 263.25, low: 256.60, close: 257.21, volume: 3407457 },
            { time: new Date(2013, 1, 12), open: 259.19, high: 260.16, low: 257.00, close: 258.70, volume: 2944730 },
            { time: new Date(2013, 1, 13), open: 261.53, high: 269.96, low: 260.30, close: 269.47, volume: 5295786 },
            { time: new Date(2013, 1, 14), open: 267.37, high: 270.65, low: 265.40, close: 269.24, volume: 3464080 },
            { time: new Date(2013, 1, 15), open: 267.63, high: 268.92, low: 263.11, close: 265.09, volume: 3981233 }
        ];
    }
    public getMulti(): any[] {
        return [ this.getAmzn()];
    }
    public getThree(): any[] {
        return [ this.getAmzn()];
    }
    public getAmzn(): any[]{
      const jsonDataKeys : any=[];
      const jsonData : any =[{
      "2013, 1, 1": {
        "open": "268.93",
        "high": "26.93",
        "low": "262.80",
        "close": "26.00",
        "volume": "61186"
      }}, 
      {
      "2013, 1, 4": {
        "open": "268.93",
        "high": "28.93",
        "low": "262.80",
        "close": "26.00",
        "volume": "6118146"
      },
      "2013, 1, 5": {
      "open": "268.93",
      "high": "268.93",
      "low": "262.0",
      "close": "265.00",
      "volume": "618146"},
    "2013, 1, 6": {
        "open": "268.93",
        "high": "268.3",
        "low": "22.80",
        "close": "265.00",
        "volume": "6118146"
    }
    }];
      const result: any = [];
      for(let arr of jsonData){
        Object.keys(arr).map((key)=>{
            console.log("push")
            console.log(key)
            result.push({time: new Date(key), 
            open:Number(arr[key].open),
            high: Number(arr[key].high),
            low: Number(arr[key].low),
            close: Number(arr[key].close),
            volume: Number(arr[key].volume)}),
            jsonDataKeys.push(key);
          });   
      }
      console.log(result)
      result.title = "Google Inc.";
      return result;
    }
    
}