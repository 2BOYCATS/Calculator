
// value displayElement เข้าถึงสิ่งที่อยู่ใน Element Calculator 
const displayElement = document.getElementById('calculator-display')   


const buttonPressed = (character) => {                          // displayElement.value คือ การแสดงอักขระนั้นขึ้น Display 
    displayElement.value = displayElement.value + character     // เป็นการนำ อักขระเดิมใน Display concat Paramerter แล้วเก็บในช่อง Display
}

const compute = () => {                                         // function ในการคำนวณทางคณิตฯด้วย eval
    displayElement.value = eval(displayElement.value)           // นำสิ่งที่อยู๋ใน Display มาคำนวณแล้วผลลัพธ์ขึ้นแสดงใน Display 
}

const clearDisplay = () => {    // Function ในการ เคลียร์ค่าบน input ทั้งหมด โดยให้ค่าทั้งหมดนั้นเป็น string ว่าง
    displayElement.value = ''   
}



const deleteLastCharacter = () => {     // function ในการลบตำแหน่งสุดท้าย

    displayElement.value = displayElement.value.slice(0, displayElement.value.length - 1)
    // Assign ค่าตั้งแต่ตำแหน่งที่ 0 จนถึงตำแหน่งความยาว -1  หรือ  จนถึงตำแหน่งก่อนสุดท้ายนั้นเอง
}

// .slice()    เป็นคำสั่งที่เราจะเลือกบางอย่าง และตัดส่วนที่เหลือทิ้ง  
// EX          สมมุติมีข้อความว่า "string" .slice(0, 2)   มันจะส่งค่า st  กลับมาเพราะว่าเรากำหนดว่าต้องการแค่ตำแหน่งที่ 0 ถึง 1 ซึ่งนับจากตำแหน่งที่ 2 มันจะตัดทิ้ง