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
    "fmt"
    "net/http"
    "github.com/gin-gonic/gin"
    //"gorm.io/gorm"
    //"gorm.io/driver/sqlite"
)

func main() {

    fmt.Println("Starting up...")
    r := gin.Default()
	r.GET("/ping/:phrase/*action", func(c *gin.Context) {
	    phrase:=c.Param("phrase")
		c.String(http.StatusOK, phrase)
	})
	r.Run()
}
