(() => {

    type Gender = 'M'|'F';

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor(name: string, gender: Gender, birthdate: Date) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAcces: Date,
            name: string,
            gender: Gender,
            birthdate: Date,
            ){
            super(name, gender, birthdate);
        }
        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email : string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(email, role, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'angelserrano@gmai.com',
        'admin',
        'angel',
        'M',
        new Date('2000-05-23') 
    )

    console.log({userSettings})

})();