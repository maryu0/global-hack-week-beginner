import requests

def get_weather(city):
    # OpenWeatherMap API URL with your API key
    api_key="78f3bf968c07818bca8bcbbb8db2e539"
    url = url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&APPID={api_key}&units=metric"


    # Make a GET request using the elements library
    response = requests.get(url)

    #Check if the request was successful
    if response.status_code==200:
        data=response.json()
        weather=data['weather'][0]['description']
        temp=data['main']['temp']
        print(f"The weather in {city} is {weather} with a temperature of {temp}°C")
    else:
        print(f"Failed to get weather data for {city}. Check the city name or API key.")

# Get city form user
city=input("Enter the city name: ")
get_weather(city)

