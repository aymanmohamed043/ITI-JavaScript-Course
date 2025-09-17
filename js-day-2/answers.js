// 1. Convert the string "258.90" to: (a) integer, (b) floating number. Store in two variables.
let str = 258.90
console.log(parseInt(str));
console.log(Number(str));
console.log(+str.toFixed(1));
console.log(parseFloat(str));

// 2. Format the number 7.45678 to exactly 2 decimal places (string) then convert it back to a number.

str =  7.45678
console.log(+str.toFixed(2));

// 3. Check if the value 'abc' is NaN. Also show a case where isNaN returns false for a non-number.

console.log(isNaN('abc'))
console.log(isNaN(" "))
console.log(isNaN(null))
console.log(isNaN(true))

// 4. Floating point: Show that (0.1 + 0.2) != 0.3. 
// Produce a corrected decimal string with exactly 1 decimal place using toFixed.

console.log(+(0.1 + 0.2).toFixed(2));

// 5. Write a function to safely parse a string that may contain trailing text 
// (e.g. "120px") returning the integer part or null if it starts with non-digit.

function parseString(str){
    return isNaN(parseInt(str)) ? null: parseInt(str);
}

console.log(parseString("120px"));
console.log(parseString("px120"));
console.log(parseString(" "));

// 6. Implement isFiniteNumber(value) that returns true only for finite numeric values 
// (reject numeric strings, Infinity, NaN, null, etc.) WITHOUT using Number.isFinite. 
// Provide 4 passing and 4 failing test examples (comments).
// Custom implementation (WITHOUT using Number.isFinite)
function isFiniteNumber(value) {
    return typeof value === "number" && !isNaN(value) && value !== Infinity && value !== -Infinity;
}

console.log(isFiniteNumber(42));          // true
console.log(isFiniteNumber(0));           // true
console.log(isFiniteNumber(-3.14));       // true
console.log(isFiniteNumber(1e6));         // true
console.log(isFiniteNumber("42"));        // false (string, not number)
console.log(isFiniteNumber(NaN));         // false
console.log(isFiniteNumber(Infinity));    // false
console.log(isFiniteNumber(null));

//
// 7. Remove leading and trailing spaces from the string "   hello world  ".

str = "   hello world  "
console.log(str.trim());
console.log(str.replace(/ {2,}/g, ""));


// 8. Get the substring "script" from "javascript" using two different methods (slice + substring).
str = "javascript"
console.log(str.substring(4))
console.log(str.slice(4))
console.log(str.substr(4, 6))

// 9. Count how many times the letter 'a' appears in "Banana Mania" (case-insensitive).

str = "BAnana"
function charCount(str, char){
    let count = 0;
    for(let c of str.split("")){
        if (c === char.toLowerCase() || c === char.toUpperCase()){
            count += 1
        }
    }
    return count
}

function charCount2(str, char){
    return str.toLowerCase().split(char.toLowerCase()).length-1
}

console.log(charCount(str, 'a')); // 5
console.log(charCount2(str, 'a')); // 5
console.log(charCount2(str, 'm')); // 1
console.log(charCount(str, 'm')); // 1

// 10. Write a function reverseString(s) without using array reverse (iterate backwards).

function reverseString(s){
    let newStr = ''
    for (let i = 0; i<s.length; i++){
        newStr += s[s.length - i - 1]
    }
    return newStr
}

function reverseString2(s){
    let newStr = ''
    for (let i = s.length-1; i>=0; i--){
        newStr += s[i]
    }
    return newStr
}

console.log(reverseString("ayman"))
console.log(reverseString2("ayman"))
console.log(reverseString("shool is cool"))
console.log(reverseString2("shool is cool"))

// 11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".

function capitalizeWords(sentence){
    return sentence.split(" ").map(element => {
        return element[0].toUpperCase() + element.slice(1)
    }).join(" ");
}

console.log(capitalizeWords("hello there friend"))
// 12. Extract the domain (without protocol and path) from a URL string 
// like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.
let url = "https://example.com/path/to/page"
let firstIndex = url.indexOf('//') + 2
let lastIndex = url.indexOf("/", firstIndex); 

console.log(lastIndex === -1? url.slice(firstIndex): url.slice(firstIndex, lastIndex));

url = "https://example.io/path/to/page"
firstIndex = url.indexOf('//') + 2
lastIndex = url.indexOf("/", firstIndex); 
console.log(lastIndex === -1? url.slice(firstIndex): url.slice(firstIndex, lastIndex));

url = "https://example.net"
firstIndex = url.indexOf('//') + 2
lastIndex = url.indexOf("/", firstIndex); 
console.log(lastIndex === -1? url.slice(firstIndex): url.slice(firstIndex, lastIndex));


// 13. Implement a simple substring search function naiveIndexOf(haystack, needle) 
// that returns first index or -1 (do not call built-in indexOf inside the loop).
function naiveIndexOf(haystack, needle){
    for (let i = 0; i < haystack.length; i++){
        if (haystack[i] == needle[0]){
            return i
        }
    }
    return -1
}

console.log(naiveIndexOf("hello world", "world")); // 6
console.log(naiveIndexOf("abcdef", "cd"));      // 2
console.log(naiveIndexOf("abcdef", "gh"));      // -1
console.log(naiveIndexOf("abc", ""));      // -1


// 14. Buggy code: var s = 'hello'; if (s.toUpperCase === 'HELLO') { console.log('match'); }  // Fix and explain issue.


// 15. Create an array of the numbers 1..5, then push 6 and unshift 0.

let arr1 = new Array(1,2,3,4,5)
console.log(arr1);
arr1.push(6)
arr1.unshift(0)
console.log(arr1);


// 16. Remove the last element and store it. Remove the first element and store it.
let lastEle = arr1.pop()
let firstEle = arr1.shift()

console.log("first element: ", firstEle);
console.log("last element: ", lastEle);
console.log("my array: ", arr1);


// 17. Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array.
console.log([10,20,30,40,50].slice(0, 3));

// 18. Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].
arr1 = [1,2,3,4,5]
arr1.splice(2, 2, 'a', 'b')
console.log(arr1);


// 19. Demonstrate the difference between slice and splice on the same starting array (show original after each).

// slice as it but splice edit the array

// 20. Create a sparse array by assigning index 7 on a fresh [] then log length.

let sparseArray = new Array(5)
sparseArray[7] = 7;
console.log(sparseArray);

// 21. Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).

// 22. Implement a manual array clone deepClone1D(a) for a 1D array without using slice/concat .


// 23. Map [1,2,3] to their squares using map.


// 24. Filter [5,10,15,20] to keep values >= 12.


// 25. Reduce [2,4,6] to product.


// 26. Implement arraySum(a) using reduce; then implement arraySumLoop(a) using a for loop. Confirm outputs equal.


// 27. Given ['Ali','Sara','Kareem'] produce ['A','S','K'] (first letters) without using map (use for loop).


// 28. Implement unique(a) returning new array with duplicates removed (no ES6 Set). Complexity target: O(n^2) acceptable; comment how to improve.


// 29. Flatten one level: flatten1([1,[2,3],[4],5]) => [1,2,3,4,5] without using concat inside a loop (manual pushing and detection of Array).


// 30. Create object person with name and age; add a new property city after creation.


// 31. Access a property via bracket notation with a dynamic key variable.


// 32. Write function countKeys(obj) returning number of own enumerable properties (use for-in).


// 33. List (as comments) 5 different values that coerce to false in ES5.


// 34. safeToBoolean(v): return true only if v is strictly true, 'true', 1, or '1'; else false.


// 35. Create a Date for Jan 1, 2025 00:00 local.


// 36. Get the current year from new Date().


// 37. Write function daysBetween(d1, d2) returning whole day difference (ignore DST intricacies; ms/(1000*60*60*24)).


// 38. Generate a random integer 1..100.


// 39. Round 4.567 to nearest integer, round down, and round up (three results).


// 40. randomIntArray(n, min, max): return array of length n with random ints (loop + push).


// 41. parsePriceList(str): Given "Apple:2.50;Orange:1.75;Banana:3" return object {Apple:2.5, Orange:1.75, Banana:3} (strings to numbers).


// 42. filterAndSortNumbers(mixedArray): keep only finite numbers then sort ascending (provide sample input and output). Use a numeric compare fn.

// // 