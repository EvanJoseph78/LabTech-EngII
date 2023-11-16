CREATE DATABASE  IF NOT EXISTS `dump1` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `dump1`;
-- MySQL dump 10.13  Distrib 8.1.0, for Linux (x86_64)
--
-- Host: 172.17.0.2    Database: dump1
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `idcliente` int NOT NULL,
  `nome` varchar(200) NOT NULL,
  `cpf` varchar(45) NOT NULL,
  `cep` varchar(45) NOT NULL,
  `email` varchar(200) NOT NULL,
  `senha` varchar(45) NOT NULL,
  PRIMARY KEY (`idcliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'João Silva','123.456.789-00','12345-678','joao@email.com','senha123'),(2,'Maria Santos','987.654.321-00','98765-432','maria@email.com','senha456'),(3,'Carlos Oliveira','111.222.333-00','11111-222','carlos@email.com','senha789');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idcliente` int DEFAULT NULL,
  `idproduto` int DEFAULT NULL,
  `quantidadeproduto` int DEFAULT NULL,
  `precoproduto` decimal(10,2) DEFAULT NULL,
  `subtotal` decimal(10,2) DEFAULT NULL,
  `valorfrete` decimal(10,2) DEFAULT NULL,
  `valortotalpedido` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
INSERT INTO `pedido` VALUES (1,0,3,8,55.39,443.12,10.00,453.12),(2,0,3,8,55.39,443.12,10.00,453.12);
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `idproduto` int NOT NULL,
  `nome` varchar(200) NOT NULL,
  `valor` decimal(5,2) NOT NULL,
  `peso` decimal(5,2) NOT NULL,
  `descricao` varchar(200) NOT NULL,
  `tamanho` varchar(45) NOT NULL,
  `quantidade` int NOT NULL,
  `urlimg` text NOT NULL,
  `categoriaProduto` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idproduto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,'Mão robótica - prótese funcional',49.99,1.75,'A Mão Robótica Avançada é uma inovação revolucionária no campo da tecnologia biomecânica.','L',20,'https://bionicenter.com.br/wp-content/uploads/2020/02/protese-i-limb-quantum.jpg','protese'),(2,'Liner Sem Conexão Extreme',85.79,0.60,'O Liner Alps sem conexão Extreme Cushion Gel foi projetado para o cliente ativo, com amputação transtibial ou transfemural.','L',20,'https://acdn.mitiendanube.com/stores/001/097/946/products/liner-alps-com-e-sem-conecao11-f6c7920bf02ee961c615845792069841-1024-1024.webp','protese'),(3,'Meia Algodão Coto Transtibial Branco Sg700 - Orthopauher',55.39,0.60,' Excelente Opção econômica. Macia, resistente, absorvente e protetora. Alivia as dores, elimina o atrito no coto.','M',20,'https://acdn.mitiendanube.com/stores/001/097/946/products/sg7001-beb0ebcae496787e0015912320242635-1024-1024.webp','calcado'),(4,'Joelho Hidráulico Policêntrico',555.39,2.60,'Total Knee 2000 é uma articulação de joelho policêntrica que oferece conforto.','M',10,'https://acdn.mitiendanube.com/stores/001/097/946/products/capa-site-total-knee-20001-87e26e0dc3f349ac1316382899721671-320-0.jpg','protese'),(5,'Pé Fibra De Carbono Trias',355.39,2.60,'Aconselha-se o uso do pé com a meia Spectra e capa estética para o pé Trias, estes itens sendo vendidos separadamente.','L',11,'https://acdn.mitiendanube.com/stores/001/097/946/products/1562023205044-11-738dc947399fd4482616868732516074-1024-1024.webp','calcado'),(6,'Capa Estética Pé Protético Pro-Flex Align Bege Direito E Esquerdo ',355.39,1.60,'A capa estética para pé protético Pro-Flex Align da Ossur completa o desempenho do pé, proporcionando a segurança ao caminhar e utilizar calçados de maneira correta com sua prótese. ','P',15,'https://acdn.mitiendanube.com/stores/001/097/946/products/capa-estetica-bege-pro-flex-lp-align1-6f271ad9046a8316dd15880955932646-1024-1024.webp','calcado'),(7,'Órtese Joelho Cti Pro Sport Preta Direito E Esquerdo',256.49,2.60,'A órtese de joelho de fibra de carbono Ossur CTi é uma ajuda ideal para o tratamento de uma variedade de lesões.','L',11,'https://acdn.mitiendanube.com/stores/001/097/946/products/cti-1111-30ca29717c62bb355315839691479288-1024-1024.webp','ortese'),(8,'Sapato Terapêutico - Masculino Remo Preto E Marrom Par',155.39,1.60,'Esse calçado tem o estilo casual e design contemporâneo.','L',11,'https://acdn.mitiendanube.com/stores/001/097/946/products/remo-marrom1-ef638d1a1926991e8c16771854581135-1024-1024.webp','calcado');
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-16 10:42:08
