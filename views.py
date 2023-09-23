from flask import Blueprint, render_template, request, jsonify, redirect, url_for

views = Blueprint(__name__, "views")


@views.route("/")
def home():
    return render_template("index.html", name="Tim")


@views.route("/profile")
def profile():
    args = request.args
    name = args.get('name')
    return render_template("index.html", name=name)


@views.route("/json")
def get_json():
    return jsonify({'name': 'ssd', 'coolness': '5'})


@views.route("/run-the-script")
def run_script():
    return render_template("callbutton.html")


@views.route("/go-to-home")
def go_to_home():
    return redirect(url_for("views.home"))
