<?php
require_once 'models/Cliente.php';
require_once 'models/Vendedor.php';
require_once 'models/Carro.php';

$cliente = new Cliente("Matheus Godoy");
$vendedor = new Vendedor("Viterio Lindo");
$carro = new Carro("Mercedes Benz ZR", "Civic");

echo "=== Informações ===\n";
$cliente->exibirNome();
$vendedor->exibirNome();
$carro->exibirDetalhes();

echo "\n=== Compra ===\n";
$cliente->comprarCarro($carro, $vendedor);
?>