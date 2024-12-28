from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException
from webdriver_manager.chrome import ChromeDriverManager
import os
import json

# Setup Chrome options
chrome_options = Options()
chrome_options.add_argument('--ignore-certificate-errors')
chrome_options.add_argument('--ignore-ssl-errors')
chrome_options.add_argument('--disable-web-security')
chrome_options.add_argument('--disable-blink-features=AutomationControlled')

# Initialize WebDriver
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=chrome_options)

# Create 'data' folder if not exists
os.makedirs('data', exist_ok=True)

# URL to scrape
URL = "https://www.oyorooms.com/hotels-in-bangalore/"
driver.get(URL)

try:
    WebDriverWait(driver, 15).until(
        EC.visibility_of_all_elements_located((By.CLASS_NAME, 'hotelCardListing'))
    )
    hotels = []

    # Extract hotel details
    hotel_cards = driver.find_elements(By.CLASS_NAME, 'hotelCardListing')
    for hotel in hotel_cards:
        try:
            name = hotel.find_element(By.CLASS_NAME, 'listingHotelDescription__hotelName').text.strip()
            price = hotel.find_element(By.CLASS_NAME, 'listingPrice__finalPrice').text.strip()
            hotels.append({
                'hotelName': name,
                'price': price,
                'roomType': "Standard",  # Update dynamically if needed
                'availability': True
            })
        except NoSuchElementException:
            print("Some elements are missing in a hotel card. Skipping...")

    # Save data to JSON
    with open('data/room_data.json', 'w', encoding='utf-8') as f:
        json.dump(hotels, f, indent=4, ensure_ascii=False)

    print("Data successfully scraped and saved to data/room_data.json")

except Exception as e:
    print(f"Error occurred: {e}")

finally:
    driver.quit()
