<?php
$title = "Моя страница";
$heading = "Hello World";
$currentYear = date("Y");

function currentTime() {
    $hours = date("H");
    $minutes = date("i");
    
    if ($hours == 1 || $hours == 21) $hoursText = "$hours час";
	elseif (in_array($hours, [2, 3, 4, 22, 23])) $hoursText = "$hours часа";
	else $hoursText = "$hours часов";
    
    if ($minutes == 1 || $minutes % 10 == 1 && $minutes != 11) $minutesText = "$minutes минута";
	elseif (in_array($minutes % 10, [2, 3, 4]) && !in_array($minutes, [12, 13, 14])) $minutesText = "$minutes минуты";
	else $minutesText = "$minutes минут";
    
    return "Сейчас $hoursText и $minutesText";
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title><?= $title; ?></title>
</head>
<body>
    <header>
        <h1><?= $heading; ?></h1>
    </header>
    
    <main>
        <p><?= currentTime(); ?></p>
    </main>
    
    <footer>
        <p>&copy; <?= $currentYear; ?></p>
    </footer>
</body>
</html>