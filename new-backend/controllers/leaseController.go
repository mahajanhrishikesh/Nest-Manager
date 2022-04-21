package controllers

import (
	"bytes"
	"encoding/json"
	"log"
	"main/database"
	"main/models"
	"net/http"

	"github.com/gofiber/fiber/v2"
)

func Leases(c *fiber.Ctx) error {
	var lis []models.LeaseInformation
	database.DB.Find(&lis)
	return c.JSON(lis)
}

func CreateLease(c *fiber.Ctx) error {
	var data map[string]interface{}
	if err:=c.BodyParser(&data); err!=nil{
		return err
	}

	var applicant models.Applicant;
	database.DB.Where("email = ?", data["email"]).Find(&applicant)

	lease := models.LeaseInformation{
		Email:       data["email"].(string),
		Block_No:    int(data["block_no"].(float64)),
		Apt_No:     int(data["apt_no"].(float64)),
		Room:        int(data["room"].(float64)),
		From_Date:   data["from_date"].(string),
		To_Date:     data["to_date"].(string),
		Rent:        int(data["rent"].(float64)),
	}
	database.DB.Create(&lease)

	fullName := applicant.Fname +" "+ applicant.Lname
	values := map[string]string{"name": fullName, "email": data["email"].(string), "password":"test123", "type":"tenant"}
    json_data, err := json.Marshal(values)

    if err != nil {
        log.Fatal(err)
    }

	http.Post("http://localhost:8080/api/register", "application/json", bytes.NewBuffer(json_data))
	database.DB.Model(&models.Applicant{}).Where("email = ?", data["email"]).Update("accepted", 2)

	return c.JSON(lease)
}

func GetUnit(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	var li []models.LeaseInformation
	database.DB.Where("email = ?", data["email"]).Find(&li)
	return c.JSON(li)
}