package controllers

import (
  	"testing"
  	"net/http"
  	"bytes"
	"encoding/json"
	"log"
  	"github.com/stretchr/testify/assert"
	"fmt"
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

func TestRegister(t *testing.T) {
	fmt.Println("Setting up a fake user for testing the auth")
	values := map[string]string{"name": "testuser", "email": "test@test.com", "password":"test123", "type":"tenant"}
    json_data, err := json.Marshal(values)

    if err != nil {
        log.Fatal(err)
    }

	resp, _ := http.Post("http://localhost:8080/api/register", "application/json", bytes.NewBuffer(json_data))

	
	assert.Equalf(t, 200, resp.StatusCode, "Create a User Successfully")
}

func TestLogin(t *testing.T) {
	fmt.Println("Trying to login with false password")
	values := map[string]string{"email": "test@test.com", "password":"test1234"}
    json_data, err := json.Marshal(values)

    if err != nil {
        log.Fatal(err)
    }

	resp, _ := http.Post("http://localhost:8080/api/login", "application/json", bytes.NewBuffer(json_data))

	
	assert.Equalf(t, 400, resp.StatusCode, "Try to login with wrong password")
}

func TestLogin2(t *testing.T) {
	fmt.Println("Trying to login with correct password")
	values := map[string]string{"email": "test@test.com", "password":"test123"}
    json_data, err := json.Marshal(values)

    if err != nil {
        log.Fatal(err)
    }

	resp, _ := http.Post("http://localhost:8080/api/login", "application/json", bytes.NewBuffer(json_data))

	
	assert.Equalf(t, 200, resp.StatusCode, "Try to login with correct password")
}
