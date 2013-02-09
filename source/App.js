enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
    
	components:[
		{kind: "onyx.Toolbar", content: "Hello World"},
		{kind: "enyo.Scroller", classes: "enyo-center", components: [
			{name: "main", classes: "nice-padding", allowHtml: true},
		
            {kind: "onyx.Groupbox", components: [
                {kind: "onyx.GroupboxHeader", content: "IP & Subnet informations"},
                {kind: "onyx.InputDecorator", components: [
                    {kind: "onyx.Input", placeholder: "Enter IP address", onchange:"inputChanged"}
                ]},
                {kind: "onyx.InputDecorator", components: [
                    {kind: "onyx.Input", placeholder: "Enter Subnet Mask", onchange:"inputChanged"}
                ]},
                {kind:"onyx.Button", content: "Calculate", ontap:"calculateTapped", classes: "calculate-button"}
            ]},
            {kind: "onyx.Toolbar", components: [
                {kind: "onyx.Button", content: "Reset", ontap: "resetTap"}
            ]}
        ]},
	],
	resetTap: function(inSender, inEvent) {
		this.$.main.addContent("The button was tapped.<br/>");
	}
});
