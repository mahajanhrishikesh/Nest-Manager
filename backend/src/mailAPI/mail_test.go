package mailAPI

import (
	"regexp"
	"testing"
)

// TestHelloName calls greetings.Hello with a name, checking
// for a valid return value.
func TestSendmail(t *testing.T) {
	want := regexp.MustCompile("Successfully sent mail to all user in toList")
	msg, err := SendMail()
	if !want.MatchString(msg) || err != nil {
		t.Fatalf(`SendMail() = %q, %v, want match for %#q, nil`, msg, err, want)
	}
}
