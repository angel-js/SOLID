(() => {

    type Gender = 'M'|'F';

    interface PersonProps {
        name     : string;
        gender   : Gender;
        birthdate: Date;
    }

    class Person {
        public name     : string;
        public gender   : Gender;
        public birthdate: Date;

        constructor({name, gender, birthdate}: PersonProps) {
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        birthdate  : Date;
        email      : string;
        gender     : Gender;
        lastAccess : Date;
        name       : string;
        role       : string;
    }

    class User extends Person {
        public email: string;
        public role: string;
        private lastAccess: Date;

        constructor({
            birthdate, 
            email, 
            gender,
            name, 
            role
        }: UserProps){
            super({name, gender, birthdate});
            this.email = email;
            this.role = role;
            this.lastAccess = new Date;
        }
        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory : string,
        lastOpenFolder   : string,
        email            : string,
        role             : string,
        name             : string,
        gender           : Gender,
        birthdate        : Date,
    }

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder  : string; 

        constructor({
            workingDirectory, 
            lastOpenFolder,  
            email,            
            role,             
            name,             
            gender,           
            birthdate,
        }: UserSettingsProps ){
            super({email, role, name, gender, birthdate, lastAccess: new Date});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    } 

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'angelserrano@gmai.com',
        role: 'admin',
        name: 'angel',
        gender: 'M',
        birthdate: new Date('2000-05-23'), 
    });
    
    console.log({userSettings})

})();