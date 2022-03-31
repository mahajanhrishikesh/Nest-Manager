package main

import (
	"encoding/json"
	"io/ioutil"

	"github.com/gin-gonic/gin"
)

func register(c *gin.Context) {
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
	c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")
	reqData, _ := ioutil.ReadAll(c.Request.Body)
	var ap Applicant
	json.Unmarshal(reqData, &ap)
	insertRow := Applicant{Fname: ap.Fname, Lname: ap.Lname, Email: ap.Email, Dob: ap.Dob}
	Db.Create(&insertRow)
}
