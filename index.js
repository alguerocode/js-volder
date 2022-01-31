import { Volder, Email } from 'volder';


// initializing volder schema for login form.


const loginSchema = new Volder({
    username: {
        type: [String, 'username must be in string'],
        alphanumeric: [true, 'username should only contain letters and numbers'],
        minLength: [4, 'username at least 4 characters'],
        maxLength: [16, 'username at most 16 characters'],
        required: [true, 'username is required'],
        trim: true
    },
    email: {
        type: [String ,'email must be in string'],
        pattern: [Email, 'not valid email'],
        maxLength: [150, 'email be at most 150 characters'],
        required: [ true,'email is required'],
        trim: true
    },
    password: {
        type: [String , 'password must be in string'],
        minLength:[8, 'password should be at least 8 characters'],
        maxLength: [30, 'password should be at most 30 characters'],
        required: [ true, 'password is required'],
        matches: ["^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$", 'password must contain numbers and letters']
    }
})