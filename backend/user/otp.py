import requests
url_send = 'https://api.limosms.com/api/sendcode'
url_get = 'https://api.limosms.com/api/checkcode'
API_KEY = "259b6a80-f8da-4de1-b547-2a3f8e2f2900"
def send_otp(user):
    text = {
        "Mobile" : user.mobile ,
        "Footer" : "کد ورود "
    }
    x = requests.post(url=url_send,json=text,headers={"ApiKey":API_KEY})
    print(x.status_code)
def get_result(mobile,otp):
    json = {
        "Mobile" : mobile , 
        "Code" : otp
    }
    result = requests.post(url_get,json=json,headers={"ApiKey":API_KEY})
    return result