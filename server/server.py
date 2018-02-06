import random
from flask import Flask, render_template

app = Flask(__name__,  static_folder="../static/dist", template_folder="../static")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/stock_data")
def hello():
    return get_hello()

def get_hello():
    greetings_list = ['Ciao', 'Hei', 'Salut', 'Hola', 'Hallo']
    return random.choice(greetings_list)

if __name__ == "__main__":
    app.run()