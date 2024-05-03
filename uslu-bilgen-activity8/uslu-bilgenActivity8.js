$(function () {
    $("#birthday").datepicker();
    $("#myform").validate()
    
    let languages = [
        "C",
        "Java",
        "Python",
        "JavaScript",
        "C++",
        "C#",
        "PHP",
        "TypeScript",
        "Ruby",
        "Swift",
        "Objective-C",
        "Go",
        "R",
        "MATLAB",
        "Perl",
        "Kotlin",
        "Scala",
        "Rust",
        "Dart",
        "Lua",
        "Haskell",
        "Scheme",
        "Assembly",
        "SQL",
        "HTML",
        "CSS",
        "Visual Basic",
        "F#",
        "Clojure",
        "Groovy"
    ];

    $("#pl").autocomplete({
        source: languages
    });
});





