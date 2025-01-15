# Challenge 6: Weather API Application

This project is a simple **Weather Information Application** that fetches and displays real-time weather data for a user-specified city using the OpenWeatherMap API.

## Features

- Get the current weather description.
- Display the current temperature in Celsius.
- Validate city names and handle errors gracefully.

## Prerequisites

- Python 3.6 or higher
- Internet connection
- An API key from [OpenWeatherMap](https://openweathermap.org/)

## Learnings

- How to use the `requests` library to make HTTP requests.
- How to parse JSON data from the API response.
- How to handle errors and exceptions in Python.
- How to use the `try-except` block to catch and handle exceptions.

## Setup and Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/maryu0/global-hack-week-beginner.git
```

### Step 2: Navigate to the challenge folder.

```bash
git cd global-hack-week-beginner/challenge6
```

### Step 3: Install dependencies

```bash
pip install requests
```

### Step 4: Add your api key

Replace "your_openweathermap_api_key" placeholder in API_key with your actual OpenWeatherMap API key.

### Step 5: Running the application

Run the script to check the weather for your desired city:

```bash
python API.py
```
