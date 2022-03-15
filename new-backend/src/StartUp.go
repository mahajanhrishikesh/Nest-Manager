package main

import (
	"gorm.io/gorm"
)

func StartUp(Db *gorm.DB, err error) {
	if err != nil {
		panic("Failed to connect database")
	}

	Db.AutoMigrate(&User{})
	Db.AutoMigrate(&Applicant{})
	Db.AutoMigrate(&MaintenanceRequest{})

	Db.Create(&User{Name: "Admin", Username: "Admin", Password: "test", Role: "admin"})

}
