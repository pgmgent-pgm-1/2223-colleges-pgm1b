const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const filteredWords = 
    	words.filter(
            element => {
                return element.length > 6 && element[0] == "e"
            }
            );
console.log(filteredWords); //Output: ["exuberant", "destruction", "present"]
