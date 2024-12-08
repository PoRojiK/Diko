<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Подключение к базе данных
$host = "sql105.infinityfree.com";
$user = "if0_37280528";
$password = "m9RLB5iHMPr"; // Замените на ваш пароль
$dbname = "if0_37280528_clinic_system";

$conn = new mysqli($host, $user, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
    die(json_encode(["error" => "Ошибка подключения к базе данных: " . $conn->connect_error]));
}

// Чтение данных из POST-запроса
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['username']) || !isset($data['email']) || !isset($data['password'])) {
    echo json_encode(["error" => "Все поля обязательны."]);
    exit();
}

$username = $conn->real_escape_string($data['username']);
$email = $conn->real_escape_string($data['email']);
$password = password_hash($data['password'], PASSWORD_DEFAULT); // Хеширование пароля

// Вставка данных в таблицу
$sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Пользователь успешно зарегистрирован."]);
} else {
    echo json_encode(["error" => "Ошибка при регистрации: " . $conn->error]);
}

$conn->close();
?>
