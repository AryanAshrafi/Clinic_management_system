from flask import Flask, render_template, redirect, url_for, flash, request, session
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from forms import RegisterPatientForm, PatientLoginForm, DoctorLoginForm, AdminLoginForm, RegisterDoctorForm, ConfirmAppointmentForm
from flask_login import LoginManager, login_user, UserMixin, logout_user, current_user
from flask_mail import Mail, Message