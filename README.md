# Nodejs_webTravel

## ขั้นตอนการสร้าง Web ด้วย Node.Js+Express

ขั้นตอนแรกให้ติดตั้ง **Node.js** ,**Express** และ **Morgan** ลงใน Directory ที่เราสร้างเว็บ โดย Node.js สามารถดาวโหลดจากเว็บไซต์หลักของ [Node.js](https://nodejs.org/en)

ส่วนโมดูล Exprees กับ Morgan นั้นติดตั้งด้วยการพิมพ์ลง Command Line ใน Terminal ของ Directory ที่สร้างเว็บ

สร้าง ไฟล์ package.js โดยใช้คำสั่งลงใน Command Line เพื่อ generate

**Command Line**

* Express : npm install express
* Morgan : npm install express
* package.js : npm init -y

เมื่อทำการติดตั้งจะได้ ไฟล์ดังนี้

![img1](https://user-images.githubusercontent.com/106058972/226101780-62946966-9080-4b08-8efe-076058555b67.png)

## สร้างไฟล์ index.js ใน main directory

![index main](https://user-images.githubusercontent.com/106058972/236376048-d3e75dfb-5ed7-41d4-a2f5-cbc151c227cb.png)


**เพิ่มโค้ด express**

นำ module express เข้ามาทำงาน
```
const express = require("express"); 
```
router เพื่อรับ export จากไฟล์ index.js ที่อยู่ใน content หรือ เรียกใช้งาน router ในไฟล์ Index.js ที่อยู่ใน content
```
const  router  =  require('./content/index');
```

สร้าง object express ชื่อ app
```
const app = express(); 
```

กำหนดให้สามารถรับ port จาก Web Hosting (Render) สุ่มมาให้
```
const port = process.env.port|| 3030;
```
app.use ใช้งานไฟล์ .json
app.set กำหนด view engine 'ejs'
```
app.use(express.json())
app.set('view engine', 'ejs')
```
กำหนดให้เข้าถึงไฟล์ที่อยู่ใน Folder public ซึ่งในที่นี้คือ stylesheet (style.css)
```
app.use(express.static('public'));
```
ตั้งค่า morgan ให้ รัน log จาก Request ที่เข้ามา
```
app.use(morgan("common", { immediate: true}));
```
นำ router มาใช้ 
```
app.use(router);
```
รัน server ผ่าน port และ ใช้เพื่อ log ว่า server รันที่ port ไหน ใช้สำหรับตรวจสอบใน Local ว่า Website ใช้ได้ไหม
```
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`));
```

## สร้าง Folder content สำหรับเก็บ ไฟล์ .js ที่เป็น interface

**index.js** ใน folder content

![index content](https://user-images.githubusercontent.com/106058972/236376423-a31dfd3e-ceaf-464d-b038-ae8e28a50f35.png)


#### ต่อไปเป็นการทำ routing เพื่อรับส่งข้อมูล ระหว่าง content กับ main directory

  นำ module express เข้ามาทำงาน
```
const express = require("express"); 
```
เรียกใช้งาน class Router ใช้เป็นตัวรับส่งข้อมูลหรือ roting system และให้ express เรียกใช้งานตัว router อีกที
```
const router = express.Router();
```
เรียกใช้ฟังก์ชั่นที่เป็ฯส่วนของการทำงานใน โฟล์เดอร์ controller เข้ามาทำงานและเก็บไว้ในตัวเเปร โดยตั้งชื่อตัวแปรให้สอดคล้องกับฟังก์ชั่นนั้นๆ เพื่อความไม่สับสน
```
const {Content, listContent, loginGet, login, signupGet, signup, tour} =  require('./controller');
```
ส่ง router parameter ทุกตัวไปพร้อมกับ ('path')ในที่นี้คือไฟล์ index.js
```
//home route
router.get('/', Content); //index
router.get('/home', listContent); //home

//login route
router.get('/login', loginGet);
router.post('/login', login);

//signup route
router.get('/signup', signupGet);
router.post('/signup', signup);

//tour
router.get('/tour', tour);
```
export router ออกไปใช้งาน
```
module.exports = router; 
```

## controller.js ใน folder content

![img4](https://user-images.githubusercontent.com/106058972/226101806-448888e6-5b3d-43f4-9883-9a24b67a389e.png)

รับค่าจาก Model กับ View และ ทำการรันฟังก์ชัน listAction ที่เป็นการทำงานแบบ async await

โดยให้ await รอรับข้อมูลจาก const data = await getAll เมื่อได้รับข้อมูลมาแล้วจึงจะนำมา render เป็นเว็บ และรันตัวแปร data ผ่าน body จากนั้นจึงจะทำการส่ง response body ออกไป

## model.js

![model](https://user-images.githubusercontent.com/106058972/236377157-a274136f-cc97-4304-abe9-0c0103bf34ed.png)
ทำการติดตั้งโมดูล mongoose เพื่อใช้งาน mongodb
* npm install mongoose

ไฟล์นี้ใช้ connect กับฐานข้อมูล mongodb โดยใช้โมดูล mongoose และสร้าง Collection User ใช้สำหรับเก็บข้อมูล สร้าง Fill name, password เก็บข้อมูลในรูปแบบของ string ดังนี้
* name: String
* password: String

## view.js และ index.html ใน content

  

![img6](https://user-images.githubusercontent.com/106058972/226101809-9b9c8ee2-7aa5-4fc2-892c-5aadb491a728.png)

  
  

![img7](https://user-images.githubusercontent.com/106058972/226101812-e66d1f75-2e3c-4fc5-a8d1-165f29052556.png)

  

View.js คือ ส่วนที่ใช้ในการแสดงเนื้อหาใน Web Browser ส่วน index.html ใช้เป็น template โดยหน้าเว็บนี้นำมาจาก Site OverFlow => www.youtube.com/watch?v=P7iB6nvfnR8&t=1s

เพื่อใช้เป็น ref. และทำการดัดแปลงเพื่อให้สอดคล้องกับข้อมูลที่อยู่ใน Model ขึ้นหน้าเว็บได้ โดยการแสดงข้อมูลจาก Model นั้น จะทำโดยการ .map ใช้เพื่อรันคำสั่งซ้ำตามจำนวนข้อมูลใน Array และ .join('') ใช้เพื่อลบ comma ',' ที่คั้นข้อมูลระหว่าง array ออก

  

## style.css

![img8](https://user-images.githubusercontent.com/106058972/226101814-074bc418-61c3-43d5-a8eb-3c0c1672e114.png)

ใช้สำหรับตกแต่งหน้าเว็บ และจัดให้หน้าเว็บอยู่ในความเหมาะสม

## ขั้นตอนการขึ้นเว็บด้วย render

ก่อนอื่นให้เรานำไฟล์ Web จาก Directory ลง Github

![img1](https://user-images.githubusercontent.com/106058972/226112586-2fe29b94-8e14-47d4-9849-0548235cc2f5.png)

1. การนำเอา *Source Code* ของเราขึ้นเว็บโดยใช้บริการ *Hosting*ในที่นั้ใช้บริการของ [**render**](https://render.com/) เพราะสามารถใช้งานได้ฟรี

ในหน้านี้ให้เรากด **New+** เลือก **Web Service**

![img2](https://user-images.githubusercontent.com/106058972/226112765-36ad294e-deb5-410e-a710-458b892d28cd.png)

2. ทำการ *Create Web* โดยใช้ *Account Github* ของเรา ในช่อง "สี่เหลี่ยมสีแดง" ปกติจะขึ้นว่า **+ Connect account** ถ้ายังไม่ได้ *connect* กับบัญชี *GitHub* ในที่นี้เชื่อมต่อแล้ว

3. เมื่อเชื่อมต่อ *Account Github* แล้วให้กด **Connect**

![img3](https://user-images.githubusercontent.com/106058972/226113860-1ad65f3e-4477-44f8-9b9a-71152e25f17a.png)

4. จะขึ้นแทบให้กำหนดค่าต่างๆ เกี่ยวกับ ***Web Site*** ของเรา

* Name: travel

* Region: Singapore (Southeast Asia)

* Branch: master

* Runtime: Node

  

![img4](https://user-images.githubusercontent.com/106058972/226114340-163dcbd9-5c71-4dda-a743-ec9762894818.png)

เมื่อกำหนดค่าต่างๆ ครบแล้วก็ทำการกดปุ่ม **Create Web Service**

  

![img5](https://user-images.githubusercontent.com/106058972/226114990-b005832b-49ec-4d11-bef1-043f52a6bc2d.png)

5. จากนั้น **render** จะทำการ *progress* ให้รอจนกว่าจะ *progress* เสร็จ

เมื่อเสร็จแล้วจะขึ้นว่า Live เป็นอันเสร็จสิ้น

![img6](https://user-images.githubusercontent.com/106058972/226115055-3dbe37ad-2a6c-4d31-8254-7bf7413f5b2d.png)

6. กดลิ้งค์ *[https://travel-nx38.onrender.com](https://travel-nx38.onrender.com/)* เพื่อทำการทดสอบว่ารัน *Web Site* ขึ้นหรือไม่

![img7](https://user-images.githubusercontent.com/106058972/226115063-4172be26-5300-4b46-b80d-6557ac22b897.png)

นี้คือเว็บที่รันด้วย **render**

![img8](https://user-images.githubusercontent.com/106058972/226115410-7d3e5b29-fa29-4ce9-89a1-5b1ded364740.png)