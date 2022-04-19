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
