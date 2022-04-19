package controllers

import (
	"main/database"
	"main/models"

	"github.com/gofiber/fiber/v2"
)

func RegisterApplicant(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	applicant := models.Applicant{
		Fname:    data["fname"],
		Lname:    data["lname"],
		Email:    data["email"],
		Dob:     data["dob"],
		Accepted: 0,
	}

	database.DB.Create(&applicant)

	return c.JSON(applicant)
}

func Applicants(c *fiber.Ctx) error {
	var applicants []models.Applicant
	database.DB.Where("accepted = ?", 0).Find(&applicants)
	return c.JSON(applicants)
}

func AcceptedApplicants(c *fiber.Ctx) error {
	var applicants []models.Applicant
	database.DB.Where("accepted = ?", 1).Find(&applicants)
	return c.JSON(applicants)
}

func SetDecision(c *fiber.Ctx) error {
	var data map[string]interface{}
	var applicant models.Applicant
	if err := c.BodyParser(&data); err != nil {
		return err
	}
	database.DB.Model(&models.Applicant{}).Where("email = ?", data["email"]).Update("accepted", data["accepted"])
	return c.JSON(applicant)
}

// r.POST("/register", func(c *gin.Context) {
// 	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
// 	c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
// 	c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
// 	c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")
// 	reqData, _ := ioutil.ReadAll(c.Request.Body)
// 	var ap Applicant
// 	json.Unmarshal(reqData, &ap)
// 	insertRow := Applicant{Fname: ap.Fname, Lname: ap.Lname, Email: ap.Email, Dob: ap.Dob, Accepted: ap.Accepted}
// 	Db.Create(&insertRow)
// })