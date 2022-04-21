package routes

import (
	"main/controllers"

	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {

	app.Post("/api/register", controllers.Register)
	app.Post("/api/login", controllers.Login)
	app.Post("/api/logout", controllers.Logout)
	app.Post("/api/assign-personnel", controllers.AssignPersonnel)
	app.Get("/api/user", controllers.User)
	app.Get("/api/maintenance-request", controllers.MaintenanceRequest)
	app.Post("/api/create-maintenance-request", controllers.CreateMaintenanceRequest)
	app.Get("/api/get-maintenance-personnel", controllers.FetchMaintenance)
	app.Post("/api/assigned-maintenance-requests", controllers.AssignedMaintenanceRequests)
	app.Post("/api/tenant-maintenance-requests", controllers.TenantMaintenanceRequest)

	//Applicant Routes
	app.Get("/api/applicants", controllers.Applicants)
	app.Get("/api/acceptedApplicants", controllers.AcceptedApplicants)
	app.Post("/api/registerApplicant", controllers.RegisterApplicant)
	app.Post("/api/setDecision", controllers.SetDecision)

	//Apartment Routes
	app.Post("/api/createApartment", controllers.CreateApartment)
	app.Get("/api/apartments", controllers.Apartments)

	//Lease Routes
	app.Post("/api/createLease", controllers.CreateLease)

	//Payment routes
	app.Post("/api/getDues", controllers.GetDues)
	app.Post("/api/updateRent", controllers.UpdateRent)
}
