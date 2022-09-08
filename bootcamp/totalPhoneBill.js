
export default function totalPhoneBill(dataCost){
let totalDataCost = dataCost.split(',');
  let callSms = 0;
  for(var i = 0; i<totalDataCost.length;i++){
    var totalDataCost2 = totalDataCost[i].trim();
  if ( totalDataCost2.startsWith('c')){
  callSms += 2.75
  }
  else if(totalDataCost2.startsWith('s')){
  callSms += 0.65
  }
}
return 'R' + callSms.toFixed(2)
}