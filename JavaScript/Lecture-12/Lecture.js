// JavaScript Regex

// In JavaScript, a Regular Expression (RegEx) is an object that describes a sequence of characters used for defining a search pattern. 

{
    /^a...s$/
}
// --------->  alias

// The above code defines a RegEx pattern. The pattern is: any five letter string starting with a and ending with s.

// A pattern defined using RegEx can be used to match against a string.



// Create a RegEx
// There are two ways you can create a regular expression in JavaScript.

// Using a regular expression literal:
// The regular expression consists of a pattern enclosed between slashes /.

{
    const regularExp = /abc/;
    // Here, /abc/ is a regular expression.
}


{
    const regex = new RegExp(/^a....s$/);
    console.log(regex.test('aliais'));
}

// In the above example, the string alias matches with the RegEx pattern /^a...s$/. Here, the test() method is used to check if the string matches the pattern.

// There are several other methods available to use with JavaScript RegEx. Before we explore them, let's learn about regular expressions themselves.

// Specify Pattern Using RegEx

// To specify regular expressions, metacharacters are used. In the above example (/^a...s$/), ^ and $ are metacharacters.


// MetaCharacters

// Metacharacters are characters that are interpreted in a special way by a RegEx engine. Here's a list of metacharacters:

{
    // [] . ^ $ * + ? {} () \ |
}

/* [] - Square brackets */
/*

Here, [abc] will match if the string you are trying to match contains any of the a, b or c.

You can also specify a range of characters using - inside square brackets.

[a-e] is the same as [abcde].

[1-4] is the same as [1234].

[0-39] is the same as [01239].

You can complement (invert) the character set by using caret ^ symbol at the start of a square-bracket.

[^abc] means any character except a or b or c.

[^0-9] means any non-digit character.

*/
{
    const Regex = /[123]/
    console.log(Regex.test('18523'));
}

/* . - Period */

{
    const Regex = /.../
    console.log(Regex.test('axh'));
}

/* ^ - Caret */

{   
    const Regex = /^v..+x(c)hh$/
    console.log(Regex.test('vbvxchh'));
}

/* $ - Dollar */

{
    const Regex = /s$/
    console.log(Regex.test('pas'));
}

/* * - Star */

{
    const Regex = /ma*n/
    console.log(Regex.test('mn'));
}

/* + - Plus */
{
    const Regex = /ma+n/
    console.log(Regex.test('woman'));
}


/* {} - Braces */

{
    const Regex = /[0-60]{2,4}/
    console.log(Regex.test('01234560'));
}

{
    const Regex1 = /(x|y|z)cb/
    console.log(Regex1.test('xcba'));
    
    const Regex2 = /(x|y|z)cb$/
    console.log(Regex2.test('xcb'));
    
    const Regex3 = /(x|y|z)cb+d$/
    console.log(Regex3.test('xcbd'));
    
}



// --------------------------------------task name---------------------------------------

{
    const Regex = /^bhan+deri_sru+s(h)ti_(19)+(_02)+_2004$/
    console.log(Regex.test('bhanderi_srushti_19_02_2004'));
}