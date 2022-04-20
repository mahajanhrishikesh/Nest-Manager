package controllers

import (
	"main/database"
	"main/models"

	"github.com/gofiber/fiber/v2"
)

func CreateLease(c *fiber.Ctx) error {
	var data map[string]interface{}
	if err:=c.BodyParser(&data); err!=nil{
		return err
	}
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
	return c.JSON(lease)
}