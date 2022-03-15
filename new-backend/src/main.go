package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Name     string
	Username string
	Password string
	Role     string
}

type Applicant struct {
	Fname string
	Lname string
	Email string
	Dob   string
}

type MaintenanceRequest struct {
	Mr_no             int
	Created_on        string
	Issue_description string
	Facility          string
	Issue_tag         string
	Img               string
}

type LoginRequest struct {
	Username string `json: "username"`
	Password string `json: "password"`
}

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
	r.GET("/ping/:phrase", func(c *gin.Context) {
		phrase := c.Param("phrase")
		c.String(http.StatusOK, phrase)
	})

	var user User
	r.POST("/login", func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")
		reqData, _ := ioutil.ReadAll(c.Request.Body)
		var lr LoginRequest
		json.Unmarshal(reqData, &lr)
		Db.First(&user, "username = ?", lr.Username).Scan(&user)
		if user.Password == lr.Password {
			c.String(http.StatusOK, "{'login': 'success'}")
		} else {
			c.String(http.StatusOK, "{'login': 'failed'}")
		}
	})

	r.POST("/register", func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")
		reqData, _ := ioutil.ReadAll(c.Request.Body)
		var ap Applicant
		json.Unmarshal(reqData, &ap)
		insertRow := Applicant{Fname: ap.Fname, Lname: ap.Lname, Email: ap.Email, Dob: ap.Dob}
		Db.Create(&insertRow)
	})

	r.GET("/getAllApplicants", func(c *gin.Context) {
		var applicants []Applicant
		result := Db.Find(&applicants)
		fmt.Println(result)
		c.JSON(200, applicants)
	})

	r.GET("/maintenanceRequests", func(c *gin.Context) {
		var maintenanceRequests []MaintenanceRequest
		result := Db.Find(&maintenanceRequests)
		fmt.Println(result)
		c.JSON(200, maintenanceRequests)
	})

	fmt.Println("Starting server...")
	r.Run()

}
