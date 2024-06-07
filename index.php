<?php
$conn = new mysqli('localhost', 'username', 'password', 'database');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT id, name, image, price FROM products";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Каталог товаров</title>
    <style rel="stylesheet" href="styles/catalog.css"></style>
</head>
<body>
    <h1>Каталог товаров</h1>
    <div class="catalog">
        <?php
        if ($result->num_rows > 0) {
            // Выводим данные о каждом товаре
            while($row = $result->fetch_assoc()) {
                echo "<div class='product'>";
                echo "<img src='images/" . $row["image"] . "' alt='" . $row["name"] . "'>";
                echo "<div class='product-name'>" . $row["name"] . "</div>";
                echo "<div class='product-price'>" . $row["price"] . " руб.</div>";
                echo "<a href='product.php?id=" . $row["id"] . "'>Подробнее</a>";
                echo "</div>";
            }
        } else {
            echo "Нет товаров в каталоге.";
        }
        ?>
        <div class="clear"></div>
    </div>
</body>
</html>

<?php
$conn->close();
?>