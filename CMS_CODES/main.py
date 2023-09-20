from flask import Flask, render_template, redirect, url_for, flash, request, session
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from forms import RegisterPatientForm, PatientLoginForm, DoctorLoginForm, AdminLoginForm, RegisterDoctorForm, ConfirmAppointmentForm
from flask_login import LoginManager, login_user, UserMixin, logout_user, current_user
from flask_mail import Mail, Message


app = Flask(__name__)
app.app_context().push()
app.config['SECRET_KEY'] = '09144228463Fa'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///main.db'
mail = Mail(app)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'clinic.tabrizuni@gmail.com'
app.config['MAIL_PASSWORD'] = 'bpjonlmufrsaqsef'
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)