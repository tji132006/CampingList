var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

var campgrounds = [
		{name: "Mt. San Juan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRHI0jF1PAZ3q9wCCTWgPqNdooNG5pCZj2Se9L8rWO-ClUdp2vw"},
		{name: "Louis River", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqh_-b9CLK0JLEpu3dKpf0ZlbVZwiGw_CSZk4-cH3p0ZZ3e38j0Q"},
		{name: "Turto Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQar4ImG82-rEnz7NXQd8hpru9QQ-psAazFMC1fRtLs1ypfZrc"},
		{name: "Mt. San Juan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRHI0jF1PAZ3q9wCCTWgPqNdooNG5pCZj2Se9L8rWO-ClUdp2vw"},
		{name: "Louis River", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqh_-b9CLK0JLEpu3dKpf0ZlbVZwiGw_CSZk4-cH3p0ZZ3e38j0Q"},
		{name: "Turto Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQar4ImG82-rEnz7NXQd8hpru9QQ-psAazFMC1fRtLs1ypfZrc"},
		{name: "Mt. San Juan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRHI0jF1PAZ3q9wCCTWgPqNdooNG5pCZj2Se9L8rWO-ClUdp2vw"},
		{name: "Louis River", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqh_-b9CLK0JLEpu3dKpf0ZlbVZwiGw_CSZk4-cH3p0ZZ3e38j0Q"},
		{name: "Turto Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQar4ImG82-rEnz7NXQd8hpru9QQ-psAazFMC1fRtLs1ypfZrc"}


]

//landing page
app.get("/", function(req, res){
	res.render("landing.ejs");
})


//campgrounds list
app.get("/campgrounds", function(req, res){

	res.render("campgrounds.ejs", {campgrounds: campgrounds})
})

app.post("/campgrounds", function(req, res){
	//get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};

	campgrounds.push(newCampground);
	//redirect back to campgrounds page
	res.redirect("/campgrounds");
});

//create a route to display the form for adding new camp grounds
app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs")
})
 
app.listen(3000, function(){
	console.log("Server is started");
});