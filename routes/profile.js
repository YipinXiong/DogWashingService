var express = require("express");
var router  = express.Router();
var Profile = require("../models/profile");
var middleware = require("../middleware");


//CREATE - add new Profile to DB
router.post("/", middleware.isLoggedIn, function(req, res){
    // get data from form and add to Profiles array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newProfile = {name: name, image: image, description: desc, author:author}
    // Create a new Profile and save to DB
    Profile.create(newProfile, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to Profiles page
            console.log(newlyCreated);
            res.redirect("/Profiles");
        }
    });
});

//NEW - show form to create new Profile
router.get("/:userid/new", middleware.isLoggedIn, function(req, res){
   res.render("profile/new"); 
});

// SHOW - shows more info about one Profile
router.get("/:userid", function(req, res){
    //find the Profile with provided ID
    Profile.findById(req.params.id).populate("comments").exec(function(err, foundProfile){
        if(err){
            console.log(err);
        } else {
            console.log(foundProfile)
            //render show template with that Profile
            res.render("profiles/show", {Profile: foundProfile});
        }
    });
});

// EDIT Profile ROUTE
router.get("/:id/edit", middleware.checkProfileOwnership, function(req, res){
    Profile.findById(req.params.id, function(err, foundProfile){
        res.render("Profiles/edit", {Profile: foundProfile});
    });
});

// UPDATE Profile ROUTE
router.put("/:id",middleware.checkProfileOwnership, function(req, res){
    // find and update the correct Profile
    Profile.findByIdAndUpdate(req.params.id, req.body.Profile, function(err, updatedProfile){
       if(err){
           res.redirect("/Profiles");
       } else {
           //redirect somewhere(show page)
           res.redirect("/Profiles/" + req.params.id);
       }
    });
});

// DESTROY Profile ROUTE
router.delete("/:id",middleware.checkProfileOwnership, function(req, res){
   Profile.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/Profiles");
      } else {
          res.redirect("/Profiles");
      }
   });
});


module.exports = router;

