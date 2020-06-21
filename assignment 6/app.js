// Chapter 21-25 ////////////////////////////////////////////////////

function task21_1(){
    var fname = prompt('Enter your first name: ')
    var lname = prompt('Enter your second name: ')
    var fullname = fname +' '+ lname
    alert('Hi, ' + fullname)
    }
    
    function task21_2(){
        var mob = prompt('Enter your favorite mobile phone model: ')
        document.write('Your favorite phone is: ' + mob+'<br>'+ 'Length of string: '+ mob.length)
    }
    
    function task21_3(){
        var str = 'Pakistani';
         for (var i = 0; i < str.length; i++) {
             if (str.slice(i, i+1) === "n") {
                  document.write("String: " + str + "<br>" + "Index of 'n': " + i); 
                    break;
              }
           }
    }
    
    function task21_4(){
        var str = 'Hello world';
        var ind = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.slice(i, i+1) === "l") {
             ind = i;
            }
          }
          document.write("String: " + str + "<br>" + "Index of 'l': " + ind);  
    }
    
    function task21_5(){
        var str = 'Pakistani';
        var ind = 3;
        var st = str.charAt(3)
          document.write("String: " + str + "<br>" + " Character at index 3: " + st);  
    }
    
    function task21_6(){
        var fname = prompt('Enter your first name: ')
        var lname = prompt('Enter your second name: ')
        var fullname = fname.concat(lname) 
        alert('Hi, ' + fullname)
    }
    
    function task21_7(){
        var text = 'Hyderabad';
        var rep = text.replace('Hyder', 'Islam');
        document.write('City: ' + text + '<br>' + 'After Replacement: ' + rep );
    }
    
    function task21_8(){
        var message = 'Ali and Sami are best friends. They play cricket and football together.'
        for (var i = 0; i < message.length; i++) {
             if (message.slice(i, i +3) === 'and') {
             message = message.slice(0, i) + "&" + message.slice(i+3);
             }
             }
        document.write(message);
    }
    
    function task21_9(){
        var val = '472';
        var num = parseInt(val)
        var type_val = typeof(val)
        var type_num = typeof(num)
        document.write('Value: ' + val + '<br>' + 'Type: ' + type_val + '<br>' + 'Value: ' + num + '<br>' + 'Type: ' + type_num)
    }
    
    function task21_10(){
        var inp = prompt('Enter any word: ')
        var cap = inp.toUpperCase()
        document.write('User Input: ' + inp + '<br>' + 'Upper case: ' + cap) 
    }
    
    function task21_11(){
        var inp = prompt('Enter any word: ')
        var cap = inp.charAt(0).toUpperCase() + inp.slice(1).toLowerCase()
        document.write('User Input: ' + inp + '<br>' + 'Upper case: ' + cap) 
    }
    
    function task21_12(){
        var num = 35.36
        var str = num.toString()
        var st = str.replace('.', '')
        document.write('Number: ' + num + '<br>' + 'String: ' + st )
    }
    
    function task21_13(){
        var ch = 0
        var name = prompt('Enter Username: ')
        for (i=0; i<name.length; i++){
            if (name.codePointAt(i) === 33 || name.codePointAt(i) === 44 || name.codePointAt(i) === 46 || name.codePointAt(i) === 64){
               ch +=1
            }
        }
            if (ch === 1){
                alert('Please enter a valid username.')
            }
            else{}
    }
    
    function task21_14(){
        var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
        var c = prompt("Welcome to ABC bakery. What do you want to order Sir/Ma'am: ")
        var b = c.toLowerCase()
        var flag = 0
        for (i=0; i<a.length; i++){
            if (a[i] === b){
            flag+=1
            break
        }
    }
        if(flag === 1){
                document.write(b+ ' is availabe at index '+i+ ' of our bakery.');
            }
            else {
                document.write ('We are Sorry. '+b+' is not available at our bakery.')
        }
    }
    
    function task21_15(){
        var password = prompt('Enter password must be alphanumeric.')
        if (password.length<6 || (password.codePointAt(0) >48 && password.codePointAt(0) <58 )){
            alert('Enter valid password.')
        }
        else{}
    }
    
    function task21_16(){
        var university = 'University of Karachi'
        var arr = university.split("")
        for (var i = 0; i<arr.length; i++){
            document.write(arr[i] +'<br>')
        }
    }
    
    function task21_17(){
        var input = prompt('Enter anything: ')
        var last = input.length-1
        var char = input.charAt(last)
        document.write('User input: ' + input + '<br>' + 'Last character of input: ' +char)
    }
    
    function task21_18(){
        var text = 'The quick brown fox jumps over the lazy dog'
        var inst = 0
        for (var i = 0; i < text.length; i++) {
            if (text.slice(i, i +3) === 'the') {
            inst += 1
            }
            else{}
            }
            document.write('Text: ' + text + '<br>' + 'There are ' + inst + " occurence of word 'the'")
    }
    
    // Chapter 31-34
// 1.
var currentdate = new Date();
document.write(currentdate);
// 2.
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentmonth = currentdate.getMonth();
document.write(months[currentmonth]);
// 3,
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var currentday = currentdate.getDay();
document.write("Today is " + days[currentday]);
// 4.
if( currentday == 0 || currentday == 6){
document.write("Today is a funday")
}
// 5.
if(currentdate.getDate() <=15){
    document.write("first fifteen days of the month");
}else if(currentdate.getDate() <=16){
    document.write("16th day of the month");
}else{
    document.write("last 16 days of the month");
}
// 6.
document.write("milliseconds: " + currentdate.getTime())
var minutes = currentdate.getTime()/(1000*60);
document.write("minutes" + minutes);
// 7.
var hour = currentdate.getHours();
if(hour < 12){
    document.write("its AM");
}else{
    document.write("its PM");
}
// 8.
var laterDate = new Date("2020/12/31");
document.write(laterDate);
// 9.
var startingdate = new Date("2020/6/18");
var daysgone = parseInt((currentdate.getTime() - startingdate.getTime())/(1000*60*60*24));
document.write(daysgone + " days have passed since ramazan 1st")
// 10.
var startingdate = new Date("2015/1/1");
var daysgone = parseInt((currentdate.getTime() - startingdate.getTime())/(1000*60));
document.write(daysgone + " seconds have passed since 2015")
// 11.
document.write("current date" + currentdate)
var hourago = new Date( currentdate.getTime() - (1000* 60 *60));
document.write("an hour ago it was " + hourago)
// 12.
document.write("current date" + currentdate)
var centuryago = new Date( currentdate.getTime() - (1000* 60 * 60 *24 * 365.25 *100));
document.write("100 years ago it was " + centuryago)
// 13.
var age =prompt ("enter your age")
var birthyear = new Date( currentdate.getTime() - (1000* 60 * 60 *24 * 365.25 *age));
document.write(birthyear.getFullYear());
// 14.
document.write("customer name : Omama Zainab");
document.write("Month : Feburary" );
document.write("Number of units : 416");
document.write("Charges per unit : 16");
document.write("net amount payable with in due date : " + 416*16);
document.write("late payment surcharge : 350");
document.write("payment after due date : " + ((416*16)+350) );
/////////////////////////////////// Chapter 35-38 ////////////////////////////////////////////
    
function task35_1(){
    var date = new Date()
    document.write(date)
}

function task35_2(){
    fname = prompt('Enter your first name: ')
    lname = prompt('Enter your last name: ')
    fullname = fname+ ' '+lname
    prompt('Hi, ' +fullname)
}

function task35_3(){
    var num1 = parseInt(prompt('Enter first number: '))
    var num2 = parseInt(prompt('Enter second number: '))
    var sum = num1+num2
    alert('Sum of '+num1 + ' and '+ num2 + ' is '+ sum)
}

function task35_4(){
    var num1 = parseInt(prompt('Enter first number: '))
    var num2 = parseInt(prompt('Enter second number: '))
    var op = prompt('Enter operation; +, -, *, /')
    func(num1, num2, op);
    alert('Sum is: '+sum);
    function func(num1, num2, op){
        if (op === '+'){
            sum = num1+num2
        }
        else if(op ==='-'){
            sum = num1-num2
        }
        else if (op=== '*'){
            sum = num1*num2
        }
        else if(op === '/'){
            sum = num1/num2
        }
        else {
            alert('invalid operation')
        }
        return sum
    }
}
