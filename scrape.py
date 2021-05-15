from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json
import time
Path = "C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(Path)  # Optional argument, if not specified will search path.
driver.get("https://www.tripadvisor.fr/Search?q=sousse&searchSessionId=4C3A7FAC99D0C3ECD1B718FC1AD2EA581620350236513ssid&sid=AE02D0E88A864AD7B54EC5A3CFAA4D441620350251975&blockRedirect=true&ssrc=h&geo=1&rf=2")
print(driver.title)

try:
    main = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "result-title"))
    )
    with open('data.json', 'a') as json_file:
        newTitles = main.find_elements(By.XPATH,
                                                                    '//*[contains(concat( " ", @class, " " ), concat( " ", "result-title", " " ))]')
        data = []



        articles = main.find_elements(By.XPATH,'//*[contains(concat( " ", @class, " " ), concat( " ", "location-meta-block", " " ))]')
        print(len(articles))

        for article in articles:
            title = article.find_element_by_tag_name("span")
            print(title.text)
            note = article.find_element_by_class_name("review_count")
            print(note.text)
            address = article.find_element_by_class_name("address-text")
            print(address.text)

            data.append({
                "title": title.text,
                "note": note.text,
                "address": address.text

            })





        json.dump(data, json_file)



finally:
    json_file.close()
    driver.quit()