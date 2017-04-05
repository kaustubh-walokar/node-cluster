# node-cluster - WIP
node.js scalable master-worker cluster (with redis probably)
- workers = num of cpus.
## endpoints 
  - POST /users -creates users [see](/routes/users.js)
  - GET /users 

## generate cert-key

```
> openssl genrsa -out client-key.pem 2048
> openssl req -new -key client-key.pem -out client.csr
> openssl x509 -req -in client.csr -signkey client-key.pem -out client-cert.pem
```
## benchmark
+ ran it for the follwing snippet to benchmark the CPU and threading performance and removing I/O out of the equation.

+ results
	- 1.6x hits in aproximately same time
	- 0.5x response time 
	- 1.7x transaction rate.

```javascript
	/* GET users listing. */
	router.get('/:userName', function(req, res, next) {
	  
  // User.findOne({"username":req.params.userName},function(err,u){
  //   if(err){
  //     res.status(404).send({'error':err,'body':req.body});
  //     console.log(err.message, err.stack);
  //     return;
  //   }
  //   console.log(u);
  //   res.send(u);    
  // });
	
	for(var x =0 ;x < 4000 ; x++){}
  	res.send("{'resp':'empty'}");

	});
	
```

### with 4 workers

```
~  siege -c1000 -t13S https://localhost:3000/users/kaustubh > 4node.txt
[alert] Zip encoding disabled; siege requires zlib support to enable it
** SIEGE 4.0.2
** Preparing 255 concurrent users for battle.
The server is now under siege...

Lifting the server siege...
Transactions:		        4012 hits
Availability:		      100.00 %
Elapsed time:		       12.17 secs
Data transferred:	        0.06 MB
Response time:		        0.50 secs
Transaction rate:	      329.66 trans/sec
Throughput:		        0.01 MB/sec
Concurrency:		      163.87
Successful transactions:        4015
Failed transactions:	           0
Longest transaction:	        0.97
Shortest transaction:	        0.14
```

### with 1 worker
```
 ~  siege -c1000 -t13S https://localhost:3000/users/kaustubh > 1node.txt
[alert] Zip encoding disabled; siege requires zlib support to enable it
** SIEGE 4.0.2
** Preparing 255 concurrent users for battle.
The server is now under siege...

Lifting the server siege...
Transactions:		        2486 hits
Availability:		      100.00 %
Elapsed time:		       12.87 secs
Data transferred:	        0.04 MB
Response time:		        1.01 secs
Transaction rate:	      193.16 trans/sec
Throughput:		        0.00 MB/sec
Concurrency:		      195.46
Successful transactions:        2486
Failed transactions:	           0
Longest transaction:	        1.51
Shortest transaction:	        0.13
```

