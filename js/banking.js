// handle deposit button event
document.getElementById('deposit-button').addEventListener('click',function(){
    // console.log('deposit button clicked')
    // get amount deposited
    const depositInput = document.getElementById('deposit-input');

    const newDepositAmountText = depositInput.value;
    const newDepositAmount=parseFloat(newDepositAmountText)
    
    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    console.log(depositTotal)
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount =parseFloat(previousDepositText);
    const newDepositTotal =previousDepositAmount + newDepositAmount;
    // console.log(depositTotal.innerText);
    depositTotal.innerText = newDepositTotal;


    // update account balance
    const balanceTotal =document.getElementById('balance-total');
    console.log(balanceTotal)
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal =parseFloat(balanceTotal) ;
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;






    // clear the deposit input tag
    depositInput.value ='';

})
