// Study
    $('.buttone').click(function(){
        event.preventDefault();
        console.log($('.quantity').val())
    })

    $('.buttones').click(function(){
        event.preventDefault();
        var selectValue = $('select').val();
        $('body').css('background',selectValue);
    })

// Scroll in console
$(window).scroll(function () {
    var scrollValue = $(window).scrollTop();

    var geneneralHeight = $(window).height();
    var positionProperty = scrollValue / geneneralHeight * 100;
    console.log(positionProperty);
});

// 0 - 9 in console
$('.forcykel').click(function(){
    event.preventDefault();
    var i;
    for (i = 10; i--;){
        console.log(i);
    }
})

// 9 - 0 in console
$('.forcykel1').click(function(){
    event.preventDefault();
    var i;
    for (i = 0; i < 10; i++){
        console.log(i);
    }
})

//neparni in console
$('.neparni').click(function(){
    event.preventDefault();
    var i;
    for (i = 0; i < 10; i++){
        if(i%2==1)
        console.log(i);
    }
})

//parni in console
$('.parni').click(function(){
    event.preventDefault();
    var i;
    for (i = 0; i < 10; i++){
        if(i%2==0)
            console.log(i);
    }
})

//3-6-9...
$('.tri').click(function(){
    event.preventDefault();
    var i;
    for (i = 3; i < 15; i++){
        if(i%3==0)
            console.log(i);
    }
})

//1002 1004 1006...
$('.kasar').click(function(){
    event.preventDefault();
    var i;
    for (i = 1002; i < 1010; i++){
        if(i%2==0)
            console.log(i);
    }
})

//fibonacci
$('.fibonacci').click(function fibonacci(){
    var n = 10; // кількість елементів які потрібно отримати
    var fibonacci = [0, 1]; // перші 2 елемента послідовності Фібоначчі

    for (i = 2; i < n; i ++) {
        // отримуємо 1-й елемент як сумму 2-х попередніх
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    console.log(fibonacci.slice(0,n));
// slice відрізає від масиву перші n елементів, якщо n < 2
})

//factorial
$('.factorial').click(function factorial(){
    var factorial = parseInt(prompt("Введіть будь-ласка своє число для обчислення факторіала"));
    var x = factorial;
    if (x != null) {
        function factorial(x) {
            var n = 1;
            var f = 1;
            while(f <= x) {
                n = n * f;
                f++;
            }
            return n;
        }
        alert(factorial(x));
    }
})



