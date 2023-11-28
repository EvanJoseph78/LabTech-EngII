CREATE DATABASE  IF NOT EXISTS `labtech` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `labtech`;
-- MySQL dump 10.13  Distrib 8.1.0, for Linux (x86_64)
--
-- Host: 172.17.0.2    Database: labtech
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
  `idcliente` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `cpf` varchar(45) NOT NULL,
  `cep` varchar(45) NOT NULL,
  `email` varchar(200) NOT NULL,
  `senha` varchar(200) NOT NULL,
  PRIMARY KEY (`idcliente`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'Ednaldo Pereira','162.175.633-55','88887777','banido@desbanido.com','scrypt:32768:8:1$Oo8ALH9ASCGOpceQ$4a39708e7854a5abf97f5f16f48b6770986b5159a1e4705dbecc75931f12ca6791609bc55962826a80a4d928af80bc5419ef034319d40454305fc8b353c5376e'),(2,'Ednaldo Pereira','162.175.633-55','88887777','banido@desbanido.com','scrypt:32768:8:1$2m0Um0QKtJWLRba3$36c263a38cf28b8c35af51376fea0ddbb306ba2aeb160994839d593a45bc6d3e7c63afbea9560aba914be2f7f75607c5d41c23cbd08e010a0a2170aa9ab78be4'),(3,'Evandro Mariano','162.175.633-55','88887777','evan@gmail.com','scrypt:32768:8:1$j6iEKp0OdZE5njLo$8ea75fa19edd2478c25fed87c1731dbe1b774170207316f2a1591db79fc992e8286a5ff2359c33cfbc1e6e21094733eddddb1a9c2c5ef655f7dd270883c7c430'),(4,'Ednaldo Pereira','162.175.633-55','88887777','banido@desbanido.com','scrypt:32768:8:1$HAmIsobhp5C3EviC$3b766146ab809fb15d47d0f2c5847650a286291986f22bc30f0376cdc6b25661036e165fe509a0a05ce8941d298c34e55c198106b797ce850c3836b40ab1d0f5'),(5,'Ednaldo Pereira','162.175.633-55','88887777','banido@desbanido.com','scrypt:32768:8:1$RbGrUPdf5OWMIFEg$1e0df8de34f8a743f0ef44b6429a4a27001143124bef9ae0e72cec2673bac6aac03fe2b2d74c81ab26f6741458f819c880d380b6902553e73390e906a08747da'),(6,'Caneta Azul','162.175.633-55','88887777','caneta@azul.com','scrypt:32768:8:1$8oCQGQtnZPV0bwv4$ad639933cbc370f179dbc549804c54eb36f460145407fc3b28bc5b0757378b661e5f7c300ff1a57e472f317003bc9da545070cec25492b0b6ed326d53dda3e94'),(7,'Caneta  Pereira','162.175.633-55','88887777','banido@desbanido.com','scrypt:32768:8:1$Y9YYNAeXSzXl8acY$87997a12334ed5ed801e8c33e874ab592ea169f32b8eccf53318c2ef32cedceef6ba1a5bb0e39e6a2b3aa07165caddb5aa5ddb5ba6533eff311ab902762a02a3');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `movimentacao_saida`
--

DROP TABLE IF EXISTS `movimentacao_saida`;
/*!50001 DROP VIEW IF EXISTS `movimentacao_saida`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `movimentacao_saida` AS SELECT 
 1 AS `data_pedido`,
 1 AS `classificacao`,
 1 AS `nome`,
 1 AS `quantidade`,
 1 AS `custo_unitario`,
 1 AS `subtotal`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `ordem_pedido`
--

DROP TABLE IF EXISTS `ordem_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordem_pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_idcliente` int NOT NULL,
  `valor_total` decimal(10,2) NOT NULL,
  `valor_frete` decimal(10,2) NOT NULL,
  `data_criacao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`cliente_idcliente`),
  KEY `fk_pedido_has_produto_cliente1_idx` (`cliente_idcliente`),
  CONSTRAINT `fk_pedido_has_produto_cliente1` FOREIGN KEY (`cliente_idcliente`) REFERENCES `cliente` (`idcliente`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordem_pedido`
--

LOCK TABLES `ordem_pedido` WRITE;
/*!40000 ALTER TABLE `ordem_pedido` DISABLE KEYS */;
INSERT INTO `ordem_pedido` VALUES (1,1,10.00,10.00,'2023-11-23 13:32:21'),(2,1,10.00,10.00,'2023-11-23 13:32:21'),(3,1,10.00,10.00,'2023-11-23 13:32:21'),(4,1,10.00,10.00,'2023-11-23 13:32:21'),(5,1,10.00,10.00,'2023-11-23 13:32:21'),(6,1,10.00,10.00,'2023-11-23 13:32:21'),(7,1,10.00,10.00,'2023-11-23 13:32:21'),(8,1,10.00,10.00,'2023-11-23 13:32:21'),(9,1,10.00,10.00,'2023-11-23 13:32:21'),(10,1,10.00,10.00,'2023-11-23 13:32:21'),(11,1,10.00,10.00,'2023-11-23 13:32:21'),(12,1,10.00,10.00,'2023-11-23 13:32:21'),(13,1,10.00,10.00,'2023-11-23 13:32:21'),(14,1,10.00,10.00,'2023-11-23 13:32:21'),(15,1,10.00,10.00,'2023-11-23 13:32:21'),(16,1,10.00,10.00,'2023-11-23 13:32:21'),(17,1,10.00,10.00,'2023-11-23 13:32:21'),(18,1,10.00,10.00,'2023-11-23 13:32:21'),(19,1,10.00,10.00,'2023-11-23 13:32:21'),(20,1,10.00,10.00,'2023-11-23 13:32:21'),(26,3,720.78,10.00,'2023-11-23 13:32:21'),(32,3,365.39,10.00,'2023-11-23 13:32:21'),(33,3,1242.34,10.00,'2023-11-23 13:32:21'),(35,3,65.39,10.00,'2023-11-23 13:32:21'),(36,3,261.96,10.00,'2023-11-23 13:32:21'),(39,3,95.79,10.00,'2023-11-23 13:32:21'),(40,3,438.95,10.00,'2023-11-23 13:32:21'),(42,3,95.79,10.00,'2023-11-23 13:32:21'),(44,3,176.17,10.00,'2023-11-23 13:32:21'),(45,3,365.39,10.00,'2023-11-23 13:32:21'),(47,3,365.39,10.00,'2023-11-23 13:32:21'),(49,3,0.00,0.00,'2023-11-23 13:32:21'),(51,3,0.00,0.00,'2023-11-23 13:32:21'),(53,3,0.00,0.00,'2023-11-23 13:32:21'),(54,3,0.00,0.00,'2023-11-23 13:32:21'),(55,3,95.79,10.00,'2023-11-23 13:32:21'),(56,3,59.99,10.00,'2023-11-23 13:32:21'),(57,3,120.78,10.00,'2023-11-23 13:32:21'),(58,3,1531.54,10.00,'2023-11-23 13:32:21'),(59,3,120.78,10.00,'2023-11-23 13:32:21'),(60,3,1531.54,10.00,'2023-11-23 13:32:21'),(61,3,120.78,10.00,'2023-11-23 13:32:21'),(62,3,1531.54,10.00,'2023-11-23 13:32:21'),(63,6,565.39,10.00,'2023-11-23 13:32:21'),(64,3,181.58,10.00,'2023-11-23 13:32:56'),(65,3,524.74,10.00,'2023-11-23 13:33:00'),(66,3,1120.78,10.00,'2023-11-23 14:22:50'),(67,3,2231.56,10.00,'2023-11-23 14:23:00'),(68,3,165.39,10.00,'2023-11-23 14:26:07'),(69,3,831.56,10.00,'2023-11-23 14:26:17'),(70,3,565.39,10.00,'2023-11-27 00:16:52'),(71,3,2742.34,10.00,'2023-11-27 00:17:34'),(72,3,65.39,10.00,'2023-11-27 00:39:25'),(73,3,347.75,10.00,'2023-11-27 00:40:02'),(74,3,95.79,10.00,'2023-11-27 00:41:06'),(75,3,978.15,10.00,'2023-11-27 00:42:31'),(76,3,149.97,10.00,'2023-11-27 02:01:47'),(77,3,699.86,10.00,'2023-11-27 02:02:55'),(78,3,159.97,10.00,'2023-11-27 02:03:24'),(79,3,199.96,10.00,'2023-11-27 02:08:32'),(80,3,99.98,10.00,'2023-11-27 02:08:51'),(81,3,399.92,10.00,'2023-11-27 02:09:44'),(82,3,95.79,10.00,'2023-11-27 02:12:16'),(83,3,428.95,10.00,'2023-11-27 02:13:06'),(84,3,65.39,10.00,'2023-11-27 02:14:15'),(85,3,110.78,10.00,'2023-11-27 02:29:22'),(86,3,110.78,10.00,'2023-11-27 02:29:46'),(87,3,110.78,10.00,'2023-11-27 02:35:41'),(88,3,221.56,10.00,'2023-11-27 02:42:31'),(89,3,321.54,10.00,'2023-11-27 02:43:15'),(90,3,321.54,10.00,'2023-11-27 02:44:07'),(91,3,99.98,10.00,'2023-11-27 02:46:19'),(92,3,0.00,10.00,'2023-11-27 03:07:49'),(93,3,0.00,10.00,'2023-11-27 03:08:48'),(94,3,0.00,10.00,'2023-11-27 03:10:54'),(95,3,0.00,10.00,'2023-11-27 03:19:27'),(96,3,0.00,10.00,'2023-11-27 06:14:20'),(97,3,99.98,10.00,'2023-11-27 06:21:45'),(98,3,0.00,10.00,'2023-11-27 12:39:04'),(99,3,10661.70,10.00,'2023-11-27 14:52:41'),(100,3,10661.70,10.00,'2023-11-27 14:54:47'),(101,3,10661.70,10.00,'2023-11-27 14:58:02'),(102,3,10661.70,10.00,'2023-11-27 14:59:24'),(103,3,10661.70,10.00,'2023-11-27 15:20:17'),(104,3,10661.70,10.00,'2023-11-27 15:22:33'),(105,3,0.00,10.00,'2023-11-27 16:53:31'),(106,3,0.00,10.00,'2023-11-27 17:02:05'),(107,3,0.00,10.00,'2023-11-28 00:15:40'),(108,3,11107.80,10.00,'2023-11-28 00:29:08'),(109,3,11107.80,10.00,'2023-11-28 00:29:19'),(110,3,13127.87,10.00,'2023-11-28 00:49:50');
/*!40000 ALTER TABLE `ordem_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `idproduto` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `valor` decimal(10,2) DEFAULT NULL,
  `peso` decimal(10,2) DEFAULT NULL,
  `descricao` text,
  `tamanho` varchar(45) NOT NULL,
  `quantidade` int NOT NULL,
  `urlimg` text NOT NULL,
  `categoriaProduto` varchar(50) NOT NULL,
  PRIMARY KEY (`idproduto`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,'Mão robótica - prótese funcional',49.99,1.75,'A Mão Robótica Avançada é uma inovação revolucionária no campo da tecnologia biomecânica.','L',22,'https://bionicenter.com.br/wp-content/uploads/2020/02/protese-i-limb-quantum.jpg','Prótese'),(2,'Liner Sem Conexão Extreme',85.79,0.60,'O Liner Alps sem conexão Extreme Cushion Gel foi projetado para o cliente ativo, com amputação transtibial ou transfemural.','L',20,'https://acdn.mitiendanube.com/stores/001/097/946/products/liner-alps-com-e-sem-conecao11-f6c7920bf02ee961c615845792069841-1024-1024.webp','Prótese'),(3,'Meia Algodão Coto Transtibial Branco Sg700 - Orthopauher',55.39,0.60,' Excelente Opção econômica. Macia, resistente, absorvente e protetora. Alivia as dores, elimina o atrito no coto.','M',20,'https://acdn.mitiendanube.com/stores/001/097/946/products/sg7001-beb0ebcae496787e0015912320242635-1024-1024.webp','Órtese'),(4,'Joelho Hidráulico Policêntrico',555.39,2.60,'Total Knee 2000 é uma articulação de joelho policêntrica que oferece conforto.','M',20,'https://acdn.mitiendanube.com/stores/001/097/946/products/capa-site-total-knee-20001-87e26e0dc3f349ac1316382899721671-320-0.jpg','Prótese'),(5,'Pé Fibra De Carbono Trias',355.39,2.60,'Aconselha-se o uso do pé com a meia Spectra e capa estética para o pé Trias, estes itens sendo vendidos separadamente.','L',11,'https://acdn.mitiendanube.com/stores/001/097/946/products/1562023205044-11-738dc947399fd4482616868732516074-1024-1024.webp','Prótese'),(6,'Capa Estética Pé Protético Pro-Flex Align Bege Direito E Esquerdo',355.39,1.60,'A capa estética para pé protético Pro-Flex Align da Ossur completa o desempenho do pé, proporcionando a segurança ao caminhar e utilizar calçados de maneira correta com sua prótese. ','P',15,'https://acdn.mitiendanube.com/stores/001/097/946/products/capa-estetica-bege-pro-flex-lp-align1-6f271ad9046a8316dd15880955932646-1024-1024.webp','Órtese'),(7,'Órtese Joelho Cti Pro Sport Preta Direito E Esquerdo',256.49,2.60,'A órtese de joelho de fibra de carbono Ossur CTi é uma ajuda ideal para o tratamento de uma variedade de lesões.','L',11,'https://acdn.mitiendanube.com/stores/001/097/946/products/cti-1111-30ca29717c62bb355315839691479288-1024-1024.webp','ortese'),(8,'Sapato Terapêutico - Masculino Remo Preto E Marrom Par',7447.33,1.60,'Esse calçado tem o estilo casual e design contemporâneo.','L',19,'https://acdn.mitiendanube.com/stores/001/097/946/products/remo-marrom1-ef638d1a1926991e8c16771854581135-1024-1024.webp','Calçado'),(9,'ÓRTESE PARA OMBRO OMO NEUREXA PLUS PRETA DIREITO E ESQUERDO 5065N - OTTOBOCK',921.32,0.60,'Características e benefícios Influencia positivamente os proprioceptores, o que beneficia o sistema sensório-motor Capaz de ser usado durante a reabilitação e treinamento','M',25,'https://acdn.mitiendanube.com/stores/001/097/946/products/5065n-01-1200x120011-b9245b56bd8aa95a1915849847176939-640-0.webp','Órtese'),(17,'ÓRTESE JOELHO APOIO MEDIAL UNLOADER ONE CINZA DIREITO E ESQUERDO B-240519 - OSSUR',3821.77,1.20,'Os liners Sensil® da Össur so projetados para melhorar o conforto e reduzir a migração. Fivelas Quick Fit com código de cores simplificam a aplicaço e remoção. Variação de apoio medial e lateral. A órtese para joelho - Unloader One - Ossur possui uma ótima abrangência de tamanhos, comportando coxas com circunferência de 34,3cm a 73,5cm e circunferência da panturrilha de 24,9cm a 61,5cm.','L',26,'https://acdn.mitiendanube.com/stores/001/097/946/products/unloader-one-apoio-lateral-br-12-90a7cc5fd0c291b33316237835337275-1024-1024.webp','Órtese'),(18,'JOELHO MODULAR POLICÊNTRICO CINZA 3R55 - OTTOBOCK',9322.36,2.50,'O Joelho modular policêntrico 3R55, foi desenvolvido para ser usado somente em próteses de membros inferiores. Feito em Titânio, para uma melhor resistência. As seções da junta superior e inferior são conectadas umas às outras por barras de ligação. A estabilidade da fase de apoio é alcançada através da cinemática policêntrica. A fase de giro é controlada pelo cilindro hidráulico embutido. A resistência à flexão e extensão é ajustável de forma independente.','L',21,'https://cdn.awsli.com.br/2500x2500/1895/1895256/produto/209209058/joelho-3r-55-ottobock-jjmvyq.jpg','Prótese'),(19,'JOELHO PNEUMÁTICO POLICÊNTRICO CINZA 3R106 - OTTOBOCK',7455.33,2.50,'Quem cuida de uma casa ou gosta de ser ativo com filhos e netos sabe da importância de padrões de movimento flexíveis. Desde colocar as coisas no armário inferior até pegar brinquedos infantis, um grande ângulo de flexão do joelho é indispensável. A articulação de joelho 3R106 foi projetada pensando na mobilidade do dia a dia, onde que pode ser flexionada em um ângulo de até 170 graus. Como se isso não bastasse, a articulação leve do joelho também permite um padrão de marcha harmonioso em diferentes velocidades de caminhada. A junta oferece segurança máxima para você também na fase de apoio. Assim que seu peso corporal é apoiado na prótese e o pé está no chão, a flambagem não intencional não é mais possível. A articulação do joelho 3R106 é adequada para um nível de atividade moderado. Unidade pneumática de câmara dupla de alto desempenho: • Notavelmente maior eficiência com a mesma altura estrutural. • Portanto, aplicável a uma faixa mais ampla de velocidades de caminhada.','L',26,'https://acdn.mitiendanube.com/stores/001/097/946/products/3r106-11-3cd46eab9b57543cb015887133975612-1024-1024.webp','Prótese');
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto_has_pedido`
--

DROP TABLE IF EXISTS `produto_has_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto_has_pedido` (
  `produto_idproduto` int NOT NULL,
  `pedido_id` int NOT NULL,
  PRIMARY KEY (`produto_idproduto`,`pedido_id`),
  KEY `fk_produto_has_pedido_pedido1_idx` (`pedido_id`),
  KEY `fk_produto_has_pedido_produto1_idx` (`produto_idproduto`),
  CONSTRAINT `fk_produto_has_pedido_pedido1` FOREIGN KEY (`pedido_id`) REFERENCES `produto_ordem_pedido` (`id`),
  CONSTRAINT `fk_produto_has_pedido_produto1` FOREIGN KEY (`produto_idproduto`) REFERENCES `produto` (`idproduto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto_has_pedido`
--

LOCK TABLES `produto_has_pedido` WRITE;
/*!40000 ALTER TABLE `produto_has_pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `produto_has_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto_ordem_pedido`
--

DROP TABLE IF EXISTS `produto_ordem_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto_ordem_pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ordem_pedido_id` int NOT NULL,
  `idproduto` int NOT NULL,
  `quantidadeproduto` int NOT NULL,
  `subtotal` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_produto_ordem_pedido_ordem_pedido1_idx` (`ordem_pedido_id`),
  CONSTRAINT `fk_produto_ordem_pedido_ordem_pedido1` FOREIGN KEY (`ordem_pedido_id`) REFERENCES `ordem_pedido` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto_ordem_pedido`
--

LOCK TABLES `produto_ordem_pedido` WRITE;
/*!40000 ALTER TABLE `produto_ordem_pedido` DISABLE KEYS */;
INSERT INTO `produto_ordem_pedido` VALUES (1,17,2,5,1000.00),(2,18,2,5,1000.00),(3,19,2,5,1000.00),(4,20,1,3,10.00),(5,20,2,5,1000.00),(6,26,5,2,710.78),(7,32,5,3,1066.17),(8,33,5,3,1066.17),(9,33,3,3,166.17),(10,35,3,3,166.17),(11,36,3,3,166.17),(12,36,2,1,85.79),(13,39,2,3,257.37),(14,40,2,5,428.95),(15,42,2,3,257.37),(16,44,3,7,387.73),(17,45,6,1,355.39),(18,47,6,3,1066.17),(19,55,2,3,257.37),(20,56,1,3,149.97),(21,57,3,2,110.78),(22,58,1,2,99.98),(23,58,8,2,310.78),(24,58,4,2,1110.78),(25,63,4,1,555.39),(26,64,2,6,514.74),(27,65,2,6,514.74),(28,66,4,6,3332.34),(29,67,4,4,2221.56),(30,68,8,3,466.17),(31,69,8,3,466.17),(32,69,6,1,355.39),(33,70,4,3,1666.17),(34,71,4,3,1666.17),(35,71,5,3,1066.17),(36,72,3,3,166.17),(37,73,3,3,166.17),(38,73,2,2,171.58),(39,74,2,3,257.37),(40,75,2,3,257.37),(41,75,5,2,710.78),(42,76,1,5,249.95),(43,77,1,21,1049.79),(44,78,1,9,449.91),(45,79,1,7,349.93),(46,80,1,3,149.97),(47,81,1,12,599.88),(48,82,2,3,257.37),(49,83,2,6,514.74),(50,84,3,3,166.17),(51,85,3,3,166.17),(52,86,3,4,221.56),(53,87,3,3,166.17),(54,88,1,4,199.96),(55,88,1,4,199.96),(56,88,1,2,99.98),(57,89,1,1,49.99),(58,89,8,6,932.34),(59,90,1,1,49.99),(60,91,1,3,149.97),(61,92,1,1,49.99),(62,93,1,4,199.96),(63,93,4,3,1666.17),(64,93,8,3,466.17),(65,94,1,2,99.98),(66,95,1,1,49.99),(67,96,14,2,1842.64),(68,97,1,4,199.96),(69,97,8,3,466.17),(70,98,16,3,16994.85),(72,100,1,1,49.99),(80,100,1,3,77.00),(81,103,1,7,349.93),(82,104,1,1,49.99),(83,105,1,1,49.99),(84,106,1,2,99.98),(85,107,17,7,26752.39),(86,108,4,20,11107.80),(87,109,4,1,555.39),(88,110,8,11,1709.29);
/*!40000 ALTER TABLE `produto_ordem_pedido` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `atualizar_estoque` AFTER INSERT ON `produto_ordem_pedido` FOR EACH ROW BEGIN
	DECLARE id_produto INT;
    DECLARE quantidade_pedido INT;
    
    SELECT idproduto, quantidadeproduto INTO id_produto, quantidade_pedido
    FROM produto_ordem_pedido
    WHERE produto_ordem_pedido.id = NEW.id;
    
    UPDATE produto
    SET quantidade = quantidade - quantidade_pedido
    WHERE idproduto = id_produto;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Dumping events for database 'labtech'
--

--
-- Dumping routines for database 'labtech'
--

--
-- Final view structure for view `movimentacao_saida`
--

/*!50001 DROP VIEW IF EXISTS `movimentacao_saida`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `movimentacao_saida` AS select `ordem_pedido`.`data_criacao` AS `data_pedido`,`produto`.`categoriaProduto` AS `classificacao`,`produto`.`nome` AS `nome`,`produto_ordem_pedido`.`quantidadeproduto` AS `quantidade`,`produto`.`valor` AS `custo_unitario`,`produto_ordem_pedido`.`subtotal` AS `subtotal` from ((`ordem_pedido` join `produto_ordem_pedido` on((`ordem_pedido`.`id` = `produto_ordem_pedido`.`ordem_pedido_id`))) join `produto` on((`produto_ordem_pedido`.`idproduto` = `produto`.`idproduto`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-28  8:48:48
