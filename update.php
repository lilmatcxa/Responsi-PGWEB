<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari form
    $id = $_POST['id'];
    $bencana = $_POST['deskripsi'];
    $longitude = $_POST['longitude'];
    $latitude = $_POST['latitude'];

    // Menyesuaikan dengan setting MySQL
    $servername = "localhost";
    $username = "root";
    $password = ""; // Set this to your password if needed
    $dbname = "responsipgweb"; // Gunakan database yang baru saja dibuat

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Update data ke tabel mitigasi_bencana
    $sql = "UPDATE mitigasi_bencana SET bencana = ?, longitude = ?, latitude = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssi", $bencana, $longitude, $latitude, $id);

    if ($stmt->execute()) {
        // Redirect dengan pesan sukses
        header("Location: landing.html?message=Data berhasil diperbarui!");
        exit;
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
