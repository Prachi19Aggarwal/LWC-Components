export default class FirstClassComponent extends LightningElement {
num1;
num2;
result=0;
       changeFirstNum(event)
{
    this.num1=event.target.value;
}
changeSecondNum(event)
{
    this.num2=event.target.value;
}
addTwonumbers(event)
{
    this.result=parseInt(this.num1)+parseInt(this.num2);
}

}