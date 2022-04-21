package controllers

import (
	"main/database"
	"main/models"

	"github.com/gofiber/fiber/v2"
)

func GetDues(c *fiber.Ctx) error {
	var tenantbilling []models.TenantBilling
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	// fmt.Println(data["email"])
	database.DB.Where("email = ?",data["email"]).Where("paid_on = ?", "-").Find(&tenantbilling)
	return c.JSON(tenantbilling)
}
func UpdateRent(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}
	database.DB.Model(&models.TenantBilling{}).Where("email = ?", data["email"]).Where("type_of_charge","rent").Where("paid_on","-").Update("paid_on", data["paid_on"])
	database.DB.Model(&models.TenantBilling{}).Where("email = ?", data["email"]).Where("type_of_charge","utility").Where("paid_on","-").Update("paid_on", data["paid_on"])
	
	return c.JSON(200)
}