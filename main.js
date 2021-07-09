'use strict';

const bulbInput = document.getElementById('blub');
const fanInput = document.getElementById('fan');
const pcInput = document.getElementById('computer');


const bulbUsageQty = document.getElementById('bulb-usage-qty');
const fanUsageQty = document.getElementById('fan-usage-qty');
const pcUsageQty = document.getElementById('pc-usage-qty');

const forBulbBtn = document.getElementById('for-bulb');
const forFanBtn = document.getElementById('for-fan');
const forPcBtn = document.getElementById('for-pc')

const bulbCalc = document.getElementById('bulb-calc'); 
const fanCalc = document.getElementById('fan-calc');
const pcCalc = document.getElementById('pc-calc')

const bulbWattQty = document.getElementById('bulb-watt-qty');
const fanWattQty = document.getElementById('fan-watt-qty');
const pcWattQty = document.getElementById('pc-watt-qty');


const bulbPakWattQty = document.getElementById('bulb-pak-watt-qty').value;
const fanPakWattQty = document.getElementById('fan-pak-watt-qty').value;
const pcPakWattQty = document.getElementById('pc-pak-watt-qty').value;

const forPakBulbBtn = document.getElementById('for-pak-bulb');
const forPakFanBtn = document.getElementById('for-pak-fan');
const forPakPcBtn = document.getElementById('for-pak-pc');

const pakBulbCalc = document.getElementById('pak-bulb-calc');
const pakFanCalc = document.getElementById('pak-fan-calc');
const pakPcCalc = document.getElementById('pak-pc-calc');

/*
ex watt / 1000 * usage hours * qty
*/


const bulbExistingCalculation = () => {
    const result = bulbWattQty.value/1000 * bulbUsageQty.value * bulbInput.value;
    bulbCalc.value = Math.round(result);
    bulbWattQty.value = bulbUsageQty.value = bulbInput.value = '';
}
forBulbBtn.addEventListener('click', bulbExistingCalculation);


const fanExistingCalculation = () => {
    const result = fanWattQty.value / 1000 * fanUsageQty.value * fanInput.value;
    fanCalc.value = Math.round(result);
    fanWattQty.value = fanUsageQty.value = fanInput.value = '';
}
forFanBtn.addEventListener('click', fanExistingCalculation);

const pcExistingCalculation = () => {
    const result = pcWattQty.value / 1000 * pcUsageQty.value * pcInput.value;
    pcCalc.value = Math.round(result);
    pcWattQty.value = pcUsageQty.value = pcInput.value = '';
}
forPcBtn.addEventListener('click', pcExistingCalculation)


//////// for pak watt wty

const bulbExistingPakCalculation = () => {
    const result = +bulbPakWattQty/1000 * bulbUsageQty.value * bulbInput.value;
    pakBulbCalc.value = Math.round(result);
    bulbUsageQty.value = bulbInput.value = '';
}
forPakBulbBtn.addEventListener('click', bulbExistingPakCalculation);

const FanExistingPakCalculation = () => {
    const result = +fanPakWattQty/1000 * fanUsageQty.value * fanInput.value;
    pakFanCalc.value = Math.round(result);
    fanUsageQty.value = fanInput.value = '';ss
}
forPakFanBtn.addEventListener('click', FanExistingPakCalculation);

const PcExistingPakCalculation = () => {
    const result = +pcPakWattQty /1000 * pcUsageQty.value * pcInput.value;
    pakPcCalc.value = Math.round(result);
    pcUsageQty.value = pcInput.value = '';
}
forPakPcBtn.addEventListener('click', PcExistingPakCalculation);