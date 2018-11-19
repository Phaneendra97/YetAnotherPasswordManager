CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;



CREATE TABLE `accounts` (
  `username` varchar(50) NOT NULL,
  `accname` varchar(45) NOT NULL,
  `accid` varchar(45) NOT NULL,
  `accpass` varchar(250) NOT NULL,
  `accurl` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;