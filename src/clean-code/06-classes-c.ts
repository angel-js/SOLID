(() => {

    // Aplicando el principio de responsabilidad única
    // priorizar la composicion frete a la herencia!

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
        email      : string;
        role       : string;
    }

    class User {
        public email: string;
        public role: string;
        private lastAccess: Date;

        constructor({
            email,
            role,
        }: UserProps){
            this.email = email;
            this.role = role;
            this.lastAccess = new Date;
        }
        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory : string;
        lastOpenFolder   : string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder  : string; 

        constructor({
            workingDirectory, 
            lastOpenFolder,  
           
        }: SettingsProps ){
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    } 

    interface UserSettingsProps {
        workingDirectory : string;
        lastOpenFolder   : string;
        birthdate  : Date;
        email      : string;
        gender     : Gender;
        name       : string;
        role       : string;
    }

    class UserSettings {
        public person: Person;
        public user : User;
        public settings: SettingsProps;

        constructor({
            name, gender, birthdate, email, role, lastOpenFolder, workingDirectory
        }: UserSettingsProps ){
            this.person = new Person({name, gender, birthdate});
            this.user = new User({ email, role});
            this.settings = new Settings({ lastOpenFolder, workingDirectory});
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        birthdate: new Date('2000-05-23'), 
        gender: 'M',
        role: 'admin',
        email: 'angelserrano@gmail.com',
        name: 'angel',
    });
    
    console.log({userSettings})

})();