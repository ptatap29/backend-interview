//Requiring basic module
const express = require("express")
const router =  express.Router();

const {createServices , getAllServices ,updateServices,deleteServices} = require("../controlers/service")


//router for creating service
router.post("/create_services" , createServices);

//router to get all service
router.get("/get_all_services" , getAllServices)

//router to update a services
router.put("/update_services/:id" , updateServices)

//router to delete a services
router.put("/delete_services/:id" , deleteServices)


module.exports = router


