# Weather Radio

A modern, full-stack weather application built using **ReactJS**, **Vite**, **DaisyUI**, and **Supabase Authentication**. This project allows users to authenticate, input a city and state/region, and retrieve weather forecast data based on the geolocation via external APIs.

---

## Tech Stack

- **Frontend**: ReactJS, Vite, TailwindCSS, DaisyUI
- **Authentication**: Supabase
- **Geolocation API**: [OpenCage Geocoding API](https://opencagedata.com/)
- **Weather API**: [weather.gov API](https://www.weather.gov/documentation/services-web-api)

---

## Features

- User authentication (Sign Up, Login, Logout) using Supabase.
- Add city and state to a personal list.
- Automatic lookup of latitude and longitude via OpenCage API.
- Fetch weather grid data (CWA, gridX, gridY) from weather.gov.
- Retrieve and display a detailed weather forecast.
- Responsive, modern UI using DaisyUI and TailwindCSS.

---

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/weather-lookup-app.git
cd weather-lookup-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root with the following:

```bash
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_OPENCAGE_API_KEY=your-opencage-api-key
```

### 4. Run the app locally
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

---

## API Usage

### OpenCage Geocoding API
Used to get latitude and longitude from city and state.

Example request:
```url
https://api.opencagedata.com/geocode/v1/json?q=CITY+STATE&key=YOUR_API_KEY
```

### weather.gov APIs
- **Grid Lookup**: `https://api.weather.gov/points/{LAT},{LON}`
- **Forecast Retrieval**: `https://api.weather.gov/gridpoints/{CWA}/{gridX},{gridY}/forecast`

All requests to weather.gov include:
```http
User-Agent: (weatherlookup.vercel.app, hacker@bfsio.net)
Accept: application/ld+json
```

---

## Project Structure

```
/src
  /components
    Auth.jsx
    CityInput.jsx
    WeatherList.jsx
  /services
    authService.js
    weatherService.js
  App.jsx
  main.jsx

/public
  index.html

vite.config.js
tailwind.config.js
package.json
README.md
```

---

## Deployment

The application can be easily deployed to platforms such as **Vercel**, **Netlify**, or **Render**.

---

## Future Improvements

- Add user-specific saved locations
- Weather alerts integration
- Dark mode toggle
- Improve error handling and retry logic for external API calls

---

## License

This project is open-sourced under the [MIT License](LICENSE).

---

## Acknowledgements

- [OpenCage Data](https://opencagedata.com/)
- [U.S. National Weather Service (weather.gov)](https://www.weather.gov/)
- [Supabase](https://supabase.com/)
- [DaisyUI](https://daisyui.com/)
- [TailwindCSS](https://tailwindcss.com/)

