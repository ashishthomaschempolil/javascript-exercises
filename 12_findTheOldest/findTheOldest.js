const findTheOldest = function(arr) {
    const comparePeople = (person1, person2) => {
        //if both person yer of death is defined
        if (person1.yearOfDeath && person2.yearOfDeath) {
            person1Age = person1.yearOfDeath - person1.yearOfBirth;
            person2Age = person2.yearOfDeath - person2.yearOfBirth;

        return person1Age>person2Age ? person1: person2;
        }
        else {
            return person1.yearOfBirth < person2.yearOfBirth ? person1: person2;
        }
        
    }

    maxAge = arr.reduce(comparePeople);
    return maxAge;
};

// Do not edit below this line
module.exports = findTheOldest;
