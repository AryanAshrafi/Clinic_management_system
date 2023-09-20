from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import Length, EqualTo, Email, DataRequired, ValidationError


class RegisterPatientForm(FlaskForm):
    name = StringField(label = 'نام و نام خانوادگی', validators = [Length(min = 2, max = 30), DataRequired()])
    national_number = StringField(label = 'کدملی', validators = [Length(min = 10, max = 10), DataRequired()])
    email_address = StringField(label = 'ایمیل', validators = [Email(), DataRequired()])
    password1 = PasswordField(label = 'رمز عبور', validators = [Length(min = 8, max = 30), DataRequired()])
    password2 = PasswordField(label = 'تایید پسورد', validators = [EqualTo('password1'), DataRequired()])