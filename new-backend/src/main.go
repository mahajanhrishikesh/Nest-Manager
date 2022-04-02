package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func main() {
	Db, err := gorm.Open(sqlite.Open("main.db"), &gorm.Config{})

	StartUp(Db, err)
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Content-Type"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "https://localhost:3000"
		},
	}))

	r.GET("/getAllApplicants", func(c *gin.Context) {
		var applicants []Applicant
		result := Db.Where("Accepted = ?", 0).Find(&applicants)
		fmt.Println(result)
		c.JSON(200, applicants)
	})

	r.GET("/getAcceptedApplicants", func(c *gin.Context) {
		var applicants []Applicant
		result := Db.Where("Accepted = ?", 1).Find(&applicants)
		fmt.Println(result)
		c.JSON(200, applicants)
	})

	r.GET("/maintenanceRequests", func(c *gin.Context) {
		var maintenanceRequests []MaintenanceRequest
		result := Db.Find(&maintenanceRequests)
		fmt.Println(result)
		c.JSON(200, maintenanceRequests)
	})

	r.POST("/register", func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")
		reqData, _ := ioutil.ReadAll(c.Request.Body)
		var ap Applicant
		json.Unmarshal(reqData, &ap)
		insertRow := Applicant{Fname: ap.Fname, Lname: ap.Lname, Email: ap.Email, Dob: ap.Dob, Accepted: ap.Accepted}
		Db.Create(&insertRow)
	})

	r.POST("/createApartment", func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")
		reqData, _ := ioutil.ReadAll(c.Request.Body)
		var ap Apartment
		json.Unmarshal(reqData, &ap)
		insertRow := Apartment{Apt_No: ap.Apt_No, Block_No: ap.Block_No, Room_Count: ap.Room_Count, Furniture_Status: ap.Furniture_Status, Occupancy: 0}
		Db.Create(&insertRow)
	})

	r.POST("/removeApartment", func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")
		reqData, _ := ioutil.ReadAll(c.Request.Body)
		var adr Apartment
		json.Unmarshal(reqData, &adr)
		delRow := Apartment{Apt_No: adr.Apt_No, Block_No: adr.Block_No}
		Db.Where("Apt_No = ?", adr.Apt_No).Where("Block_No = ?", adr.Block_No).Delete(&delRow)
	})

	r.POST("/setDecision", func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")
		reqData, _ := ioutil.ReadAll(c.Request.Body)
		var ap Applicant
		json.Unmarshal(reqData, &ap)
		// delRow := Applicant{Email: ap.Email, Accepted: ap.Accepted}
		fmt.Print(ap.Accepted)
		fmt.Print(ap.Email)
		Db.Model(&Applicant{}).Where("email = ?", ap.Email).Update("accepted", ap.Accepted)
	})

	r.GET("/getAllApartments", func(c *gin.Context) {
		var apartments []Apartment
		result := Db.Find(&apartments)
		fmt.Println(result)
		c.JSON(200, apartments)
	})

	// r.GET("/getFacilities", func(c *gin.Context) {
	// 	var facilities []Facilities
	// 	result := Db.Find(&facilities)
	// 	fmt.Println(result)
	// 	c.JSON(200, facilities)
	// })

	fmt.Println("Starting server...")
	r.Run()

}
