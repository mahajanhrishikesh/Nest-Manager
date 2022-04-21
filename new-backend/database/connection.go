package database

import (
	"main/models"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	connection, err := gorm.Open(sqlite.Open("main.db"), &gorm.Config{})

	if err != nil {
		panic("Could not connect to the database!")
	}

	DB = connection

	connection.AutoMigrate(&models.User{})
	connection.AutoMigrate(&models.Applicant{})
	connection.AutoMigrate(&models.MaintenanceRequest{})
	connection.AutoMigrate(&models.Apartment{})
	connection.AutoMigrate(&models.LeaseInformation{})
	connection.AutoMigrate(&models.TenantBilling{})

}