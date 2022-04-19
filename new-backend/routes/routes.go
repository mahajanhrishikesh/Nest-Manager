package routes

import (
	"main/controllers"

	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {

	app.Post("/api/register", controllers.Register)
	app.Post("/api/login", controllers.Login)
	app.Post("/api/logout", controllers.Logout)
	app.Get("/api/user", controllers.User)
	app.Get("/api/maintenance-request", controllers.MaintenanceRequest)
	app.Get("/api/get-maintenance-personnel", controllers.FetchMaintenance)

}
