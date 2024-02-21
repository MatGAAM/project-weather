// import axios from "axios"


export const getWeather = () => {
  
    // await axios.get(`https://api.hgbrasil.com/weather?key=688a8890`)
    const response = {
      "by": "woeid",
      "valid_key": true,
      "results": {
        "temp": 20,
        "date": "20/02/2024",
        "time": "18:14",
        "condition_code": "45",
        "description": "Chuva",
        "currently": "dia",
        "cid": "",
        "city": "São Paulo, SP",
        "img_id": "45",
        "humidity": 91,
        "cloudiness": 75,
        "rain": 1.94,
        "wind_speedy": "4.63 km/h",
        "wind_direction": 150,
        "wind_cardinal": "SE",
        "sunrise": "05:57 am",
        "sunset": "06:43 pm",
        "moon_phase": "waxing_gibbous",
        "condition_slug": "rain",
        "city_name": "São Paulo",
        "timezone": "-03:00",
        "forecast": [
          {
            "date": "20/02",
            "weekday": "Ter",
            "max": 26,
            "min": 18,
            "cloudiness": 12,
            "rain": 11.33,
            "rain_probability": 100,
            "wind_speedy": "3.99 km/h",
            "description": "Chuva",
            "condition": "rain"
          },
          {
            "date": "21/02",
            "weekday": "Qua",
            "max": 26,
            "min": 19,
            "cloudiness": 85,
            "rain": 12.97,
            "rain_probability": 98,
            "wind_speedy": "3.69 km/h",
            "description": "Chuva",
            "condition": "rain"
          },
          {
            "date": "22/02",
            "weekday": "Qui",
            "max": 28,
            "min": 19,
            "cloudiness": 1,
            "rain": 6.12,
            "rain_probability": 96,
            "wind_speedy": "3.75 km/h",
            "description": "Chuva",
            "condition": "rain"
          },
          {
            "date": "23/02",
            "weekday": "Sex",
            "max": 29,
            "min": 20,
            "cloudiness": 96,
            "rain": 5.13,
            "rain_probability": 93,
            "wind_speedy": "4.96 km/h",
            "description": "Chuvas esparsas",
            "condition": "rain"
          },
          {
            "date": "24/02",
            "weekday": "Sáb",
            "max": 27,
            "min": 20,
            "cloudiness": 99,
            "rain": 2.65,
            "rain_probability": 93,
            "wind_speedy": "5.06 km/h",
            "description": "Chuvas esparsas",
            "condition": "rain"
          },
          {
            "date": "25/02",
            "weekday": "Dom",
            "max": 29,
            "min": 21,
            "cloudiness": 76,
            "rain": 3.47,
            "rain_probability": 65,
            "wind_speedy": "4.25 km/h",
            "description": "Chuvas esparsas",
            "condition": "rain"
          },
          {
            "date": "26/02",
            "weekday": "Seg",
            "max": 28,
            "min": 20,
            "cloudiness": 75,
            "rain": 7.83,
            "rain_probability": 87,
            "wind_speedy": "2.57 km/h",
            "description": "Chuva",
            "condition": "rain"
          },
          {
            "date": "27/02",
            "weekday": "Ter",
            "max": 31,
            "min": 21,
            "cloudiness": 96,
            "rain": 1.69,
            "rain_probability": 55,
            "wind_speedy": "6.49 km/h",
            "description": "Chuvas esparsas",
            "condition": "rain"
          },
          {
            "date": "28/02",
            "weekday": "Qua",
            "max": 29,
            "min": 22,
            "cloudiness": 100,
            "rain": 8.75,
            "rain_probability": 100,
            "wind_speedy": "4.07 km/h",
            "description": "Chuvas esparsas",
            "condition": "rain"
          },
          {
            "date": "29/02",
            "weekday": "Qui",
            "max": 26,
            "min": 20,
            "cloudiness": 93,
            "rain": 4.11,
            "rain_probability": 96,
            "wind_speedy": "4.66 km/h",
            "description": "Chuvas esparsas",
            "condition": "rain"
          }
        ],
        "cref": "ccb753",
        "latitude": -23.5329,
        "longitude": -46.6395
      },
      "execution_time": 0,
      "from_cache": true
    }
    console.log('response', response)
    return response
  }