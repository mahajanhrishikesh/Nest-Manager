package main

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Name     string
	Username string
	Password string
	Role     string
}

type Applicant struct {
	Fname string
	Lname string
	Email string
	Dob   string
}

type MaintenanceRequest struct {
	Mr_no             int
	Created_on        string
	Issue_description string
	Facility          string
	Issue_tag         string
	Img               string
}
