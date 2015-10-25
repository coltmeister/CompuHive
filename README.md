**CompuHive** is an easy-to-implement JavaScript library that allows a client to harness an enormous amount of processing power from *millions* of personal computers. High traffic websites will allow Compuhive to run a script in the background of the browser, enabling the client to break-down high volume computations into smaller partitions and distribute them amongst the users of the host page. This process will be virtually unobtrusive to all parties involved.

![alt tag2](http://i.imgur.com/h8wDUwE.png)


####How it works

>CompuHive servers host the main JavaScript file and HTML file so that the only step the client needs to take is referencing the file remotely, somewhere in their HTML (as an iframe object).


####User end

>User receives a function from CompuHive’s secure servers. This function is written by one of CompuHive's clients, such as a 
university researcher or a big-data company. The function runs in a sandboxed environment, so that it can have no reaction
with the main window of the webpage. These functions will be capable of sending and receiving data from HTTP endpoints. 
CompuHive provides a built-in HTTP library for handling these requests asynchronously. Once the function completes, its result can be sent back to the client through this HTTP library.


####Server end

>The CompuHive function must be thoroughly reviewed to verify that there are no security threats, such as a DDOS attack, BitCoin mining, or any other malicious intent. Once the function has been reviewed, it will be added to an array of functions inside of the remote compuhive.js script, so that users will run the script once they visit the website. 


####Business applications

1. Scientific research
2. Data analysis
  1. Parsing data (such as webpages)
  2. Sales analytics/User analytics
3. Sorting
4. Random data - In some scientific simulation computer programs random data is used to act as real phenomenon such as radio noise and day to day weather. These programs can be better simulated using these random numbers. Automatic random number generators were first used to carry out computer simulations of neutron transport in nuclear fission, more complicated situations are simulations of population genetics or the behavior of subatomic particles. These simulation methods are often called stochastic methods.
