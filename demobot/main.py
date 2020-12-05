from flask import Flask,request,render_template 
app = Flask(__name__,template_folder="templates")
# @app.route("/")
# def introduce():
#     return "welcome to college"

@app.route('/')
def introduce():
    from .data.about import bot
    from .data.greetings import greet_messages
    return render_template("index.html",data=bot,greet=greet_messages)
@app.route("/message",methods=["POST"])
def user_message():
    if request.method == "POST":
        from .intents import handle
        return handle(request.form)

@app.route("/greeting",methods=["POST"])
def greet_user():
    if request.method == "POST":
        from .intents import greet_user
        return greet_user(request.form)       
        
