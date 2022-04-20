package models

type LeaseInformation struct {
	Email       string `gorm:"unique"`
	Block_No    int
	Apt_No     int
	Room        int
	From_Date   string
	To_Date     string
	Rent        int
}
