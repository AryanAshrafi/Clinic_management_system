from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import Length, EqualTo, Email, DataRequired, ValidationError


class RegisterPatientForm(FlaskForm):
    name = StringField(label = 'نام و نام خانوادگی', validators = [Length(min = 2, max = 30), DataRequired()])
    national_number = StringField(label = 'کدملی', validators = [Length(min = 10, max = 10), DataRequired()])
    email_address = StringField(label = 'ایمیل', validators = [Email(), DataRequired()])
    password1 = PasswordField(label = 'رمز عبور', validators = [Length(min = 8, max = 30), DataRequired()])
    password2 = PasswordField(label = 'تایید پسورد', validators = [EqualTo('password1'), DataRequired()])
    submit = SubmitField(label = 'ایجاد حساب کاربری')


class PatientLoginForm(FlaskForm):
    national_number = StringField(label = 'کدملی', validators = [DataRequired()])
    password = PasswordField(label = 'رمز عبور', validators = [DataRequired()])
    submit = SubmitField(label = 'ورود')


class DoctorLoginForm(FlaskForm):
    healthcare_number = StringField(label = 'کد سلامت', validators = [Length(min = 12, max = 12), DataRequired()])
    password = PasswordField(label = 'رمز عبور', validators = [DataRequired()])
    submit = SubmitField(label = 'ورود')


class AdminLoginForm(FlaskForm):
    username = StringField(label = 'نام کاربری', validators = [DataRequired()])
    password = PasswordField(label = 'رمز عبور', validators = [DataRequired()])
    submit = SubmitField(label = 'ورود', validators = [DataRequired()])


class RegisterDoctorForm(FlaskForm):
    name = StringField(label = 'نام و نام خانوادگی', validators = [Length(min = 5, max = 30), DataRequired()])
    healthcare_number = StringField(label = 'شماره سلامت', validators = [Length(min = 12, max = 12), DataRequired()])
    national_number = StringField(label = 'کدملی', validators = [Length(min = 10, max = 30), DataRequired()])
    department = StringField(label = 'دپارتمان', validators = [DataRequired()])
    password1 = PasswordField(label = 'رمز عبور', validators = [Length(min = 8, max = 30), DataRequired()])
    password2 = PasswordField(label = 'تکرار رمز عبور', validators = [EqualTo('password1'), DataRequired()])
    submit = SubmitField(label = 'ایجاد اکانت')


class ConfirmAppointmentForm(FlaskForm):
    appointment_date = StringField(label = 'تاریخ و زمان', validators = [DataRequired()])
    patient_number = StringField(label = 'شماره تماس', validators = [Length(min = 11, max = 11)])
    submit = SubmitField(label = 'تأیید رزرو') 