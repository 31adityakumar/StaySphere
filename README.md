# StaySphere - Luxury Awaits!

StaySphere is a modern hotel booking platform that allows users to browse luxury hotels, filter room types, and make bookings. The platform is designed to be responsive and user-friendly, offering features like room filtering, booking confirmation, and more.

In addition, StaySphere includes a web scraping feature that gathers hotel data from OYO rooms and stores it in a structured format for easy access and integration.

## Features

- **Hotel Booking**: View and book available luxury rooms with filtering options.
- **Room Filtering**: Filter rooms based on room type such as Economy, Deluxe, Luxury Suite, and Presidential Suite.
- **Scraping Hotel Data**: The project scrapes data about hotels (name, price, room type, and availability) from the OYO rooms website in Bangalore.
- **Responsive Design**: The platform is optimized for both desktop and mobile devices.
- **Interactive UI**: Built with ReactJS to provide a clean and dynamic user interface.

## Technologies Used

- **Frontend**:
  - ReactJS
  - SCSS (CSS Preprocessing)
  - HTML5
  - JavaScript (ES6+)
  - Font Awesome (Icons)
  
- **Backend**:
  - Email Confirmation Service (can be integrated with services like SendGrid, SMTP, etc.)

- **Scraping**:
  - **BeautifulSoup4** for HTML parsing
  - **Requests** for sending HTTP requests
  - **Selenium** for dynamically loaded content
  - Python

- **Tools**:
  - Create React App for frontend development
  - PropTypes for type-checking in React components
  - Python and Selenium for data scraping

## Scraping Functionality

### Overview
This project also includes a web scraping feature implemented in Python, using **Selenium** to collect hotel data from the OYO website for hotels in Bangalore. The scraped data includes:

- Hotel Name
- Price per Night
- Room Type (assumed as "Standard" for simplicity)
- Availability Status

The data is saved in a structured **JSON** format in the `data` directory.

### How the Scraping Script Works

1. **Setup Chrome Options**:
   - Configures Chrome to bypass certificate errors and other security features to allow smooth scraping.
   
2. **WebDriver Initialization**:
   - Uses Selenium's Chrome WebDriver to interact with the website and scrape data.
   
3. **Scraping Process**:
   - Opens the OYO hotels page for Bangalore and waits for the hotel listings to load.
   - Iterates through each hotel listing, extracting details like hotel name, price, and room type.
   
4. **Error Handling**:
   - Includes error handling to skip hotel listings where specific elements might be missing.
   
5. **Data Storage**:
   - The scraped data is saved as a **JSON** file (`room_data.json`) in the `data` directory for easy consumption.

``bash
git clone https://github.com/31adityakumar/StaySphere
cd staysphere
npm install
npm run dev
``

## To scrape data
``bash
.\venv\Scripts\Activate
pip install selenium webdriver-manager requests beautifulsoup4
python scrape_data.py
``