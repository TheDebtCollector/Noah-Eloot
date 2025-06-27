
import requests
import time

def get_price(token_id="bitcoin"):
    url = f"https://api.coingecko.com/api/v3/simple/price?ids={token_id}&vs_currencies=usd"
    response = requests.get(url)
    return response.json()[token_id]['usd']

if __name__ == "__main__":
    print("Tracking BTC price (Ctrl+C to stop)...")
    while True:
        try:
            price = get_price("bitcoin")
            print(f"Current BTC Price: ${price}")
            time.sleep(60)  # updates every minute
        except KeyboardInterrupt:
            print("Stopped.")
            break
