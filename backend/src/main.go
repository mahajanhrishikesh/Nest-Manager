// Commands to run before running this:
/*
sudo apt update
sudo apt install sqlite3
go get -u gorm.io/gorm
go get -u gorm.io/driver/sqlite
go get -u github.com/gin-gonic/gin
*/

package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

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

type LoginRequest struct {
	Username string `json: "username"`
	Password string `json: "password"`
}

func main() {
	Db, err := gorm.Open(sqlite.Open("rms.db"), &gorm.Config{})

	StartUp(Db, err)
	r := gin.Default()
	r.GET("/ping/:phrase", func(c *gin.Context) {
		phrase := c.Param("phrase")
		c.String(http.StatusOK, phrase)
	})

	var user User
	r.POST("/login", func(c *gin.Context) {
		reqData, _ := ioutil.ReadAll(c.Request.Body)
		var lr LoginRequest
		json.Unmarshal(reqData, &lr)
		Db.First(&user, "username = ?", lr.Username).Scan(&user)
		if user.Password == lr.Password {
			c.String(http.StatusOK, "Login Passed")
		} else {
			c.String(http.StatusOK, "Login Failed")
		}
	})
	fmt.Println("Starting server...")
	r.Run()

}
