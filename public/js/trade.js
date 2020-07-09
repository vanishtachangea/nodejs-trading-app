const socket = io();

//Elements
const $frmTrade = document.querySelector('#frmTrade');
const $btnSell = document.querySelector('#btnSell');
const $btnBuy = document.querySelector('#btnBuy');
const $trades = document.querySelector('#trades');

//trade template
const tradesTemplate = document.querySelector('#tradeTemplate').innerHTML;


socket.on('message', (message)=>{
    console.log(message);
    const html = Mustache.render(tradesTemplate,{
        message:message

    });
    $trades.insertAdjacentHTML('beforeend',html);

})
$frmTrade.addEventListener('submit',(e)=>{
    e.preventDefault();//prevent default refresh
    //$btnSell.setAttribute('disabled', 'disabled');
    //$btnBuy.setAttribute('disabled', 'disabled');

    const name = e.target.elements.txtName.value;
    const amount = e.target.elements.txtAmount.value;
    const transactionType ="selling";
    socket.emit('sellingGold',{name, transactionType, amount}, (error)=>{
       // $btnSell.removeAttribute('disabled');
       // $btnBuy.removeAttribute('disabled');    
        if(error)
            return console.log(error);
    });
})