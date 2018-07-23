var express = require("express");
var app = express();


//landing page
app.get("/", function(req, res){
	res.render("landing.ejs");
})


//campgrounds list
app.get("/campgrounds", function(req, res){
	var campgrounds = [
		{name: "Mt. San Juan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRHI0jF1PAZ3q9wCCTWgPqNdooNG5pCZj2Se9L8rWO-ClUdp2vw"},
		{name: "Louis River", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqh_-b9CLK0JLEpu3dKpf0ZlbVZwiGw_CSZk4-cH3p0ZZ3e38j0Q"},
		{name: "Turto Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQar4ImG82-rEnz7NXQd8hpru9QQ-psAazFMC1fRtLs1ypfZrc"}
	]

	res.render("campgrounds.ejs", {campgrounds: campgrounds})
})
























app.listen(3000, function(){
	console.log("Server is started");
});