package models

type TenantBilling struct {
	Email          string
	Type_of_Charge string
	Amount         int
	Paid_on        string
	Charged_on     string
	Due_by         string
}