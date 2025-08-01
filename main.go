package main

import (
	"os"
	"strconv"
	"strings"
	"text/template"
	"time"
)

type TemplateData struct {
	Year        int
	ProgressBar string
	Percent     string
	Day         int
	TotalDays   int
}

func generateProgressBar(progress float64, capacity int) string {
	passedBars := int(progress * float64(capacity))
	remainingBars := max(capacity - passedBars - 1, 0)
	bar := strings.Repeat("=", passedBars) + ">" + strings.Repeat(".", remainingBars)
	return "[" + bar + "]"
}

func main() {
	now := time.Now().UTC()
	year := now.Year()
	start := time.Date(year, 1, 1, 0, 0, 0, 0, time.UTC)
	end := time.Date(year, 12, 31, 23, 59, 59, 0, time.UTC)

	progress := float64(now.Sub(start)) / float64(end.Sub(start))
	day := int(now.Sub(start).Hours()/24) + 1
	totalDays := int(end.Sub(start).Hours()/24) + 1
	progressBar := generateProgressBar(progress, 30)

	data := TemplateData{
		Year:        year,
		ProgressBar: progressBar,
		Percent:     strconv.FormatFloat(progress*100, 'f', 2, 64),
		Day:         day,
		TotalDays:   totalDays,
	}

	tmpl, err := template.ParseFiles("assets/template.md")
	if err != nil {
		panic(err)
	}

	file, err := os.Create("README.md")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	if err := tmpl.Execute(file, data); err != nil {
		panic(err)
	}
}
