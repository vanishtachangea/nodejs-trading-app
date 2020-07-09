# Nodejs-Trading-Application

A real-time application which will create (and matches) a trade.

## Requirements
 
* A user wants to buy 100g of Gold with bitcoin. 
How would we start this process off, how is the order matched with someone who wants to sell their gold? 

### User Stories

User A requests to buy gold with bitcoin.
The Application find suitable counter parties so that a trade can happen
User A gets information about User B willing to seel his gold with bitcoin
The trade is made. 



### Technical Design and Architecture
1. Use of Websocket for realtime update of information from Server to Client, using socket.io, which uses the Observer Design Pattern.


### Assumptions
We assume that User has already been authenticated on the system. This is not yet implemented.

### How to run the app locally
```sh
npm start
```

### How it works 
User enters his name, the amount of God and clicks on Buy or Sell
The record is broadcasted on the trades table
Another user can click on Sell (If User is selling , the Buy button is enabled)


### Live Version of Application
https://vc-nodejs-trading-app.herokuapp.com/

### Next Steps
1. Work on Algorithm for the total of Gold left is Gold is sold. Calculate the Balance on each party 
2. Implement the Transaction Algorithm e.g. If User A is selling 100 g of Gold at 300 Euro/g, then how much will it cost to the User B to buy 100 g or less amount of Gold. 
2. Unit Testing
3. Frontend using React
4. Style Application
5. Deploy to AWS instead of heroku

### Resources
https://blog.kraken.com/post/3502/better-trading-performance-with-krakens-websockets-private-api-available-february-18/ 
https://blog.shrimpy.io/blog/real-time-websockets-for-cryptocurrency-exchange-trade-data 
https://www.devteam.space/blog/how-to-create-your-own-bitcoin-exchange/ 
https://searchapparchitecture.techtarget.com/tip/Synchronous-vs-asynchronous-communication-The-differences 
https://www.devteam.space/blog/how-to-build-your-own-blockchain-using-node-js/ 
https://www.devteam.space/blog/how-to-create-your-own-bitcoin-exchange/ 
https://github.com/Marfusios/crypto-websocket-extensions 



