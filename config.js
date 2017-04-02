var config = {};

config.db={
	url : 'localhost',
	port : '27017',
	name : 'node-cluster'
}

config.https={ 
	key : './cert/client-key.pem',
	cert : './cert/client-cert.pem'
}

module.exports = config;