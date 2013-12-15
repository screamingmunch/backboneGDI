// A brief review on JS Object notations:

var myObject = {
  name: 'A new object',
  age: 25,
  friends:['layla', 'kris'],
  hair:{
    color: 'brown',
    style: 'short',
    cool: true
  },
  getBirthYear: function(currentYear){
    return currentYear-this.age;
  },
  getFutureYear: function(nextYear){
    return this.age + nextYear;
  }
}

