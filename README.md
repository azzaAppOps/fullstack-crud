Application CRUD réalisée avec Spring Boot 3 et Angular 17

Cette application est composée de 3 parties :

----------------------------Backend--------------------------- 

Le backend est réalisé avec la version 3 de Spring Boot, Java 22, JPA, et un accès à Postgres.

Pour démarrer le backend, suivez les étapes ci-dessous :

-Installer Java 22 et Maven 3.

-Configurer Java (Java 22), Maven, ainsi que Git sur votre IDE Eclipse ou IntelliJ.

-Récupérer le projet en local : git clone https://github.com/azzaAppOps/fullstack-crud.git

-Lancer l'application :

	cd backend

	mvn spring-boot:run

=> Le backend est accessible via l'URL : http://localhost:8080

----------------------------Database (en utilisant Docker)---------------------------- 

Pour créer une base de données locale sans installer aucun SGBD :

-Installer Docker sur Windows.

-Exécuter les commandes suivantes :

cd database

docker build . -f Dockerfile.txt -t dbimage

docker run -d --name mycontainer -p 5432:5432 dbimage

Pour vérifier l'accès à la base de données, vous pouvez utiliser le logiciel DBeaver en créant une nouvelle connexion:

![image](https://github.com/azzaAppOps/fullstack-crud/assets/155024106/7bdf0e45-3dad-4f21-8f06-6acfe07540f2)



----------------------------Frontend----------------------------

Pour démarrer le Frontend, suivez les étapes ci-dessous :

-Installer Node.js, npm et Angular CLI : npm install -g @angular/cli@17.0.7

-Lancer l'application :

	cd frontend

	npm install

	npm run start

 <img width="931" alt="im1" src="https://github.com/azzaAppOps/fullstack-crud/assets/155024106/7f62d4c6-942d-4966-9d07-9759aaf223f3">
 
<img width="927" alt="im2" src="https://github.com/azzaAppOps/fullstack-crud/assets/155024106/480dc72a-af04-4a00-a071-28400bea7c2b">

<img width="927" alt="im3" src="https://github.com/azzaAppOps/fullstack-crud/assets/155024106/90bd852a-a93c-47fe-8415-d73764c9c1a7">




