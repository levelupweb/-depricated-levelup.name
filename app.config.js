const config = new function() {
	var config = this;
	this.dev = true;
	this.protocol = "http://"
	this.port = 3000;
	this.host = this.dev ? "127.0.0.1" : "185.22.232.114"; 
	this.root = this.protocol + this.host + ":" + this.port;
	this.APIPort = 3001;
	this.API = this.protocol + this.host + ":" + this.APIPort;
	this.static = this.root + "/static"
	this.storage = this.API + "/storage"
	this.frontend = this.storage + "/frontend";
};

export default config;