package controllers

import (
	"main/database"
	"main/models"

	"github.com/gofiber/fiber/v2"
)

func MaintenanceRequest(c *fiber.Ctx) error {
	var maintenanceRequests []models.MaintenanceRequest
	database.DB.Find(&maintenanceRequests)
	return c.JSON(maintenanceRequests)
}

func FetchMaintenance(c *fiber.Ctx) error {
	var mps []models.User
	database.DB.Where("type = ?", "maintenance").Find(&mps)
	return c.JSON(mps)
}

// result := Db.Where("Accepted = ?", 1).Find(&applicants)
