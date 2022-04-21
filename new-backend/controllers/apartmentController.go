package controllers

import (
	"main/database"
	"main/models"

	"github.com/gofiber/fiber/v2"
)

func CreateApartment(c *fiber.Ctx) error {
	var data map[string]interface{}

	if err:= c.BodyParser(&data); err != nil {
		return err
	}
	apartment := models.Apartment{
		Apt_No:           int(data["apt_no"].(float64)),//data["apt_no"],
		Block_No:         int(data["block_no"].(float64)),//data["block_no"],
		Room_Count:       int(data["room_count"].(float64)),//data["room_count"],
		Occupancy:        int(data["occupancy"].(float64)),//data["occupancy"],
		Furniture_Status: data["furniture_status"].(string),
	}

	database.DB.Create(&apartment)

	return c.JSON(apartment)
}

func Apartments(c *fiber.Ctx) error {
	var apartments []models.Apartment
	database.DB.Find(&apartments)
	return c.JSON(apartments)
}

func DeleteApartment(c *fiber.Ctx) error {
	var data map[string]int
	delRow := models.Apartment{
		Apt_No: data["Apt_No"],
		Block_No: data["Block_No"],
	}
	database.DB.Where("Apt_No = ?", delRow.Apt_No).Where("Block_No = ?", delRow.Block_No).Delete(&delRow)
	return c.JSON(data)
}