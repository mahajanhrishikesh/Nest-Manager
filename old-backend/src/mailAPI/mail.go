package mailAPI

import (
	"fmt"
	"log"
	"net/smtp"
	"os"

	"github.com/joho/godotenv"
)

func SendMail() (string, error) {
	err2 := godotenv.Load("vars.env")
	if err2 != nil {
		log.Fatalf("Error loading .env file")
	}
	from := os.Getenv("MAIL")
	password := os.Getenv("PASSWD")

	//demo receiver email address
	toList := []string{"mahajanhm4@gmail.com"}

	//gmail smtp server
	host := "smtp.gmail.com"
	//Default smtp port
	port := "587"

	msg := "Hello! Thanks for filling out the application!!"

	body := []byte(msg)

	//Step 1: Authentication
	auth := smtp.PlainAuth("", from, password, host)

	//Sending the mail
	err := smtp.SendMail(host+":"+port, auth, from, toList, body)
	//Checking for errors
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	// fmt.Println()
	return "Successfully sent mail to all user in toList", err
}
