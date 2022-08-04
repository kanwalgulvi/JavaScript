        //This is my first java script code
        console.log('Hello World');

        // JS-VARIABLES
        let name = 'Kanwal';
        console.log(name);
        // Cannot be a reserved keyword let/if 
        // should be meaningful and descriptive
        // cannot start with a number
        // cannot contain space or -
        // case-sensitive

        // declaring multiple variables
        let firstName = 'kanwal', lastName = 'Gulvi';
        console.log(firstName,lastName);

        // Constants
        const interestRate = 0.3;
        console.log(interestRate);

        //dynamic language: type of variables can be changed at any point
        typeof name;

        // Primitive           Reference
        // Strings              object
        // Number               array
        // Boolean              functions
        // undefined
        // null

        let person = {
            name: 'Kanwal', age:22
        };
        // dot notation
        person.name = 'John';
        //bracket notation
        person['name'] = 'Marry';
        console.log(person);

        //Array is a data Structure that we used to represent a list of itmes

        let selectedColors = ['Red', 'Blue', 'Green'];
        console.log(selectedColors.length);


        // FUNCTION
        function sum(){
            let a = 5;
            let b = 3;
            return a+b;
        }
        console.log(sum());

        function greet(name, lName){
            console.log('hello ' +name +' ' +lName);
        }
        greet('Kanwal','gulvi');
        greet('Marry');

        function square(number){
            return number*number;
        }
        console.log(square(2));

        //object
        const circle = {
            radius:1,
            location: {
                x: 1,
                y: 2
            },
            draw: function(){
                console.log('draw');
            }
        };
        circle.draw();

        //String primitive
        const message = '  This is my first message  ';

        // string object
        // const another = new string('  hi  ');

        // IF-ELSE STATEMENT
        let hour = 1;
        if (hour >= 6 && hour <12){
            console.log('GOOD MORNING!');
        }
        else if(hour >= 12 && hour < 18){
            console.log('GOOD AFTERNOON');
        }
        else{
            console.log('GOOD EVENING');
        }

        // LOOPS
        for (let i = 0; i<5; i++){
            console.log("hello world");
        }




        





