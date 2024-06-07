<?php
// 1
$a = 5;
$b = -3;

if ($a >= 0 && $b >= 0) {
    echo "Разность: " . ($a - $b);
} elseif ($a < 0 && $b < 0) {
    echo "Произведение: " . ($a * $b);
} else {
    echo "Сумма: " . ($a + $b);
}
echo "<br>";


// 2
$a = 10;
switch ($a) {
    case 0: echo "0, ";
    case 1: echo "1, ";
    case 2: echo "2, ";
    case 3: echo "3, ";
    case 4: echo "4, ";
    case 5: echo "5, ";
    case 6: echo "6, ";
    case 7: echo "7, ";
    case 8: echo "8, ";
    case 9: echo "9, ";
    case 10: echo "10, ";
    case 11: echo "11, ";
    case 12: echo "12, ";
    case 13: echo "13, ";
    case 14: echo "14, ";
    case 15: echo "15";
    break;
    default: echo "Значение вне диапазона [0..15]";
}
echo "<br>";


// 3

function add($a, $b) {
    return $a + $b;
}

function subtract($a, $b) {
    return $a - $b;
}

function multiply($a, $b) {
    return $a * $b;
}

function divide($a, $b) {
    if ($b == 0) {
        return "Деление на ноль!";
    }
    return $a / $b;
}


// 4

function mathOperation($arg1, $arg2, $operation) {
    switch ($operation) {
        case 'add':
            return add($arg1, $arg2);
        case 'subtract':
            return subtract($arg1, $arg2);
        case 'multiply':
            return multiply($arg1, $arg2);
        case 'divide':
            return divide($arg1, $arg2);
        default:
            return "Неизвестная операция";
    }
}

echo "Результат операции: " . mathOperation(10, 5, 'add');
echo "<br>";


// 6
function power($val, $pow) {
    if ($pow == 0) {
        return 1;
    }
    return $val * power($val, $pow - 1);
}
echo "2^3 = " . power(2, 3);
?>