package controllers

import (
  //"net/http/httptest"
  "testing"
  "net/http"
  //"fmt"
  //"github.com/gofiber/fiber/v2"
  "github.com/stretchr/testify/assert"
)

// func Test(t *testing.T) {
//   tests := []struct {
//     description  string 
//     route        string 
//     expectedCode int    
//   }{
//     {
//       description:  "get HTTP status 200",
//       route:        "/hello",
//       expectedCode: 200,
//     },
//     {
//       description:  "get HTTP status 404, when route is not exists",
//       route:        "/not-found",
//       expectedCode: 404,
//     },
//   }

//   app := fiber.New()

//   app.Get("/hello", func(c *fiber.Ctx) error {
//     return c.SendString("Hello, World!")
//   })

//   for _, test := range tests {
//     req := httptest.NewRequest("GET", test.route, nil)
//     resp, _ := app.Test(req, 1)

//     assert.Equalf(t, test.expectedCode, resp.StatusCode, test.description)
//   }
// }

func TestApartments(t *testing.T) {
	tests := []struct {
		description  string
		route        string
		expectedCode int
	}{
		{
			description:  "Get HTTP status 200",
			route:        "http://localhost:8080/api/apartments",
			expectedCode: 200,
		},
		{
			description:  "get HTTP status 405, when route is asked for non mentioned request type",
			route:        "http://localhost:8080/api/createApartment",
			expectedCode: 405,
		},
	}
	for _, test:=range tests {
		resp, _ := http.Get(test.route)
		assert.Equalf(t, test.expectedCode, resp.StatusCode, test.description)
	}
}
