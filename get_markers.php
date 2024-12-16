<?php
// Setting koneksi ke database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "responsipgweb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Ambil parameter 'type' untuk menentukan data
$type = isset($_GET['type']) ? $_GET['type'] : '';

// Logika query berdasarkan type
if ($type === 'markers') {
    // Data untuk marker
    $sql = "SELECT latitude, longitude, bencana, lokasi, tanggal FROM mitigasi_bencana";
} else if ($type === 'table') {
    // Data untuk tabel
    $sql = "SELECT id, latitude, longitude, bencana AS deskripsi FROM mitigasi_bencana";
} else {
    // Default query
    $sql = "SELECT latitude, longitude, bencana, lokasi, tanggal FROM mitigasi_bencana";
}

$result = $conn->query($sql);

$data = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Mengembalikan data dalam format JSON
header('Content-Type: application/json');
echo json_encode($data);

$conn->close();
?>
