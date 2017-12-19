module.exports = function(RED) {
    function ConfigNode(config) {
        RED.nodes.createNode(this,config);
        
        var node = this;
        node.on('input', function(msg) {
            
            if(!!msg.payload.num)
            {
				msg.payload = (msg.payload.num * msg.payload.num);
				msg.payload = msg.payload + parseInt(config.amount);
			}
			else
			{
				msg.payload = (config.number * config.number);
				msg.payload = msg.payload + parseInt(config.amount);
			}
            
            node.send(msg);
        });
    }
    RED.nodes.registerType("config-node",ConfigNode);
}
