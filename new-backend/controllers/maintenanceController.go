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

func AssignPersonnel(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}
	database.DB.Model(&models.MaintenanceRequest{}).Where("mr_no = ?", data["mr_no"]).Update("assigned_personnel", data["email"])
	database.DB.Model(&models.MaintenanceRequest{}).Where("mr_no = ?", data["mr_no"]).Update("status", 1)
	return c.JSON(200)
}

func AssignedMaintenanceRequests(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	var mps []models.MaintenanceRequest
	database.DB.Where("Assigned_personnel = ?", data["email"]).Find(&mps)
	return c.JSON(mps)
}

func CreateMaintenanceRequest(c *fiber.Ctx) error {
	var data map[string]string

	if err:= c.BodyParser(&data); err != nil {
		return err
	}
	mr := models.MaintenanceRequest{
		Mr_no:              0,
		U_email:            data["email"],
		Created_on:         data["created_on"],
		Issue_description:  data["issueDesc"],
		Facility:           data["fName"],
		Issue_tag:          "",
		Img:                "",
		Assigned_personnel: "",
		Status:             0,
	}

	database.DB.Create(&mr)

	return c.JSON(mr)
}

func TenantMaintenanceRequest(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	var mps []models.MaintenanceRequest
	database.DB.Where("u_email = ?", data["email"]).Find(&mps)
	return c.JSON(mps)
}

// result := Db.Where("Accepted = ?", 1).Find(&applicants)
/*
var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)
	user := models.User{
		Name:     data["name"],
		Email:    data["email"],
		Password: password,
		Type:     data["type"],
	}

	database.DB.Create(&user)

	return c.JSON(user)
*/

/*
reqData, _ := ioutil.ReadAll(c.Request.Body)
		var ap Applicant
		json.Unmarshal(reqData, &ap)
		// delRow := Applicant{Email: ap.Email, Accepted: ap.Accepted}
		Db.Model(&Applicant{}).Where("email = ?", ap.Email).Update("accepted", ap.Accepted)
*/
