<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "responsipgweb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the ID is passed in the URL
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Prepare and execute DELETE query
    $sql = "DELETE FROM mitigasi_bencana WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        // Redirect to the input page after deletion
        header("Location: landing.html");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "ID not provided.";
}

$conn->close();
?>
