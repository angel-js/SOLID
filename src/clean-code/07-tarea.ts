(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string, 
        ) {}
    }

    class InputEvents {
        constructor(){}
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    //? Idea para la nueva clase InputElement
    interface InputElementProps{
        id          : string;
        placeholder : string, 
        type        : HtmlType;
        value       : string,
    }

    class InputElement {
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents;

        constructor({
            id, placeholder, type, value
        }: InputElementProps){
            this.htmlElement = new HtmlElement(id, type);
            this.inputAttributes = new InputAttributes(value, placeholder)
            this.inputEvents = new InputEvents();
        }
    }

    const nameField = new InputElement({
        id:'Fernando', 
        placeholder: 'Enter first name', 
        value:'txtName',
        type: 'input'    
    });
    console.log({ nameField });

})()