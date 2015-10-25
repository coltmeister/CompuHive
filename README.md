**CompuHive** is an easy-to-implement JavaScript library that allows a client to harness an enormous amount of processing power from *millions* of personal computers. High traffic websites will allow Compuhive to run a script in the background of the browser, enabling the client to break-down high volume computations into smaller partitions and distribute them amongst the users of the host page. This process will be virtually unobtrusive to all parties involved.

![alt tag2](http://i.imgur.com/h8wDUwE.png)


####How it works

>CompuHive servers host the main JavaScript file so that the only step the client needs to take is referencing the script remotely in their HTML template.
The client starts the CompuHive service with the command chive.start() anywhere in their JavaScript code


####User end

>User receives a job from CompuHive’s secure servers
This job object has three attributes which are function name, job data json, return address
CompuHive inputs the job data json into the function specified
CompuHive sends the user’s completed results to the specified endpoint


####Server end

>The CompuHive function must be thoroughly reviewed to verified there are no security issues such as a DDOS attack or BitCoin mining or other malicious intents
CompuHive receives the raw data from the client
CompuHive partitions the raw data into subsets that are then sent to the user
The servers receive and organize the computed data from the users computer


####Business applications

1. Scientific research
2. Data analysis
  1. Parsing data (such as webpages)
  2. Sales analytics/User analytics
3. Sorting
4. Random data - In some scientific simulation computer programs random data is used to act as real phenomenon such as radio noise and day to day weather. These programs can be better simulated using these random numbers. Automatic random number generators were first used to carry out computer simulations of neutron transport in nuclear fission, more complicated situations are simulations of population genetics or the behavior of subatomic particles. These simulation methods are often called stochastic methods.
