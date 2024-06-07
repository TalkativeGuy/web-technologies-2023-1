<?php
$conn = new mysqli('localhost', 'username', 'password', 'database');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$product_id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

$sql = "SELECT * FROM products WHERE id = $product_id";
$product_result = $conn->query($sql);

$reviews_sql = "SELECT * FROM reviews WHERE product_id = $product_id ORDER BY created_at DESC";
$reviews_result = $conn->query($reviews_sql);
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Карточка товара</title>
    <style rel="stylesheet" href="styles/product.css"></style>
</head>
<body>
    <?php
    if ($product_result->num_rows > 0) {
        $product = $product_result->fetch_assoc();
        echo "<h1>" . $product['name'] . "</h1>";
        echo "<div class='product-detail'>";
        echo "<img class='product-image' src='images/" . $product['image'] . "' alt='" . $product['name'] . "'>";
        echo "<div class='product-info'>";
        echo "<p>" . $product['description'] . "</p>";
        echo "<p><strong>Цена: " . $product['price'] . " руб.</strong></p>";
        echo "</div>";
        echo "</div>";

        echo "<h2>Отзывы</h2>";
        if ($reviews_result->num_rows > 0) {
            while ($review = $reviews_result->fetch_assoc()) {
                echo "<div class='review'>";
                echo "<p><strong>" . $review['username'] . "</strong> (" . $review['created_at'] . ")</p>";
                echo "<p>Оценка: " . $review['rating'] . "/5</p>";
                echo "<p>" . $review['review_text'] . "</p>";
                echo "</div>";
            }
        } else {
            echo "<p>Отзывов пока нет.</p>";
        }

        echo "<h3>Добавить отзыв</h3>";
        echo "<form action='product.php?id=$product_id' method='POST'>";
        echo "<input type='text' name='username' placeholder='Ваше имя' required>";
        echo "<textarea name='review_text' placeholder='Ваш отзыв' required></textarea>";
        echo "<label for='rating'>Оценка:</label>";
        echo "<select name='rating' required>";
        echo "<option value='5'>5</option>";
        echo "<option value='4'>4</option>";
        echo "<option value='3'>3</option>";
        echo "<option value='2'>2</option>";
        echo "<option value='1'>1</option>";
        echo "</select>";
        echo "<button type='submit'>Отправить отзыв</button>";
        echo "</form>";

        // Обработка формы для добавления отзыва
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $username = $conn->real_escape_string($_POST['username']);
            $review_text = $conn->real_escape_string($_POST['review_text']);
            $rating = (int)$_POST['rating'];

            $insert_review_sql = "INSERT INTO reviews (product_id, username, review_text, rating) 
                                  VALUES ($product_id, '$username', '$review_text', $rating)";
            
            if ($conn->query($insert_review_sql) === TRUE) {
                echo "<p>Ваш отзыв был добавлен!</p>";
                // Перезагрузка страницы для предотвращения повторного добавления отзыва при обновлении страницы
                header("Location: product.php?id=$product_id");
            } else {
                echo "Ошибка: " . $conn->error;
            }
        }

    } else {
        echo "<p>Товар не найден.</p>";
    }
    ?>
</body>
</html>

<?php
$conn->close();
?>
