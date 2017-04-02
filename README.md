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

