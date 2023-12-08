
const timeEl = document.querySelector(".time");
const toggleEl = document.querySelector(".toggle");

const setTime = ()=>{
const time = new Date();
const hours = time.getHours()
const minute = time.getMinutes()
const seconds = time.getSeconds();
//ปรับเปลี่ยนารแสดงผม ให้มีการใส่ตัวเลข 0ด้านหน้า ถ้าตัวเลข นาที วินาทีเป็นหลักหน่วย
timeEl.innerHTML = `${hours}:${minute<10 ? `0${minute}`: minute}:${seconds<10 ? `0${seconds}` : seconds}`
// console.log(`${hours} : ${minute} : ${seconds}`)
}
setTime()

// call function setTime every 1 sec
setInterval(setTime,1000)

toggleEl.addEventListener("click",(e)=>{
    const html = document.querySelector("html")
    // classList.contains เช็คว่า html มี class ชื่อ "dark" ไหม
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        e.target.innerHTML = "โหมดกลางคืน"
    }
    else {
        html.classList.add("dark")
        e.target.innerHTML = "โหมดกลางวัน"
    }
})