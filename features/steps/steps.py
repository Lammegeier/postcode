from behave import given, when, then
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
import time

def initialize_browser(context):
    chromedriver_path = ChromeDriverManager().install()
    options = Options()
    # Comment out or remove the following line to run in non-headless mode
    # options.add_argument("--headless")
    options.add_argument("--disable-gpu")
    options.add_argument("--window-size=1920,1080")
    context.browser = webdriver.Chrome(service=Service(chromedriver_path), options=options)

@given('a user inputs a postcode "{postcode}"')
def step_input_postcode(context, postcode):
    initialize_browser(context)
    context.browser.get('http://localhost:8000/index.html')
    time.sleep(2)  # Ensure page is loaded
    postcode_input = context.browser.find_element("id", "postcode")
    postcode_input.send_keys(postcode)

@when('the user performs a postcode search')
def step_perform_search(context):
    submit_button = context.browser.find_element("xpath", '//button[contains(text(), "Search")]')
    submit_button.click()
    time.sleep(2)  # Wait for results to display

@then('the application should display geographical information')
def step_verify_geographical_info(context):
    output_element = context.browser.find_element("id", "output")
    assert 'Geographical Information' in output_element.text
    context.browser.quit()

@then('the application should display a message indicating the postcode was not found')
def step_verify_invalid_postcode_message(context):
    output_element = context.browser.find_element("id", "output")
    assert 'Postcode not found' in output_element.text
    context.browser.quit()

