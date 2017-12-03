function buildLink(array) {

    var link = "http://firstthreeodds.org/pdq?perm=";
    for (var i = 0; i < 20; i++) {
        link += array[i];
    }

    return link;
}

var lastFirst = 0;
var lastSecond = 0;


function moreRandomSwapElements(array, startAt) {

    var first = 0;
    var second = 0;

    while (first === second) {
        first = Math.floor((Math.random() * (20 - startAt))) + startAt;
        second = Math.floor((Math.random() * (20 - startAt))) + startAt;
    }

    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;

    lastFirst = first;
    lastSecond = second;

}


function randomSwapElements(array, startAt) {

    var number = Math.floor((Math.random() * (20 - startAt))) + startAt;
    var nextNumber;
    if (number < 19)
        nextNumber = number + 1;
    else
        nextNumber = startAt;

    var temp = array[number];
    array[number] = array[nextNumber];
    array[nextNumber] = temp;

    lastFirst = number;
    lastSecond = nextNumber;

}

function quintupleSequentialSwapElements(array, first, second) {
    var temp1 = array[first];
    var temp2 = array[first + 1];
    var temp3 = array[first + 2];
    var temp4 = array[first + 3];
    var temp5 = array[first + 4];

    array[first] = array[second];
    array[first + 1] = array[second + 1];
    array[first + 2] = array[second + 2];
    array[first + 3] = array[second + 3];
    array[first + 4] = array[second + 4];

    array[second] = temp1;
    array[second + 1] = temp2;
    array[second + 2] = temp3;
    array[second + 3] = temp4;
    array[second + 4] = temp5;


    lastFirst = first;
    lastSecond = second;
}

function quadrupleSequentialSwapElements(array, first, second) {
    var temp1 = array[first];
    var temp2 = array[first + 1];
    var temp3 = array[first + 2];
    var temp4 = array[first + 3];

    array[first] = array[second];
    array[first + 1] = array[second + 1];
    array[first + 2] = array[second + 2];
    array[first + 3] = array[second + 3];

    array[second] = temp1;
    array[second + 1] = temp2;
    array[second + 2] = temp3;
    array[second + 3] = temp4;


    lastFirst = first;
    lastSecond = second;
}

function tripleSequentialSwapElements(array, first, second) {
    var temp1 = array[first];
    var temp2 = array[first + 1];
    var temp3 = array[first + 2];
    array[first] = array[second];
    array[first + 1] = array[second + 1];
    array[first + 2] = array[second + 2];
    array[second] = temp1;
    array[second + 1] = temp2;
    array[second + 2] = temp3;


    lastFirst = first;
    lastSecond = second;
}

function doubleSequentialSwapElements(array, first, second) {
    var temp1 = array[first];
    var temp2 = array[first + 1];
    array[first] = array[second];
    array[first + 1] = array[second + 1];
    array[second] = temp1;
    array[second + 1] = temp2;

    lastFirst = first;
    lastSecond = second;

}

function sequentialSwapElements(array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;

    lastFirst = first;
    lastSecond = second;

}

function displayQuestion(url) {
    var pos = url.search("=");
    url = url.slice(pos + 1);

    var question = "";
    for (var i = 0; i < url.length; i++) {
        switch (url[i]) {
            case 'a':
                question += "a ";
                break;
            case 'b':
                question += "any ";
                break;
            case 'c':
                question += "appear ";
                break;
            case 'd':
                question += "be ";
                break;
            case 'e':
                question += "digit ";
                break;
            case 'f':
                question += "first ";
                break;
            case 'g':
                question += "for ";
                break;
            case 'h':
                question += "in ";
                break;
            case 'i':
                question += "just ";
                break;
            case 'j':
                question += "look ";
                break;
            case 'k':
                question += "numbers ";
                break;
            case 'l':
                question += "on ";
                break;
            case 'm':
                question += "or ";
                break;
            case 'n':
                question += "pattern ";
                break;
            case 'o':
                question += "random ";
                break;
            case 'p':
                question += "reason ";
                break;
            case 'q':
                question += "ten ";
                break;
            case 'r':
                question += "that ";
                break;
            case 's':
                question += "the ";
                break;
            case 't':
                question += "to ";
                break;
        }
    }

    question += "?";
    console.log(question);
}

function displayArray(array) {

    var string = "";
    for (var i = 0; i < array.length; i++)
        string += array[i];

    console.log(string);
}


/*"Min value here=> Url: http://firstthreeodds.org/pdq?perm=bnhmpgsqekrjtolifdca Result:000000000000000001853"  done.js:279:17
any pattern in or reason for the ten digit numbers that look to random on just first be appear a ?  done.js:208:5*/
var initialArray = ['b', 'n', 'h', 'm', 'p', 'g', 's', 'q', 'e', 'k', 'r', 'j', 't', 'o', 'l', 'i', 'f', 'd', 'c', 'a'];
var globalMinValue = "99999999999999999999999";


function randomLooper() {
    var link;

    /* "Min value here=> Url: http://firstthreeodds.org/pdq?perm=bnhmpgsotrqlkjifedac Result:000000000000144670014"  done.js:177:21
any pattern in or reason for the random to that ten on numbers look just first digit be a appear ? */

    link = buildLink(initialArray);

    randomRecursive(initialArray, globalMinValue, link, "");
}


function looper(loop) {

    var link;
    var initial = 0;

    var i = initial;
    var j = initial + loop;
    /* "Min value here=> Url: http://firstthreeodds.org/pdq?perm=bnhmpgsotrqlkjifedac Result:000000000000144670014"  done.js:177:21
any pattern in or reason for the random to that ten on numbers look just first digit be a appear ? */
    link = buildLink(initialArray);

    switch (loop) {
        case 1:
            recursive1(initialArray, globalMinValue, link, i, j, initial);
            break;
        case 2:
            recursive2(initialArray, globalMinValue, link, i, j, initial);
            break;
        case 3:
            recursive3(initialArray, globalMinValue, link, i, j, initial);
            break;
        case 4:
            recursive4(initialArray, globalMinValue, link, i, j, initial);
            break;
        case 5:
            recursive5(initialArray, globalMinValue, link, i, j, initial);
            break;
    }


}

function recursive1(arrayOfLetters, minValue, link, i, j, initial) {


    $.ajax(link, {
        success: function (result) {
            if (result.padStart(21, "0") < minValue.padStart(21, "0")) {
                minValue = result;

                console.log("Min value here=> Url: " + this.url + " Result:" + result.padStart(21, "0"));
                displayQuestion(this.url);

                j = initial + 1;
                i = initial;

                sequentialSwapElements(arrayOfLetters, i, j);
                link = buildLink(arrayOfLetters);
                recursive1(arrayOfLetters, minValue, link, i, j, initial);

            }
            else {
                //console.log("Some value here=> Url: " + this.url + " Result:" + result.padStart(21, "0"));
                sequentialSwapElements(arrayOfLetters, lastFirst, lastSecond);
                //displayQuestion(this.url);

                if (j < 19) {
                    j++;
                    if (j === i) {
                        if (i < 19)
                            j++;
                        else {
                            console.log("Done!");
                            return;
                        }

                    }

                }
                else {
                    if (i < 19)
                        i++;
                    else {
                        console.log("Done!");
                        return;
                    }
                    j = initial;
                    if (j === i)
                        j++;
                }

                sequentialSwapElements(arrayOfLetters, i, j);
                link = buildLink(arrayOfLetters);

                recursive1(arrayOfLetters, minValue, link, i, j, initial);

            }
        },
        error: function () {
            console.log("error");
        }
    });

}

function initialBruteForce() {
    link = buildLink(initialArray);

    bruteForce(link, initialArray, 12, 13, 14, 15, 16, 17, 18, 19, globalMinValue);

}

function bruteForce(link, array, t, o, l, i, f, d, c, a, minValue) {

    if (t !== o && t !== l && t !== i && t !== f && t !== d && t !== c && t !== a &&
        o !== l && o !== i && o !== f && o !== d && o !== c && o !== a &&
        l !== i && l !== f && l !== d && l !== c && l !== a &&
        i !== f && i !== d && i !== c && i !== a &&
        f !== d && d !== c && d !== a &&
        d !== c && d !== a &&
        c !== a) {

        $.ajax(link, {
                success: function (result) {
                    console.log("Some value here=> Url: " + this.url + " Result:" + result.padStart(21, "0"));
                    if (result.padStart(21, "0") < minValue.padStart(21, "0")) {
                        minValue = result;
                        console.log("Min value here=> Url: " + this.url + " Result:" + result.padStart(21, "0"));
                        displayQuestion(this.url);

                    }

                    if (t < 20) {
                        if (o < 20) {
                            if (l < 20) {
                                if (i < 20) {
                                    if (f < 20) {
                                        if (d < 20) {
                                            if (c < 20) {
                                                if (a < 20) {
                                                    a++;
                                                }
                                                a = 12;
                                                c++;
                                            }
                                            d++;
                                            c = 12;
                                        }
                                        f++;
                                        d = 12;
                                    }
                                    i++;
                                    f = 12;
                                }
                                l++;
                                i = 12;
                            }
                            o++;
                            i = 12;
                        }
                        t++;
                        o = 12;
                    }

                    array[t] = 't';
                    array[o] = 'o';
                    array[l] = 'l';
                    array[i] = 'i';
                    array[f] = 'f';
                    array[d] = 'd';
                    array[c] = 'c';
                    array[a] = 'a';

                    link = buildLink(array);

                    bruteForce(link, array, t, o, l, i, f, d, c, a, minValue);
                },
                error:

                    function () {
                        console.log("error");
                    }
            }
        );


    }
    else {
        if (t < 20) {
            if (o < 20) {
                if (l < 20) {
                    if (i < 20) {
                        if (f < 20) {
                            if (d < 20) {
                                if (c < 20) {
                                    if (a < 20) {
                                        a++;
                                    }
                                    a = 12;
                                    c++;
                                }
                                d++;
                                c = 12;
                            }
                            f++;
                            d = 12;
                        }
                        i++;
                        f = 12;
                    }
                    l++;
                    i = 12;
                }
                o++;
                i = 12;
            }
            t++;
            o = 12;
        }

        array[t] = 't';
        array[o] = 'o';
        array[l] = 'l';
        array[i] = 'i';
        array[f] = 'f';
        array[d] = 'd';
        array[c] = 'c';
        array[a] = 'a';

        link = buildLink(array);

        bruteForce(link, array, t, o, l, i, f, d, c, a, minValue);
    }
}

function recursive2(arrayOfLetters, minValue, link, i, j, initial) {

    $.ajax(link, {
        success: function (result) {
            if (result.padStart(21, "0") < minValue.padStart(21, "0")) {
                minValue = result;

                console.log("Min value here=> Url: " + this.url + " Result:" + result.padStart(21, "0"));
                displayQuestion(this.url);

                i = initial;
                j = initial + 2;

                doubleSequentialSwapElements(arrayOfLetters, i, j);
                link = buildLink(arrayOfLetters);
                recursive2(arrayOfLetters, minValue, link, i, j, initial);

            }
            else {
                doubleSequentialSwapElements(arrayOfLetters, lastFirst, lastSecond);

                if (j < 18) {
                    j++;
                    if (j === i || (j === (i - 1))) {
                        if (i < 18) {
                            j++;
                        }
                        else {
                            console.log("Done!");
                            return;
                        }

                    }

                    while (Math.abs(j - i) < 2) {
                        if (j < 18)
                            j++;
                        else {
                            i++;
                            j = initial;
                        }
                    }

                }
                else {
                    if (i < 18)
                        i++;
                    else {
                        console.log("Done!");
                        return;
                    }
                    j = initial;
                    if (j === i || (j === (i - 1)))
                        j++;

                    while (Math.abs(j - i) < 2) {
                        if (j < 18)
                            j++;
                        else {
                            i++;
                            j = initial;
                        }
                    }
                }

                doubleSequentialSwapElements(arrayOfLetters, i, j);
                link = buildLink(arrayOfLetters);

                recursive2(arrayOfLetters, minValue, link, i, j, initial);

            }
        },
        error: function () {
            console.log("error");
        }
    });

}

function recursive3(arrayOfLetters, minValue, link, i, j, initial) {

    $.ajax(link, {
        success: function (result) {
            if (result.padStart(21, "0") < minValue.padStart(21, "0")) {
                minValue = result;

                console.log("Min value here=> Url: " + this.url + " Result:" + result.padStart(21, "0"));
                displayQuestion(this.url);

                i = initial;
                j = initial + 3;

                //console.log("I: " + i + "J: " + j);
                tripleSequentialSwapElements(arrayOfLetters, i, j);
                link = buildLink(arrayOfLetters);
                recursive3(arrayOfLetters, minValue, link, i, j, initial);

            }
            else {
                //displayQuestion(this.url);
                tripleSequentialSwapElements(arrayOfLetters, lastFirst, lastSecond);

                if (j < 17) {
                    j++;
                    if (j === i || (j === (i - 1)) || (j === (i - 2))) {
                        if (i < 17) {
                            j++;
                        }
                        else {
                            console.log("Done!");
                            return;
                        }

                    }

                    while (Math.abs(j - i) < 3) {
                        if (j < 17)
                            j++;
                        else {
                            i++;
                            j = initial;
                        }
                    }

                }
                else {
                    if (i < 17)
                        i++;
                    else {
                        console.log("Done!");
                        return;
                    }
                    j = initial;
                    if (j === i || (j === (i - 1)) || (j === (i - 2)))
                        j++;

                    while (Math.abs(j - i) < 3) {
                        if (j < 17)
                            j++;
                        else {
                            i++;
                            j = initial;
                        }
                    }
                }

                tripleSequentialSwapElements(arrayOfLetters, i, j);
                link = buildLink(arrayOfLetters);

                recursive3(arrayOfLetters, minValue, link, i, j, initial);

            }
        },
        error: function () {
            console.log("error");
        }
    });

}

function recursive4(arrayOfLetters, minValue, link, i, j, initial) {

    $.ajax(link, {
        success: function (result) {
            if (result.padStart(21, "0") < minValue.padStart(21, "0")) {
                minValue = result;

                console.log("Min value here=> Url: " + this.url + " Result:" + result.padStart(21, "0"));
                displayQuestion(this.url);

                i = initial;
                j = initial + 4;

                console.log("I: " + i + "J: " + j);
                quadrupleSequentialSwapElements(arrayOfLetters, i, j);
                link = buildLink(arrayOfLetters);
                recursive4(arrayOfLetters, minValue, link, i, j, initial);

            }
            else {
                quadrupleSequentialSwapElements(arrayOfLetters, lastFirst, lastSecond);

                if (j < 16) {
                    j++;
                    if (j === i || (j === (i - 1)) || (j === (i - 2)) || (j === (i - 3))) {
                        if (i < 16) {
                            j++;
                        }
                        else {
                            console.log("Done!");
                            return;
                        }

                    }

                    while (Math.abs(j - i) < 4) {
                        if (j < 16)
                            j++;
                        else {
                            i++;
                            j = initial;
                        }
                    }

                }
                else {
                    if (i < 16)
                        i++;
                    else {
                        console.log("Done!");
                        return;
                    }
                    j = initial;
                    if (j === i || (j === (i - 1)) || (j === (i - 2)) || (j === (i - 3)))
                        j++;

                    while (Math.abs(j - i) < 4) {
                        if (j < 16)
                            j++;
                        else {
                            i++;
                            j = initial;
                        }
                    }
                }

                quadrupleSequentialSwapElements(arrayOfLetters, i, j);
                link = buildLink(arrayOfLetters);

                recursive4(arrayOfLetters, minValue, link, i, j, initial);

            }
        },
        error: function () {
            console.log("error");
        }
    });

}

function recursive5(arrayOfLetters, minValue, link, i, j, initial) {

    $.ajax(link, {
        success: function (result) {
            if (result.padStart(21, "0") < minValue.padStart(21, "0")) {
                minValue = result;

                console.log("Min value here=> Url: " + this.url + " Result:" + result.padStart(21, "0"));
                displayQuestion(this.url);

                i = initial;
                j = initial + 5;

                console.log("I: " + i + "J: " + j);
                quintupleSequentialSwapElements(arrayOfLetters, i, j);
                link = buildLink(arrayOfLetters);
                recursive5(arrayOfLetters, minValue, link, i, j, initial);

            }
            else {
                //console.log("Some value here=> Url: " + this.url + " Result:" + result.padStart(21, "0"));
                quintupleSequentialSwapElements(arrayOfLetters, lastFirst, lastSecond);

                if (j < 15) {
                    j++;
                    if (j === i || (j === (i - 1)) || (j === (i - 2)) || (j === (i - 3)) || (j === (i - 4))) {
                        if (i < 15) {
                            j++;
                        }
                        else {
                            console.log("Done!");
                            return;
                        }

                    }

                    while (Math.abs(j - i) < 5) {
                        if (j < 15)
                            j++;
                        else {
                            i++;
                            j = initial;
                        }
                    }

                }
                else {
                    if (i < 15)
                        i++;
                    else {
                        console.log("Done!");
                        return;
                    }
                    j = initial;
                    if (j === i || (j === (i - 1)) || (j === (i - 2)) || (j === (i - 3)) || (j === (i - 4)))
                        j++;

                    while (Math.abs(j - i) < 5) {
                        if (j < 15)
                            j++;
                        else {
                            i++;
                            j = initial;
                        }
                    }
                }

                quintupleSequentialSwapElements(arrayOfLetters, i, j);
                link = buildLink(arrayOfLetters);

                recursive5(arrayOfLetters, minValue, link, i, j, initial);

            }
        },
        error: function () {
            console.log("error");
        }
    });

}


function randomRecursive(arrayOfLetters, minValue, link, minLink) {

    $.ajax(link, {
        success: function (result) {
            if (result.padStart(21, "0") < minValue.padStart(21, "0")) {
                minValue = result;
                minLink = this.url;
                console.log("Min value here=> Url: " + this.url + " Result:" + result.padStart(21, "0"));
                displayQuestion(this.url);

                moreRandomSwapElements(arrayOfLetters, 12);
                //randomSwapElements(arrayOfLetters, 0);
                link = buildLink(arrayOfLetters);

                randomRecursive(arrayOfLetters, minValue, link, minLink);

            }
            else {
                //Unswapping...
                //sequentialSwapElements(arrayOfLetters, lastFirst, lastSecond);
                //console.log("Some value here=> Url: " + this.url + " Result:" + result.padStart(21, "0"));
                //console.log("Last min value=> Url: " + minLink + " Result:" + minValue);
                moreRandomSwapElements(arrayOfLetters, 12);
                link = buildLink(arrayOfLetters);
                randomRecursive(arrayOfLetters, minValue, link, minLink);
            }
        },
        error: function () {
            console.log("error");
        }
    });

}
