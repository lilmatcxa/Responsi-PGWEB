<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari form
    $bencana = $_POST['bencana'] ?? '';
    $tanggal = $_POST['tanggal'] ?? '';
    $lokasi = $_POST['lokasi'] ?? '';
    $longitude = $_POST['longitude'] ?? 0;
    $latitude = $_POST['latitude'] ?? 0;

    // Menyesuaikan dengan setting MySQL
    $servername = "localhost";
    $username = "root";
    $password = ""; // Set this to your password if needed
    $dbname = "responsipgweb"; // Gunakan database yang baru saja dibuat

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Menyimpan data ke tabel mitigasi_bencana
    $sql = "INSERT INTO mitigasi_bencana (bencana, tanggal, lokasi, longitude, latitude) 
            VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $bencana, $tanggal, $lokasi, $longitude, $latitude);

    if ($stmt->execute()) {
        // Redirect dengan pesan sukses
        header("Location: input.html?message=Data berhasil disimpan!");
        exit;
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
    $conn->close();
}
?>
