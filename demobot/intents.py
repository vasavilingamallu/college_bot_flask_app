def handle(info):
    from flask import render_template
    
    return render_template("messages/greeting.html",data=info)
def greet_user(info):
    from flask import render_template
    return render_template("messages/greeting.html",data=info)