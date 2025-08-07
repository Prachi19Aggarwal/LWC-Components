import { LightningElement } from 'lwc';

export default class GreatestOfThreeNumber extends LightningElement {
    numfirst;
    secondNum;
    thirdNum;
    numChange(event) {

        if(event.target.name==='fnum'){
            this.numfirst = event.target.value;

        }
        else if(event.target.name==='snum'){
            this.secondNum = event.target.value;

        }
        else if(event.target.name==='tnum'){
            this.thirdNum = event.target.value;

        }

    }
    FindGreatestNum(event)
    {
        const a = parseInt(this.numfirst);
        const b = parseInt(this.secondNum);
        const c = parseInt(this.thirdNum);
        if(a>b && a>c){
            alert("greatest Number is a" + a);

        }
        else if(b>a && b>c){
            alert("Greatest Number is b");
        }
        else {
            alert("Greatedt Number is c" + c);
        };
    }

}