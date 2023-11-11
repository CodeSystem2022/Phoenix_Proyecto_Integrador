CREATE DATABASE IF NOT EXISTS commerce2;

USE commerce2;


CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id VARCHAR(255),
    titulo VARCHAR(255),
    imagen VARCHAR(255),
    categoria_nombre VARCHAR(255),
    categoria_id VARCHAR(255),
    precio DECIMAL(10, 2)
);


-- Insertar los datos
INSERT INTO productos (producto_id, titulo, imagen, categoria_nombre, categoria_id, precio)
VALUES
    ("software-01", "Windows 10 anual", "./img/software/windows10.png", "Programas", "software", 1000.00),
    ("software-02", "Windows 11 anual", "./img/software/windows11.png", "Programas", "software", 1000.00),
    ("software-03", "Adobe Photoshop anual", "./img/software/photoshop.png", "Programas", "software", 1000.00),
    ("software-04", "Adobe Premiere anual", "./img/software/premiere.png", "Programas", "software", 1000.00),
    ("software-05", "Microsoft Office 365 anual", "./img/software/oficina.png", "Programas", "software", 1000.00),
    ("software-06", "Spotify individual anual", "./img/software/spotify.png", "Programas", "software", 1000.00),
    ("software-07", "Spotify Familiar anual", "./img/software/spotifyf.png", "Programas", "software", 1000.00),
    ("software-08", "Netflix Standar 2p anual", "./img/software/netflix.png", "Programas", "software", 1000.00),
    ("hardware-01", "Teclado de ordenador de Juego de teclado Razer Blackwidow X Edición", "./img/hardware/teclado.jpg", "Hardware", "hardware", 1000.00),
    ("hardware-02", "Teclado Bluetooth Logitech K380 QWERTY español color grafito", "./img/hardware/tecladolog.jpg", "Hardware", "hardware", 1000.00),
    ("hardware-03", "Teclado Bluetooth Logitech K380 QWERTY Rosa", "./img/hardware/teclogrosa.jpg", "Hardware", "hardware", 1000.00),
    ("hardware-04", "Disco sólido interno Kingston SA400S37/240G 240GB negro", "./img/hardware/disco1.jpg", "Hardware", "hardware", 1000.00),
    ("hardware-05", "Disco sólido interno Kingston SA400S37/240G 480GB negro", "./img/hardware/disco1.jpg", "Hardware", "hardware", 1000.00),
    ("hardware-06", "Disco sólido interno Kingston SA400S37/240G 240GB negro", "./img/hardware/discom.jpg", "Hardware", "hardware", 1000.00),
    ("hardware-07", "Memoria RAM Fury Beast DDR4 gamer color negro 8GB", "./img/hardware/ramd4.jpg", "Hardware", "hardware", 1000.00),
    ("hardware-08", "Memoria RAM Hikvision 4GB DDR4 So-Dimm - Lider Notebooks", "./img/hardware/ramd4n.jpg", "Hardware", "hardware", 1000.00),
    ("compu-01", "Notebook Hp Amd Ryzen 7 5700u 12gb 256gb Ssd", "./img/computadoras/hp.png", "Computadoras", "computadoras", 1000.00),
    ("compu-02", "Notebook Lenovo Amd Ryzen 7 5700u 16gb 500gb Ssd", "./img/computadoras/lenovo.png", "Computadoras", "computadoras", 1000.00),
    ("compu-03", "Notebook Dell Inspiron 3511 plata 15.6 Intel Core i5 1135G7 8GB de RAM 256GB SSD", "./img/computadoras/dell.png", "Computadoras", "computadoras", 1000.00),
    ("compu-04", "Apple MacBook Pro (13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Gris espacial", "./img/computadoras/mac.png", "Computadoras", "computadoras", 1000.00),
    ("servicios-01", "Servicio Instalación de alarmas", "./img/servicios/alarma.jpg", "Servicios", "servicios", 1000.00),
    ("servicios-02", "Servicio Instalación Cámaras de videovigilancia", "./img/servicios/camara.jpg", "Servicios", "servicios", 1000.00),
    ("servicios-03", "Servicio Técnico en redes informáticas", "./img/servicios/internet.jpg", "Servicios", "servicios", 1000.00),
    ("servicios-04", "Servicio de desarrollo de código (programadores)", "./img/servicios/programacion.jpg", "Servicios", "servicios", 1000.00);
