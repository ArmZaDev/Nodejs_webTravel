
# Nodejs_webTravel

## ขั้นตอนการสร้าง Web ด้วย Node.Js+Express

<<<<<<< HEAD
ขั้นตอนแรกให้ติดตั้ง Node.js และ Express  โดย Node.js สามารถดาวโหลดจากเว็บ [Node.js](https://nodejs.org/en)
=======
ขั้นตอนแรกให้ติดตั้ง **Node.js** และ **Express**  โดย Node.js สามารถดาวโหลดจากเว็บไซต์หลักของ [Node.js](https://nodejs.org/en)

>>>>>>> b13dce0cae2dd4d2bc239ff43af9d37255e5c8e0
ส่วน Exprees นั้นติดตั้งด้วยการพิมพ์ Command Line ใน Terminal ของ Directory ที่สร้างเว็บ
สร้าง ไฟล์ package.js โดยใช้คำสั่งลงใน Command Line เพื่อ generate

**Command Line** 
* Express : npm install express
* package.js : npm init -y

เมื่อทำการติดตั้งจะได้ ไฟล์ดังนี้

![img1](https://user-images.githubusercontent.com/106058972/226101780-62946966-9080-4b08-8efe-076058555b67.png)


## สร้างไฟล์ index.js ใน main directory

![img2](https://user-images.githubusercontent.com/106058972/226101802-5fc8a012-39e4-4ddd-934a-c4c03746f302.png)

 
**เพิ่มโค้ด express**

const express = require("express"); //นำ module express เข้ามาทำงาน
//const morgan = require("morgan");

const contentRouter = require('./content');
//contentRouter เพื่อรับ export จากไฟล์ index.js ที่อยู่ใน content หรือ เรียกใช้งาน router ในไฟล์ Index.js ที่อยู่ใน content

const app = express();  //สร้าง object express ชื่อ app
const port = process.env.port|| 3030;
//เพื่อให้สามารถรับ port จาก Web Hosting (Render) สุ่มมาให้

app.use(express.static('public'));
//เพื่อให้เข้าถึงไฟล์ที่อยู่ใน Folder public ซึ่งในที่นี้คือ stylesheet (style.css)
// app.use(morgan("common", { immediate: true}));

app.use('/content',contentRouter);
//รับ contentRouter ที่กำหนดใว้ใน const

app.get('/', (request, response) => response.redirect('/content'));
//เพื่อ redirect เข้าไปที่ content และ response ออกไปให้กับผู้ใช้

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`));
//รัน server ผ่าน port และ ใช้เพื่อ log ว่า server รันที่ port ไหน ใช้สำหรับตรวจสอบใน Local ว่า Website ใช้ได้ไหม


## สร้าง Folder content สำหรับเก็บ ไฟล์ .js ที่เป็น interface
**index.js** ใน folder content

![img3](https://user-images.githubusercontent.com/106058972/226101815-840c6771-2e67-4b1f-9bae-54f05dd1784e.png)
 
#### ต่อไปเป็นการทำ routing เพื่อรับส่งข้อมูล ระหว่าง content กับ main directory

const express = require("express"); //นำ module express เข้ามาทำงาน
const router = express.Router(); 
//เรียกใช้งาน class Router ใช้เป็นตัวรับส่งข้อมูลหรือ roting system และให้ express เรียกใช้งานตัว router อีกที

const listContent = require('./controller'); //เรียกใช้โฟล์เดอร์ controller เข้ามาทำงานและเก็บไว้ในตัวเเปร listContent

router.get('/', listContent); // ส่ง router parameter ไปพร้อมกับ path('/)ในที่นี้คือไฟล์ index.js 
module.exports = router; //export router ออกไปใช้งาน


## controller.js ใน folder content

![img4](https://user-images.githubusercontent.com/106058972/226101806-448888e6-5b3d-43f4-9883-9a24b67a389e.png)

 
รับค่าจาก Model กับ  View และ ทำการรันฟังก์ชัน listAction ที่เป็นการทำงานแบบ async await 
โดยให้ await รอรับข้อมูลจาก const data = await getAll เมื่อได้รับข้อมูลมาแล้วจึงจะนำมา render เป็นเว็บ และรันตัวแปร data ผ่าน body จากนั้นจึงจะทำการส่ง response body ออกไป

## model.js

![img5](https://user-images.githubusercontent.com/106058972/226101808-2ff64ee2-b800-4261-89cd-6545a2c20658.png)


ไฟล์นี้ใช้เก็บข้อมูล สำหรับแสดงผลข้อมูลโดยเก็บข้อมูลแบบ array และส่งข้อมูลไปให้ controller.js ผ่าน fucntion getAll() และทำงานเบบ Async จนกว่าจะเสร็จสมบูรณ์

<<<<<<< HEAD
view.js และ index.html ใน content
<p align="center">
  <img src="![img6](https://user-images.githubusercontent.com/106058972/226101809-9b9c8ee2-7aa5-4fc2-892c-5aadb491a728.png)" />
</p>
<p align="center">
  <img src="![img7](https://user-images.githubusercontent.com/106058972/226101812-e66d1f75-2e3c-4fc5-a8d1-165f29052556.png)" />
</p>  
 
View คือ ส่วนที่ใช้ในการแสดงเนื้อหาใน Web Browser ส่วน index.html ใช้เป็น template โดยหน้าเว็บนี้นำมาจาก [Site OverFlow](www.youtube.com/watch?v=P7iB6nvfnR8&t=1s)
เพื่อใช้เป็น ref และทำการดัดแปลงเพื่อสอดคล้องกับข้อมูลที่อยู่ใน Model ขึ้นหน้าเว็บได้ โดยการแสดงข้อมูลจาก Model นั้น จะทำโดยการ .map ใช้เพื่อรันคำสั่งซ้ำตามจำนวนข้อมูลใน Array และ .join('') ใช้เพื่อลบ comma ',' ที่คั้นข้อมูลระหว่าง array ออก
=======
>>>>>>> b13dce0cae2dd4d2bc239ff43af9d37255e5c8e0

## view.js และ index.html ใน content

![img6](https://user-images.githubusercontent.com/106058972/226101809-9b9c8ee2-7aa5-4fc2-892c-5aadb491a728.png)


![img7](https://user-images.githubusercontent.com/106058972/226101812-e66d1f75-2e3c-4fc5-a8d1-165f29052556.png)

 
View.js คือ ส่วนที่ใช้ในการแสดงเนื้อหาใน Web Browser ส่วน index.html ใช้เป็น template โดยหน้าเว็บนี้นำมาจาก [Site OverFlow](www.youtube.com/watch?v=P7iB6nvfnR8&t=1s)
เพื่อใช้เป็น ref. และทำการดัดแปลงเพื่อให้สอดคล้องกับข้อมูลที่อยู่ใน Model ขึ้นหน้าเว็บได้ โดยการแสดงข้อมูลจาก Model นั้น จะทำโดยการ .map ใช้เพื่อรันคำสั่งซ้ำตามจำนวนข้อมูลใน Array และ .join('') ใช้เพื่อลบ comma ',' ที่คั้นข้อมูลระหว่าง array ออก

## style.css

![img8](https://user-images.githubusercontent.com/106058972/226101814-074bc418-61c3-43d5-a8eb-3c0c1672e114.png)

ใช้สำหรับตกแต่งหน้าเว็บ และจัดให้หน้าเว็บอยู่ในความเหมาะสม
