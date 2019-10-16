import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {
    public title = "Samples";
    name = 'Angular 5';
    jsonDataKeys : any=[];
    jsonData : any =[{
    "2013, 1, 1": {
        "open": "268.93",
        "high": "268.93",
        "low": "262.80",
        "close": "265.00",
        "volume": "6118146"
    }}, 
    {
    "2013, 1, 4": {
        "open": "268.93",
        "high": "268.93",
        "low": "262.80",
        "close": "265.00",
        "volume": "6118146"
    },
    "2013, 1, 5": {
      "open": "268.93",
      "high": "268.93",
      "low": "262.80",
      "close": "265.00",
      "volume": "6118146"
    },
    "2013, 1, 6": {
        "open": "268.93",
        "high": "268.93",
        "low": "262.80",
        "close": "265.00",
        "volume": "6118146"
    },
    "2013, 1, 7": {
        "open": "268.93",
        "high": "268.93",
        "low": "262.80",
        "close": "265.00",
        "volume": "6118146"
    },
    "2013, 1, 8": {
      "open": "268.93",
      "high": "268.93",
      "low": "262.80",
      "close": "265.00",
      "volume": "6118146"
    },
    "2013, 1, 9": {
        "open": "268.93",
        "high": "268.93",
        "low": "262.80",
        "close": "265.00",
        "volume": "6118146"
    },
    "2013, 1, 14": {
        "open": "268.93",
        "high": "268.93",
        "low": "262.80",
        "close": "265.00",
        "volume": "6118146"
    },
    "2013, 1, 10": {
      "open": "268.93",
      "high": "268.93",
      "low": "262.80",
      "close": "265.00",
      "volume": "6118146"
    },
    "2013, 1, 16": {
        "open": "268.93",
        "high": "268.93",
        "low": "262.80",
        "close": "265.00",
        "volume": "6118146"
    },
    "2013, 1, 17": {
        "open": "268.93",
        "high": "268.93",
        "low": "262.80",
        "close": "265.00",
        "volume": "6118146"
    },
    "2013, 1, 18": {
      "open": "268.93",
      "high": "268.93",
      "low": "262.80",
      "close": "265.00",
      "volume": "6118146"
    },
    "2013, 1, 19": {
        "open": "268.93",
        "high": "268.93",
        "low": "262.80",
        "close": "265.00",
        "volume": "6118146"
    },
    "2013, 1, 24": {
        "open": "268.93",
        "high": "268.93",
        "low": "262.80",
        "close": "265.00",
        "volume": "6118146"
    },
    "2013, 1, 25": {
      "open": "268.93",
      "high": "268.93",
      "low": "262.80",
      "close": "265.00",
      "volume": "6118146"
    },
    "2013, 1, 26": {
        "open": "268.93",
        "high": "268.93",
        "low": "262.80",
        "close": "265.00",
        "volume": "6118146"
    },
    "2013, 1, 27": {
        "open": "268.93",
        "high": "268.93",
        "low": "262.80",
        "close": "265.00",
        "volume": "6118146"
    },
    "2013, 1, 28": {
      "open": "268.93",
      "high": "268.93",
      "low": "262.80",
      "close": "265.00",
      "volume": "6118146"
    },
    "2013, 1, 29": {
        "open": "268.93",
        "high": "268.93",
        "low": "262.80",
        "close": "265.00",
        "volume": "6118146"
    }
}];

constructor(){
  for(let arr of this.jsonData){
       Object.keys(arr) && Object.keys(arr).map((key)=>{
          console.log("push")
          console.log(key)
          console.log(arr[key].open)
          this.jsonDataKeys.push(key);
        });
    }
}

}



