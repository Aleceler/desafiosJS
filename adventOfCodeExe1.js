// Part One
// --- Day 1: Inverse Captcha ---
// The night before Christmas, one of Santa's Elves calls you in a panic. "The printer's broken! We can't print the Naughty or Nice List!" By the time you make it to sub-basement 17, there are only a few minutes until midnight. "We have a big problem," she says; "there must be almost fifty bugs in this system, but nothing else can print The List. Stand in this square, quick! There's no time to explain; if you can convince them to pay you in stars, you'll be able to--" She pulls a lever and the world goes blurry.

// When your eyes can focus again, everything seems a lot more pixelated than before. She must have sent you inside the computer! You check the system clock: 25 milliseconds until midnight. With that much time, you should be able to collect all fifty stars by December 25th.

// Collect stars by solving puzzles. Two puzzles will be made available on each day millisecond in the advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

// You're standing in a room with "digitization quarantine" written in LEDs along one wall. The only door is locked, but it includes a small interface. "Restricted Area - Strictly No Digitized Users Allowed."

// It goes on to explain that you may only leave by solving a captcha to prove you're not a human. Apparently, you only get one millisecond to solve the captcha: too fast for a normal human, but it feels like hours to you.

// The captcha requires you to review a sequence of digits (your puzzle input) and find the sum of all digits that match the next digit in the list. The list is circular, so the digit after the last digit is the first digit in the list.

// For example:

// 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.
// 1111 produces 4 because each digit (all 1) matches the next.
// 1234 produces 0 because no digit matches the next.
// 91212129 produces 9 because the only digit that matches the next one is the last digit, 9.
// What is the solution to your captcha?

// Your puzzle answer was 1150



//resolução
function exe1 (num){
    numAnterior = -1;
    numParaSomar = [];
    ultimoNumero = num.length - 1;
    if(num[ultimoNumero] == num[0]){
        numParaSomar.push(parseInt(num[0]))
    }
    for(i in num){
        if(numAnterior > 0){
            if(num[i] == num[numAnterior]){
                console.log('numero'+ num[i] + ', num anterior:' + num[numAnterior])
                numParaSomar.push(parseInt(num[i]))
            }
        }
        numAnterior ++
    }
    result = 0;
    for(i in numParaSomar){
       result = numParaSomar[i] + result;
    }
    console.log(result)
}

// --- Part Two ---
// You notice a progress bar that jumps to 50% completion. Apparently, the door isn't yet satisfied, but it did emit a star as encouragement. The instructions change:

// Now, instead of considering the next digit, it wants you to consider the digit halfway around the circular list. That is, if your list contains 10 items, only include a digit in your sum if the digit 10/2 = 5 steps forward matches it. Fortunately, your list has an even number of elements.

// For example:

// 1212 produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.
// 1221 produces 0, because every comparison is between a 1 and a 2.
// 123425 produces 4, because both 2s match each other, but no other digit has a match.
// 123123 produces 12.
// 12131415 produces 4.


function exe1part2(num){
    parte1 = [];
    parte2 = [];
    a = num.substring(0,num.length/2)
    b = num.substring((num.length)/2,num.length)
    for (i in a){
        parte1.push(a[i])
        parte2.push(b[i])
    }
    resultado = 0;
    for (i in parte1){
        if (parte1[i] == parte2[i]){
            resultado += parseInt(parte1[i])
        }
    }
    console.log(resultado*2)
}
exe1part2('494751136895345894732582362629576539599184296195318162664695\
18939336437258577886851219486392765278814977974865798931864593622188773\
15427185626432726838626275373786248436148313374416597412812896387651714\
52576466381314558821636595394981788588673443769343597851883955668818165\
72317493989384165491455668132413366744641213851172442429239445416662363\
98724251686443362482172138263397412675468237793833433627895274615795658\
22966859349777937921933694912369552152772735167832762563719664315456987\
18671354115378149964617823876264418648438114224992619474371313926259626\
48784586365958964873626586722243462413586672341159745286265236483119198\
86566497837217169673923935143386823757293148719377821517314629812886912\
41282992448451349388567234396415125243362234114166152381446599151696168\
45119414715728954537116249862693423987861758469257839186868564426844898\
73327497698963658862856336682422797551251489126661954848572297228765445\
64674525649967945142635886547784446745853396298185229251335887148332116\
19735832456987635315983954676755291814969111177698341275164413692612752\
44225978893617456524385518493112272169767775861256649728253754964675812\
53454622629553593969735214121733734673855349561683278375786692817451914\
53572348345847882538936185494843857332836271994453696583391756444848593\
85884574943219267922729967571943843794565736975716174727852348441254492\
88679436293434386864333782863745427758227696235324635783549333837221982\
43715175264742835417148979941278644614336278948312686593362642344368727\
15374727211764167739169341999573855627775114848275268739159272518673316\
75367299529788873484438892843985935999247563743977126923291654238587677\
96166951294123667351125936697193357835113557738146854918767214529947143\
18863716542473187246351548626157775143333161422867924437526253865859969\
94736697289567496684599324492521876693754348787548564732999528582173935\
93699989353319861268737267376721592658275664437945157559398136761947554\
74477224152139987944419463371386499841415227734673733555261543871359797\
79652984786174897952757998575796474266747376726924833522983681829747766\
5453189662485548925521497365877771665365728224394427883312135322325169141784')