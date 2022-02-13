// handle deposit button event
document.getElementById('deposit-button').addEventListener('click',function(){
    // console.log('deposit button clicked')
    // get amount deposited
    const depositInput = document.getElementById('deposit-input');

    const newDepositAmountText = depositInput.value;
    const newDepositAmount=parseFloat(newDepositAmountText)
    
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount =parseFloat(previousDepositText);
    const newDepositTotal =previousDepositAmount + newDepositAmount;
    // console.log(depositTotal.innerText);
    depositTotal.innerText = newDepositTotal;

    // clear the deposit input tag
    depositInput.value ='';

})
